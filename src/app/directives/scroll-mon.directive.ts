import { Directive, Input, ElementRef, HostListener } from '@angular/core';

// monitors the scroll position of the window or document element
// and sets css classes based on whether the scroll position is
// below a specified limit. Example usage is as follows:
//
// in the template use property binding:
//
// <p ecomScrollMon="{'foo': 33, 'bar': 100}">baz</p>
//
// when the user scrolls down 33 pixels from the top of the window,
// class 'foo' will be set on the element. When the user scrolls
// down 100 pixels from the top of the window, 'foo' will be removed
// and replaced with 'bar'.
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
