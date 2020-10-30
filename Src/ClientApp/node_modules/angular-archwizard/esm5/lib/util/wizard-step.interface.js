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
var WizardStep = /** @class */ (function () {
    function WizardStep() {
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
    Object.defineProperty(WizardStep.prototype, "hidden", {
        /**
         * Returns if this wizard step should be visible to the user.
         * If the step should be visible to the user false is returned, otherwise true
         */
        get: /**
         * Returns if this wizard step should be visible to the user.
         * If the step should be visible to the user false is returned, otherwise true
         * @return {?}
         */
        function () {
            return !this.selected;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * This method returns true, if this wizard step can be transitioned with a given direction.
     * Transitioned in this case means either entered or exited, depending on the given `condition` parameter.
     *
     * @param condition A condition variable, deciding if the step can be transitioned
     * @param direction The direction in which this step should be transitioned
     * @returns A [[Promise]] containing `true`, if this step can transitioned in the given direction
     * @throws An `Error` is thrown if `condition` is neither a function nor a boolean
     */
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
    WizardStep.canTransitionStep = /**
     * This method returns true, if this wizard step can be transitioned with a given direction.
     * Transitioned in this case means either entered or exited, depending on the given `condition` parameter.
     *
     * @throws An `Error` is thrown if `condition` is neither a function nor a boolean
     * @private
     * @param {?} condition A condition variable, deciding if the step can be transitioned
     * @param {?} direction The direction in which this step should be transitioned
     * @return {?} A [[Promise]] containing `true`, if this step can transitioned in the given direction
     */
    function (condition, direction) {
        if (typeof (condition) === typeof (true)) {
            return Promise.resolve((/** @type {?} */ (condition)));
        }
        else if (condition instanceof Function) {
            return Promise.resolve(condition(direction));
        }
        else {
            return Promise.reject(new Error("Input value '" + condition + "' is neither a boolean nor a function"));
        }
    };
    /**
     * A function called when the step is entered
     *
     * @param direction The direction in which the step is entered
     */
    /**
     * A function called when the step is entered
     *
     * @param {?} direction The direction in which the step is entered
     * @return {?}
     */
    WizardStep.prototype.enter = /**
     * A function called when the step is entered
     *
     * @param {?} direction The direction in which the step is entered
     * @return {?}
     */
    function (direction) {
        this.stepEnter.emit(direction);
    };
    /**
     * A function called when the step is exited
     *
     * @param direction The direction in which the step is exited
     */
    /**
     * A function called when the step is exited
     *
     * @param {?} direction The direction in which the step is exited
     * @return {?}
     */
    WizardStep.prototype.exit = /**
     * A function called when the step is exited
     *
     * @param {?} direction The direction in which the step is exited
     * @return {?}
     */
    function (direction) {
        this.stepExit.emit(direction);
    };
    /**
     * This method returns true, if this wizard step can be entered from the given direction.
     * Because this method depends on the value `canEnter`, it will throw an error, if `canEnter` is neither a boolean
     * nor a function.
     *
     * @param direction The direction in which this step should be entered
     * @returns A [[Promise]] containing `true`, if the step can be entered in the given direction, false otherwise
     * @throws An `Error` is thrown if `anEnter` is neither a function nor a boolean
     */
    /**
     * This method returns true, if this wizard step can be entered from the given direction.
     * Because this method depends on the value `canEnter`, it will throw an error, if `canEnter` is neither a boolean
     * nor a function.
     *
     * @throws An `Error` is thrown if `anEnter` is neither a function nor a boolean
     * @param {?} direction The direction in which this step should be entered
     * @return {?} A [[Promise]] containing `true`, if the step can be entered in the given direction, false otherwise
     */
    WizardStep.prototype.canEnterStep = /**
     * This method returns true, if this wizard step can be entered from the given direction.
     * Because this method depends on the value `canEnter`, it will throw an error, if `canEnter` is neither a boolean
     * nor a function.
     *
     * @throws An `Error` is thrown if `anEnter` is neither a function nor a boolean
     * @param {?} direction The direction in which this step should be entered
     * @return {?} A [[Promise]] containing `true`, if the step can be entered in the given direction, false otherwise
     */
    function (direction) {
        return WizardStep.canTransitionStep(this.canEnter, direction);
    };
    /**
     * This method returns true, if this wizard step can be exited into given direction.
     * Because this method depends on the value `canExit`, it will throw an error, if `canExit` is neither a boolean
     * nor a function.
     *
     * @param direction The direction in which this step should be left
     * @returns A [[Promise]] containing `true`, if the step can be exited in the given direction, false otherwise
     * @throws An `Error` is thrown if `canExit` is neither a function nor a boolean
     */
    /**
     * This method returns true, if this wizard step can be exited into given direction.
     * Because this method depends on the value `canExit`, it will throw an error, if `canExit` is neither a boolean
     * nor a function.
     *
     * @throws An `Error` is thrown if `canExit` is neither a function nor a boolean
     * @param {?} direction The direction in which this step should be left
     * @return {?} A [[Promise]] containing `true`, if the step can be exited in the given direction, false otherwise
     */
    WizardStep.prototype.canExitStep = /**
     * This method returns true, if this wizard step can be exited into given direction.
     * Because this method depends on the value `canExit`, it will throw an error, if `canExit` is neither a boolean
     * nor a function.
     *
     * @throws An `Error` is thrown if `canExit` is neither a function nor a boolean
     * @param {?} direction The direction in which this step should be left
     * @return {?} A [[Promise]] containing `true`, if the step can be exited in the given direction, false otherwise
     */
    function (direction) {
        return WizardStep.canTransitionStep(this.canExit, direction);
    };
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
    return WizardStep;
}());
export { WizardStep };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2l6YXJkLXN0ZXAuaW50ZXJmYWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vYW5ndWxhci1hcmNod2l6YXJkLyIsInNvdXJjZXMiOlsibGliL3V0aWwvd2l6YXJkLXN0ZXAuaW50ZXJmYWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUMsWUFBWSxFQUFFLFlBQVksRUFBRSxXQUFXLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUNyRixPQUFPLEVBQUMseUJBQXlCLEVBQUMsTUFBTSw0Q0FBNEMsQ0FBQztBQUNyRixPQUFPLEVBQUMsd0JBQXdCLEVBQUMsTUFBTSwyQ0FBMkMsQ0FBQzs7Ozs7OztBQVNuRjtJQUFBOzs7OztRQWtDUyxxQkFBZ0IsR0FBcUIsRUFBQyxNQUFNLEVBQUUsRUFBRSxFQUFDLENBQUM7Ozs7UUFLbEQsYUFBUSxHQUFHLEtBQUssQ0FBQzs7OztRQUtqQixjQUFTLEdBQUcsS0FBSyxDQUFDOzs7Ozs7UUFPbEIsdUJBQWtCLEdBQUcsS0FBSyxDQUFDOzs7Ozs7UUFPM0IsWUFBTyxHQUFHLEtBQUssQ0FBQzs7OztRQUtoQixvQkFBZSxHQUFHLEtBQUssQ0FBQzs7OztRQUt4QixhQUFRLEdBQUcsS0FBSyxDQUFDOzs7O1FBTWpCLGFBQVEsR0FBNkcsSUFBSSxDQUFDOzs7O1FBTTFILFlBQU8sR0FBNkcsSUFBSSxDQUFDOzs7OztRQU96SCxjQUFTLEdBQWtDLElBQUksWUFBWSxFQUFtQixDQUFDOzs7OztRQU8vRSxhQUFRLEdBQWtDLElBQUksWUFBWSxFQUFtQixDQUFDO0lBNEV2RixDQUFDO0lBdEVDLHNCQUNXLDhCQUFNO1FBTGpCOzs7V0FHRzs7Ozs7O1FBQ0g7WUFFRSxPQUFPLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQztRQUN4QixDQUFDOzs7T0FBQTtJQUVEOzs7Ozs7OztPQVFHOzs7Ozs7Ozs7OztJQUNZLDRCQUFpQjs7Ozs7Ozs7OztJQUFoQyxVQUFpQyxTQUVTLEVBQ1QsU0FBMEI7UUFDekQsSUFBSSxPQUFNLENBQUMsU0FBUyxDQUFDLEtBQUssT0FBTSxDQUFDLElBQUksQ0FBQyxFQUFFO1lBQ3RDLE9BQU8sT0FBTyxDQUFDLE9BQU8sQ0FBQyxtQkFBQSxTQUFTLEVBQVcsQ0FBQyxDQUFDO1NBQzlDO2FBQU0sSUFBSSxTQUFTLFlBQVksUUFBUSxFQUFFO1lBQ3hDLE9BQU8sT0FBTyxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztTQUM5QzthQUFNO1lBQ0wsT0FBTyxPQUFPLENBQUMsTUFBTSxDQUFDLElBQUksS0FBSyxDQUFDLGtCQUFnQixTQUFTLDBDQUF1QyxDQUFDLENBQUMsQ0FBQztTQUNwRztJQUNILENBQUM7SUFFRDs7OztPQUlHOzs7Ozs7O0lBQ0ksMEJBQUs7Ozs7OztJQUFaLFVBQWEsU0FBMEI7UUFDckMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDakMsQ0FBQztJQUVEOzs7O09BSUc7Ozs7Ozs7SUFDSSx5QkFBSTs7Ozs7O0lBQVgsVUFBWSxTQUEwQjtRQUNwQyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUNoQyxDQUFDO0lBRUQ7Ozs7Ozs7O09BUUc7Ozs7Ozs7Ozs7SUFDSSxpQ0FBWTs7Ozs7Ozs7O0lBQW5CLFVBQW9CLFNBQTBCO1FBQzVDLE9BQU8sVUFBVSxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsU0FBUyxDQUFDLENBQUM7SUFDaEUsQ0FBQztJQUVEOzs7Ozs7OztPQVFHOzs7Ozs7Ozs7O0lBQ0ksZ0NBQVc7Ozs7Ozs7OztJQUFsQixVQUFtQixTQUEwQjtRQUMzQyxPQUFPLFVBQVUsQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLFNBQVMsQ0FBQyxDQUFDO0lBQy9ELENBQUM7O29DQW5LQSxZQUFZLFNBQUMsd0JBQXdCLEVBQUUsRUFBQyxNQUFNLEVBQUUsS0FBSyxFQUFDO3FDQU90RCxZQUFZLFNBQUMseUJBQXlCLEVBQUUsRUFBQyxNQUFNLEVBQUUsS0FBSyxFQUFDO3lCQU12RCxLQUFLOzRCQU9MLEtBQUs7bUNBT0wsS0FBSzsyQkF3Q0wsS0FBSzswQkFNTCxLQUFLOzRCQU9MLE1BQU07MkJBT04sTUFBTTt5QkFPTixXQUFXLFNBQUMsUUFBUTs7SUFzRXZCLGlCQUFDO0NBQUEsQUExS0QsSUEwS0M7U0ExS3FCLFVBQVU7Ozs7Ozs7O0lBTTlCLHVDQUNtRDs7Ozs7O0lBTW5ELHdDQUNxRDs7Ozs7SUFLckQsNEJBQ3NCOzs7Ozs7SUFNdEIsK0JBQ3lCOzs7Ozs7SUFNekIsc0NBQ3lEOzs7OztJQUt6RCw4QkFBd0I7Ozs7O0lBS3hCLCtCQUF5Qjs7Ozs7OztJQU96Qix3Q0FBa0M7Ozs7Ozs7SUFPbEMsNkJBQXVCOzs7OztJQUt2QixxQ0FBK0I7Ozs7O0lBSy9CLDhCQUF3Qjs7Ozs7SUFLeEIsOEJBQ2lJOzs7OztJQUtqSSw2QkFDZ0k7Ozs7OztJQU1oSSwrQkFDc0Y7Ozs7OztJQU10Riw4QkFDcUYiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbnRlbnRDaGlsZCwgRXZlbnRFbWl0dGVyLCBIb3N0QmluZGluZywgSW5wdXQsIE91dHB1dH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1dpemFyZFN0ZXBTeW1ib2xEaXJlY3RpdmV9IGZyb20gJy4uL2RpcmVjdGl2ZXMvd2l6YXJkLXN0ZXAtc3ltYm9sLmRpcmVjdGl2ZSc7XG5pbXBvcnQge1dpemFyZFN0ZXBUaXRsZURpcmVjdGl2ZX0gZnJvbSAnLi4vZGlyZWN0aXZlcy93aXphcmQtc3RlcC10aXRsZS5kaXJlY3RpdmUnO1xuaW1wb3J0IHtNb3ZpbmdEaXJlY3Rpb259IGZyb20gJy4vbW92aW5nLWRpcmVjdGlvbi5lbnVtJztcbmltcG9ydCB7TmF2aWdhdGlvblN5bWJvbH0gZnJvbSAnLi9uYXZpZ2F0aW9uLXN5bWJvbC5pbnRlcmZhY2UnO1xuXG4vKipcbiAqIEJhc2ljIGZ1bmN0aW9uYWxpdHkgZXZlcnkgdHlwZSBvZiB3aXphcmQgc3RlcCBuZWVkcyB0byBwcm92aWRlXG4gKlxuICogQGF1dGhvciBNYXJjIEFybmR0XG4gKi9cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBXaXphcmRTdGVwIHtcbiAgLyoqXG4gICAqIEEgc3RlcCB0aXRsZSBwcm9wZXJ0eSwgd2hpY2ggY29udGFpbnMgdGhlIHZpc2libGUgaGVhZGVyIHRpdGxlIG9mIHRoZSBzdGVwLlxuICAgKiBUaGlzIHRpdGxlIGlzIHRoZW4gc2hvd24gaW5zaWRlIHRoZSBuYXZpZ2F0aW9uIGJhci5cbiAgICogQ29tcGFyZWQgdG8gYHN0ZXBUaXRsZWAgdGhpcyBwcm9wZXJ0eSBjYW4gY29udGFpbiBhbnkgaHRtbCBjb250ZW50IGFuZCBub3Qgb25seSBwbGFpbiB0ZXh0XG4gICAqL1xuICBAQ29udGVudENoaWxkKFdpemFyZFN0ZXBUaXRsZURpcmVjdGl2ZSwge3N0YXRpYzogZmFsc2V9KVxuICBwdWJsaWMgc3RlcFRpdGxlVGVtcGxhdGU6IFdpemFyZFN0ZXBUaXRsZURpcmVjdGl2ZTtcblxuICAvKipcbiAgICogQSBzdGVwIHN5bWJvbCBwcm9wZXJ0eSB0aGF0LCBpZiBkZWZpbmVkLCBvdmVycmlkZXMgYG5hdmlnYXRpb25TeW1ib2xgLlxuICAgKiBBbGxvd3MgdG8gZGlzcGxheSBhcmJpdHJhcnkgY29udGVudCBhcyBhIHN0ZXAgc3ltYm9sIGluc3RlYWQgb2YgcGxhaW4gdGV4dC5cbiAgICovXG4gIEBDb250ZW50Q2hpbGQoV2l6YXJkU3RlcFN5bWJvbERpcmVjdGl2ZSwge3N0YXRpYzogZmFsc2V9KVxuICBwdWJsaWMgc3RlcFN5bWJvbFRlbXBsYXRlOiBXaXphcmRTdGVwU3ltYm9sRGlyZWN0aXZlO1xuXG4gIC8qKlxuICAgKiBBIHN0ZXAgaWQsIHVuaXF1ZSB0byB0aGUgc3RlcFxuICAgKi9cbiAgQElucHV0KClcbiAgcHVibGljIHN0ZXBJZDogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBBIHN0ZXAgdGl0bGUgcHJvcGVydHksIHdoaWNoIGNvbnRhaW5zIHRoZSB2aXNpYmxlIGhlYWRlciB0aXRsZSBvZiB0aGUgc3RlcC5cbiAgICogVGhpcyB0aXRsZSBpcyBvbmx5IHNob3duIGluc2lkZSB0aGUgbmF2aWdhdGlvbiBiYXIsIGlmIGBzdGVwVGl0bGVUZW1wbGF0ZWAgaXMgbm90IGRlZmluZWQgb3IgbnVsbC5cbiAgICovXG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBzdGVwVGl0bGU6IHN0cmluZztcblxuICAvKipcbiAgICogQSBzeW1ib2wgcHJvcGVydHksIHdoaWNoIGNvbnRhaW5zIGFuIG9wdGlvbmFsIHN5bWJvbCBmb3IgdGhlIHN0ZXAgaW5zaWRlIHRoZSBuYXZpZ2F0aW9uIGJhci5cbiAgICogVGFrZXMgZWZmZWN0IHdoZW4gYHN0ZXBTeW1ib2xUZW1wbGF0ZWAgaXMgbm90IGRlZmluZWQgb3IgbnVsbC5cbiAgICovXG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBuYXZpZ2F0aW9uU3ltYm9sOiBOYXZpZ2F0aW9uU3ltYm9sID0ge3N5bWJvbDogJyd9O1xuXG4gIC8qKlxuICAgKiBBIGJvb2xlYW4gZGVzY3JpYmluZyBpZiB0aGUgd2l6YXJkIHN0ZXAgaXMgY3VycmVudGx5IHNlbGVjdGVkXG4gICAqL1xuICBwdWJsaWMgc2VsZWN0ZWQgPSBmYWxzZTtcblxuICAvKipcbiAgICogQSBib29sZWFuIGRlc2NyaWJpbmcgaWYgdGhlIHdpemFyZCBzdGVwIGhhcyBiZWVuIGNvbXBsZXRlZFxuICAgKi9cbiAgcHVibGljIGNvbXBsZXRlZCA9IGZhbHNlO1xuXG4gIC8qKlxuICAgKiBBIGJvb2xlYW4gZGVzY3JpYmluZyBpZiB0aGUgd2l6YXJkIHN0ZXAgaXMgc2hvd24gYXMgY29tcGxldGVkIHdoZW4gdGhlIHdpemFyZCBpcyBwcmVzZW50ZWQgdG8gdGhlIHVzZXJcbiAgICpcbiAgICogVXNlcnMgd2lsbCB0eXBpY2FsbHkgdXNlIGBDb21wbGV0ZWRTdGVwRGlyZWN0aXZlYCB0byBzZXQgdGhpcyBmbGFnXG4gICAqL1xuICBwdWJsaWMgaW5pdGlhbGx5Q29tcGxldGVkID0gZmFsc2U7XG5cbiAgLyoqXG4gICAqIEEgYm9vbGVhbiBkZXNjcmliaW5nIGlmIHRoZSB3aXphcmQgc3RlcCBpcyBiZWluZyBlZGl0ZWQgYWZ0ZXIgYmVpbmcgY29tcGV0ZWRcbiAgICpcbiAgICogVGhpcyBmbGFnIGNhbiBvbmx5IGJlIHRydWUgd2hlbiBgc2VsZWN0ZWRgIGlzIHRydWUuXG4gICAqL1xuICBwdWJsaWMgZWRpdGluZyA9IGZhbHNlO1xuXG4gIC8qKlxuICAgKiBBIGJvb2xlYW4gZGVzY3JpYmluZywgaWYgdGhlIHdpemFyZCBzdGVwIHNob3VsZCBiZSBzZWxlY3RlZCBieSBkZWZhdWx0LCBpLmUuIGFmdGVyIHRoZSB3aXphcmQgaGFzIGJlZW4gaW5pdGlhbGl6ZWQgYXMgdGhlIGluaXRpYWwgc3RlcFxuICAgKi9cbiAgcHVibGljIGRlZmF1bHRTZWxlY3RlZCA9IGZhbHNlO1xuXG4gIC8qKlxuICAgKiBBIGJvb2xlYW4gZGVzY3JpYmluZyBpZiB0aGUgd2l6YXJkIHN0ZXAgaXMgYW4gb3B0aW9uYWwgc3RlcFxuICAgKi9cbiAgcHVibGljIG9wdGlvbmFsID0gZmFsc2U7XG5cbiAgLyoqXG4gICAqIEEgZnVuY3Rpb24gb3IgYm9vbGVhbiBkZWNpZGluZywgaWYgdGhpcyBzdGVwIGNhbiBiZSBlbnRlcmVkXG4gICAqL1xuICBASW5wdXQoKVxuICBwdWJsaWMgY2FuRW50ZXI6ICgoZGlyZWN0aW9uOiBNb3ZpbmdEaXJlY3Rpb24pID0+IGJvb2xlYW4pIHwgKChkaXJlY3Rpb246IE1vdmluZ0RpcmVjdGlvbikgPT4gUHJvbWlzZTxib29sZWFuPikgfCBib29sZWFuID0gdHJ1ZTtcblxuICAvKipcbiAgICogQSBmdW5jdGlvbiBvciBib29sZWFuIGRlY2lkaW5nLCBpZiB0aGlzIHN0ZXAgY2FuIGJlIGV4aXRlZFxuICAgKi9cbiAgQElucHV0KClcbiAgcHVibGljIGNhbkV4aXQ6ICgoZGlyZWN0aW9uOiBNb3ZpbmdEaXJlY3Rpb24pID0+IGJvb2xlYW4pIHwgKChkaXJlY3Rpb246IE1vdmluZ0RpcmVjdGlvbikgPT4gUHJvbWlzZTxib29sZWFuPikgfCBib29sZWFuID0gdHJ1ZTtcblxuICAvKipcbiAgICogVGhpcyBbW0V2ZW50RW1pdHRlcl1dIGlzIGNhbGxlZCB3aGVuIHRoZSBzdGVwIGlzIGVudGVyZWQuXG4gICAqIFRoZSBib3VuZCBtZXRob2Qgc2hvdWxkIGJlIHVzZWQgdG8gZG8gaW5pdGlhbGl6YXRpb24gd29yay5cbiAgICovXG4gIEBPdXRwdXQoKVxuICBwdWJsaWMgc3RlcEVudGVyOiBFdmVudEVtaXR0ZXI8TW92aW5nRGlyZWN0aW9uPiA9IG5ldyBFdmVudEVtaXR0ZXI8TW92aW5nRGlyZWN0aW9uPigpO1xuXG4gIC8qKlxuICAgKiBUaGlzIFtbRXZlbnRFbWl0dGVyXV0gaXMgY2FsbGVkIHdoZW4gdGhlIHN0ZXAgaXMgZXhpdGVkLlxuICAgKiBUaGUgYm91bmQgbWV0aG9kIGNhbiBiZSB1c2VkIHRvIGRvIGNsZWFudXAgd29yay5cbiAgICovXG4gIEBPdXRwdXQoKVxuICBwdWJsaWMgc3RlcEV4aXQ6IEV2ZW50RW1pdHRlcjxNb3ZpbmdEaXJlY3Rpb24+ID0gbmV3IEV2ZW50RW1pdHRlcjxNb3ZpbmdEaXJlY3Rpb24+KCk7XG5cbiAgLyoqXG4gICAqIFJldHVybnMgaWYgdGhpcyB3aXphcmQgc3RlcCBzaG91bGQgYmUgdmlzaWJsZSB0byB0aGUgdXNlci5cbiAgICogSWYgdGhlIHN0ZXAgc2hvdWxkIGJlIHZpc2libGUgdG8gdGhlIHVzZXIgZmFsc2UgaXMgcmV0dXJuZWQsIG90aGVyd2lzZSB0cnVlXG4gICAqL1xuICBASG9zdEJpbmRpbmcoJ2hpZGRlbicpXG4gIHB1YmxpYyBnZXQgaGlkZGVuKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiAhdGhpcy5zZWxlY3RlZDtcbiAgfVxuXG4gIC8qKlxuICAgKiBUaGlzIG1ldGhvZCByZXR1cm5zIHRydWUsIGlmIHRoaXMgd2l6YXJkIHN0ZXAgY2FuIGJlIHRyYW5zaXRpb25lZCB3aXRoIGEgZ2l2ZW4gZGlyZWN0aW9uLlxuICAgKiBUcmFuc2l0aW9uZWQgaW4gdGhpcyBjYXNlIG1lYW5zIGVpdGhlciBlbnRlcmVkIG9yIGV4aXRlZCwgZGVwZW5kaW5nIG9uIHRoZSBnaXZlbiBgY29uZGl0aW9uYCBwYXJhbWV0ZXIuXG4gICAqXG4gICAqIEBwYXJhbSBjb25kaXRpb24gQSBjb25kaXRpb24gdmFyaWFibGUsIGRlY2lkaW5nIGlmIHRoZSBzdGVwIGNhbiBiZSB0cmFuc2l0aW9uZWRcbiAgICogQHBhcmFtIGRpcmVjdGlvbiBUaGUgZGlyZWN0aW9uIGluIHdoaWNoIHRoaXMgc3RlcCBzaG91bGQgYmUgdHJhbnNpdGlvbmVkXG4gICAqIEByZXR1cm5zIEEgW1tQcm9taXNlXV0gY29udGFpbmluZyBgdHJ1ZWAsIGlmIHRoaXMgc3RlcCBjYW4gdHJhbnNpdGlvbmVkIGluIHRoZSBnaXZlbiBkaXJlY3Rpb25cbiAgICogQHRocm93cyBBbiBgRXJyb3JgIGlzIHRocm93biBpZiBgY29uZGl0aW9uYCBpcyBuZWl0aGVyIGEgZnVuY3Rpb24gbm9yIGEgYm9vbGVhblxuICAgKi9cbiAgcHJpdmF0ZSBzdGF0aWMgY2FuVHJhbnNpdGlvblN0ZXAoY29uZGl0aW9uOiAoKGRpcmVjdGlvbjogTW92aW5nRGlyZWN0aW9uKSA9PiBib29sZWFuKSB8XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKChkaXJlY3Rpb246IE1vdmluZ0RpcmVjdGlvbikgPT4gUHJvbWlzZTxib29sZWFuPikgfFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvb2xlYW4sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpcmVjdGlvbjogTW92aW5nRGlyZWN0aW9uKTogUHJvbWlzZTxib29sZWFuPiB7XG4gICAgaWYgKHR5cGVvZihjb25kaXRpb24pID09PSB0eXBlb2YodHJ1ZSkpIHtcbiAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoY29uZGl0aW9uIGFzIGJvb2xlYW4pO1xuICAgIH0gZWxzZSBpZiAoY29uZGl0aW9uIGluc3RhbmNlb2YgRnVuY3Rpb24pIHtcbiAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoY29uZGl0aW9uKGRpcmVjdGlvbikpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QobmV3IEVycm9yKGBJbnB1dCB2YWx1ZSAnJHtjb25kaXRpb259JyBpcyBuZWl0aGVyIGEgYm9vbGVhbiBub3IgYSBmdW5jdGlvbmApKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQSBmdW5jdGlvbiBjYWxsZWQgd2hlbiB0aGUgc3RlcCBpcyBlbnRlcmVkXG4gICAqXG4gICAqIEBwYXJhbSBkaXJlY3Rpb24gVGhlIGRpcmVjdGlvbiBpbiB3aGljaCB0aGUgc3RlcCBpcyBlbnRlcmVkXG4gICAqL1xuICBwdWJsaWMgZW50ZXIoZGlyZWN0aW9uOiBNb3ZpbmdEaXJlY3Rpb24pOiB2b2lkIHtcbiAgICB0aGlzLnN0ZXBFbnRlci5lbWl0KGRpcmVjdGlvbik7XG4gIH1cblxuICAvKipcbiAgICogQSBmdW5jdGlvbiBjYWxsZWQgd2hlbiB0aGUgc3RlcCBpcyBleGl0ZWRcbiAgICpcbiAgICogQHBhcmFtIGRpcmVjdGlvbiBUaGUgZGlyZWN0aW9uIGluIHdoaWNoIHRoZSBzdGVwIGlzIGV4aXRlZFxuICAgKi9cbiAgcHVibGljIGV4aXQoZGlyZWN0aW9uOiBNb3ZpbmdEaXJlY3Rpb24pIHtcbiAgICB0aGlzLnN0ZXBFeGl0LmVtaXQoZGlyZWN0aW9uKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBUaGlzIG1ldGhvZCByZXR1cm5zIHRydWUsIGlmIHRoaXMgd2l6YXJkIHN0ZXAgY2FuIGJlIGVudGVyZWQgZnJvbSB0aGUgZ2l2ZW4gZGlyZWN0aW9uLlxuICAgKiBCZWNhdXNlIHRoaXMgbWV0aG9kIGRlcGVuZHMgb24gdGhlIHZhbHVlIGBjYW5FbnRlcmAsIGl0IHdpbGwgdGhyb3cgYW4gZXJyb3IsIGlmIGBjYW5FbnRlcmAgaXMgbmVpdGhlciBhIGJvb2xlYW5cbiAgICogbm9yIGEgZnVuY3Rpb24uXG4gICAqXG4gICAqIEBwYXJhbSBkaXJlY3Rpb24gVGhlIGRpcmVjdGlvbiBpbiB3aGljaCB0aGlzIHN0ZXAgc2hvdWxkIGJlIGVudGVyZWRcbiAgICogQHJldHVybnMgQSBbW1Byb21pc2VdXSBjb250YWluaW5nIGB0cnVlYCwgaWYgdGhlIHN0ZXAgY2FuIGJlIGVudGVyZWQgaW4gdGhlIGdpdmVuIGRpcmVjdGlvbiwgZmFsc2Ugb3RoZXJ3aXNlXG4gICAqIEB0aHJvd3MgQW4gYEVycm9yYCBpcyB0aHJvd24gaWYgYGFuRW50ZXJgIGlzIG5laXRoZXIgYSBmdW5jdGlvbiBub3IgYSBib29sZWFuXG4gICAqL1xuICBwdWJsaWMgY2FuRW50ZXJTdGVwKGRpcmVjdGlvbjogTW92aW5nRGlyZWN0aW9uKTogUHJvbWlzZTxib29sZWFuPiB7XG4gICAgcmV0dXJuIFdpemFyZFN0ZXAuY2FuVHJhbnNpdGlvblN0ZXAodGhpcy5jYW5FbnRlciwgZGlyZWN0aW9uKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBUaGlzIG1ldGhvZCByZXR1cm5zIHRydWUsIGlmIHRoaXMgd2l6YXJkIHN0ZXAgY2FuIGJlIGV4aXRlZCBpbnRvIGdpdmVuIGRpcmVjdGlvbi5cbiAgICogQmVjYXVzZSB0aGlzIG1ldGhvZCBkZXBlbmRzIG9uIHRoZSB2YWx1ZSBgY2FuRXhpdGAsIGl0IHdpbGwgdGhyb3cgYW4gZXJyb3IsIGlmIGBjYW5FeGl0YCBpcyBuZWl0aGVyIGEgYm9vbGVhblxuICAgKiBub3IgYSBmdW5jdGlvbi5cbiAgICpcbiAgICogQHBhcmFtIGRpcmVjdGlvbiBUaGUgZGlyZWN0aW9uIGluIHdoaWNoIHRoaXMgc3RlcCBzaG91bGQgYmUgbGVmdFxuICAgKiBAcmV0dXJucyBBIFtbUHJvbWlzZV1dIGNvbnRhaW5pbmcgYHRydWVgLCBpZiB0aGUgc3RlcCBjYW4gYmUgZXhpdGVkIGluIHRoZSBnaXZlbiBkaXJlY3Rpb24sIGZhbHNlIG90aGVyd2lzZVxuICAgKiBAdGhyb3dzIEFuIGBFcnJvcmAgaXMgdGhyb3duIGlmIGBjYW5FeGl0YCBpcyBuZWl0aGVyIGEgZnVuY3Rpb24gbm9yIGEgYm9vbGVhblxuICAgKi9cbiAgcHVibGljIGNhbkV4aXRTdGVwKGRpcmVjdGlvbjogTW92aW5nRGlyZWN0aW9uKTogUHJvbWlzZTxib29sZWFuPiB7XG4gICAgcmV0dXJuIFdpemFyZFN0ZXAuY2FuVHJhbnNpdGlvblN0ZXAodGhpcy5jYW5FeGl0LCBkaXJlY3Rpb24pO1xuICB9XG59XG4iXX0=