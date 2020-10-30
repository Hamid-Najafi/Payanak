/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, EventEmitter, HostListener, Output } from '@angular/core';
import { WizardComponent } from '../components/wizard.component';
/**
 * The `awResetWizard` directive can be used to reset the wizard to its initial state.
 * This directive accepts an output, which can be used to specify some custom cleanup work during the reset process.
 *
 * ### Syntax
 *
 * ```html
 * <button awResetWizard (finalize)="custom reset task">...</button>
 * ```
 *
 * @author Marc Arndt
 */
var ResetWizardDirective = /** @class */ (function () {
    /**
     * Constructor
     *
     * @param wizard The wizard component
     */
    function ResetWizardDirective(wizard) {
        this.wizard = wizard;
        /**
         * An [[EventEmitter]] containing some tasks to be done, directly before the wizard is being reset
         */
        this.finalize = new EventEmitter();
    }
    /**
     * Resets the wizard
     */
    /**
     * Resets the wizard
     * @param {?} event
     * @return {?}
     */
    ResetWizardDirective.prototype.onClick = /**
     * Resets the wizard
     * @param {?} event
     * @return {?}
     */
    function (event) {
        // do some optional cleanup work
        this.finalize.emit();
        // reset the wizard to its initial state
        this.wizard.reset();
    };
    ResetWizardDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[awResetWizard]'
                },] }
    ];
    /** @nocollapse */
    ResetWizardDirective.ctorParameters = function () { return [
        { type: WizardComponent }
    ]; };
    ResetWizardDirective.propDecorators = {
        finalize: [{ type: Output }],
        onClick: [{ type: HostListener, args: ['click', ['$event'],] }]
    };
    return ResetWizardDirective;
}());
export { ResetWizardDirective };
if (false) {
    /**
     * An [[EventEmitter]] containing some tasks to be done, directly before the wizard is being reset
     * @type {?}
     */
    ResetWizardDirective.prototype.finalize;
    /**
     * @type {?}
     * @private
     */
    ResetWizardDirective.prototype.wizard;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVzZXQtd2l6YXJkLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2FuZ3VsYXItYXJjaHdpemFyZC8iLCJzb3VyY2VzIjpbImxpYi9kaXJlY3RpdmVzL3Jlc2V0LXdpemFyZC5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUUsWUFBWSxFQUFFLFlBQVksRUFBRSxNQUFNLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDNUUsT0FBTyxFQUFDLGVBQWUsRUFBQyxNQUFNLGdDQUFnQyxDQUFDOzs7Ozs7Ozs7Ozs7O0FBYy9EO0lBVUU7Ozs7T0FJRztJQUNILDhCQUFvQixNQUF1QjtRQUF2QixXQUFNLEdBQU4sTUFBTSxDQUFpQjs7OztRQVBwQyxhQUFRLEdBQXVCLElBQUksWUFBWSxFQUFFLENBQUM7SUFRekQsQ0FBQztJQUVEOztPQUVHOzs7Ozs7SUFFSSxzQ0FBTzs7Ozs7SUFEZCxVQUNlLEtBQVk7UUFDekIsZ0NBQWdDO1FBQ2hDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDckIsd0NBQXdDO1FBQ3hDLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDdEIsQ0FBQzs7Z0JBM0JGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsaUJBQWlCO2lCQUM1Qjs7OztnQkFoQk8sZUFBZTs7OzJCQXFCcEIsTUFBTTswQkFjTixZQUFZLFNBQUMsT0FBTyxFQUFFLENBQUMsUUFBUSxDQUFDOztJQU9uQywyQkFBQztDQUFBLEFBNUJELElBNEJDO1NBekJZLG9CQUFvQjs7Ozs7O0lBSS9CLHdDQUN5RDs7Ozs7SUFPN0Msc0NBQStCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtEaXJlY3RpdmUsIEV2ZW50RW1pdHRlciwgSG9zdExpc3RlbmVyLCBPdXRwdXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtXaXphcmRDb21wb25lbnR9IGZyb20gJy4uL2NvbXBvbmVudHMvd2l6YXJkLmNvbXBvbmVudCc7XG5cbi8qKlxuICogVGhlIGBhd1Jlc2V0V2l6YXJkYCBkaXJlY3RpdmUgY2FuIGJlIHVzZWQgdG8gcmVzZXQgdGhlIHdpemFyZCB0byBpdHMgaW5pdGlhbCBzdGF0ZS5cbiAqIFRoaXMgZGlyZWN0aXZlIGFjY2VwdHMgYW4gb3V0cHV0LCB3aGljaCBjYW4gYmUgdXNlZCB0byBzcGVjaWZ5IHNvbWUgY3VzdG9tIGNsZWFudXAgd29yayBkdXJpbmcgdGhlIHJlc2V0IHByb2Nlc3MuXG4gKlxuICogIyMjIFN5bnRheFxuICpcbiAqIGBgYGh0bWxcbiAqIDxidXR0b24gYXdSZXNldFdpemFyZCAoZmluYWxpemUpPVwiY3VzdG9tIHJlc2V0IHRhc2tcIj4uLi48L2J1dHRvbj5cbiAqIGBgYFxuICpcbiAqIEBhdXRob3IgTWFyYyBBcm5kdFxuICovXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbYXdSZXNldFdpemFyZF0nXG59KVxuZXhwb3J0IGNsYXNzIFJlc2V0V2l6YXJkRGlyZWN0aXZlIHtcbiAgLyoqXG4gICAqIEFuIFtbRXZlbnRFbWl0dGVyXV0gY29udGFpbmluZyBzb21lIHRhc2tzIHRvIGJlIGRvbmUsIGRpcmVjdGx5IGJlZm9yZSB0aGUgd2l6YXJkIGlzIGJlaW5nIHJlc2V0XG4gICAqL1xuICBAT3V0cHV0KClcbiAgcHVibGljIGZpbmFsaXplOiBFdmVudEVtaXR0ZXI8dm9pZD4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgLyoqXG4gICAqIENvbnN0cnVjdG9yXG4gICAqXG4gICAqIEBwYXJhbSB3aXphcmQgVGhlIHdpemFyZCBjb21wb25lbnRcbiAgICovXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgd2l6YXJkOiBXaXphcmRDb21wb25lbnQpIHtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXNldHMgdGhlIHdpemFyZFxuICAgKi9cbiAgQEhvc3RMaXN0ZW5lcignY2xpY2snLCBbJyRldmVudCddKVxuICBwdWJsaWMgb25DbGljayhldmVudDogRXZlbnQpOiB2b2lkIHtcbiAgICAvLyBkbyBzb21lIG9wdGlvbmFsIGNsZWFudXAgd29ya1xuICAgIHRoaXMuZmluYWxpemUuZW1pdCgpO1xuICAgIC8vIHJlc2V0IHRoZSB3aXphcmQgdG8gaXRzIGluaXRpYWwgc3RhdGVcbiAgICB0aGlzLndpemFyZC5yZXNldCgpO1xuICB9XG59XG4iXX0=