/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, Host, Input } from '@angular/core';
import { WizardStep } from '../util/wizard-step.interface';
/**
 * The `awCompletedStep` directive can be used to make a wizard step initially completed.
 *
 * Initially completed steps are shown as completed when the wizard is presented to the user.
 *
 * A typical use case is to make a step initially completed if it is automatically filled with some derived/predefined information.
 *
 * ### Syntax
 *
 * ```html
 * <aw-wizard-step awCompletedStep>
 *     ...
 * </aw-wizard-step>
 * ```
 *
 * An optional boolean condition can be specified:
 *
 * ```html
 * <aw-wizard-step [awCompletedStep]="shouldBeCompleted">
 *     ...
 * </aw-wizard-step>
 * ```
 *
 * ### Example
 *
 * ```html
 * <aw-wizard-step stepTitle="First step" [awCompletedStep]="firstStepPrefilled">
 *     ...
 * </aw-wizard-step>
 * ```
 */
export class CompletedStepDirective {
    /**
     * Constructor
     *
     * @param {?} wizardStep The wizard step, which contains this [[CompletedStepDirective]]
     */
    constructor(wizardStep) {
        this.wizardStep = wizardStep;
        // tslint:disable-next-line:no-input-rename
        this.initiallyCompleted = true;
    }
    /**
     * Initialization work
     * @return {?}
     */
    ngOnInit() {
        // The input receives '' when specified in the template without a value.  In this case, apply the default value (`true`).
        this.wizardStep.initiallyCompleted = this.initiallyCompleted || (/** @type {?} */ (this.initiallyCompleted)) === '';
    }
}
CompletedStepDirective.decorators = [
    { type: Directive, args: [{
                selector: '[awCompletedStep]'
            },] }
];
/** @nocollapse */
CompletedStepDirective.ctorParameters = () => [
    { type: WizardStep, decorators: [{ type: Host }] }
];
CompletedStepDirective.propDecorators = {
    initiallyCompleted: [{ type: Input, args: ['awCompletedStep',] }]
};
if (false) {
    /** @type {?} */
    CompletedStepDirective.prototype.initiallyCompleted;
    /**
     * @type {?}
     * @private
     */
    CompletedStepDirective.prototype.wizardStep;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcGxldGVkLXN0ZXAuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vYW5ndWxhci1hcmNod2l6YXJkLyIsInNvdXJjZXMiOlsibGliL2RpcmVjdGl2ZXMvY29tcGxldGVkLXN0ZXAuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFFLElBQUksRUFBRSxLQUFLLEVBQVMsTUFBTSxlQUFlLENBQUM7QUFDN0QsT0FBTyxFQUFDLFVBQVUsRUFBQyxNQUFNLCtCQUErQixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQW9DekQsTUFBTSxPQUFPLHNCQUFzQjs7Ozs7O0lBV2pDLFlBQTRCLFVBQXNCO1FBQXRCLGVBQVUsR0FBVixVQUFVLENBQVk7O1FBUDNDLHVCQUFrQixHQUFHLElBQUksQ0FBQztJQVFqQyxDQUFDOzs7OztJQUtNLFFBQVE7UUFDYix5SEFBeUg7UUFDekgsSUFBSSxDQUFDLFVBQVUsQ0FBQyxrQkFBa0IsR0FBRyxJQUFJLENBQUMsa0JBQWtCLElBQUksbUJBQUEsSUFBSSxDQUFDLGtCQUFrQixFQUFPLEtBQUssRUFBRSxDQUFDO0lBQ3hHLENBQUM7OztZQXZCRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLG1CQUFtQjthQUM5Qjs7OztZQW5DTyxVQUFVLHVCQStDSCxJQUFJOzs7aUNBUmhCLEtBQUssU0FBQyxpQkFBaUI7Ozs7SUFBeEIsb0RBQ2lDOzs7OztJQU9yQiw0Q0FBc0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0RpcmVjdGl2ZSwgSG9zdCwgSW5wdXQsIE9uSW5pdH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7V2l6YXJkU3RlcH0gZnJvbSAnLi4vdXRpbC93aXphcmQtc3RlcC5pbnRlcmZhY2UnO1xyXG5cclxuLyoqXHJcbiAqIFRoZSBgYXdDb21wbGV0ZWRTdGVwYCBkaXJlY3RpdmUgY2FuIGJlIHVzZWQgdG8gbWFrZSBhIHdpemFyZCBzdGVwIGluaXRpYWxseSBjb21wbGV0ZWQuXHJcbiAqXHJcbiAqIEluaXRpYWxseSBjb21wbGV0ZWQgc3RlcHMgYXJlIHNob3duIGFzIGNvbXBsZXRlZCB3aGVuIHRoZSB3aXphcmQgaXMgcHJlc2VudGVkIHRvIHRoZSB1c2VyLlxyXG4gKlxyXG4gKiBBIHR5cGljYWwgdXNlIGNhc2UgaXMgdG8gbWFrZSBhIHN0ZXAgaW5pdGlhbGx5IGNvbXBsZXRlZCBpZiBpdCBpcyBhdXRvbWF0aWNhbGx5IGZpbGxlZCB3aXRoIHNvbWUgZGVyaXZlZC9wcmVkZWZpbmVkIGluZm9ybWF0aW9uLlxyXG4gKlxyXG4gKiAjIyMgU3ludGF4XHJcbiAqXHJcbiAqIGBgYGh0bWxcclxuICogPGF3LXdpemFyZC1zdGVwIGF3Q29tcGxldGVkU3RlcD5cclxuICogICAgIC4uLlxyXG4gKiA8L2F3LXdpemFyZC1zdGVwPlxyXG4gKiBgYGBcclxuICpcclxuICogQW4gb3B0aW9uYWwgYm9vbGVhbiBjb25kaXRpb24gY2FuIGJlIHNwZWNpZmllZDpcclxuICpcclxuICogYGBgaHRtbFxyXG4gKiA8YXctd2l6YXJkLXN0ZXAgW2F3Q29tcGxldGVkU3RlcF09XCJzaG91bGRCZUNvbXBsZXRlZFwiPlxyXG4gKiAgICAgLi4uXHJcbiAqIDwvYXctd2l6YXJkLXN0ZXA+XHJcbiAqIGBgYFxyXG4gKlxyXG4gKiAjIyMgRXhhbXBsZVxyXG4gKlxyXG4gKiBgYGBodG1sXHJcbiAqIDxhdy13aXphcmQtc3RlcCBzdGVwVGl0bGU9XCJGaXJzdCBzdGVwXCIgW2F3Q29tcGxldGVkU3RlcF09XCJmaXJzdFN0ZXBQcmVmaWxsZWRcIj5cclxuICogICAgIC4uLlxyXG4gKiA8L2F3LXdpemFyZC1zdGVwPlxyXG4gKiBgYGBcclxuICovXHJcbkBEaXJlY3RpdmUoe1xyXG4gIHNlbGVjdG9yOiAnW2F3Q29tcGxldGVkU3RlcF0nXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBDb21wbGV0ZWRTdGVwRGlyZWN0aXZlIGltcGxlbWVudHMgT25Jbml0IHtcclxuXHJcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWlucHV0LXJlbmFtZVxyXG4gIEBJbnB1dCgnYXdDb21wbGV0ZWRTdGVwJylcclxuICBwdWJsaWMgaW5pdGlhbGx5Q29tcGxldGVkID0gdHJ1ZTtcclxuXHJcbiAgLyoqXHJcbiAgICogQ29uc3RydWN0b3JcclxuICAgKlxyXG4gICAqIEBwYXJhbSB3aXphcmRTdGVwIFRoZSB3aXphcmQgc3RlcCwgd2hpY2ggY29udGFpbnMgdGhpcyBbW0NvbXBsZXRlZFN0ZXBEaXJlY3RpdmVdXVxyXG4gICAqL1xyXG4gIGNvbnN0cnVjdG9yKEBIb3N0KCkgcHJpdmF0ZSB3aXphcmRTdGVwOiBXaXphcmRTdGVwKSB7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBJbml0aWFsaXphdGlvbiB3b3JrXHJcbiAgICovXHJcbiAgcHVibGljIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgLy8gVGhlIGlucHV0IHJlY2VpdmVzICcnIHdoZW4gc3BlY2lmaWVkIGluIHRoZSB0ZW1wbGF0ZSB3aXRob3V0IGEgdmFsdWUuICBJbiB0aGlzIGNhc2UsIGFwcGx5IHRoZSBkZWZhdWx0IHZhbHVlIChgdHJ1ZWApLlxyXG4gICAgdGhpcy53aXphcmRTdGVwLmluaXRpYWxseUNvbXBsZXRlZCA9IHRoaXMuaW5pdGlhbGx5Q29tcGxldGVkIHx8IHRoaXMuaW5pdGlhbGx5Q29tcGxldGVkIGFzIGFueSA9PT0gJyc7XHJcbiAgfVxyXG59XHJcbiJdfQ==