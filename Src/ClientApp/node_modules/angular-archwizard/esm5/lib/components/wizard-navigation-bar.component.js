/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
import { WizardCompletionStep } from '../util/wizard-completion-step.interface';
import { WizardComponent } from './wizard.component';
/**
 * The `aw-wizard-navigation-bar` component contains the navigation bar inside a [[WizardComponent]].
 * To correctly display the navigation bar, it's required to set the right css classes for the navigation bar,
 * otherwise it will look like a normal `ul` component.
 *
 * ### Syntax
 *
 * ```html
 * <aw-wizard-navigation-bar></aw-wizard-navigation-bar>
 * ```
 *
 * @author Marc Arndt
 */
var WizardNavigationBarComponent = /** @class */ (function () {
    /**
     * Constructor
     *
     * @param wizard The state the wizard currently resides in
     */
    function WizardNavigationBarComponent(wizard) {
        this.wizard = wizard;
        /**
         * The direction in which the wizard steps should be shown in the navigation bar.
         * This value can be either `left-to-right` or `right-to-left`
         */
        this.direction = 'left-to-right';
    }
    Object.defineProperty(WizardNavigationBarComponent.prototype, "wizardSteps", {
        /**
         * Returns all [[WizardStep]]s contained in the wizard
         *
         * @returns An array containing all [[WizardStep]]s
         */
        get: /**
         * Returns all [[WizardStep]]s contained in the wizard
         *
         * @return {?} An array containing all [[WizardStep]]s
         */
        function () {
            switch (this.direction) {
                case 'right-to-left':
                    return this.wizard.wizardSteps.slice().reverse();
                case 'left-to-right':
                default:
                    return this.wizard.wizardSteps;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WizardNavigationBarComponent.prototype, "numberOfWizardSteps", {
        /**
         * Returns the number of wizard steps, that need to be displaced in the navigation bar
         *
         * @returns The number of wizard steps to be displayed
         */
        get: /**
         * Returns the number of wizard steps, that need to be displaced in the navigation bar
         *
         * @return {?} The number of wizard steps to be displayed
         */
        function () {
            return this.wizard.wizardSteps.length;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Checks, whether a [[WizardStep]] can be marked as `current` in the navigation bar
     *
     * @param wizardStep The wizard step to be checked
     * @returns True if the step can be marked as `current`
     */
    /**
     * Checks, whether a [[WizardStep]] can be marked as `current` in the navigation bar
     *
     * @param {?} wizardStep The wizard step to be checked
     * @return {?} True if the step can be marked as `current`
     */
    WizardNavigationBarComponent.prototype.isCurrent = /**
     * Checks, whether a [[WizardStep]] can be marked as `current` in the navigation bar
     *
     * @param {?} wizardStep The wizard step to be checked
     * @return {?} True if the step can be marked as `current`
     */
    function (wizardStep) {
        return wizardStep.selected;
    };
    /**
     * Checks, whether a [[WizardStep]] can be marked as `editing` in the navigation bar
     *
     * @param wizardStep The wizard step to be checked
     * @returns True if the step can be marked as `editing`
     */
    /**
     * Checks, whether a [[WizardStep]] can be marked as `editing` in the navigation bar
     *
     * @param {?} wizardStep The wizard step to be checked
     * @return {?} True if the step can be marked as `editing`
     */
    WizardNavigationBarComponent.prototype.isEditing = /**
     * Checks, whether a [[WizardStep]] can be marked as `editing` in the navigation bar
     *
     * @param {?} wizardStep The wizard step to be checked
     * @return {?} True if the step can be marked as `editing`
     */
    function (wizardStep) {
        return wizardStep.editing;
    };
    /**
     * Checks, whether a [[WizardStep]] can be marked as `done` in the navigation bar
     *
     * @param wizardStep The wizard step to be checked
     * @returns True if the step can be marked as `done`
     */
    /**
     * Checks, whether a [[WizardStep]] can be marked as `done` in the navigation bar
     *
     * @param {?} wizardStep The wizard step to be checked
     * @return {?} True if the step can be marked as `done`
     */
    WizardNavigationBarComponent.prototype.isDone = /**
     * Checks, whether a [[WizardStep]] can be marked as `done` in the navigation bar
     *
     * @param {?} wizardStep The wizard step to be checked
     * @return {?} True if the step can be marked as `done`
     */
    function (wizardStep) {
        return wizardStep.completed;
    };
    /**
     * Checks, whether a [[WizardStep]] can be marked as `optional` in the navigation bar
     *
     * @param wizardStep The wizard step to be checked
     * @returns True if the step can be marked as `optional`
     */
    /**
     * Checks, whether a [[WizardStep]] can be marked as `optional` in the navigation bar
     *
     * @param {?} wizardStep The wizard step to be checked
     * @return {?} True if the step can be marked as `optional`
     */
    WizardNavigationBarComponent.prototype.isOptional = /**
     * Checks, whether a [[WizardStep]] can be marked as `optional` in the navigation bar
     *
     * @param {?} wizardStep The wizard step to be checked
     * @return {?} True if the step can be marked as `optional`
     */
    function (wizardStep) {
        return wizardStep.optional;
    };
    /**
     * Checks, whether a [[WizardStep]] can be marked as `completed` in the navigation bar.
     *
     * The `completed` class is only applied to completion steps.
     *
     * @param wizardStep The wizard step to be checked
     * @returns True if the step can be marked as `completed`
     */
    /**
     * Checks, whether a [[WizardStep]] can be marked as `completed` in the navigation bar.
     *
     * The `completed` class is only applied to completion steps.
     *
     * @param {?} wizardStep The wizard step to be checked
     * @return {?} True if the step can be marked as `completed`
     */
    WizardNavigationBarComponent.prototype.isCompleted = /**
     * Checks, whether a [[WizardStep]] can be marked as `completed` in the navigation bar.
     *
     * The `completed` class is only applied to completion steps.
     *
     * @param {?} wizardStep The wizard step to be checked
     * @return {?} True if the step can be marked as `completed`
     */
    function (wizardStep) {
        return wizardStep instanceof WizardCompletionStep && this.wizard.completed;
    };
    /**
     * Checks, whether a [[WizardStep]] can be marked as `navigable` in the navigation bar.
     * A wizard step can be navigated to if:
     * - the step is currently not selected
     * - the navigation bar isn't disabled
     * - the navigation mode allows navigation to the step
     *
     * @param wizardStep The wizard step to be checked
     * @returns True if the step can be marked as navigable
     */
    /**
     * Checks, whether a [[WizardStep]] can be marked as `navigable` in the navigation bar.
     * A wizard step can be navigated to if:
     * - the step is currently not selected
     * - the navigation bar isn't disabled
     * - the navigation mode allows navigation to the step
     *
     * @param {?} wizardStep The wizard step to be checked
     * @return {?} True if the step can be marked as navigable
     */
    WizardNavigationBarComponent.prototype.isNavigable = /**
     * Checks, whether a [[WizardStep]] can be marked as `navigable` in the navigation bar.
     * A wizard step can be navigated to if:
     * - the step is currently not selected
     * - the navigation bar isn't disabled
     * - the navigation mode allows navigation to the step
     *
     * @param {?} wizardStep The wizard step to be checked
     * @return {?} True if the step can be marked as navigable
     */
    function (wizardStep) {
        return !wizardStep.selected && !this.wizard.disableNavigationBar &&
            this.wizard.isNavigable(this.wizard.getIndexOfStep(wizardStep));
    };
    WizardNavigationBarComponent.decorators = [
        { type: Component, args: [{
                    selector: 'aw-wizard-navigation-bar',
                    template: "<ul class=\"steps-indicator steps-{{numberOfWizardSteps}}\">\n  <li [attr.id]=\"step.stepId\" *ngFor=\"let step of wizardSteps\"\n      [ngClass]=\"{\n        current: isCurrent(step),\n        editing: isEditing(step),\n        done: isDone(step),\n        optional: isOptional(step),\n        completed: isCompleted(step),\n        navigable: isNavigable(step)\n  }\">\n    <a [awGoToStep]=\"step\">\n      <div class=\"label\">\n        <ng-container *ngIf=\"step.stepTitleTemplate\" [ngTemplateOutlet]=\"step.stepTitleTemplate.templateRef\"></ng-container>\n        <ng-container *ngIf=\"!step.stepTitleTemplate\">{{step.stepTitle}}</ng-container>\n      </div>\n      <div class=\"step-indicator\" [ngStyle]=\"{ 'font-family': step.stepSymbolTemplate ? '' : step.navigationSymbol.fontFamily }\">\n        <ng-container *ngIf=\"step.stepSymbolTemplate\" [ngTemplateOutlet]=\"step.stepSymbolTemplate.templateRef\"></ng-container>\n        <ng-container *ngIf=\"!step.stepSymbolTemplate\">{{step.navigationSymbol.symbol}}</ng-container>\n      </div>\n    </a>\n  </li>\n</ul>\n"
                }] }
    ];
    /** @nocollapse */
    WizardNavigationBarComponent.ctorParameters = function () { return [
        { type: WizardComponent }
    ]; };
    WizardNavigationBarComponent.propDecorators = {
        direction: [{ type: Input }]
    };
    return WizardNavigationBarComponent;
}());
export { WizardNavigationBarComponent };
if (false) {
    /**
     * The direction in which the wizard steps should be shown in the navigation bar.
     * This value can be either `left-to-right` or `right-to-left`
     * @type {?}
     */
    WizardNavigationBarComponent.prototype.direction;
    /** @type {?} */
    WizardNavigationBarComponent.prototype.wizard;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2l6YXJkLW5hdmlnYXRpb24tYmFyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2FuZ3VsYXItYXJjaHdpemFyZC8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL3dpemFyZC1uYXZpZ2F0aW9uLWJhci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUUsS0FBSyxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQy9DLE9BQU8sRUFBQyxvQkFBb0IsRUFBQyxNQUFNLDBDQUEwQyxDQUFDO0FBRTlFLE9BQU8sRUFBQyxlQUFlLEVBQUMsTUFBTSxvQkFBb0IsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7QUFlbkQ7SUFZRTs7OztPQUlHO0lBQ0gsc0NBQW1CLE1BQXVCO1FBQXZCLFdBQU0sR0FBTixNQUFNLENBQWlCOzs7OztRQVBuQyxjQUFTLEdBQUcsZUFBZSxDQUFDO0lBUW5DLENBQUM7SUFPRCxzQkFBSSxxREFBVztRQUxmOzs7O1dBSUc7Ozs7OztRQUNIO1lBQ0UsUUFBUSxJQUFJLENBQUMsU0FBUyxFQUFFO2dCQUN0QixLQUFLLGVBQWU7b0JBQ2xCLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUMsS0FBSyxFQUFFLENBQUMsT0FBTyxFQUFFLENBQUM7Z0JBQ25ELEtBQUssZUFBZSxDQUFDO2dCQUNyQjtvQkFDRSxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDO2FBQ2xDO1FBQ0gsQ0FBQzs7O09BQUE7SUFPRCxzQkFBSSw2REFBbUI7UUFMdkI7Ozs7V0FJRzs7Ozs7O1FBQ0g7WUFDRSxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQztRQUN4QyxDQUFDOzs7T0FBQTtJQUVEOzs7OztPQUtHOzs7Ozs7O0lBQ0ksZ0RBQVM7Ozs7OztJQUFoQixVQUFpQixVQUFzQjtRQUNyQyxPQUFPLFVBQVUsQ0FBQyxRQUFRLENBQUM7SUFDN0IsQ0FBQztJQUVEOzs7OztPQUtHOzs7Ozs7O0lBQ0ksZ0RBQVM7Ozs7OztJQUFoQixVQUFpQixVQUFzQjtRQUNyQyxPQUFPLFVBQVUsQ0FBQyxPQUFPLENBQUM7SUFDNUIsQ0FBQztJQUVEOzs7OztPQUtHOzs7Ozs7O0lBQ0ksNkNBQU07Ozs7OztJQUFiLFVBQWMsVUFBc0I7UUFDbEMsT0FBTyxVQUFVLENBQUMsU0FBUyxDQUFDO0lBQzlCLENBQUM7SUFFRDs7Ozs7T0FLRzs7Ozs7OztJQUNJLGlEQUFVOzs7Ozs7SUFBakIsVUFBa0IsVUFBc0I7UUFDdEMsT0FBTyxVQUFVLENBQUMsUUFBUSxDQUFDO0lBQzdCLENBQUM7SUFFRDs7Ozs7OztPQU9HOzs7Ozs7Ozs7SUFDSSxrREFBVzs7Ozs7Ozs7SUFBbEIsVUFBbUIsVUFBc0I7UUFDdkMsT0FBTyxVQUFVLFlBQVksb0JBQW9CLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUM7SUFDN0UsQ0FBQztJQUVEOzs7Ozs7Ozs7T0FTRzs7Ozs7Ozs7Ozs7SUFDSSxrREFBVzs7Ozs7Ozs7OztJQUFsQixVQUFtQixVQUFzQjtRQUN2QyxPQUFPLENBQUMsVUFBVSxDQUFDLFFBQVEsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsb0JBQW9CO1lBQzlELElBQUksQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsY0FBYyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUM7SUFDcEUsQ0FBQzs7Z0JBN0dGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsMEJBQTBCO29CQUNwQyxva0NBQW1EO2lCQUNwRDs7OztnQkFsQk8sZUFBZTs7OzRCQXdCcEIsS0FBSzs7SUFxR1IsbUNBQUM7Q0FBQSxBQTlHRCxJQThHQztTQTFHWSw0QkFBNEI7Ozs7Ozs7SUFLdkMsaURBQ21DOztJQU92Qiw4Q0FBOEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgSW5wdXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtXaXphcmRDb21wbGV0aW9uU3RlcH0gZnJvbSAnLi4vdXRpbC93aXphcmQtY29tcGxldGlvbi1zdGVwLmludGVyZmFjZSc7XG5pbXBvcnQge1dpemFyZFN0ZXB9IGZyb20gJy4uL3V0aWwvd2l6YXJkLXN0ZXAuaW50ZXJmYWNlJztcbmltcG9ydCB7V2l6YXJkQ29tcG9uZW50fSBmcm9tICcuL3dpemFyZC5jb21wb25lbnQnO1xuXG4vKipcbiAqIFRoZSBgYXctd2l6YXJkLW5hdmlnYXRpb24tYmFyYCBjb21wb25lbnQgY29udGFpbnMgdGhlIG5hdmlnYXRpb24gYmFyIGluc2lkZSBhIFtbV2l6YXJkQ29tcG9uZW50XV0uXG4gKiBUbyBjb3JyZWN0bHkgZGlzcGxheSB0aGUgbmF2aWdhdGlvbiBiYXIsIGl0J3MgcmVxdWlyZWQgdG8gc2V0IHRoZSByaWdodCBjc3MgY2xhc3NlcyBmb3IgdGhlIG5hdmlnYXRpb24gYmFyLFxuICogb3RoZXJ3aXNlIGl0IHdpbGwgbG9vayBsaWtlIGEgbm9ybWFsIGB1bGAgY29tcG9uZW50LlxuICpcbiAqICMjIyBTeW50YXhcbiAqXG4gKiBgYGBodG1sXG4gKiA8YXctd2l6YXJkLW5hdmlnYXRpb24tYmFyPjwvYXctd2l6YXJkLW5hdmlnYXRpb24tYmFyPlxuICogYGBgXG4gKlxuICogQGF1dGhvciBNYXJjIEFybmR0XG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2F3LXdpemFyZC1uYXZpZ2F0aW9uLWJhcicsXG4gIHRlbXBsYXRlVXJsOiAnd2l6YXJkLW5hdmlnYXRpb24tYmFyLmNvbXBvbmVudC5odG1sJyxcbn0pXG5leHBvcnQgY2xhc3MgV2l6YXJkTmF2aWdhdGlvbkJhckNvbXBvbmVudCB7XG4gIC8qKlxuICAgKiBUaGUgZGlyZWN0aW9uIGluIHdoaWNoIHRoZSB3aXphcmQgc3RlcHMgc2hvdWxkIGJlIHNob3duIGluIHRoZSBuYXZpZ2F0aW9uIGJhci5cbiAgICogVGhpcyB2YWx1ZSBjYW4gYmUgZWl0aGVyIGBsZWZ0LXRvLXJpZ2h0YCBvciBgcmlnaHQtdG8tbGVmdGBcbiAgICovXG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBkaXJlY3Rpb24gPSAnbGVmdC10by1yaWdodCc7XG5cbiAgLyoqXG4gICAqIENvbnN0cnVjdG9yXG4gICAqXG4gICAqIEBwYXJhbSB3aXphcmQgVGhlIHN0YXRlIHRoZSB3aXphcmQgY3VycmVudGx5IHJlc2lkZXMgaW5cbiAgICovXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyB3aXphcmQ6IFdpemFyZENvbXBvbmVudCkge1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgYWxsIFtbV2l6YXJkU3RlcF1dcyBjb250YWluZWQgaW4gdGhlIHdpemFyZFxuICAgKlxuICAgKiBAcmV0dXJucyBBbiBhcnJheSBjb250YWluaW5nIGFsbCBbW1dpemFyZFN0ZXBdXXNcbiAgICovXG4gIGdldCB3aXphcmRTdGVwcygpOiBBcnJheTxXaXphcmRTdGVwPiB7XG4gICAgc3dpdGNoICh0aGlzLmRpcmVjdGlvbikge1xuICAgICAgY2FzZSAncmlnaHQtdG8tbGVmdCc6XG4gICAgICAgIHJldHVybiB0aGlzLndpemFyZC53aXphcmRTdGVwcy5zbGljZSgpLnJldmVyc2UoKTtcbiAgICAgIGNhc2UgJ2xlZnQtdG8tcmlnaHQnOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIHRoaXMud2l6YXJkLndpemFyZFN0ZXBzO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBudW1iZXIgb2Ygd2l6YXJkIHN0ZXBzLCB0aGF0IG5lZWQgdG8gYmUgZGlzcGxhY2VkIGluIHRoZSBuYXZpZ2F0aW9uIGJhclxuICAgKlxuICAgKiBAcmV0dXJucyBUaGUgbnVtYmVyIG9mIHdpemFyZCBzdGVwcyB0byBiZSBkaXNwbGF5ZWRcbiAgICovXG4gIGdldCBudW1iZXJPZldpemFyZFN0ZXBzKCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMud2l6YXJkLndpemFyZFN0ZXBzLmxlbmd0aDtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGVja3MsIHdoZXRoZXIgYSBbW1dpemFyZFN0ZXBdXSBjYW4gYmUgbWFya2VkIGFzIGBjdXJyZW50YCBpbiB0aGUgbmF2aWdhdGlvbiBiYXJcbiAgICpcbiAgICogQHBhcmFtIHdpemFyZFN0ZXAgVGhlIHdpemFyZCBzdGVwIHRvIGJlIGNoZWNrZWRcbiAgICogQHJldHVybnMgVHJ1ZSBpZiB0aGUgc3RlcCBjYW4gYmUgbWFya2VkIGFzIGBjdXJyZW50YFxuICAgKi9cbiAgcHVibGljIGlzQ3VycmVudCh3aXphcmRTdGVwOiBXaXphcmRTdGVwKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHdpemFyZFN0ZXAuc2VsZWN0ZWQ7XG4gIH1cblxuICAvKipcbiAgICogQ2hlY2tzLCB3aGV0aGVyIGEgW1tXaXphcmRTdGVwXV0gY2FuIGJlIG1hcmtlZCBhcyBgZWRpdGluZ2AgaW4gdGhlIG5hdmlnYXRpb24gYmFyXG4gICAqXG4gICAqIEBwYXJhbSB3aXphcmRTdGVwIFRoZSB3aXphcmQgc3RlcCB0byBiZSBjaGVja2VkXG4gICAqIEByZXR1cm5zIFRydWUgaWYgdGhlIHN0ZXAgY2FuIGJlIG1hcmtlZCBhcyBgZWRpdGluZ2BcbiAgICovXG4gIHB1YmxpYyBpc0VkaXRpbmcod2l6YXJkU3RlcDogV2l6YXJkU3RlcCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB3aXphcmRTdGVwLmVkaXRpbmc7XG4gIH1cblxuICAvKipcbiAgICogQ2hlY2tzLCB3aGV0aGVyIGEgW1tXaXphcmRTdGVwXV0gY2FuIGJlIG1hcmtlZCBhcyBgZG9uZWAgaW4gdGhlIG5hdmlnYXRpb24gYmFyXG4gICAqXG4gICAqIEBwYXJhbSB3aXphcmRTdGVwIFRoZSB3aXphcmQgc3RlcCB0byBiZSBjaGVja2VkXG4gICAqIEByZXR1cm5zIFRydWUgaWYgdGhlIHN0ZXAgY2FuIGJlIG1hcmtlZCBhcyBgZG9uZWBcbiAgICovXG4gIHB1YmxpYyBpc0RvbmUod2l6YXJkU3RlcDogV2l6YXJkU3RlcCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB3aXphcmRTdGVwLmNvbXBsZXRlZDtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGVja3MsIHdoZXRoZXIgYSBbW1dpemFyZFN0ZXBdXSBjYW4gYmUgbWFya2VkIGFzIGBvcHRpb25hbGAgaW4gdGhlIG5hdmlnYXRpb24gYmFyXG4gICAqXG4gICAqIEBwYXJhbSB3aXphcmRTdGVwIFRoZSB3aXphcmQgc3RlcCB0byBiZSBjaGVja2VkXG4gICAqIEByZXR1cm5zIFRydWUgaWYgdGhlIHN0ZXAgY2FuIGJlIG1hcmtlZCBhcyBgb3B0aW9uYWxgXG4gICAqL1xuICBwdWJsaWMgaXNPcHRpb25hbCh3aXphcmRTdGVwOiBXaXphcmRTdGVwKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHdpemFyZFN0ZXAub3B0aW9uYWw7XG4gIH1cblxuICAvKipcbiAgICogQ2hlY2tzLCB3aGV0aGVyIGEgW1tXaXphcmRTdGVwXV0gY2FuIGJlIG1hcmtlZCBhcyBgY29tcGxldGVkYCBpbiB0aGUgbmF2aWdhdGlvbiBiYXIuXG4gICAqXG4gICAqIFRoZSBgY29tcGxldGVkYCBjbGFzcyBpcyBvbmx5IGFwcGxpZWQgdG8gY29tcGxldGlvbiBzdGVwcy5cbiAgICpcbiAgICogQHBhcmFtIHdpemFyZFN0ZXAgVGhlIHdpemFyZCBzdGVwIHRvIGJlIGNoZWNrZWRcbiAgICogQHJldHVybnMgVHJ1ZSBpZiB0aGUgc3RlcCBjYW4gYmUgbWFya2VkIGFzIGBjb21wbGV0ZWRgXG4gICAqL1xuICBwdWJsaWMgaXNDb21wbGV0ZWQod2l6YXJkU3RlcDogV2l6YXJkU3RlcCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB3aXphcmRTdGVwIGluc3RhbmNlb2YgV2l6YXJkQ29tcGxldGlvblN0ZXAgJiYgdGhpcy53aXphcmQuY29tcGxldGVkO1xuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrcywgd2hldGhlciBhIFtbV2l6YXJkU3RlcF1dIGNhbiBiZSBtYXJrZWQgYXMgYG5hdmlnYWJsZWAgaW4gdGhlIG5hdmlnYXRpb24gYmFyLlxuICAgKiBBIHdpemFyZCBzdGVwIGNhbiBiZSBuYXZpZ2F0ZWQgdG8gaWY6XG4gICAqIC0gdGhlIHN0ZXAgaXMgY3VycmVudGx5IG5vdCBzZWxlY3RlZFxuICAgKiAtIHRoZSBuYXZpZ2F0aW9uIGJhciBpc24ndCBkaXNhYmxlZFxuICAgKiAtIHRoZSBuYXZpZ2F0aW9uIG1vZGUgYWxsb3dzIG5hdmlnYXRpb24gdG8gdGhlIHN0ZXBcbiAgICpcbiAgICogQHBhcmFtIHdpemFyZFN0ZXAgVGhlIHdpemFyZCBzdGVwIHRvIGJlIGNoZWNrZWRcbiAgICogQHJldHVybnMgVHJ1ZSBpZiB0aGUgc3RlcCBjYW4gYmUgbWFya2VkIGFzIG5hdmlnYWJsZVxuICAgKi9cbiAgcHVibGljIGlzTmF2aWdhYmxlKHdpemFyZFN0ZXA6IFdpemFyZFN0ZXApOiBib29sZWFuIHtcbiAgICByZXR1cm4gIXdpemFyZFN0ZXAuc2VsZWN0ZWQgJiYgIXRoaXMud2l6YXJkLmRpc2FibGVOYXZpZ2F0aW9uQmFyICYmXG4gICAgICB0aGlzLndpemFyZC5pc05hdmlnYWJsZSh0aGlzLndpemFyZC5nZXRJbmRleE9mU3RlcCh3aXphcmRTdGVwKSk7XG4gIH1cbn1cbiJdfQ==