/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { BaseNavigationMode } from './base-navigation-mode.interface';
import { WizardCompletionStep } from '../util/wizard-completion-step.interface';
/**
 * The default navigation mode used by [[WizardComponent]] and [[NavigationModeDirective]].
 *
 * It is parameterized with two navigation policies passed to constructor:
 *
 * - [[navigateBackward]] policy controls whether wizard steps before the current step are navigable:
 *
 *   - `"deny"` -- the steps are not navigable
 *   - `"allow"` -- the steps are navigable
 *   - If the corresponding constructor argument is omitted or is `null` or `undefined`,
 *     then the default value is applied which is `"deny"`
 *
 * - [[navigateForward]] policy controls whether wizard steps after the current step are navigable:
 *
 *   - `"deny"` -- the steps are not navigable
 *   - `"allow"` -- the steps are navigable
 *   - `"visited"` -- a step is navigable iff it was already visited before
 *   - If the corresponding constructor argument is omitted or is `null` or `undefined`,
 *     then the default value is applied which is `"allow"`
 */
export class ConfigurableNavigationMode extends BaseNavigationMode {
    /**
     * Constructor
     *
     * @param {?=} navigateBackward Controls whether wizard steps before the current step are navigable
     * @param {?=} navigateForward Controls whether wizard steps before the current step are navigable
     */
    constructor(navigateBackward = null, navigateForward = null) {
        super();
        this.navigateBackward = navigateBackward;
        this.navigateForward = navigateForward;
        this.navigateBackward = this.navigateBackward || 'allow';
        this.navigateForward = this.navigateForward || 'deny';
    }
    /**
     * @inheritDoc
     * @protected
     * @param {?} wizard
     * @param {?} destinationIndex
     * @return {?}
     */
    canTransitionToStep(wizard, destinationIndex) {
        // if the destination step can be navigated to using the navigation bar,
        // it should be accessible with [goToStep] as well
        if (this.isNavigable(wizard, destinationIndex)) {
            return true;
        }
        // navigation with [goToStep] is permitted if all previous steps
        // to the destination step have been completed or are optional
        return wizard.wizardSteps
            .filter((/**
         * @param {?} step
         * @param {?} index
         * @return {?}
         */
        (step, index) => index < destinationIndex && index !== wizard.currentStepIndex))
            .every((/**
         * @param {?} step
         * @return {?}
         */
        step => step.completed || step.optional));
    }
    /**
     * @inheritDoc
     * @protected
     * @param {?} wizard
     * @param {?} destinationIndex
     * @return {?}
     */
    transition(wizard, destinationIndex) {
        if (this.navigateForward === 'deny') {
            // set all steps after the destination step to incomplete
            wizard.wizardSteps
                .filter((/**
             * @param {?} step
             * @param {?} index
             * @return {?}
             */
            (step, index) => wizard.currentStepIndex > destinationIndex && index > destinationIndex))
                .forEach((/**
             * @param {?} step
             * @return {?}
             */
            step => step.completed = false));
        }
        super.transition(wizard, destinationIndex);
    }
    /**
     * @inheritDoc
     * @param {?} wizard
     * @param {?} destinationIndex
     * @return {?}
     */
    isNavigable(wizard, destinationIndex) {
        // Check if the destination step can be navigated to
        /** @type {?} */
        const destinationStep = wizard.getStepAtIndex(destinationIndex);
        if (destinationStep instanceof WizardCompletionStep) {
            // A completion step can only be entered, if all previous steps have been completed, are optional, or selected
            /** @type {?} */
            const previousStepsCompleted = wizard.wizardSteps
                .filter((/**
             * @param {?} step
             * @param {?} index
             * @return {?}
             */
            (step, index) => index < destinationIndex))
                .every((/**
             * @param {?} step
             * @return {?}
             */
            step => step.completed || step.optional || step.selected));
            if (!previousStepsCompleted) {
                return false;
            }
        }
        // Apply navigation pocicies
        if (destinationIndex < wizard.currentStepIndex) {
            // If the destination step is before current, apply the `navigateBackward` policy
            switch (this.navigateBackward) {
                case 'allow': return true;
                case 'deny': return false;
                default:
                    throw new Error(`Invalid value for navigateBackward: ${this.navigateBackward}`);
            }
        }
        else if (destinationIndex > wizard.currentStepIndex) {
            // If the destination step is after current, apply the `navigateForward` policy
            switch (this.navigateForward) {
                case 'allow': return true;
                case 'deny': return false;
                case 'visited': return destinationStep.completed;
                default:
                    throw new Error(`Invalid value for navigateForward: ${this.navigateForward}`);
            }
        }
        else {
            // Re-entering the current step is not allowed
            return false;
        }
    }
    /**
     * @inheritDoc
     * @protected
     * @param {?} wizard
     * @return {?}
     */
    ensureCanReset(wizard) {
        super.ensureCanReset(wizard);
        // the default step is a completion step and the wizard contains more than one step
        /** @type {?} */
        const defaultWizardStep = wizard.getStepAtIndex(wizard.defaultStepIndex);
        /** @type {?} */
        const defaultCompletionStep = defaultWizardStep instanceof WizardCompletionStep;
        if (defaultCompletionStep && wizard.wizardSteps.length !== 1) {
            throw new Error(`The default step index ${wizard.defaultStepIndex} references a completion step`);
        }
    }
}
if (false) {
    /**
     * @type {?}
     * @private
     */
    ConfigurableNavigationMode.prototype.navigateBackward;
    /**
     * @type {?}
     * @private
     */
    ConfigurableNavigationMode.prototype.navigateForward;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlndXJhYmxlLW5hdmlnYXRpb24tbW9kZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2FuZ3VsYXItYXJjaHdpemFyZC8iLCJzb3VyY2VzIjpbImxpYi9uYXZpZ2F0aW9uL2NvbmZpZ3VyYWJsZS1uYXZpZ2F0aW9uLW1vZGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBQyxrQkFBa0IsRUFBQyxNQUFNLGtDQUFrQyxDQUFDO0FBRXBFLE9BQU8sRUFBQyxvQkFBb0IsRUFBQyxNQUFNLDBDQUEwQyxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFzQjlFLE1BQU0sT0FBTywwQkFBMkIsU0FBUSxrQkFBa0I7Ozs7Ozs7SUFRaEUsWUFDVSxtQkFBd0MsSUFBSSxFQUM1QyxrQkFBaUQsSUFBSTtRQUU3RCxLQUFLLEVBQUUsQ0FBQztRQUhBLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBNEI7UUFDNUMsb0JBQWUsR0FBZixlQUFlLENBQXNDO1FBRzdELElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxJQUFJLENBQUMsZ0JBQWdCLElBQUksT0FBTyxDQUFDO1FBQ3pELElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDLGVBQWUsSUFBSSxNQUFNLENBQUM7SUFDeEQsQ0FBQzs7Ozs7Ozs7SUFLUyxtQkFBbUIsQ0FBQyxNQUF1QixFQUFFLGdCQUF3QjtRQUM3RSx3RUFBd0U7UUFDeEUsa0RBQWtEO1FBQ2xELElBQUksSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLEVBQUUsZ0JBQWdCLENBQUMsRUFBRTtZQUM5QyxPQUFPLElBQUksQ0FBQztTQUNiO1FBRUQsZ0VBQWdFO1FBQ2hFLDhEQUE4RDtRQUM5RCxPQUFPLE1BQU0sQ0FBQyxXQUFXO2FBQ3BCLE1BQU07Ozs7O1FBQUMsQ0FBQyxJQUFJLEVBQUUsS0FBSyxFQUFFLEVBQUUsQ0FBQyxLQUFLLEdBQUcsZ0JBQWdCLElBQUksS0FBSyxLQUFLLE1BQU0sQ0FBQyxnQkFBZ0IsRUFBQzthQUN0RixL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Ozs7Ozs7SUE1Rkcsc0RBQW9EOzs7OztJQUNwRCxxREFBNkQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0Jhc2VOYXZpZ2F0aW9uTW9kZX0gZnJvbSAnLi9iYXNlLW5hdmlnYXRpb24tbW9kZS5pbnRlcmZhY2UnO1xuaW1wb3J0IHtXaXphcmRDb21wb25lbnR9IGZyb20gJy4uL2NvbXBvbmVudHMvd2l6YXJkLmNvbXBvbmVudCc7XG5pbXBvcnQge1dpemFyZENvbXBsZXRpb25TdGVwfSBmcm9tICcuLi91dGlsL3dpemFyZC1jb21wbGV0aW9uLXN0ZXAuaW50ZXJmYWNlJztcblxuLyoqXG4gKiBUaGUgZGVmYXVsdCBuYXZpZ2F0aW9uIG1vZGUgdXNlZCBieSBbW1dpemFyZENvbXBvbmVudF1dIGFuZCBbW05hdmlnYXRpb25Nb2RlRGlyZWN0aXZlXV0uXG4gKlxuICogSXQgaXMgcGFyYW1ldGVyaXplZCB3aXRoIHR3byBuYXZpZ2F0aW9uIHBvbGljaWVzIHBhc3NlZCB0byBjb25zdHJ1Y3RvcjpcbiAqXG4gKiAtIFtbbmF2aWdhdGVCYWNrd2FyZF1dIHBvbGljeSBjb250cm9scyB3aGV0aGVyIHdpemFyZCBzdGVwcyBiZWZvcmUgdGhlIGN1cnJlbnQgc3RlcCBhcmUgbmF2aWdhYmxlOlxuICpcbiAqICAgLSBgXCJkZW55XCJgIC0tIHRoZSBzdGVwcyBhcmUgbm90IG5hdmlnYWJsZVxuICogICAtIGBcImFsbG93XCJgIC0tIHRoZSBzdGVwcyBhcmUgbmF2aWdhYmxlXG4gKiAgIC0gSWYgdGhlIGNvcnJlc3BvbmRpbmcgY29uc3RydWN0b3IgYXJndW1lbnQgaXMgb21pdHRlZCBvciBpcyBgbnVsbGAgb3IgYHVuZGVmaW5lZGAsXG4gKiAgICAgdGhlbiB0aGUgZGVmYXVsdCB2YWx1ZSBpcyBhcHBsaWVkIHdoaWNoIGlzIGBcImRlbnlcImBcbiAqXG4gKiAtIFtbbmF2aWdhdGVGb3J3YXJkXV0gcG9saWN5IGNvbnRyb2xzIHdoZXRoZXIgd2l6YXJkIHN0ZXBzIGFmdGVyIHRoZSBjdXJyZW50IHN0ZXAgYXJlIG5hdmlnYWJsZTpcbiAqXG4gKiAgIC0gYFwiZGVueVwiYCAtLSB0aGUgc3RlcHMgYXJlIG5vdCBuYXZpZ2FibGVcbiAqICAgLSBgXCJhbGxvd1wiYCAtLSB0aGUgc3RlcHMgYXJlIG5hdmlnYWJsZVxuICogICAtIGBcInZpc2l0ZWRcImAgLS0gYSBzdGVwIGlzIG5hdmlnYWJsZSBpZmYgaXQgd2FzIGFscmVhZHkgdmlzaXRlZCBiZWZvcmVcbiAqICAgLSBJZiB0aGUgY29ycmVzcG9uZGluZyBjb25zdHJ1Y3RvciBhcmd1bWVudCBpcyBvbWl0dGVkIG9yIGlzIGBudWxsYCBvciBgdW5kZWZpbmVkYCxcbiAqICAgICB0aGVuIHRoZSBkZWZhdWx0IHZhbHVlIGlzIGFwcGxpZWQgd2hpY2ggaXMgYFwiYWxsb3dcImBcbiAqL1xuZXhwb3J0IGNsYXNzIENvbmZpZ3VyYWJsZU5hdmlnYXRpb25Nb2RlIGV4dGVuZHMgQmFzZU5hdmlnYXRpb25Nb2RlIHtcblxuICAvKipcbiAgICogQ29uc3RydWN0b3JcbiAgICpcbiAgICogQHBhcmFtIG5hdmlnYXRlQmFja3dhcmQgQ29udHJvbHMgd2hldGhlciB3aXphcmQgc3RlcHMgYmVmb3JlIHRoZSBjdXJyZW50IHN0ZXAgYXJlIG5hdmlnYWJsZVxuICAgKiBAcGFyYW0gbmF2aWdhdGVGb3J3YXJkIENvbnRyb2xzIHdoZXRoZXIgd2l6YXJkIHN0ZXBzIGJlZm9yZSB0aGUgY3VycmVudCBzdGVwIGFyZSBuYXZpZ2FibGVcbiAgICovXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgbmF2aWdhdGVCYWNrd2FyZDogJ2FsbG93J3wnZGVueSd8bnVsbCA9IG51bGwsXG4gICAgcHJpdmF0ZSBuYXZpZ2F0ZUZvcndhcmQ6ICdhbGxvdyd8J2RlbnknfCd2aXNpdGVkJ3xudWxsID0gbnVsbCxcbiAgKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLm5hdmlnYXRlQmFja3dhcmQgPSB0aGlzLm5hdmlnYXRlQmFja3dhcmQgfHwgJ2FsbG93JztcbiAgICB0aGlzLm5hdmlnYXRlRm9yd2FyZCA9IHRoaXMubmF2aWdhdGVGb3J3YXJkIHx8ICdkZW55JztcbiAgfVxuXG4gIC8qKlxuICAgKiBAaW5oZXJpdERvY1xuICAgKi9cbiAgcHJvdGVjdGVkIGNhblRyYW5zaXRpb25Ub1N0ZXAod2l6YXJkOiBXaXphcmRDb21wb25lbnQsIGRlc3RpbmF0aW9uSW5kZXg6IG51bWJlcik6IGJvb2xlYW4ge1xuICAgIC8vIGlmIHRoZSBkZXN0aW5hdGlvbiBzdGVwIGNhbiBiZSBuYXZpZ2F0ZWQgdG8gdXNpbmcgdGhlIG5hdmlnYXRpb24gYmFyLFxuICAgIC8vIGl0IHNob3VsZCBiZSBhY2Nlc3NpYmxlIHdpdGggW2dvVG9TdGVwXSBhcyB3ZWxsXG4gICAgaWYgKHRoaXMuaXNOYXZpZ2FibGUod2l6YXJkLCBkZXN0aW5hdGlvbkluZGV4KSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgLy8gbmF2aWdhdGlvbiB3aXRoIFtnb1RvU3RlcF0gaXMgcGVybWl0dGVkIGlmIGFsbCBwcmV2aW91cyBzdGVwc1xuICAgIC8vIHRvIHRoZSBkZXN0aW5hdGlvbiBzdGVwIGhhdmUgYmVlbiBjb21wbGV0ZWQgb3IgYXJlIG9wdGlvbmFsXG4gICAgcmV0dXJuIHdpemFyZC53aXphcmRTdGVwc1xuICAgICAgICAuZmlsdGVyKChzdGVwLCBpbmRleCkgPT4gaW5kZXggPCBkZXN0aW5hdGlvbkluZGV4ICYmIGluZGV4ICE9PSB3aXphcmQuY3VycmVudFN0ZXBJbmRleClcbiAgICAgICAgLmV2ZXJ5KHN0ZXAgPT4gc3RlcC5jb21wbGV0ZWQgfHwgc3RlcC5vcHRpb25hbCk7XG4gIH1cblxuICAvKipcbiAgICogQGluaGVyaXREb2NcbiAgICovXG4gIHByb3RlY3RlZCB0cmFuc2l0aW9uKHdpemFyZDogV2l6YXJkQ29tcG9uZW50LCBkZXN0aW5hdGlvbkluZGV4OiBudW1iZXIpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5uYXZpZ2F0ZUZvcndhcmQgPT09ICdkZW55Jykge1xuICAgICAgLy8gc2V0IGFsbCBzdGVwcyBhZnRlciB0aGUgZGVzdGluYXRpb24gc3RlcCB0byBpbmNvbXBsZXRlXG4gICAgICB3aXphcmQud2l6YXJkU3RlcHNcbiAgICAgICAgLmZpbHRlcigoc3RlcCwgaW5kZXgpID0+IHdpemFyZC5jdXJyZW50U3RlcEluZGV4ID4gZGVzdGluYXRpb25JbmRleCAmJiBpbmRleCA+IGRlc3RpbmF0aW9uSW5kZXgpXG4gICAgICAgIC5mb3JFYWNoKHN0ZXAgPT4gc3RlcC5jb21wbGV0ZWQgPSBmYWxzZSk7XG4gICAgfVxuXG4gICAgc3VwZXIudHJhbnNpdGlvbih3aXphcmQsIGRlc3RpbmF0aW9uSW5kZXgpO1xuICB9XG5cbiAgLyoqXG4gICAqIEBpbmhlcml0RG9jXG4gICAqL1xuICBwdWJsaWMgaXNOYXZpZ2FibGUod2l6YXJkOiBXaXphcmRDb21wb25lbnQsIGRlc3RpbmF0aW9uSW5kZXg6IG51bWJlcik6IGJvb2xlYW4ge1xuICAgIC8vIENoZWNrIGlmIHRoZSBkZXN0aW5hdGlvbiBzdGVwIGNhbiBiZSBuYXZpZ2F0ZWQgdG9cbiAgICBjb25zdCBkZXN0aW5hdGlvblN0ZXAgPSB3aXphcmQuZ2V0U3RlcEF0SW5kZXgoZGVzdGluYXRpb25JbmRleCk7XG4gICAgaWYgKGRlc3RpbmF0aW9uU3RlcCBpbnN0YW5jZW9mIFdpemFyZENvbXBsZXRpb25TdGVwKSB7XG4gICAgICAvLyBBIGNvbXBsZXRpb24gc3RlcCBjYW4gb25seSBiZSBlbnRlcmVkLCBpZiBhbGwgcHJldmlvdXMgc3RlcHMgaGF2ZSBiZWVuIGNvbXBsZXRlZCwgYXJlIG9wdGlvbmFsLCBvciBzZWxlY3RlZFxuICAgICAgY29uc3QgcHJldmlvdXNTdGVwc0NvbXBsZXRlZCA9IHdpemFyZC53aXphcmRTdGVwc1xuICAgICAgICAuZmlsdGVyKChzdGVwLCBpbmRleCkgPT4gaW5kZXggPCBkZXN0aW5hdGlvbkluZGV4KVxuICAgICAgICAuZXZlcnkoc3RlcCA9PiBzdGVwLmNvbXBsZXRlZCB8fCBzdGVwLm9wdGlvbmFsIHx8IHN0ZXAuc2VsZWN0ZWQpO1xuICAgICAgaWYgKCFwcmV2aW91c1N0ZXBzQ29tcGxldGVkKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBBcHBseSBuYXZpZ2F0aW9uIHBvY2ljaWVzXG4gICAgaWYgKGRlc3RpbmF0aW9uSW5kZXggPCB3aXphcmQuY3VycmVudFN0ZXBJbmRleCkge1xuICAgICAgLy8gSWYgdGhlIGRlc3RpbmF0aW9uIHN0ZXAgaXMgYmVmb3JlIGN1cnJlbnQsIGFwcGx5IHRoZSBgbmF2aWdhdGVCYWNrd2FyZGAgcG9saWN5XG4gICAgICBzd2l0Y2ggKHRoaXMubmF2aWdhdGVCYWNrd2FyZCkge1xuICAgICAgICBjYXNlICdhbGxvdyc6IHJldHVybiB0cnVlO1xuICAgICAgICBjYXNlICdkZW55JzogcmV0dXJuIGZhbHNlO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgSW52YWxpZCB2YWx1ZSBmb3IgbmF2aWdhdGVCYWNrd2FyZDogJHt0aGlzLm5hdmlnYXRlQmFja3dhcmR9YCk7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChkZXN0aW5hdGlvbkluZGV4ID4gd2l6YXJkLmN1cnJlbnRTdGVwSW5kZXgpIHtcbiAgICAgIC8vIElmIHRoZSBkZXN0aW5hdGlvbiBzdGVwIGlzIGFmdGVyIGN1cnJlbnQsIGFwcGx5IHRoZSBgbmF2aWdhdGVGb3J3YXJkYCBwb2xpY3lcbiAgICAgIHN3aXRjaCAodGhpcy5uYXZpZ2F0ZUZvcndhcmQpIHtcbiAgICAgICAgY2FzZSAnYWxsb3cnOiByZXR1cm4gdHJ1ZTtcbiAgICAgICAgY2FzZSAnZGVueSc6IHJldHVybiBmYWxzZTtcbiAgICAgICAgY2FzZSAndmlzaXRlZCc6IHJldHVybiBkZXN0aW5hdGlvblN0ZXAuY29tcGxldGVkO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgSW52YWxpZCB2YWx1ZSBmb3IgbmF2aWdhdGVGb3J3YXJkOiAke3RoaXMubmF2aWdhdGVGb3J3YXJkfWApO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAvLyBSZS1lbnRlcmluZyB0aGUgY3VycmVudCBzdGVwIGlzIG5vdCBhbGxvd2VkXG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEBpbmhlcml0RG9jXG4gICAqL1xuICBwcm90ZWN0ZWQgZW5zdXJlQ2FuUmVzZXQod2l6YXJkOiBXaXphcmRDb21wb25lbnQpOiB2b2lkIHtcbiAgICBzdXBlci5lbnN1cmVDYW5SZXNldCh3aXphcmQpO1xuXG4gICAgLy8gdGhlIGRlZmF1bHQgc3RlcCBpcyBhIGNvbXBsZXRpb24gc3RlcCBhbmQgdGhlIHdpemFyZCBjb250YWlucyBtb3JlIHRoYW4gb25lIHN0ZXBcbiAgICBjb25zdCBkZWZhdWx0V2l6YXJkU3RlcCA9IHdpemFyZC5nZXRTdGVwQXRJbmRleCh3aXphcmQuZGVmYXVsdFN0ZXBJbmRleCk7XG4gICAgY29uc3QgZGVmYXVsdENvbXBsZXRpb25TdGVwID0gZGVmYXVsdFdpemFyZFN0ZXAgaW5zdGFuY2VvZiBXaXphcmRDb21wbGV0aW9uU3RlcDtcbiAgICBpZiAoZGVmYXVsdENvbXBsZXRpb25TdGVwICYmIHdpemFyZC53aXphcmRTdGVwcy5sZW5ndGggIT09IDEpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgVGhlIGRlZmF1bHQgc3RlcCBpbmRleCAke3dpemFyZC5kZWZhdWx0U3RlcEluZGV4fSByZWZlcmVuY2VzIGEgY29tcGxldGlvbiBzdGVwYCk7XG4gICAgfVxuICB9XG59XG4iXX0=