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
var CompletedStepDirective = /** @class */ (function () {
    /**
     * Constructor
     *
     * @param wizardStep The wizard step, which contains this [[CompletedStepDirective]]
     */
    function CompletedStepDirective(wizardStep) {
        this.wizardStep = wizardStep;
        // tslint:disable-next-line:no-input-rename
        this.initiallyCompleted = true;
    }
    /**
     * Initialization work
     */
    /**
     * Initialization work
     * @return {?}
     */
    CompletedStepDirective.prototype.ngOnInit = /**
     * Initialization work
     * @return {?}
     */
    function () {
        // The input receives '' when specified in the template without a value.  In this case, apply the default value (`true`).
        this.wizardStep.initiallyCompleted = this.initiallyCompleted || (/** @type {?} */ (this.initiallyCompleted)) === '';
    };
    CompletedStepDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[awCompletedStep]'
                },] }
    ];
    /** @nocollapse */
    CompletedStepDirective.ctorParameters = function () { return [
        { type: WizardStep, decorators: [{ type: Host }] }
    ]; };
    CompletedStepDirective.propDecorators = {
        initiallyCompleted: [{ type: Input, args: ['awCompletedStep',] }]
    };
    return CompletedStepDirective;
}());
export { CompletedStepDirective };
if (false) {
    /** @type {?} */
    CompletedStepDirective.prototype.initiallyCompleted;
    /**
     * @type {?}
     * @private
     */
    CompletedStepDirective.prototype.wizardStep;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcGxldGVkLXN0ZXAuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vYW5ndWxhci1hcmNod2l6YXJkLyIsInNvdXJjZXMiOlsibGliL2RpcmVjdGl2ZXMvY29tcGxldGVkLXN0ZXAuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFFLElBQUksRUFBRSxLQUFLLEVBQVMsTUFBTSxlQUFlLENBQUM7QUFDN0QsT0FBTyxFQUFDLFVBQVUsRUFBQyxNQUFNLCtCQUErQixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWlDekQ7SUFTRTs7OztPQUlHO0lBQ0gsZ0NBQTRCLFVBQXNCO1FBQXRCLGVBQVUsR0FBVixVQUFVLENBQVk7O1FBUDNDLHVCQUFrQixHQUFHLElBQUksQ0FBQztJQVFqQyxDQUFDO0lBRUQ7O09BRUc7Ozs7O0lBQ0kseUNBQVE7Ozs7SUFBZjtRQUNFLHlIQUF5SDtRQUN6SCxJQUFJLENBQUMsVUFBVSxDQUFDLGtCQUFrQixHQUFHLElBQUksQ0FBQyxrQkFBa0IsSUFBSSxtQkFBQSxJQUFJLENBQUMsa0JBQWtCLEVBQU8sS0FBSyxFQUFFLENBQUM7SUFDeEcsQ0FBQzs7Z0JBdkJGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsbUJBQW1CO2lCQUM5Qjs7OztnQkFuQ08sVUFBVSx1QkErQ0gsSUFBSTs7O3FDQVJoQixLQUFLLFNBQUMsaUJBQWlCOztJQWtCMUIsNkJBQUM7Q0FBQSxBQXhCRCxJQXdCQztTQXJCWSxzQkFBc0I7OztJQUdqQyxvREFDaUM7Ozs7O0lBT3JCLDRDQUFzQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7RGlyZWN0aXZlLCBIb3N0LCBJbnB1dCwgT25Jbml0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHtXaXphcmRTdGVwfSBmcm9tICcuLi91dGlsL3dpemFyZC1zdGVwLmludGVyZmFjZSc7XHJcblxyXG4vKipcclxuICogVGhlIGBhd0NvbXBsZXRlZFN0ZXBgIGRpcmVjdGl2ZSBjYW4gYmUgdXNlZCB0byBtYWtlIGEgd2l6YXJkIHN0ZXAgaW5pdGlhbGx5IGNvbXBsZXRlZC5cclxuICpcclxuICogSW5pdGlhbGx5IGNvbXBsZXRlZCBzdGVwcyBhcmUgc2hvd24gYXMgY29tcGxldGVkIHdoZW4gdGhlIHdpemFyZCBpcyBwcmVzZW50ZWQgdG8gdGhlIHVzZXIuXHJcbiAqXHJcbiAqIEEgdHlwaWNhbCB1c2UgY2FzZSBpcyB0byBtYWtlIGEgc3RlcCBpbml0aWFsbHkgY29tcGxldGVkIGlmIGl0IGlzIGF1dG9tYXRpY2FsbHkgZmlsbGVkIHdpdGggc29tZSBkZXJpdmVkL3ByZWRlZmluZWQgaW5mb3JtYXRpb24uXHJcbiAqXHJcbiAqICMjIyBTeW50YXhcclxuICpcclxuICogYGBgaHRtbFxyXG4gKiA8YXctd2l6YXJkLXN0ZXAgYXdDb21wbGV0ZWRTdGVwPlxyXG4gKiAgICAgLi4uXHJcbiAqIDwvYXctd2l6YXJkLXN0ZXA+XHJcbiAqIGBgYFxyXG4gKlxyXG4gKiBBbiBvcHRpb25hbCBib29sZWFuIGNvbmRpdGlvbiBjYW4gYmUgc3BlY2lmaWVkOlxyXG4gKlxyXG4gKiBgYGBodG1sXHJcbiAqIDxhdy13aXphcmQtc3RlcCBbYXdDb21wbGV0ZWRTdGVwXT1cInNob3VsZEJlQ29tcGxldGVkXCI+XHJcbiAqICAgICAuLi5cclxuICogPC9hdy13aXphcmQtc3RlcD5cclxuICogYGBgXHJcbiAqXHJcbiAqICMjIyBFeGFtcGxlXHJcbiAqXHJcbiAqIGBgYGh0bWxcclxuICogPGF3LXdpemFyZC1zdGVwIHN0ZXBUaXRsZT1cIkZpcnN0IHN0ZXBcIiBbYXdDb21wbGV0ZWRTdGVwXT1cImZpcnN0U3RlcFByZWZpbGxlZFwiPlxyXG4gKiAgICAgLi4uXHJcbiAqIDwvYXctd2l6YXJkLXN0ZXA+XHJcbiAqIGBgYFxyXG4gKi9cclxuQERpcmVjdGl2ZSh7XHJcbiAgc2VsZWN0b3I6ICdbYXdDb21wbGV0ZWRTdGVwXSdcclxufSlcclxuZXhwb3J0IGNsYXNzIENvbXBsZXRlZFN0ZXBEaXJlY3RpdmUgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cclxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8taW5wdXQtcmVuYW1lXHJcbiAgQElucHV0KCdhd0NvbXBsZXRlZFN0ZXAnKVxyXG4gIHB1YmxpYyBpbml0aWFsbHlDb21wbGV0ZWQgPSB0cnVlO1xyXG5cclxuICAvKipcclxuICAgKiBDb25zdHJ1Y3RvclxyXG4gICAqXHJcbiAgICogQHBhcmFtIHdpemFyZFN0ZXAgVGhlIHdpemFyZCBzdGVwLCB3aGljaCBjb250YWlucyB0aGlzIFtbQ29tcGxldGVkU3RlcERpcmVjdGl2ZV1dXHJcbiAgICovXHJcbiAgY29uc3RydWN0b3IoQEhvc3QoKSBwcml2YXRlIHdpemFyZFN0ZXA6IFdpemFyZFN0ZXApIHtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEluaXRpYWxpemF0aW9uIHdvcmtcclxuICAgKi9cclxuICBwdWJsaWMgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICAvLyBUaGUgaW5wdXQgcmVjZWl2ZXMgJycgd2hlbiBzcGVjaWZpZWQgaW4gdGhlIHRlbXBsYXRlIHdpdGhvdXQgYSB2YWx1ZS4gIEluIHRoaXMgY2FzZSwgYXBwbHkgdGhlIGRlZmF1bHQgdmFsdWUgKGB0cnVlYCkuXHJcbiAgICB0aGlzLndpemFyZFN0ZXAuaW5pdGlhbGx5Q29tcGxldGVkID0gdGhpcy5pbml0aWFsbHlDb21wbGV0ZWQgfHwgdGhpcy5pbml0aWFsbHlDb21wbGV0ZWQgYXMgYW55ID09PSAnJztcclxuICB9XHJcbn1cclxuIl19