import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core'

// selector needs to be a css attribute name in lowerCamelCase that
// begins with a prefix. In this case, 'my' is used as a prefix. The
// directive class name ends in 'Directive' per the Angular2 style guide.
@Directive({ selector: '[myUnless]' })
export class UnlessDirective {
    private _hasView: Boolean;

    constructor(
        private _templateRef: TemplateRef<any>,
        private _viewContainer: ViewContainerRef) {}

    @Input() set myUnless(condition: Boolean) {
        if (!condition && !this._hasView) {
            this._viewContainer.createEmbeddedView(this._templateRef);
            this._hasView = true;
        }
        else {
            this._viewContainer.clear();
            this._hasView = false;
        }
    }
}