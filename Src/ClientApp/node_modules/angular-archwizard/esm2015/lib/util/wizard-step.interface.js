/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ContentChild, EventEmitter, HostBinding, Input, Output } from '@angular/core';
import { WizardStepSymbolDirective } from '../directives/wizard-step-symbol.directive';
import { WizardStepTitleDirective } from '../directives/wizard-step-title.directive';
/**
 * Basic functionality every type of wizard step needs to provide
 *
 * @author Marc Arndt
 * @abstract
 */
export class WizardStep {
    constructor() {
        /**
         * A symbol property, which contains an optional symbol for the step inside the navigation bar.
         * Takes effect when `stepSymbolTemplate` is not defined or null.
         */
        this.navigationSymbol = { symbol: '' };
        /**
         * A boolean describing if the wizard step is currently selected
         */
        this.selected = false;
        /**
         * A boolean describing if the wizard step has been completed
         */
        this.completed = false;
        /**
         * A boolean describing if the wizard step is shown as completed when the wizard is presented to the user
         *
         * Users will typically use `CompletedStepDirective` to set this flag
         */
        this.initiallyCompleted = false;
        /**
         * A boolean describing if the wizard step is being edited after being competed
         *
         * This flag can only be true when `selected` is true.
         */
        this.editing = false;
        /**
         * A boolean describing, if the wizard step should be selected by default, i.e. after the wizard has been initialized as the initial step
         */
        this.defaultSelected = false;
        /**
         * A boolean describing if the wizard step is an optional step
         */
        this.optional = false;
        /**
         * A function or boolean deciding, if this step can be entered
         */
        this.canEnter = true;
        /**
         * A function or boolean deciding, if this step can be exited
         */
        this.canExit = true;
        /**
         * This [[EventEmitter]] is called when the step is entered.
         * The bound method should be used to do initialization work.
         */
        this.stepEnter = new EventEmitter();
        /**
         * This [[EventEmitter]] is called when the step is exited.
         * The bound method can be used to do cleanup work.
         */
        this.stepExit = new EventEmitter();
    }
    /**
     * Returns if this wizard step should be visible to the user.
     * If the step should be visible to the user false is returned, otherwise true
     * @return {?}
     */
    get hidden() {
        return !this.selected;
    }
    /**
     * This method returns true, if this wizard step can be transitioned with a given direction.
     * Transitioned in this case means either entered or exited, depending on the given `condition` parameter.
     *
     * @throws An `Error` is thrown if `condition` is neither a function nor a boolean
     * @private
     * @param {?} condition A condition variable, deciding if the step can be transitioned
     * @param {?} direction The direction in which this step should be transitioned
     * @return {?} A [[Promise]] containing `true`, if this step can transitioned in the given direction
     */
    static canTransitionStep(condition, direction) {
        if (typeof (condition) === typeof (true)) {
            return Promise.resolve((/** @type {?} */ (condition)));
        }
        else if (condition instanceof Function) {
            return Promise.resolve(condition(direction));
        }
        else {
            return Promise.reject(new Error(`Input value '${condition}' is neither a boolean nor a function`));
        }
    }
    /**
     * A function called when the step is entered
     *
     * @param {?} direction The direction in which the step is entered
     * @return {?}
     */
    enter(direction) {
        this.stepEnter.emit(direction);
    }
    /**
     * A function called when the step is exited
     *
     * @param {?} direction The direction in which the step is exited
     * @return {?}
     */
    exit(direction) {
        this.stepExit.emit(direction);
    }
    /**
     * This method returns true, if this wizard step can be entered from the given direction.
     * Because this method depends on the value `canEnter`, it will throw an error, if `canEnter` is neither a boolean
     * nor a function.
     *
     * @throws An `Error` is thrown if `anEnter` is neither a function nor a boolean
     * @param {?} direction The direction in which this step should be entered
     * @return {?} A [[Promise]] containing `true`, if the step can be entered in the given direction, false otherwise
     */
    canEnterStep(direction) {
        return WizardStep.canTransitionStep(this.canEnter, direction);
    }
    /**
     * This method returns true, if this wizard step can be exited into given direction.
     * Because this method depends on the value `canExit`, it will throw an error, if `canExit` is neither a boolean
     * nor a function.
     *
     * @throws An `Error` is thrown if `canExit` is neither a function nor a boolean
     * @param {?} direction The direction in which this step should be left
     * @return {?} A [[Promise]] containing `true`, if the step can be exited in the given direction, false otherwise
     */
    canExitStep(direction) {
        return WizardStep.canTransitionStep(this.canExit, direction);
    }
}
WizardStep.propDecorators = {
    stepTitleTemplate: [{ type: ContentChild, args: [WizardStepTitleDirective, { static: false },] }],
    stepSymbolTemplate: [{ type: ContentChild, args: [WizardStepSymbolDirective, { static: false },] }],
    stepId: [{ type: Input }],
    stepTitle: [{ type: Input }],
    navigationSymbol: [{ type: Input }],
    canEnter: [{ type: Input }],
    canExit: [{ type: Input }],
    stepEnter: [{ type: Output }],
    stepExit: [{ type: Output }],
    hidden: [{ type: HostBinding, args: ['hidden',] }]
};
if (false) {
    /**
     * A step title property, which contains the visible header title of the step.
     * This title is then shown inside the navigation bar.
     * Compared to `stepTitle` this property can contain any html content and not only plain text
     * @type {?}
     */
    WizardStep.prototype.stepTitleTemplate;
    /**
     * A step symbol property that, if defined, overrides `navigationSymbol`.
     * Allows to display arbitrary content as a step symbol instead of plain text.
     * @type {?}
     */
    WizardStep.prototype.stepSymbolTemplate;
    /**
     * A step id, unique to the step
     * @type {?}
     */
    WizardStep.prototype.stepId;
    /**
     * A step title property, which contains the visible header title of the step.
     * This title is only shown inside the navigation bar, if `stepTitleTemplate` is not defined or null.
     * @type {?}
     */
    WizardStep.prototype.stepTitle;
    /**
     * A symbol property, which contains an optional symbol for the step inside the navigation bar.
     * Takes effect when `stepSymbolTemplate` is not defined or null.
     * @type {?}
     */
    WizardStep.prototype.navigationSymbol;
    /**
     * A boolean describing if the wizard step is currently selected
     * @type {?}
     */
    WizardStep.prototype.selected;
    /**
     * A boolean describing if the wizard step has been completed
     * @type {?}
     */
    WizardStep.prototype.completed;
    /**
     * A boolean describing if the wizard step is shown as completed when the wizard is presented to the user
     *
     * Users will typically use `CompletedStepDirective` to set this flag
     * @type {?}
     */
    WizardStep.prototype.initiallyCompleted;
    /**
     * A boolean describing if the wizard step is being edited after being competed
     *
     * This flag can only be true when `selected` is true.
     * @type {?}
     */
    WizardStep.prototype.editing;
    /**
     * A boolean describing, if the wizard step should be selected by default, i.e. after the wizard has been initialized as the initial step
     * @type {?}
     */
    WizardStep.prototype.defaultSelected;
    /**
     * A boolean describing if the wizard step is an optional step
     * @type {?}
     */
    WizardStep.prototype.optional;
    /**
     * A function or boolean deciding, if this step can be entered
     * @type {?}
     */
    WizardStep.prototype.canEnter;
    /**
     * A function or boolean deciding, if this step can be exited
     * @type {?}
     */
    WizardStep.prototype.canExit;
    /**
     * This [[EventEmitter]] is called when the step is entered.
     * The bound method should be used to do initialization work.
     * @type {?}
     */
    WizardStep.prototype.stepEnter;
    /**
     * This [[EventEmitter]] is called when the step is exited.
     * The bound method can be used to do cleanup work.
     * @type {?}
     */
    WizardStep.prototype.stepExit;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2l6YXJkLXN0ZXAuaW50ZXJmYWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vYW5ndWxhci1hcmNod2l6YXJkLyIsInNvdXJjZXMiOlsibGliL3V0aWwvd2l6YXJkLXN0ZXAuaW50ZXJmYWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUMsWUFBWSxFQUFFLFlBQVksRUFBRSxXQUFXLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUNyRixPQUFPLEVBQUMseUJBQXlCLEVBQUMsTUFBTSw0Q0FBNEMsQ0FBQztBQUNyRixPQUFPLEVBQUMsd0JBQXdCLEVBQUMsTUFBTSwyQ0FBMkMsQ0FBQzs7Ozs7OztBQVNuRixNQUFNLE9BQWdCLFVBQVU7SUFBaEM7Ozs7O1FBa0NTLHFCQUFnQixHQUFxQixFQUFDLE1BQU0sRUFBRSxFQUFFLEVBQUMsQ0FBQzs7OztRQUtsRCxhQUFRLEdBQUcsS0FBSyxDQUFDOzs7O1FBS2pCLGNBQVMsR0FBRyxLQUFLLENBQUM7Ozs7OztRQU9sQix1QkFBa0IsR0FBRyxLQUFLLENBQUM7Ozs7OztRQU8zQixZQUFPLEdBQUcsS0FBSyxDQUFDOzs7O1FBS2hCLG9CQUFlLEdBQUcsS0FBSyxDQUFDOzs7O1FBS3hCLGFBQVEsR0FBRyxLQUFLLENBQUM7Ozs7UUFNakIsYUFBUSxHQUE2RyxJQUFJLENBQUM7Ozs7UUFNMUgsWUFBTyxHQUE2RyxJQUFJLENBQUM7Ozs7O1FBT3pILGNBQVMsR0FBa0MsSUFBSSxZQUFZLEVBQW1CLENBQUM7Ozs7O1FBTy9FLGFBQVEsR0FBa0MsSUFBSSxZQUFZLEVBQW1CLENBQUM7SUE0RXZGLENBQUM7Ozs7OztJQXRFQyxJQUNXLE1BQU07UUFDZixPQUFPLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQztJQUN4QixDQUFDOzs7Ozs7Ozs7OztJQVdPLE1BQU0sQ0FBQyxpQkFBaUIsQ0FBQyxTQUVTLEVBQ1QsU0FBMEI7UUFDekQsSUFBSSxPQUFNLENBQUMsU0FBUyxDQUFDLEtBQUssT0FBTSxDQUFDLElBQUksQ0FBQyxFQUFFO1lBQ3RDLE9BQU8sT0FBTyxDQUFDLE9BQU8sQ0FBQyxtQkFBQSxTQUFTLEVBQVcsQ0FBQyxDQUFDO1NBQzlDO2FBQU0sSUFBSSxTQUFTLFlBQVksUUFBUSxFQUFFO1lBQ3hDLE9BQU8sT0FBTyxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztTQUM5QzthQUFNO1lBQ0wsT0FBTyxPQUFPLENBQUMsTUFBTSxDQUFDLElBQUksS0FBSyxDQUFDLGdCQUFnQixTQUFTLHVDQUF1QyxDQUFDLENBQUMsQ0FBQztTQUNwRztJQUNILENBQUM7Ozs7Ozs7SUFPTSxLQUFLLENBQUMsU0FBMEI7UUFDckMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDakMsQ0FBQzs7Ozs7OztJQU9NLElBQUksQ0FBQyxTQUEwQjtRQUNwQyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUNoQyxDQUFDOzs7Ozs7Ozs7O0lBV00sWUFBWSxDQUFDLFNBQTBCO1FBQzVDLE9BQU8sVUFBVSxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsU0FBUyxDQUFDLENBQUM7SUFDaEUsQ0FBQzs7Ozs7Ozs7OztJQVdNLFdBQVcsQ0FBQyxTQUEwQjtRQUMzQyxPQUFPLFVBQVUsQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLFNBQVMsQ0FBQyxDQUFDO0lBQy9ELENBQUM7OztnQ0FuS0EsWUFBWSxTQUFDLHdCQUF3QixFQUFFLEVBQUMsTUFBTSxFQUFFLEtBQUssRUFBQztpQ0FPdEQsWUFBWSxTQUFDLHlCQUF5QixFQUFFLEVBQUMsTUFBTSxFQUFFLEtBQUssRUFBQztxQkFNdkQsS0FBSzt3QkFPTCxLQUFLOytCQU9MLEtBQUs7dUJBd0NMLEtBQUs7c0JBTUwsS0FBSzt3QkFPTCxNQUFNO3VCQU9OLE1BQU07cUJBT04sV0FBVyxTQUFDLFFBQVE7Ozs7Ozs7OztJQTlGckIsdUNBQ21EOzs7Ozs7SUFNbkQsd0NBQ3FEOzs7OztJQUtyRCw0QkFDc0I7Ozs7OztJQU10QiwrQkFDeUI7Ozs7OztJQU16QixzQ0FDeUQ7Ozs7O0lBS3pELDhCQUF3Qjs7Ozs7SUFLeEIsK0JBQXlCOzs7Ozs7O0lBT3pCLHdDQUFrQzs7Ozs7OztJQU9sQyw2QkFBdUI7Ozs7O0lBS3ZCLHFDQUErQjs7Ozs7SUFLL0IsOEJBQXdCOzs7OztJQUt4Qiw4QkFDaUk7Ozs7O0lBS2pJLDZCQUNnSTs7Ozs7O0lBTWhJLCtCQUNzRjs7Ozs7O0lBTXRGLDhCQUNxRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29udGVudENoaWxkLCBFdmVudEVtaXR0ZXIsIEhvc3RCaW5kaW5nLCBJbnB1dCwgT3V0cHV0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7V2l6YXJkU3RlcFN5bWJvbERpcmVjdGl2ZX0gZnJvbSAnLi4vZGlyZWN0aXZlcy93aXphcmQtc3RlcC1zeW1ib2wuZGlyZWN0aXZlJztcbmltcG9ydCB7V2l6YXJkU3RlcFRpdGxlRGlyZWN0aXZlfSBmcm9tICcuLi9kaXJlY3RpdmVzL3dpemFyZC1zdGVwLXRpdGxlLmRpcmVjdGl2ZSc7XG5pbXBvcnQge01vdmluZ0RpcmVjdGlvbn0gZnJvbSAnLi9tb3ZpbmctZGlyZWN0aW9uLmVudW0nO1xuaW1wb3J0IHtOYXZpZ2F0aW9uU3ltYm9sfSBmcm9tICcuL25hdmlnYXRpb24tc3ltYm9sLmludGVyZmFjZSc7XG5cbi8qKlxuICogQmFzaWMgZnVuY3Rpb25hbGl0eSBldmVyeSB0eXBlIG9mIHdpemFyZCBzdGVwIG5lZWRzIHRvIHByb3ZpZGVcbiAqXG4gKiBAYXV0aG9yIE1hcmMgQXJuZHRcbiAqL1xuZXhwb3J0IGFic3RyYWN0IGNsYXNzIFdpemFyZFN0ZXAge1xuICAvKipcbiAgICogQSBzdGVwIHRpdGxlIHByb3BlcnR5LCB3aGljaCBjb250YWlucyB0aGUgdmlzaWJsZSBoZWFkZXIgdGl0bGUgb2YgdGhlIHN0ZXAuXG4gICAqIFRoaXMgdGl0bGUgaXMgdGhlbiBzaG93biBpbnNpZGUgdGhlIG5hdmlnYXRpb24gYmFyLlxuICAgKiBDb21wYXJlZCB0byBgc3RlcFRpdGxlYCB0aGlzIHByb3BlcnR5IGNhbiBjb250YWluIGFueSBodG1sIGNvbnRlbnQgYW5kIG5vdCBvbmx5IHBsYWluIHRleHRcbiAgICovXG4gIEBDb250ZW50Q2hpbGQoV2l6YXJkU3RlcFRpdGxlRGlyZWN0aXZlLCB7c3RhdGljOiBmYWxzZX0pXG4gIHB1YmxpYyBzdGVwVGl0bGVUZW1wbGF0ZTogV2l6YXJkU3RlcFRpdGxlRGlyZWN0aXZlO1xuXG4gIC8qKlxuICAgKiBBIHN0ZXAgc3ltYm9sIHByb3BlcnR5IHRoYXQsIGlmIGRlZmluZWQsIG92ZXJyaWRlcyBgbmF2aWdhdGlvblN5bWJvbGAuXG4gICAqIEFsbG93cyB0byBkaXNwbGF5IGFyYml0cmFyeSBjb250ZW50IGFzIGEgc3RlcCBzeW1ib2wgaW5zdGVhZCBvZiBwbGFpbiB0ZXh0LlxuICAgKi9cbiAgQENvbnRlbnRDaGlsZChXaXphcmRTdGVwU3ltYm9sRGlyZWN0aXZlLCB7c3RhdGljOiBmYWxzZX0pXG4gIHB1YmxpYyBzdGVwU3ltYm9sVGVtcGxhdGU6IFdpemFyZFN0ZXBTeW1ib2xEaXJlY3RpdmU7XG5cbiAgLyoqXG4gICAqIEEgc3RlcCBpZCwgdW5pcXVlIHRvIHRoZSBzdGVwXG4gICAqL1xuICBASW5wdXQoKVxuICBwdWJsaWMgc3RlcElkOiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIEEgc3RlcCB0aXRsZSBwcm9wZXJ0eSwgd2hpY2ggY29udGFpbnMgdGhlIHZpc2libGUgaGVhZGVyIHRpdGxlIG9mIHRoZSBzdGVwLlxuICAgKiBUaGlzIHRpdGxlIGlzIG9ubHkgc2hvd24gaW5zaWRlIHRoZSBuYXZpZ2F0aW9uIGJhciwgaWYgYHN0ZXBUaXRsZVRlbXBsYXRlYCBpcyBub3QgZGVmaW5lZCBvciBudWxsLlxuICAgKi9cbiAgQElucHV0KClcbiAgcHVibGljIHN0ZXBUaXRsZTogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBBIHN5bWJvbCBwcm9wZXJ0eSwgd2hpY2ggY29udGFpbnMgYW4gb3B0aW9uYWwgc3ltYm9sIGZvciB0aGUgc3RlcCBpbnNpZGUgdGhlIG5hdmlnYXRpb24gYmFyLlxuICAgKiBUYWtlcyBlZmZlY3Qgd2hlbiBgc3RlcFN5bWJvbFRlbXBsYXRlYCBpcyBub3QgZGVmaW5lZCBvciBudWxsLlxuICAgKi9cbiAgQElucHV0KClcbiAgcHVibGljIG5hdmlnYXRpb25TeW1ib2w6IE5hdmlnYXRpb25TeW1ib2wgPSB7c3ltYm9sOiAnJ307XG5cbiAgLyoqXG4gICAqIEEgYm9vbGVhbiBkZXNjcmliaW5nIGlmIHRoZSB3aXphcmQgc3RlcCBpcyBjdXJyZW50bHkgc2VsZWN0ZWRcbiAgICovXG4gIHB1YmxpYyBzZWxlY3RlZCA9IGZhbHNlO1xuXG4gIC8qKlxuICAgKiBBIGJvb2xlYW4gZGVzY3JpYmluZyBpZiB0aGUgd2l6YXJkIHN0ZXAgaGFzIGJlZW4gY29tcGxldGVkXG4gICAqL1xuICBwdWJsaWMgY29tcGxldGVkID0gZmFsc2U7XG5cbiAgLyoqXG4gICAqIEEgYm9vbGVhbiBkZXNjcmliaW5nIGlmIHRoZSB3aXphcmQgc3RlcCBpcyBzaG93biBhcyBjb21wbGV0ZWQgd2hlbiB0aGUgd2l6YXJkIGlzIHByZXNlbnRlZCB0byB0aGUgdXNlclxuICAgKlxuICAgKiBVc2VycyB3aWxsIHR5cGljYWxseSB1c2UgYENvbXBsZXRlZFN0ZXBEaXJlY3RpdmVgIHRvIHNldCB0aGlzIGZsYWdcbiAgICovXG4gIHB1YmxpYyBpbml0aWFsbHlDb21wbGV0ZWQgPSBmYWxzZTtcblxuICAvKipcbiAgICogQSBib29sZWFuIGRlc2NyaWJpbmcgaWYgdGhlIHdpemFyZCBzdGVwIGlzIGJlaW5nIGVkaXRlZCBhZnRlciBiZWluZyBjb21wZXRlZFxuICAgKlxuICAgKiBUaGlzIGZsYWcgY2FuIG9ubHkgYmUgdHJ1ZSB3aGVuIGBzZWxlY3RlZGAgaXMgdHJ1ZS5cbiAgICovXG4gIHB1YmxpYyBlZGl0aW5nID0gZmFsc2U7XG5cbiAgLyoqXG4gICAqIEEgYm9vbGVhbiBkZXNjcmliaW5nLCBpZiB0aGUgd2l6YXJkIHN0ZXAgc2hvdWxkIGJlIHNlbGVjdGVkIGJ5IGRlZmF1bHQsIGkuZS4gYWZ0ZXIgdGhlIHdpemFyZCBoYXMgYmVlbiBpbml0aWFsaXplZCBhcyB0aGUgaW5pdGlhbCBzdGVwXG4gICAqL1xuICBwdWJsaWMgZGVmYXVsdFNlbGVjdGVkID0gZmFsc2U7XG5cbiAgLyoqXG4gICAqIEEgYm9vbGVhbiBkZXNjcmliaW5nIGlmIHRoZSB3aXphcmQgc3RlcCBpcyBhbiBvcHRpb25hbCBzdGVwXG4gICAqL1xuICBwdWJsaWMgb3B0aW9uYWwgPSBmYWxzZTtcblxuICAvKipcbiAgICogQSBmdW5jdGlvbiBvciBib29sZWFuIGRlY2lkaW5nLCBpZiB0aGlzIHN0ZXAgY2FuIGJlIGVudGVyZWRcbiAgICovXG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBjYW5FbnRlcjogKChkaXJlY3Rpb246IE1vdmluZ0RpcmVjdGlvbikgPT4gYm9vbGVhbikgfCAoKGRpcmVjdGlvbjogTW92aW5nRGlyZWN0aW9uKSA9PiBQcm9taXNlPGJvb2xlYW4+KSB8IGJvb2xlYW4gPSB0cnVlO1xuXG4gIC8qKlxuICAgKiBBIGZ1bmN0aW9uIG9yIGJvb2xlYW4gZGVjaWRpbmcsIGlmIHRoaXMgc3RlcCBjYW4gYmUgZXhpdGVkXG4gICAqL1xuICBASW5wdXQoKVxuICBwdWJsaWMgY2FuRXhpdDogKChkaXJlY3Rpb246IE1vdmluZ0RpcmVjdGlvbikgPT4gYm9vbGVhbikgfCAoKGRpcmVjdGlvbjogTW92aW5nRGlyZWN0aW9uKSA9PiBQcm9taXNlPGJvb2xlYW4+KSB8IGJvb2xlYW4gPSB0cnVlO1xuXG4gIC8qKlxuICAgKiBUaGlzIFtbRXZlbnRFbWl0dGVyXV0gaXMgY2FsbGVkIHdoZW4gdGhlIHN0ZXAgaXMgZW50ZXJlZC5cbiAgICogVGhlIGJvdW5kIG1ldGhvZCBzaG91bGQgYmUgdXNlZCB0byBkbyBpbml0aWFsaXphdGlvbiB3b3JrLlxuICAgKi9cbiAgQE91dHB1dCgpXG4gIHB1YmxpYyBzdGVwRW50ZXI6IEV2ZW50RW1pdHRlcjxNb3ZpbmdEaXJlY3Rpb24+ID0gbmV3IEV2ZW50RW1pdHRlcjxNb3ZpbmdEaXJlY3Rpb24+KCk7XG5cbiAgLyoqXG4gICAqIFRoaXMgW1tFdmVudEVtaXR0ZXJdXSBpcyBjYWxsZWQgd2hlbiB0aGUgc3RlcCBpcyBleGl0ZWQuXG4gICAqIFRoZSBib3VuZCBtZXRob2QgY2FuIGJlIHVzZWQgdG8gZG8gY2xlYW51cCB3b3JrLlxuICAgKi9cbiAgQE91dHB1dCgpXG4gIHB1YmxpYyBzdGVwRXhpdDogRXZlbnRFbWl0dGVyPE1vdmluZ0RpcmVjdGlvbj4gPSBuZXcgRXZlbnRFbWl0dGVyPE1vdmluZ0RpcmVjdGlvbj4oKTtcblxuICAvKipcbiAgICogUmV0dXJucyBpZiB0aGlzIHdpemFyZCBzdGVwIHNob3VsZCBiZSB2aXNpYmxlIHRvIHRoZSB1c2VyLlxuICAgKiBJZiB0aGUgc3RlcCBzaG91bGQgYmUgdmlzaWJsZSB0byB0aGUgdXNlciBmYWxzZSBpcyByZXR1cm5lZCwgb3RoZXJ3aXNlIHRydWVcbiAgICovXG4gIEBIb3N0QmluZGluZygnaGlkZGVuJylcbiAgcHVibGljIGdldCBoaWRkZW4oKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuICF0aGlzLnNlbGVjdGVkO1xuICB9XG5cbiAgLyoqXG4gICAqIFRoaXMgbWV0aG9kIHJldHVybnMgdHJ1ZSwgaWYgdGhpcyB3aXphcmQgc3RlcCBjYW4gYmUgdHJhbnNpdGlvbmVkIHdpdGggYSBnaXZlbiBkaXJlY3Rpb24uXG4gICAqIFRyYW5zaXRpb25lZCBpbiB0aGlzIGNhc2UgbWVhbnMgZWl0aGVyIGVudGVyZWQgb3IgZXhpdGVkLCBkZXBlbmRpbmcgb24gdGhlIGdpdmVuIGBjb25kaXRpb25gIHBhcmFtZXRlci5cbiAgICpcbiAgICogQHBhcmFtIGNvbmRpdGlvbiBBIGNvbmRpdGlvbiB2YXJpYWJsZSwgZGVjaWRpbmcgaWYgdGhlIHN0ZXAgY2FuIGJlIHRyYW5zaXRpb25lZFxuICAgKiBAcGFyYW0gZGlyZWN0aW9uIFRoZSBkaXJlY3Rpb24gaW4gd2hpY2ggdGhpcyBzdGVwIHNob3VsZCBiZSB0cmFuc2l0aW9uZWRcbiAgICogQHJldHVybnMgQSBbW1Byb21pc2VdXSBjb250YWluaW5nIGB0cnVlYCwgaWYgdGhpcyBzdGVwIGNhbiB0cmFuc2l0aW9uZWQgaW4gdGhlIGdpdmVuIGRpcmVjdGlvblxuICAgKiBAdGhyb3dzIEFuIGBFcnJvcmAgaXMgdGhyb3duIGlmIGBjb25kaXRpb25gIGlzIG5laXRoZXIgYSBmdW5jdGlvbiBub3IgYSBib29sZWFuXG4gICAqL1xuICBwcml2YXRlIHN0YXRpYyBjYW5UcmFuc2l0aW9uU3RlcChjb25kaXRpb246ICgoZGlyZWN0aW9uOiBNb3ZpbmdEaXJlY3Rpb24pID0+IGJvb2xlYW4pIHxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoKGRpcmVjdGlvbjogTW92aW5nRGlyZWN0aW9uKSA9PiBQcm9taXNlPGJvb2xlYW4+KSB8XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9vbGVhbixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlyZWN0aW9uOiBNb3ZpbmdEaXJlY3Rpb24pOiBQcm9taXNlPGJvb2xlYW4+IHtcbiAgICBpZiAodHlwZW9mKGNvbmRpdGlvbikgPT09IHR5cGVvZih0cnVlKSkge1xuICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShjb25kaXRpb24gYXMgYm9vbGVhbik7XG4gICAgfSBlbHNlIGlmIChjb25kaXRpb24gaW5zdGFuY2VvZiBGdW5jdGlvbikge1xuICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShjb25kaXRpb24oZGlyZWN0aW9uKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChuZXcgRXJyb3IoYElucHV0IHZhbHVlICcke2NvbmRpdGlvbn0nIGlzIG5laXRoZXIgYSBib29sZWFuIG5vciBhIGZ1bmN0aW9uYCkpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBBIGZ1bmN0aW9uIGNhbGxlZCB3aGVuIHRoZSBzdGVwIGlzIGVudGVyZWRcbiAgICpcbiAgICogQHBhcmFtIGRpcmVjdGlvbiBUaGUgZGlyZWN0aW9uIGluIHdoaWNoIHRoZSBzdGVwIGlzIGVudGVyZWRcbiAgICovXG4gIHB1YmxpYyBlbnRlcihkaXJlY3Rpb246IE1vdmluZ0RpcmVjdGlvbik6IHZvaWQge1xuICAgIHRoaXMuc3RlcEVudGVyLmVtaXQoZGlyZWN0aW9uKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBBIGZ1bmN0aW9uIGNhbGxlZCB3aGVuIHRoZSBzdGVwIGlzIGV4aXRlZFxuICAgKlxuICAgKiBAcGFyYW0gZGlyZWN0aW9uIFRoZSBkaXJlY3Rpb24gaW4gd2hpY2ggdGhlIHN0ZXAgaXMgZXhpdGVkXG4gICAqL1xuICBwdWJsaWMgZXhpdChkaXJlY3Rpb246IE1vdmluZ0RpcmVjdGlvbikge1xuICAgIHRoaXMuc3RlcEV4aXQuZW1pdChkaXJlY3Rpb24pO1xuICB9XG5cbiAgLyoqXG4gICAqIFRoaXMgbWV0aG9kIHJldHVybnMgdHJ1ZSwgaWYgdGhpcyB3aXphcmQgc3RlcCBjYW4gYmUgZW50ZXJlZCBmcm9tIHRoZSBnaXZlbiBkaXJlY3Rpb24uXG4gICAqIEJlY2F1c2UgdGhpcyBtZXRob2QgZGVwZW5kcyBvbiB0aGUgdmFsdWUgYGNhbkVudGVyYCwgaXQgd2lsbCB0aHJvdyBhbiBlcnJvciwgaWYgYGNhbkVudGVyYCBpcyBuZWl0aGVyIGEgYm9vbGVhblxuICAgKiBub3IgYSBmdW5jdGlvbi5cbiAgICpcbiAgICogQHBhcmFtIGRpcmVjdGlvbiBUaGUgZGlyZWN0aW9uIGluIHdoaWNoIHRoaXMgc3RlcCBzaG91bGQgYmUgZW50ZXJlZFxuICAgKiBAcmV0dXJucyBBIFtbUHJvbWlzZV1dIGNvbnRhaW5pbmcgYHRydWVgLCBpZiB0aGUgc3RlcCBjYW4gYmUgZW50ZXJlZCBpbiB0aGUgZ2l2ZW4gZGlyZWN0aW9uLCBmYWxzZSBvdGhlcndpc2VcbiAgICogQHRocm93cyBBbiBgRXJyb3JgIGlzIHRocm93biBpZiBgYW5FbnRlcmAgaXMgbmVpdGhlciBhIGZ1bmN0aW9uIG5vciBhIGJvb2xlYW5cbiAgICovXG4gIHB1YmxpYyBjYW5FbnRlclN0ZXAoZGlyZWN0aW9uOiBNb3ZpbmdEaXJlY3Rpb24pOiBQcm9taXNlPGJvb2xlYW4+IHtcbiAgICByZXR1cm4gV2l6YXJkU3RlcC5jYW5UcmFuc2l0aW9uU3RlcCh0aGlzLmNhbkVudGVyLCBkaXJlY3Rpb24pO1xuICB9XG5cbiAgLyoqXG4gICAqIFRoaXMgbWV0aG9kIHJldHVybnMgdHJ1ZSwgaWYgdGhpcyB3aXphcmQgc3RlcCBjYW4gYmUgZXhpdGVkIGludG8gZ2l2ZW4gZGlyZWN0aW9uLlxuICAgKiBCZWNhdXNlIHRoaXMgbWV0aG9kIGRlcGVuZHMgb24gdGhlIHZhbHVlIGBjYW5FeGl0YCwgaXQgd2lsbCB0aHJvdyBhbiBlcnJvciwgaWYgYGNhbkV4aXRgIGlzIG5laXRoZXIgYSBib29sZWFuXG4gICAqIG5vciBhIGZ1bmN0aW9uLlxuICAgKlxuICAgKiBAcGFyYW0gZGlyZWN0aW9uIFRoZSBkaXJlY3Rpb24gaW4gd2hpY2ggdGhpcyBzdGVwIHNob3VsZCBiZSBsZWZ0XG4gICAqIEByZXR1cm5zIEEgW1tQcm9taXNlXV0gY29udGFpbmluZyBgdHJ1ZWAsIGlmIHRoZSBzdGVwIGNhbiBiZSBleGl0ZWQgaW4gdGhlIGdpdmVuIGRpcmVjdGlvbiwgZmFsc2Ugb3RoZXJ3aXNlXG4gICAqIEB0aHJvd3MgQW4gYEVycm9yYCBpcyB0aHJvd24gaWYgYGNhbkV4aXRgIGlzIG5laXRoZXIgYSBmdW5jdGlvbiBub3IgYSBib29sZWFuXG4gICAqL1xuICBwdWJsaWMgY2FuRXhpdFN0ZXAoZGlyZWN0aW9uOiBNb3ZpbmdEaXJlY3Rpb24pOiBQcm9taXNlPGJvb2xlYW4+IHtcbiAgICByZXR1cm4gV2l6YXJkU3RlcC5jYW5UcmFuc2l0aW9uU3RlcCh0aGlzLmNhbkV4aXQsIGRpcmVjdGlvbik7XG4gIH1cbn1cbiJdfQ==