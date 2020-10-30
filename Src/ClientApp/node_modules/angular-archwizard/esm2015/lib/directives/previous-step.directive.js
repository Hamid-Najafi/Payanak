/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, EventEmitter, HostListener, Output } from '@angular/core';
import { WizardComponent } from '../components/wizard.component';
/**
 * The `awPreviousStep` directive can be used to navigate to the previous step.
 * Compared to the [[NextStepDirective]] it's important to note, that this directive doesn't contain a `finalize` output method.
 *
 * ### Syntax
 *
 * ```html
 * <button awPreviousStep>...</button>
 * ```
 *
 * @author Marc Arndt
 */
export class PreviousStepDirective {
    /**
     * Constructor
     *
     * @param {?} wizard The state of the wizard
     */
    constructor(wizard) {
        this.wizard = wizard;
        /**
         * This [[EventEmitter]] is called directly before the current step is exited during a transition through a component with this directive.
         */
        this.preFinalize = new EventEmitter();
        /**
         * This [[EventEmitter]] is called directly after the current step is exited during a transition through a component with this directive.
         */
        this.postFinalize = new EventEmitter();
    }
    /**
     * A convenience field for `preFinalize`
     * @return {?}
     */
    get finalize() {
        return this.preFinalize;
    }
    /**
     * A convenience field for `preFinalize`
     *
     * @param {?} emitter The [[EventEmitter]] to be set
     * @return {?}
     */
    set finalize(emitter) {
        /* istanbul ignore next */
        this.preFinalize = emitter;
    }
    /**
     * Listener method for `click` events on the component with this directive.
     * After this method is called the wizard will try to transition to the previous step
     * @param {?} event
     * @return {?}
     */
    onClick(event) {
        this.wizard.goToPreviousStep(this.preFinalize, this.postFinalize);
    }
}
PreviousStepDirective.decorators = [
    { type: Directive, args: [{
                selector: '[awPreviousStep]'
            },] }
];
/** @nocollapse */
PreviousStepDirective.ctorParameters = () => [
    { type: WizardComponent }
];
PreviousStepDirective.propDecorators = {
    preFinalize: [{ type: Output }],
    postFinalize: [{ type: Output }],
    finalize: [{ type: Output }],
    onClick: [{ type: HostListener, args: ['click', ['$event'],] }]
};
if (false) {
    /**
     * This [[EventEmitter]] is called directly before the current step is exited during a transition through a component with this directive.
     * @type {?}
     */
    PreviousStepDirective.prototype.preFinalize;
    /**
     * This [[EventEmitter]] is called directly after the current step is exited during a transition through a component with this directive.
     * @type {?}
     */
    PreviousStepDirective.prototype.postFinalize;
    /**
     * @type {?}
     * @private
     */
    PreviousStepDirective.prototype.wizard;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJldmlvdXMtc3RlcC5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9hbmd1bGFyLWFyY2h3aXphcmQvIiwic291cmNlcyI6WyJsaWIvZGlyZWN0aXZlcy9wcmV2aW91cy1zdGVwLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFDLFNBQVMsRUFBRSxZQUFZLEVBQUUsWUFBWSxFQUFFLE1BQU0sRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUM1RSxPQUFPLEVBQUMsZUFBZSxFQUFDLE1BQU0sZ0NBQWdDLENBQUM7Ozs7Ozs7Ozs7Ozs7QUFpQi9ELE1BQU0sT0FBTyxxQkFBcUI7Ozs7OztJQWtCaEMsWUFBb0IsTUFBdUI7UUFBdkIsV0FBTSxHQUFOLE1BQU0sQ0FBaUI7Ozs7UUFicEMsZ0JBQVcsR0FBdUIsSUFBSSxZQUFZLEVBQUUsQ0FBQzs7OztRQU1yRCxpQkFBWSxHQUF1QixJQUFJLFlBQVksRUFBRSxDQUFDO0lBUTdELENBQUM7Ozs7O0lBS0QsSUFBVyxRQUFRO1FBQ2pCLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQztJQUMxQixDQUFDOzs7Ozs7O0lBT0QsSUFDVyxRQUFRLENBQUMsT0FBMkI7UUFDN0MsMEJBQTBCO1FBQzFCLElBQUksQ0FBQyxXQUFXLEdBQUcsT0FBTyxDQUFDO0lBQzdCLENBQUM7Ozs7Ozs7SUFPTSxPQUFPLENBQUMsS0FBWTtRQUN6QixJQUFJLENBQUMsTUFBTSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO0lBQ3BFLENBQUM7OztZQWpERixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGtCQUFrQjthQUM3Qjs7OztZQWhCTyxlQUFlOzs7MEJBcUJwQixNQUFNOzJCQU1OLE1BQU07dUJBdUJOLE1BQU07c0JBVU4sWUFBWSxTQUFDLE9BQU8sRUFBRSxDQUFDLFFBQVEsQ0FBQzs7Ozs7OztJQXZDakMsNENBQzREOzs7OztJQUs1RCw2Q0FDNkQ7Ozs7O0lBT2pELHVDQUErQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7RGlyZWN0aXZlLCBFdmVudEVtaXR0ZXIsIEhvc3RMaXN0ZW5lciwgT3V0cHV0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7V2l6YXJkQ29tcG9uZW50fSBmcm9tICcuLi9jb21wb25lbnRzL3dpemFyZC5jb21wb25lbnQnO1xuXG4vKipcbiAqIFRoZSBgYXdQcmV2aW91c1N0ZXBgIGRpcmVjdGl2ZSBjYW4gYmUgdXNlZCB0byBuYXZpZ2F0ZSB0byB0aGUgcHJldmlvdXMgc3RlcC5cbiAqIENvbXBhcmVkIHRvIHRoZSBbW05leHRTdGVwRGlyZWN0aXZlXV0gaXQncyBpbXBvcnRhbnQgdG8gbm90ZSwgdGhhdCB0aGlzIGRpcmVjdGl2ZSBkb2Vzbid0IGNvbnRhaW4gYSBgZmluYWxpemVgIG91dHB1dCBtZXRob2QuXG4gKlxuICogIyMjIFN5bnRheFxuICpcbiAqIGBgYGh0bWxcbiAqIDxidXR0b24gYXdQcmV2aW91c1N0ZXA+Li4uPC9idXR0b24+XG4gKiBgYGBcbiAqXG4gKiBAYXV0aG9yIE1hcmMgQXJuZHRcbiAqL1xuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW2F3UHJldmlvdXNTdGVwXSdcbn0pXG5leHBvcnQgY2xhc3MgUHJldmlvdXNTdGVwRGlyZWN0aXZlIHtcbiAgLyoqXG4gICAqIFRoaXMgW1tFdmVudEVtaXR0ZXJdXSBpcyBjYWxsZWQgZGlyZWN0bHkgYmVmb3JlIHRoZSBjdXJyZW50IHN0ZXAgaXMgZXhpdGVkIGR1cmluZyBhIHRyYW5zaXRpb24gdGhyb3VnaCBhIGNvbXBvbmVudCB3aXRoIHRoaXMgZGlyZWN0aXZlLlxuICAgKi9cbiAgQE91dHB1dCgpXG4gIHB1YmxpYyBwcmVGaW5hbGl6ZTogRXZlbnRFbWl0dGVyPHZvaWQ+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIC8qKlxuICAgKiBUaGlzIFtbRXZlbnRFbWl0dGVyXV0gaXMgY2FsbGVkIGRpcmVjdGx5IGFmdGVyIHRoZSBjdXJyZW50IHN0ZXAgaXMgZXhpdGVkIGR1cmluZyBhIHRyYW5zaXRpb24gdGhyb3VnaCBhIGNvbXBvbmVudCB3aXRoIHRoaXMgZGlyZWN0aXZlLlxuICAgKi9cbiAgQE91dHB1dCgpXG4gIHB1YmxpYyBwb3N0RmluYWxpemU6IEV2ZW50RW1pdHRlcjx2b2lkPiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICAvKipcbiAgICogQ29uc3RydWN0b3JcbiAgICpcbiAgICogQHBhcmFtIHdpemFyZCBUaGUgc3RhdGUgb2YgdGhlIHdpemFyZFxuICAgKi9cbiAgY29uc3RydWN0b3IocHJpdmF0ZSB3aXphcmQ6IFdpemFyZENvbXBvbmVudCkge1xuICB9XG5cbiAgLyoqXG4gICAqIEEgY29udmVuaWVuY2UgZmllbGQgZm9yIGBwcmVGaW5hbGl6ZWBcbiAgICovXG4gIHB1YmxpYyBnZXQgZmluYWxpemUoKTogRXZlbnRFbWl0dGVyPHZvaWQ+IHtcbiAgICByZXR1cm4gdGhpcy5wcmVGaW5hbGl6ZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBBIGNvbnZlbmllbmNlIGZpZWxkIGZvciBgcHJlRmluYWxpemVgXG4gICAqXG4gICAqIEBwYXJhbSBlbWl0dGVyIFRoZSBbW0V2ZW50RW1pdHRlcl1dIHRvIGJlIHNldFxuICAgKi9cbiAgQE91dHB1dCgpXG4gIHB1YmxpYyBzZXQgZmluYWxpemUoZW1pdHRlcjogRXZlbnRFbWl0dGVyPHZvaWQ+KSB7XG4gICAgLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cbiAgICB0aGlzLnByZUZpbmFsaXplID0gZW1pdHRlcjtcbiAgfVxuXG4gIC8qKlxuICAgKiBMaXN0ZW5lciBtZXRob2QgZm9yIGBjbGlja2AgZXZlbnRzIG9uIHRoZSBjb21wb25lbnQgd2l0aCB0aGlzIGRpcmVjdGl2ZS5cbiAgICogQWZ0ZXIgdGhpcyBtZXRob2QgaXMgY2FsbGVkIHRoZSB3aXphcmQgd2lsbCB0cnkgdG8gdHJhbnNpdGlvbiB0byB0aGUgcHJldmlvdXMgc3RlcFxuICAgKi9cbiAgQEhvc3RMaXN0ZW5lcignY2xpY2snLCBbJyRldmVudCddKVxuICBwdWJsaWMgb25DbGljayhldmVudDogRXZlbnQpOiB2b2lkIHtcbiAgICB0aGlzLndpemFyZC5nb1RvUHJldmlvdXNTdGVwKHRoaXMucHJlRmluYWxpemUsIHRoaXMucG9zdEZpbmFsaXplKTtcbiAgfVxufVxuIl19