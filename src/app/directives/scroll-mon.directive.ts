import { Directive, Input, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[ecomScrollMon]'
})
export class ScrollMonDirective {
  @Input('ecomScrollMon') classes_to_limits: object;

  private sort_limits_to_classes(): [number, string][] {
    let ntos: [number, string][] = [];
    let ctl = this.classes_to_limits;
    for (let i in ctl)
      ntos.push([ctl[i], i]);
    ntos.sort((a, b) => b[0] - a[0]);
    return ntos;
  }

  constructor(private el: ElementRef) { }

  @HostListener('window:scroll', ['$event.target']) 
  onScroll(doc: HTMLDocument): void {
    let ltc = this.sort_limits_to_classes();
    let yoffset = doc.documentElement.scrollTop || window.pageYOffset;
    for (let i of ltc) {
      let [limit, cls] = i;
      if (yoffset > limit) {
        this.el.nativeElement.className = cls;
        return;
      }
    }
    this.el.nativeElement.removeAttribute('class');
  }
}
