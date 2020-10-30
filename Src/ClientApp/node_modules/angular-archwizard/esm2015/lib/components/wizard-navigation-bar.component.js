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
export class WizardNavigationBarComponent {
    /**
     * Constructor
     *
     * @param {?} wizard The state the wizard currently resides in
     */
    constructor(wizard) {
        this.wizard = wizard;
        /**
         * The direction in which the wizard steps should be shown in the navigation bar.
         * This value can be either `left-to-right` or `right-to-left`
         */
        this.direction = 'left-to-right';
    }
    /**
     * Returns all [[WizardStep]]s contained in the wizard
     *
     * @return {?} An array containing all [[WizardStep]]s
     */
    get wizardSteps() {
        switch (this.direction) {
            case 'right-to-left':
                return this.wizard.wizardSteps.slice().reverse();
            case 'left-to-right':
            default:
                return this.wizard.wizardSteps;
        }
    }
    /**
     * Returns the number of wizard steps, that need to be displaced in the navigation bar
     *
     * @return {?} The number of wizard steps to be displayed
     */
    get numberOfWizardSteps() {
        return this.wizard.wizardSteps.length;
    }
    /**
     * Checks, whether a [[WizardStep]] can be marked as `current` in the navigation bar
     *
     * @param {?} wizardStep The wizard step to be checked
     * @return {?} True if the step can be marked as `current`
     */
    isCurrent(wizardStep) {
        return wizardStep.selected;
    }
    /**
     * Checks, whether a [[WizardStep]] can be marked as `editing` in the navigation bar
     *
     * @param {?} wizardStep The wizard step to be checked
     * @return {?} True if the step can be marked as `editing`
     */
    isEditing(wizardStep) {
        return wizardStep.editing;
    }
    /**
     * Checks, whether a [[WizardStep]] can be marked as `done` in the navigation bar
     *
     * @param {?} wizardStep The wizard step to be checked
     * @return {?} True if the step can be marked as `done`
     */
    isDone(wizardStep) {
        return wizardStep.completed;
    }
    /**
     * Checks, whether a [[WizardStep]] can be marked as `optional` in the navigation bar
     *
     * @param {?} wizardStep The wizard step to be checked
     * @return {?} True if the step can be marked as `optional`
     */
    isOptional(wizardStep) {
        return wizardStep.optional;
    }
    /**
     * Checks, whether a [[WizardStep]] can be marked as `completed` in the navigation bar.
     *
     * The `completed` class is only applied to completion steps.
     *
     * @param {?} wizardStep The wizard step to be checked
     * @return {?} True if the step can be marked as `completed`
     */
    isCompleted(wizardStep) {
        return wizardStep instanceof WizardCompletionStep && this.wizard.completed;
    }
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
    isNavigable(wizardStep) {
        return !wizardStep.selected && !this.wizard.disableNavigationBar &&
            this.wizard.isNavigable(this.wizard.getIndexOfStep(wizardStep));
    }
}
WizardNavigationBarComponent.decorators = [
    { type: Component, args: [{
                selector: 'aw-wizard-navigation-bar',
                template: "<ul class=\"steps-indicator steps-{{numberOfWizardSteps}}\">\n  <li [attr.id]=\"step.stepId\" *ngFor=\"let step of wizardSteps\"\n      [ngClass]=\"{\n        current: isCurrent(step),\n        editing: isEditing(step),\n        done: isDone(step),\n        optional: isOptional(step),\n        completed: isCompleted(step),\n        navigable: isNavigable(step)\n  }\">\n    <a [awGoToStep]=\"step\">\n      <div class=\"label\">\n        <ng-container *ngIf=\"step.stepTitleTemplate\" [ngTemplateOutlet]=\"step.stepTitleTemplate.templateRef\"></ng-container>\n        <ng-container *ngIf=\"!step.stepTitleTemplate\">{{step.stepTitle}}</ng-container>\n      </div>\n      <div class=\"step-indicator\" [ngStyle]=\"{ 'font-family': step.stepSymbolTemplate ? '' : step.navigationSymbol.fontFamily }\">\n        <ng-container *ngIf=\"step.stepSymbolTemplate\" [ngTemplateOutlet]=\"step.stepSymbolTemplate.templateRef\"></ng-container>\n        <ng-container *ngIf=\"!step.stepSymbolTemplate\">{{step.navigationSymbol.symbol}}</ng-container>\n      </div>\n    </a>\n  </li>\n</ul>\n"
            }] }
];
/** @nocollapse */
WizardNavigationBarComponent.ctorParameters = () => [
    { type: WizardComponent }
];
WizardNavigationBarComponent.propDecorators = {
    direction: [{ type: Input }]
};
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2l6YXJkLW5hdmlnYXRpb24tYmFyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2FuZ3VsYXItYXJjaHdpemFyZC8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL3dpemFyZC1uYXZpZ2F0aW9uLWJhci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUUsS0FBSyxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQy9DLE9BQU8sRUFBQyxvQkFBb0IsRUFBQyxNQUFNLDBDQUEwQyxDQUFDO0FBRTlFLE9BQU8sRUFBQyxlQUFlLEVBQUMsTUFBTSxvQkFBb0IsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7QUFtQm5ELE1BQU0sT0FBTyw0QkFBNEI7Ozs7OztJQWF2QyxZQUFtQixNQUF1QjtRQUF2QixXQUFNLEdBQU4sTUFBTSxDQUFpQjs7Ozs7UUFQbkMsY0FBUyxHQUFHLGVBQWUsQ0FBQztJQVFuQyxDQUFDOzs7Ozs7SUFPRCxJQUFJLFdBQVc7UUFDYixRQUFRLElBQUksQ0FBQyxTQUFTLEVBQUU7WUFDdEIsS0FBSyxlQUFlO2dCQUNsQixPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLEtBQUssRUFBRSxDQUFDLE9BQU8sRUFBRSxDQUFDO1lBQ25ELEtBQUssZUFBZSxDQUFDO1lBQ3JCO2dCQUNFLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUM7U0FDbEM7SUFDSCxDQUFDOzs7Ozs7SUFPRCxJQUFJLG1CQUFtQjtRQUNyQixPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQztJQUN4QyxDQUFDOzs7Ozs7O0lBUU0sU0FBUyxDQUFDLFVBQXNCO1FBQ3JDLE9BQU8sVUFBVSxDQUFDLFFBQVEsQ0FBQztJQUM3QixDQUFDOzs7Ozs7O0lBUU0sU0FBUyxDQUFDLFVBQXNCO1FBQ3JDLE9BQU8sVUFBVSxDQUFDLE9BQU8sQ0FBQztJQUM1QixDQUFDOzs7Ozs7O0lBUU0sTUFBTSxDQUFDLFVBQXNCO1FBQ2xDLE9BQU8sVUFBVSxDQUFDLFNBQVMsQ0FBQztJQUM5QixDQUFDOzs7Ozs7O0lBUU0sVUFBVSxDQUFDLFVBQXNCO1FBQ3RDLE9BQU8sVUFBVSxDQUFDLFFBQVEsQ0FBQztJQUM3QixDQUFDOzs7Ozs7Ozs7SUFVTSxXQUFXLENBQUMsVUFBc0I7UUFDdkMsT0FBTyxVQUFVLFlBQVksb0JBQW9CLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUM7SUFDN0UsQ0FBQzs7Ozs7Ozs7Ozs7SUFZTSxXQUFXLENBQUMsVUFBc0I7UUFDdkMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxRQUFRLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLG9CQUFvQjtZQUM5RCxJQUFJLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLGNBQWMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDO0lBQ3BFLENBQUM7OztZQTdHRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLDBCQUEwQjtnQkFDcEMsb2tDQUFtRDthQUNwRDs7OztZQWxCTyxlQUFlOzs7d0JBd0JwQixLQUFLOzs7Ozs7OztJQUFOLGlEQUNtQzs7SUFPdkIsOENBQThCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIElucHV0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7V2l6YXJkQ29tcGxldGlvblN0ZXB9IGZyb20gJy4uL3V0aWwvd2l6YXJkLWNvbXBsZXRpb24tc3RlcC5pbnRlcmZhY2UnO1xuaW1wb3J0IHtXaXphcmRTdGVwfSBmcm9tICcuLi91dGlsL3dpemFyZC1zdGVwLmludGVyZmFjZSc7XG5pbXBvcnQge1dpemFyZENvbXBvbmVudH0gZnJvbSAnLi93aXphcmQuY29tcG9uZW50JztcblxuLyoqXG4gKiBUaGUgYGF3LXdpemFyZC1uYXZpZ2F0aW9uLWJhcmAgY29tcG9uZW50IGNvbnRhaW5zIHRoZSBuYXZpZ2F0aW9uIGJhciBpbnNpZGUgYSBbW1dpemFyZENvbXBvbmVudF1dLlxuICogVG8gY29ycmVjdGx5IGRpc3BsYXkgdGhlIG5hdmlnYXRpb24gYmFyLCBpdCdzIHJlcXVpcmVkIHRvIHNldCB0aGUgcmlnaHQgY3NzIGNsYXNzZXMgZm9yIHRoZSBuYXZpZ2F0aW9uIGJhcixcbiAqIG90aGVyd2lzZSBpdCB3aWxsIGxvb2sgbGlrZSBhIG5vcm1hbCBgdWxgIGNvbXBvbmVudC5cbiAqXG4gKiAjIyMgU3ludGF4XG4gKlxuICogYGBgaHRtbFxuICogPGF3LXdpemFyZC1uYXZpZ2F0aW9uLWJhcj48L2F3LXdpemFyZC1uYXZpZ2F0aW9uLWJhcj5cbiAqIGBgYFxuICpcbiAqIEBhdXRob3IgTWFyYyBBcm5kdFxuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhdy13aXphcmQtbmF2aWdhdGlvbi1iYXInLFxuICB0ZW1wbGF0ZVVybDogJ3dpemFyZC1uYXZpZ2F0aW9uLWJhci5jb21wb25lbnQuaHRtbCcsXG59KVxuZXhwb3J0IGNsYXNzIFdpemFyZE5hdmlnYXRpb25CYXJDb21wb25lbnQge1xuICAvKipcbiAgICogVGhlIGRpcmVjdGlvbiBpbiB3aGljaCB0aGUgd2l6YXJkIHN0ZXBzIHNob3VsZCBiZSBzaG93biBpbiB0aGUgbmF2aWdhdGlvbiBiYXIuXG4gICAqIFRoaXMgdmFsdWUgY2FuIGJlIGVpdGhlciBgbGVmdC10by1yaWdodGAgb3IgYHJpZ2h0LXRvLWxlZnRgXG4gICAqL1xuICBASW5wdXQoKVxuICBwdWJsaWMgZGlyZWN0aW9uID0gJ2xlZnQtdG8tcmlnaHQnO1xuXG4gIC8qKlxuICAgKiBDb25zdHJ1Y3RvclxuICAgKlxuICAgKiBAcGFyYW0gd2l6YXJkIFRoZSBzdGF0ZSB0aGUgd2l6YXJkIGN1cnJlbnRseSByZXNpZGVzIGluXG4gICAqL1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgd2l6YXJkOiBXaXphcmRDb21wb25lbnQpIHtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGFsbCBbW1dpemFyZFN0ZXBdXXMgY29udGFpbmVkIGluIHRoZSB3aXphcmRcbiAgICpcbiAgICogQHJldHVybnMgQW4gYXJyYXkgY29udGFpbmluZyBhbGwgW1tXaXphcmRTdGVwXV1zXG4gICAqL1xuICBnZXQgd2l6YXJkU3RlcHMoKTogQXJyYXk8V2l6YXJkU3RlcD4ge1xuICAgIHN3aXRjaCAodGhpcy5kaXJlY3Rpb24pIHtcbiAgICAgIGNhc2UgJ3JpZ2h0LXRvLWxlZnQnOlxuICAgICAgICByZXR1cm4gdGhpcy53aXphcmQud2l6YXJkU3RlcHMuc2xpY2UoKS5yZXZlcnNlKCk7XG4gICAgICBjYXNlICdsZWZ0LXRvLXJpZ2h0JzpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiB0aGlzLndpemFyZC53aXphcmRTdGVwcztcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgbnVtYmVyIG9mIHdpemFyZCBzdGVwcywgdGhhdCBuZWVkIHRvIGJlIGRpc3BsYWNlZCBpbiB0aGUgbmF2aWdhdGlvbiBiYXJcbiAgICpcbiAgICogQHJldHVybnMgVGhlIG51bWJlciBvZiB3aXphcmQgc3RlcHMgdG8gYmUgZGlzcGxheWVkXG4gICAqL1xuICBnZXQgbnVtYmVyT2ZXaXphcmRTdGVwcygpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLndpemFyZC53aXphcmRTdGVwcy5sZW5ndGg7XG4gIH1cblxuICAvKipcbiAgICogQ2hlY2tzLCB3aGV0aGVyIGEgW1tXaXphcmRTdGVwXV0gY2FuIGJlIG1hcmtlZCBhcyBgY3VycmVudGAgaW4gdGhlIG5hdmlnYXRpb24gYmFyXG4gICAqXG4gICAqIEBwYXJhbSB3aXphcmRTdGVwIFRoZSB3aXphcmQgc3RlcCB0byBiZSBjaGVja2VkXG4gICAqIEByZXR1cm5zIFRydWUgaWYgdGhlIHN0ZXAgY2FuIGJlIG1hcmtlZCBhcyBgY3VycmVudGBcbiAgICovXG4gIHB1YmxpYyBpc0N1cnJlbnQod2l6YXJkU3RlcDogV2l6YXJkU3RlcCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB3aXphcmRTdGVwLnNlbGVjdGVkO1xuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrcywgd2hldGhlciBhIFtbV2l6YXJkU3RlcF1dIGNhbiBiZSBtYXJrZWQgYXMgYGVkaXRpbmdgIGluIHRoZSBuYXZpZ2F0aW9uIGJhclxuICAgKlxuICAgKiBAcGFyYW0gd2l6YXJkU3RlcCBUaGUgd2l6YXJkIHN0ZXAgdG8gYmUgY2hlY2tlZFxuICAgKiBAcmV0dXJucyBUcnVlIGlmIHRoZSBzdGVwIGNhbiBiZSBtYXJrZWQgYXMgYGVkaXRpbmdgXG4gICAqL1xuICBwdWJsaWMgaXNFZGl0aW5nKHdpemFyZFN0ZXA6IFdpemFyZFN0ZXApOiBib29sZWFuIHtcbiAgICByZXR1cm4gd2l6YXJkU3RlcC5lZGl0aW5nO1xuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrcywgd2hldGhlciBhIFtbV2l6YXJkU3RlcF1dIGNhbiBiZSBtYXJrZWQgYXMgYGRvbmVgIGluIHRoZSBuYXZpZ2F0aW9uIGJhclxuICAgKlxuICAgKiBAcGFyYW0gd2l6YXJkU3RlcCBUaGUgd2l6YXJkIHN0ZXAgdG8gYmUgY2hlY2tlZFxuICAgKiBAcmV0dXJucyBUcnVlIGlmIHRoZSBzdGVwIGNhbiBiZSBtYXJrZWQgYXMgYGRvbmVgXG4gICAqL1xuICBwdWJsaWMgaXNEb25lKHdpemFyZFN0ZXA6IFdpemFyZFN0ZXApOiBib29sZWFuIHtcbiAgICByZXR1cm4gd2l6YXJkU3RlcC5jb21wbGV0ZWQ7XG4gIH1cblxuICAvKipcbiAgICogQ2hlY2tzLCB3aGV0aGVyIGEgW1tXaXphcmRTdGVwXV0gY2FuIGJlIG1hcmtlZCBhcyBgb3B0aW9uYWxgIGluIHRoZSBuYXZpZ2F0aW9uIGJhclxuICAgKlxuICAgKiBAcGFyYW0gd2l6YXJkU3RlcCBUaGUgd2l6YXJkIHN0ZXAgdG8gYmUgY2hlY2tlZFxuICAgKiBAcmV0dXJucyBUcnVlIGlmIHRoZSBzdGVwIGNhbiBiZSBtYXJrZWQgYXMgYG9wdGlvbmFsYFxuICAgKi9cbiAgcHVibGljIGlzT3B0aW9uYWwod2l6YXJkU3RlcDogV2l6YXJkU3RlcCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB3aXphcmRTdGVwLm9wdGlvbmFsO1xuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrcywgd2hldGhlciBhIFtbV2l6YXJkU3RlcF1dIGNhbiBiZSBtYXJrZWQgYXMgYGNvbXBsZXRlZGAgaW4gdGhlIG5hdmlnYXRpb24gYmFyLlxuICAgKlxuICAgKiBUaGUgYGNvbXBsZXRlZGAgY2xhc3MgaXMgb25seSBhcHBsaWVkIHRvIGNvbXBsZXRpb24gc3RlcHMuXG4gICAqXG4gICAqIEBwYXJhbSB3aXphcmRTdGVwIFRoZSB3aXphcmQgc3RlcCB0byBiZSBjaGVja2VkXG4gICAqIEByZXR1cm5zIFRydWUgaWYgdGhlIHN0ZXAgY2FuIGJlIG1hcmtlZCBhcyBgY29tcGxldGVkYFxuICAgKi9cbiAgcHVibGljIGlzQ29tcGxldGVkKHdpemFyZFN0ZXA6IFdpemFyZFN0ZXApOiBib29sZWFuIHtcbiAgICByZXR1cm4gd2l6YXJkU3RlcCBpbnN0YW5jZW9mIFdpemFyZENvbXBsZXRpb25TdGVwICYmIHRoaXMud2l6YXJkLmNvbXBsZXRlZDtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGVja3MsIHdoZXRoZXIgYSBbW1dpemFyZFN0ZXBdXSBjYW4gYmUgbWFya2VkIGFzIGBuYXZpZ2FibGVgIGluIHRoZSBuYXZpZ2F0aW9uIGJhci5cbiAgICogQSB3aXphcmQgc3RlcCBjYW4gYmUgbmF2aWdhdGVkIHRvIGlmOlxuICAgKiAtIHRoZSBzdGVwIGlzIGN1cnJlbnRseSBub3Qgc2VsZWN0ZWRcbiAgICogLSB0aGUgbmF2aWdhdGlvbiBiYXIgaXNuJ3QgZGlzYWJsZWRcbiAgICogLSB0aGUgbmF2aWdhdGlvbiBtb2RlIGFsbG93cyBuYXZpZ2F0aW9uIHRvIHRoZSBzdGVwXG4gICAqXG4gICAqIEBwYXJhbSB3aXphcmRTdGVwIFRoZSB3aXphcmQgc3RlcCB0byBiZSBjaGVja2VkXG4gICAqIEByZXR1cm5zIFRydWUgaWYgdGhlIHN0ZXAgY2FuIGJlIG1hcmtlZCBhcyBuYXZpZ2FibGVcbiAgICovXG4gIHB1YmxpYyBpc05hdmlnYWJsZSh3aXphcmRTdGVwOiBXaXphcmRTdGVwKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuICF3aXphcmRTdGVwLnNlbGVjdGVkICYmICF0aGlzLndpemFyZC5kaXNhYmxlTmF2aWdhdGlvbkJhciAmJlxuICAgICAgdGhpcy53aXphcmQuaXNOYXZpZ2FibGUodGhpcy53aXphcmQuZ2V0SW5kZXhPZlN0ZXAod2l6YXJkU3RlcCkpO1xuICB9XG59XG4iXX0=