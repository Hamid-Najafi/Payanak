/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { MovingDirection } from '../util/moving-direction.enum';
/**
 * Base implementation of [[NavigationMode]]
 *
 * Note: Built-in [[NavigationMode]] classes should be stateless, allowing the library user to easily create
 * an instance of a particular [[NavigationMode]] class and pass it to `<aw-wizard [navigationMode]="...">`.
 *
 * @author Marc Arndt
 * @abstract
 */
var /**
 * Base implementation of [[NavigationMode]]
 *
 * Note: Built-in [[NavigationMode]] classes should be stateless, allowing the library user to easily create
 * an instance of a particular [[NavigationMode]] class and pass it to `<aw-wizard [navigationMode]="...">`.
 *
 * @author Marc Arndt
 * @abstract
 */
BaseNavigationMode = /** @class */ (function () {
    function BaseNavigationMode() {
    }
    /**
     * Checks, whether a wizard step, as defined by the given destination index, can be transitioned to.
     *
     * This method controls navigation by [[goToStep]], [[goToPreviousStep]], and [[goToNextStep]] directives.
     * Navigation by navigation bar is governed by [[isNavigable]].
     *
     * In this implementation, a destination wizard step can be entered if:
     * - it exists
     * - the current step can be exited in the direction of the destination step
     * - the destination step can be entered in the direction from the current step
     *
     * Subclasses can impose additional restrictions, see [[canTransitionToStep]].
     *
     * @param wizard The wizard component to operate on
     * @param destinationIndex The index of the destination step
     * @returns A [[Promise]] containing `true`, if the destination step can be transitioned to and `false` otherwise
     */
    /**
     * Checks, whether a wizard step, as defined by the given destination index, can be transitioned to.
     *
     * This method controls navigation by [[goToStep]], [[goToPreviousStep]], and [[goToNextStep]] directives.
     * Navigation by navigation bar is governed by [[isNavigable]].
     *
     * In this implementation, a destination wizard step can be entered if:
     * - it exists
     * - the current step can be exited in the direction of the destination step
     * - the destination step can be entered in the direction from the current step
     *
     * Subclasses can impose additional restrictions, see [[canTransitionToStep]].
     *
     * @param {?} wizard The wizard component to operate on
     * @param {?} destinationIndex The index of the destination step
     * @return {?} A [[Promise]] containing `true`, if the destination step can be transitioned to and `false` otherwise
     */
    BaseNavigationMode.prototype.canGoToStep = /**
     * Checks, whether a wizard step, as defined by the given destination index, can be transitioned to.
     *
     * This method controls navigation by [[goToStep]], [[goToPreviousStep]], and [[goToNextStep]] directives.
     * Navigation by navigation bar is governed by [[isNavigable]].
     *
     * In this implementation, a destination wizard step can be entered if:
     * - it exists
     * - the current step can be exited in the direction of the destination step
     * - the destination step can be entered in the direction from the current step
     *
     * Subclasses can impose additional restrictions, see [[canTransitionToStep]].
     *
     * @param {?} wizard The wizard component to operate on
     * @param {?} destinationIndex The index of the destination step
     * @return {?} A [[Promise]] containing `true`, if the destination step can be transitioned to and `false` otherwise
     */
    function (wizard, destinationIndex) {
        var _this = this;
        /** @type {?} */
        var hasStep = wizard.hasStep(destinationIndex);
        /** @type {?} */
        var movingDirection = wizard.getMovingDirection(destinationIndex);
        /** @type {?} */
        var canExitCurrentStep = (/**
         * @param {?} previous
         * @return {?}
         */
        function (previous) {
            return previous && wizard.currentStep.canExitStep(movingDirection);
        });
        /** @type {?} */
        var canEnterDestinationStep = (/**
         * @param {?} previous
         * @return {?}
         */
        function (previous) {
            return previous && wizard.getStepAtIndex(destinationIndex).canEnterStep(movingDirection);
        });
        /** @type {?} */
        var canTransitionToStep = (/**
         * @param {?} previous
         * @return {?}
         */
        function (previous) {
            return previous && _this.canTransitionToStep(wizard, destinationIndex);
        });
        return Promise.resolve(hasStep)
            .then(canTransitionToStep)
            // Apply user-defined checks at the end.  They can involve user interaction
            // which is better to be avoided if navigation mode does not actually allow the transition
            // (`canTransitionToStep` returns `false`).
            .then(canExitCurrentStep)
            .then(canEnterDestinationStep);
    };
    /**
     * Imposes additional restrictions for `canGoToStep` in current navigation mode.
     *
     * The base implementation allows transition iff the given step is navigable from the navigation bar (see `isNavigable`).
     * However, in some navigation modes `canTransitionToStep` can be more relaxed to allow navigation to certain steps
     * by previous/next buttons, but not using the navigation bar.
     *
     * @param wizard The wizard component to operate on
     * @param destinationIndex The index of the destination step
     * @returns `true`, if the destination step can be transitioned to and `false` otherwise
     */
    /**
     * Imposes additional restrictions for `canGoToStep` in current navigation mode.
     *
     * The base implementation allows transition iff the given step is navigable from the navigation bar (see `isNavigable`).
     * However, in some navigation modes `canTransitionToStep` can be more relaxed to allow navigation to certain steps
     * by previous/next buttons, but not using the navigation bar.
     *
     * @protected
     * @param {?} wizard The wizard component to operate on
     * @param {?} destinationIndex The index of the destination step
     * @return {?} `true`, if the destination step can be transitioned to and `false` otherwise
     */
    BaseNavigationMode.prototype.canTransitionToStep = /**
     * Imposes additional restrictions for `canGoToStep` in current navigation mode.
     *
     * The base implementation allows transition iff the given step is navigable from the navigation bar (see `isNavigable`).
     * However, in some navigation modes `canTransitionToStep` can be more relaxed to allow navigation to certain steps
     * by previous/next buttons, but not using the navigation bar.
     *
     * @protected
     * @param {?} wizard The wizard component to operate on
     * @param {?} destinationIndex The index of the destination step
     * @return {?} `true`, if the destination step can be transitioned to and `false` otherwise
     */
    function (wizard, destinationIndex) {
        return this.isNavigable(wizard, destinationIndex);
    };
    /**
     * Tries to transition to the wizard step, as denoted by the given destination index.
     *
     * When entering the destination step, the following actions are done:
     * - the old current step is set as completed
     * - the old current step is set as unselected
     * - the old current step is exited
     * - the destination step is set as selected
     * - the destination step is entered
     *
     * When the destination step couldn't be entered, the following actions are done:
     * - the current step is exited and entered in the direction `MovingDirection.Stay`
     *
     * @param wizard The wizard component to operate on
     * @param destinationIndex The index of the destination wizard step, which should be entered
     * @param preFinalize An event emitter, to be called before the step has been transitioned
     * @param postFinalize An event emitter, to be called after the step has been transitioned
     */
    /**
     * Tries to transition to the wizard step, as denoted by the given destination index.
     *
     * When entering the destination step, the following actions are done:
     * - the old current step is set as completed
     * - the old current step is set as unselected
     * - the old current step is exited
     * - the destination step is set as selected
     * - the destination step is entered
     *
     * When the destination step couldn't be entered, the following actions are done:
     * - the current step is exited and entered in the direction `MovingDirection.Stay`
     *
     * @param {?} wizard The wizard component to operate on
     * @param {?} destinationIndex The index of the destination wizard step, which should be entered
     * @param {?=} preFinalize An event emitter, to be called before the step has been transitioned
     * @param {?=} postFinalize An event emitter, to be called after the step has been transitioned
     * @return {?}
     */
    BaseNavigationMode.prototype.goToStep = /**
     * Tries to transition to the wizard step, as denoted by the given destination index.
     *
     * When entering the destination step, the following actions are done:
     * - the old current step is set as completed
     * - the old current step is set as unselected
     * - the old current step is exited
     * - the destination step is set as selected
     * - the destination step is entered
     *
     * When the destination step couldn't be entered, the following actions are done:
     * - the current step is exited and entered in the direction `MovingDirection.Stay`
     *
     * @param {?} wizard The wizard component to operate on
     * @param {?} destinationIndex The index of the destination wizard step, which should be entered
     * @param {?=} preFinalize An event emitter, to be called before the step has been transitioned
     * @param {?=} postFinalize An event emitter, to be called after the step has been transitioned
     * @return {?}
     */
    function (wizard, destinationIndex, preFinalize, postFinalize) {
        var _this = this;
        this.canGoToStep(wizard, destinationIndex).then((/**
         * @param {?} navigationAllowed
         * @return {?}
         */
        function (navigationAllowed) {
            if (navigationAllowed) {
                // the current step can be exited in the given direction
                /** @type {?} */
                var movingDirection = wizard.getMovingDirection(destinationIndex);
                /* istanbul ignore if */
                if (preFinalize) {
                    preFinalize.emit();
                }
                // leave current step
                wizard.currentStep.completed = true;
                wizard.currentStep.exit(movingDirection);
                wizard.currentStep.editing = false;
                wizard.currentStep.selected = false;
                _this.transition(wizard, destinationIndex);
                // remember if the next step is already completed before entering it to properly set `editing` flag
                /** @type {?} */
                var wasCompleted = wizard.completed || wizard.currentStep.completed;
                // go to next step
                wizard.currentStep.enter(movingDirection);
                wizard.currentStep.selected = true;
                if (wasCompleted) {
                    wizard.currentStep.editing = true;
                }
                /* istanbul ignore if */
                if (postFinalize) {
                    postFinalize.emit();
                }
            }
            else {
                // if the current step can't be left, reenter the current step
                wizard.currentStep.exit(MovingDirection.Stay);
                wizard.currentStep.enter(MovingDirection.Stay);
            }
        }));
    };
    /**
     * Transitions the wizard to the given step index.
     *
     * Can perform additional actions in particular navigation mode implementations.
     *
     * @param wizard The wizard component to operate on
     * @param destinationIndex The index of the destination wizard step
     */
    /**
     * Transitions the wizard to the given step index.
     *
     * Can perform additional actions in particular navigation mode implementations.
     *
     * @protected
     * @param {?} wizard The wizard component to operate on
     * @param {?} destinationIndex The index of the destination wizard step
     * @return {?}
     */
    BaseNavigationMode.prototype.transition = /**
     * Transitions the wizard to the given step index.
     *
     * Can perform additional actions in particular navigation mode implementations.
     *
     * @protected
     * @param {?} wizard The wizard component to operate on
     * @param {?} destinationIndex The index of the destination wizard step
     * @return {?}
     */
    function (wizard, destinationIndex) {
        wizard.currentStepIndex = destinationIndex;
    };
    /**
     * Resets the state of this wizard.
     *
     * A reset transitions the wizard automatically to the first step and sets all steps as incomplete.
     * In addition the whole wizard is set as incomplete.
     *
     * @param wizard The wizard component to operate on
     */
    /**
     * Resets the state of this wizard.
     *
     * A reset transitions the wizard automatically to the first step and sets all steps as incomplete.
     * In addition the whole wizard is set as incomplete.
     *
     * @param {?} wizard The wizard component to operate on
     * @return {?}
     */
    BaseNavigationMode.prototype.reset = /**
     * Resets the state of this wizard.
     *
     * A reset transitions the wizard automatically to the first step and sets all steps as incomplete.
     * In addition the whole wizard is set as incomplete.
     *
     * @param {?} wizard The wizard component to operate on
     * @return {?}
     */
    function (wizard) {
        this.ensureCanReset(wizard);
        // reset the step internal state
        wizard.wizardSteps.forEach((/**
         * @param {?} step
         * @return {?}
         */
        function (step) {
            step.completed = step.initiallyCompleted;
            step.selected = false;
            step.editing = false;
        }));
        // set the first step as the current step
        wizard.currentStepIndex = wizard.defaultStepIndex;
        wizard.currentStep.selected = true;
        wizard.currentStep.enter(MovingDirection.Forwards);
    };
    /**
     * Checks if wizard configuration allows to perform reset.
     *
     * A check failure is indicated by throwing an `Error` with the message discribing the discovered misconfiguration issue.
     *
     * Can include additional checks in particular navigation mode implementations.
     *
     * @param wizard The wizard component to operate on
     * @throws An `Error` is thrown, if a micconfiguration issue is discovered.
     */
    /**
     * Checks if wizard configuration allows to perform reset.
     *
     * A check failure is indicated by throwing an `Error` with the message discribing the discovered misconfiguration issue.
     *
     * Can include additional checks in particular navigation mode implementations.
     *
     * @throws An `Error` is thrown, if a micconfiguration issue is discovered.
     * @protected
     * @param {?} wizard The wizard component to operate on
     * @return {?}
     */
    BaseNavigationMode.prototype.ensureCanReset = /**
     * Checks if wizard configuration allows to perform reset.
     *
     * A check failure is indicated by throwing an `Error` with the message discribing the discovered misconfiguration issue.
     *
     * Can include additional checks in particular navigation mode implementations.
     *
     * @throws An `Error` is thrown, if a micconfiguration issue is discovered.
     * @protected
     * @param {?} wizard The wizard component to operate on
     * @return {?}
     */
    function (wizard) {
        // the wizard doesn't contain a step with the default step index
        if (!wizard.hasStep(wizard.defaultStepIndex)) {
            throw new Error("The wizard doesn't contain a step with index " + wizard.defaultStepIndex);
        }
    };
    return BaseNavigationMode;
}());
/**
 * Base implementation of [[NavigationMode]]
 *
 * Note: Built-in [[NavigationMode]] classes should be stateless, allowing the library user to easily create
 * an instance of a particular [[NavigationMode]] class and pass it to `<aw-wizard [navigationMode]="...">`.
 *
 * @author Marc Arndt
 * @abstract
 */
export { BaseNavigationMode };
if (false) {
    /**
     * @inheritDoc
     * @abstract
     * @param {?} WizardComponent
     * @param {?} destinationIndex
     * @return {?}
     */
    BaseNavigationMode.prototype.isNavigable = function (WizardComponent, destinationIndex) { };
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFzZS1uYXZpZ2F0aW9uLW1vZGUuaW50ZXJmYWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vYW5ndWxhci1hcmNod2l6YXJkLyIsInNvdXJjZXMiOlsibGliL25hdmlnYXRpb24vYmFzZS1uYXZpZ2F0aW9uLW1vZGUuaW50ZXJmYWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFDQSxPQUFPLEVBQUMsZUFBZSxFQUFDLE1BQU0sK0JBQStCLENBQUM7Ozs7Ozs7Ozs7QUFZOUQ7Ozs7Ozs7Ozs7SUFBQTtJQXFMQSxDQUFDO0lBbkxDOzs7Ozs7Ozs7Ozs7Ozs7O09BZ0JHOzs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFDSSx3Q0FBVzs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFBbEIsVUFBbUIsTUFBdUIsRUFBRSxnQkFBd0I7UUFBcEUsaUJBd0JDOztZQXZCTyxPQUFPLEdBQUcsTUFBTSxDQUFDLE9BQU8sQ0FBQyxnQkFBZ0IsQ0FBQzs7WUFFMUMsZUFBZSxHQUFHLE1BQU0sQ0FBQyxrQkFBa0IsQ0FBQyxnQkFBZ0IsQ0FBQzs7WUFFN0Qsa0JBQWtCOzs7O1FBQUcsVUFBQyxRQUFpQjtZQUMzQyxPQUFPLFFBQVEsSUFBSSxNQUFNLENBQUMsV0FBVyxDQUFDLFdBQVcsQ0FBQyxlQUFlLENBQUMsQ0FBQztRQUNyRSxDQUFDLENBQUE7O1lBRUssdUJBQXVCOzs7O1FBQUcsVUFBQyxRQUFpQjtZQUNoRCxPQUFPLFFBQVEsSUFBSSxNQUFNLENBQUMsY0FBYyxDQUFDLGdCQUFnQixDQUFDLENBQUMsWUFBWSxDQUFDLGVBQWUsQ0FBQyxDQUFDO1FBQzNGLENBQUMsQ0FBQTs7WUFFSyxtQkFBbUI7Ozs7UUFBRyxVQUFDLFFBQWlCO1lBQzVDLE9BQU8sUUFBUSxJQUFJLEtBQUksQ0FBQyxtQkFBbUIsQ0FBQyxNQUFNLEVBQUUsZ0JBQWdCLENBQUMsQ0FBQztRQUN4RSxDQUFDLENBQUE7UUFFRCxPQUFPLE9BQU8sQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDO2FBQzVCLElBQUksQ0FB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QUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO1FBQ3ZCLENBQUMsRUFBQyxDQUFDO1FBRUgseUNBQXlDO1FBQ3pDLE1BQU0sQ0FBQyxnQkFBZ0IsR0FBRyxNQUFNLENBQUMsZ0JBQWdCLENBQUM7UUFDbEQsTUFBTSxDQUFDLFdBQVcsQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO1FBQ25DLE1BQU0sQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLGVBQWUsQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUNyRCxDQUFDO0lBRUQ7Ozs7Ozs7OztPQVNHOzs7Ozs7Ozs7Ozs7O0lBQ08sMkNBQWM7Ozs7Ozs7Ozs7OztJQUF4QixVQUF5QixNQUF1QjtRQUM5QyxnRUFBZ0U7UUFDaEUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLGdCQUFnQixDQUFDLEVBQUU7WUFDNUMsTUFBTSxJQUFJLEtBQUssQ0FBQyxrREFBZ0QsTUFBTSxDQUFDLGdCQUFrQixDQUFDLENBQUM7U0FDNUY7SUFDSCxDQUFDO0lBQ0gseUJBQUM7QUFBRCxDQUFDLEFBckxELElBcUxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBMUNDLDRGQUFpRyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7RXZlbnRFbWl0dGVyfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7TW92aW5nRGlyZWN0aW9ufSBmcm9tICcuLi91dGlsL21vdmluZy1kaXJlY3Rpb24uZW51bSc7XG5pbXBvcnQge05hdmlnYXRpb25Nb2RlfSBmcm9tICcuL25hdmlnYXRpb24tbW9kZS5pbnRlcmZhY2UnO1xuaW1wb3J0IHtXaXphcmRDb21wb25lbnR9IGZyb20gJy4uL2NvbXBvbmVudHMvd2l6YXJkLmNvbXBvbmVudCc7XG5cbi8qKlxuICogQmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBbW05hdmlnYXRpb25Nb2RlXV1cbiAqXG4gKiBOb3RlOiBCdWlsdC1pbiBbW05hdmlnYXRpb25Nb2RlXV0gY2xhc3NlcyBzaG91bGQgYmUgc3RhdGVsZXNzLCBhbGxvd2luZyB0aGUgbGlicmFyeSB1c2VyIHRvIGVhc2lseSBjcmVhdGVcbiAqIGFuIGluc3RhbmNlIG9mIGEgcGFydGljdWxhciBbW05hdmlnYXRpb25Nb2RlXV0gY2xhc3MgYW5kIHBhc3MgaXQgdG8gYDxhdy13aXphcmQgW25hdmlnYXRpb25Nb2RlXT1cIi4uLlwiPmAuXG4gKlxuICogQGF1dGhvciBNYXJjIEFybmR0XG4gKi9cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBCYXNlTmF2aWdhdGlvbk1vZGUgaW1wbGVtZW50cyBOYXZpZ2F0aW9uTW9kZSB7XG5cbiAgLyoqXG4gICAqIENoZWNrcywgd2hldGhlciBhIHdpemFyZCBzdGVwLCBhcyBkZWZpbmVkIGJ5IHRoZSBnaXZlbiBkZXN0aW5hdGlvbiBpbmRleCwgY2FuIGJlIHRyYW5zaXRpb25lZCB0by5cbiAgICpcbiAgICogVGhpcyBtZXRob2QgY29udHJvbHMgbmF2aWdhdGlvbiBieSBbW2dvVG9TdGVwXV0sIFtbZ29Ub1ByZXZpb3VzU3RlcF1dLCBhbmQgW1tnb1RvTmV4dFN0ZXBdXSBkaXJlY3RpdmVzLlxuICAgKiBOYXZpZ2F0aW9uIGJ5IG5hdmlnYXRpb24gYmFyIGlzIGdvdmVybmVkIGJ5IFtbaXNOYXZpZ2FibGVdXS5cbiAgICpcbiAgICogSW4gdGhpcyBpbXBsZW1lbnRhdGlvbiwgYSBkZXN0aW5hdGlvbiB3aXphcmQgc3RlcCBjYW4gYmUgZW50ZXJlZCBpZjpcbiAgICogLSBpdCBleGlzdHNcbiAgICogLSB0aGUgY3VycmVudCBzdGVwIGNhbiBiZSBleGl0ZWQgaW4gdGhlIGRpcmVjdGlvbiBvZiB0aGUgZGVzdGluYXRpb24gc3RlcFxuICAgKiAtIHRoZSBkZXN0aW5hdGlvbiBzdGVwIGNhbiBiZSBlbnRlcmVkIGluIHRoZSBkaXJlY3Rpb24gZnJvbSB0aGUgY3VycmVudCBzdGVwXG4gICAqXG4gICAqIFN1YmNsYXNzZXMgY2FuIGltcG9zZSBhZGRpdGlvbmFsIHJlc3RyaWN0aW9ucywgc2VlIFtbY2FuVHJhbnNpdGlvblRvU3RlcF1dLlxuICAgKlxuICAgKiBAcGFyYW0gd2l6YXJkIFRoZSB3aXphcmQgY29tcG9uZW50IHRvIG9wZXJhdGUgb25cbiAgICogQHBhcmFtIGRlc3RpbmF0aW9uSW5kZXggVGhlIGluZGV4IG9mIHRoZSBkZXN0aW5hdGlvbiBzdGVwXG4gICAqIEByZXR1cm5zIEEgW1tQcm9taXNlXV0gY29udGFpbmluZyBgdHJ1ZWAsIGlmIHRoZSBkZXN0aW5hdGlvbiBzdGVwIGNhbiBiZSB0cmFuc2l0aW9uZWQgdG8gYW5kIGBmYWxzZWAgb3RoZXJ3aXNlXG4gICAqL1xuICBwdWJsaWMgY2FuR29Ub1N0ZXAod2l6YXJkOiBXaXphcmRDb21wb25lbnQsIGRlc3RpbmF0aW9uSW5kZXg6IG51bWJlcik6IFByb21pc2U8Ym9vbGVhbj4ge1xuICAgIGNvbnN0IGhhc1N0ZXAgPSB3aXphcmQuaGFzU3RlcChkZXN0aW5hdGlvbkluZGV4KTtcblxuICAgIGNvbnN0IG1vdmluZ0RpcmVjdGlvbiA9IHdpemFyZC5nZXRNb3ZpbmdEaXJlY3Rpb24oZGVzdGluYXRpb25JbmRleCk7XG5cbiAgICBjb25zdCBjYW5FeGl0Q3VycmVudFN0ZXAgPSAocHJldmlvdXM6IGJvb2xlYW4pID0+IHtcbiAgICAgIHJldHVybiBwcmV2aW91cyAmJiB3aXphcmQuY3VycmVudFN0ZXAuY2FuRXhpdFN0ZXAobW92aW5nRGlyZWN0aW9uKTtcbiAgICB9O1xuXG4gICAgY29uc3QgY2FuRW50ZXJEZXN0aW5hdGlvblN0ZXAgPSAocHJldmlvdXM6IGJvb2xlYW4pID0+IHtcbiAgICAgIHJldHVybiBwcmV2aW91cyAmJiB3aXphcmQuZ2V0U3RlcEF0SW5kZXgoZGVzdGluYXRpb25JbmRleCkuY2FuRW50ZXJTdGVwKG1vdmluZ0RpcmVjdGlvbik7XG4gICAgfTtcblxuICAgIGNvbnN0IGNhblRyYW5zaXRpb25Ub1N0ZXAgPSAocHJldmlvdXM6IGJvb2xlYW4pID0+IHtcbiAgICAgIHJldHVybiBwcmV2aW91cyAmJiB0aGlzLmNhblRyYW5zaXRpb25Ub1N0ZXAod2l6YXJkLCBkZXN0aW5hdGlvbkluZGV4KTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShoYXNTdGVwKVxuICAgICAgLnRoZW4oY2FuVHJhbnNpdGlvblRvU3RlcClcbiAgICAgIC8vIEFwcGx5IHVzZXItZGVmaW5lZCBjaGVja3MgYXQgdGhlIGVuZC4gIFRoZXkgY2FuIGludm9sdmUgdXNlciBpbnRlcmFjdGlvblxuICAgICAgLy8gd2hpY2ggaXMgYmV0dGVyIHRvIGJlIGF2b2lkZWQgaWYgbmF2aWdhdGlvbiBtb2RlIGRvZXMgbm90IGFjdHVhbGx5IGFsbG93IHRoZSB0cmFuc2l0aW9uXG4gICAgICAvLyAoYGNhblRyYW5zaXRpb25Ub1N0ZXBgIHJldHVybnMgYGZhbHNlYCkuXG4gICAgICAudGhlbihjYW5FeGl0Q3VycmVudFN0ZXApXG4gICAgICAudGhlbihjYW5FbnRlckRlc3RpbmF0aW9uU3RlcCk7XG4gIH1cblxuICAvKipcbiAgICogSW1wb3NlcyBhZGRpdGlvbmFsIHJlc3RyaWN0aW9ucyBmb3IgYGNhbkdvVG9TdGVwYCBpbiBjdXJyZW50IG5hdmlnYXRpb24gbW9kZS5cbiAgICpcbiAgICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gYWxsb3dzIHRyYW5zaXRpb24gaWZmIHRoZSBnaXZlbiBzdGVwIGlzIG5hdmlnYWJsZSBmcm9tIHRoZSBuYXZpZ2F0aW9uIGJhciAoc2VlIGBpc05hdmlnYWJsZWApLlxuICAgKiBIb3dldmVyLCBpbiBzb21lIG5hdmlnYXRpb24gbW9kZXMgYGNhblRyYW5zaXRpb25Ub1N0ZXBgIGNhbiBiZSBtb3JlIHJlbGF4ZWQgdG8gYWxsb3cgbmF2aWdhdGlvbiB0byBjZXJ0YWluIHN0ZXBzXG4gICAqIGJ5IHByZXZpb3VzL25leHQgYnV0dG9ucywgYnV0IG5vdCB1c2luZyB0aGUgbmF2aWdhdGlvbiBiYXIuXG4gICAqXG4gICAqIEBwYXJhbSB3aXphcmQgVGhlIHdpemFyZCBjb21wb25lbnQgdG8gb3BlcmF0ZSBvblxuICAgKiBAcGFyYW0gZGVzdGluYXRpb25JbmRleCBUaGUgaW5kZXggb2YgdGhlIGRlc3RpbmF0aW9uIHN0ZXBcbiAgICogQHJldHVybnMgYHRydWVgLCBpZiB0aGUgZGVzdGluYXRpb24gc3RlcCBjYW4gYmUgdHJhbnNpdGlvbmVkIHRvIGFuZCBgZmFsc2VgIG90aGVyd2lzZVxuICAgKi9cbiAgcHJvdGVjdGVkIGNhblRyYW5zaXRpb25Ub1N0ZXAod2l6YXJkOiBXaXphcmRDb21wb25lbnQsIGRlc3RpbmF0aW9uSW5kZXg6IG51bWJlcik6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmlzTmF2aWdhYmxlKHdpemFyZCwgZGVzdGluYXRpb25JbmRleCk7XG4gIH1cblxuICAvKipcbiAgICogVHJpZXMgdG8gdHJhbnNpdGlvbiB0byB0aGUgd2l6YXJkIHN0ZXAsIGFzIGRlbm90ZWQgYnkgdGhlIGdpdmVuIGRlc3RpbmF0aW9uIGluZGV4LlxuICAgKlxuICAgKiBXaGVuIGVudGVyaW5nIHRoZSBkZXN0aW5hdGlvbiBzdGVwLCB0aGUgZm9sbG93aW5nIGFjdGlvbnMgYXJlIGRvbmU6XG4gICAqIC0gdGhlIG9sZCBjdXJyZW50IHN0ZXAgaXMgc2V0IGFzIGNvbXBsZXRlZFxuICAgKiAtIHRoZSBvbGQgY3VycmVudCBzdGVwIGlzIHNldCBhcyB1bnNlbGVjdGVkXG4gICAqIC0gdGhlIG9sZCBjdXJyZW50IHN0ZXAgaXMgZXhpdGVkXG4gICAqIC0gdGhlIGRlc3RpbmF0aW9uIHN0ZXAgaXMgc2V0IGFzIHNlbGVjdGVkXG4gICAqIC0gdGhlIGRlc3RpbmF0aW9uIHN0ZXAgaXMgZW50ZXJlZFxuICAgKlxuICAgKiBXaGVuIHRoZSBkZXN0aW5hdGlvbiBzdGVwIGNvdWxkbid0IGJlIGVudGVyZWQsIHRoZSBmb2xsb3dpbmcgYWN0aW9ucyBhcmUgZG9uZTpcbiAgICogLSB0aGUgY3VycmVudCBzdGVwIGlzIGV4aXRlZCBhbmQgZW50ZXJlZCBpbiB0aGUgZGlyZWN0aW9uIGBNb3ZpbmdEaXJlY3Rpb24uU3RheWBcbiAgICpcbiAgICogQHBhcmFtIHdpemFyZCBUaGUgd2l6YXJkIGNvbXBvbmVudCB0byBvcGVyYXRlIG9uXG4gICAqIEBwYXJhbSBkZXN0aW5hdGlvbkluZGV4IFRoZSBpbmRleCBvZiB0aGUgZGVzdGluYXRpb24gd2l6YXJkIHN0ZXAsIHdoaWNoIHNob3VsZCBiZSBlbnRlcmVkXG4gICAqIEBwYXJhbSBwcmVGaW5hbGl6ZSBBbiBldmVudCBlbWl0dGVyLCB0byBiZSBjYWxsZWQgYmVmb3JlIHRoZSBzdGVwIGhhcyBiZWVuIHRyYW5zaXRpb25lZFxuICAgKiBAcGFyYW0gcG9zdEZpbmFsaXplIEFuIGV2ZW50IGVtaXR0ZXIsIHRvIGJlIGNhbGxlZCBhZnRlciB0aGUgc3RlcCBoYXMgYmVlbiB0cmFuc2l0aW9uZWRcbiAgICovXG4gIHB1YmxpYyBnb1RvU3RlcChcbiAgICB3aXphcmQ6IFdpemFyZENvbXBvbmVudCxcbiAgICBkZXN0aW5hdGlvbkluZGV4OiBudW1iZXIsXG4gICAgcHJlRmluYWxpemU/OiBFdmVudEVtaXR0ZXI8dm9pZD4sXG4gICAgcG9zdEZpbmFsaXplPzogRXZlbnRFbWl0dGVyPHZvaWQ+KTogdm9pZCB7XG5cbiAgICB0aGlzLmNhbkdvVG9TdGVwKHdpemFyZCwgZGVzdGluYXRpb25JbmRleCkudGhlbihuYXZpZ2F0aW9uQWxsb3dlZCA9PiB7XG4gICAgICBpZiAobmF2aWdhdGlvbkFsbG93ZWQpIHtcbiAgICAgICAgLy8gdGhlIGN1cnJlbnQgc3RlcCBjYW4gYmUgZXhpdGVkIGluIHRoZSBnaXZlbiBkaXJlY3Rpb25cbiAgICAgICAgY29uc3QgbW92aW5nRGlyZWN0aW9uOiBNb3ZpbmdEaXJlY3Rpb24gPSB3aXphcmQuZ2V0TW92aW5nRGlyZWN0aW9uKGRlc3RpbmF0aW9uSW5kZXgpO1xuXG4gICAgICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAqL1xuICAgICAgICBpZiAocHJlRmluYWxpemUpIHtcbiAgICAgICAgICBwcmVGaW5hbGl6ZS5lbWl0KCk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBsZWF2ZSBjdXJyZW50IHN0ZXBcbiAgICAgICAgd2l6YXJkLmN1cnJlbnRTdGVwLmNvbXBsZXRlZCA9IHRydWU7XG4gICAgICAgIHdpemFyZC5jdXJyZW50U3RlcC5leGl0KG1vdmluZ0RpcmVjdGlvbik7XG4gICAgICAgIHdpemFyZC5jdXJyZW50U3RlcC5lZGl0aW5nID0gZmFsc2U7XG4gICAgICAgIHdpemFyZC5jdXJyZW50U3RlcC5zZWxlY3RlZCA9IGZhbHNlO1xuXG4gICAgICAgIHRoaXMudHJhbnNpdGlvbih3aXphcmQsIGRlc3RpbmF0aW9uSW5kZXgpO1xuXG4gICAgICAgIC8vIHJlbWVtYmVyIGlmIHRoZSBuZXh0IHN0ZXAgaXMgYWxyZWFkeSBjb21wbGV0ZWQgYmVmb3JlIGVudGVyaW5nIGl0IHRvIHByb3Blcmx5IHNldCBgZWRpdGluZ2AgZmxhZ1xuICAgICAgICBjb25zdCB3YXNDb21wbGV0ZWQgPSB3aXphcmQuY29tcGxldGVkIHx8IHdpemFyZC5jdXJyZW50U3RlcC5jb21wbGV0ZWQ7XG5cbiAgICAgICAgLy8gZ28gdG8gbmV4dCBzdGVwXG4gICAgICAgIHdpemFyZC5jdXJyZW50U3RlcC5lbnRlcihtb3ZpbmdEaXJlY3Rpb24pO1xuICAgICAgICB3aXphcmQuY3VycmVudFN0ZXAuc2VsZWN0ZWQgPSB0cnVlO1xuICAgICAgICBpZiAod2FzQ29tcGxldGVkKSB7XG4gICAgICAgICAgd2l6YXJkLmN1cnJlbnRTdGVwLmVkaXRpbmcgPSB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgLyogaXN0YW5idWwgaWdub3JlIGlmICovXG4gICAgICAgIGlmIChwb3N0RmluYWxpemUpIHtcbiAgICAgICAgICBwb3N0RmluYWxpemUuZW1pdCgpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBpZiB0aGUgY3VycmVudCBzdGVwIGNhbid0IGJlIGxlZnQsIHJlZW50ZXIgdGhlIGN1cnJlbnQgc3RlcFxuICAgICAgICB3aXphcmQuY3VycmVudFN0ZXAuZXhpdChNb3ZpbmdEaXJlY3Rpb24uU3RheSk7XG4gICAgICAgIHdpemFyZC5jdXJyZW50U3RlcC5lbnRlcihNb3ZpbmdEaXJlY3Rpb24uU3RheSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogVHJhbnNpdGlvbnMgdGhlIHdpemFyZCB0byB0aGUgZ2l2ZW4gc3RlcCBpbmRleC5cbiAgICpcbiAgICogQ2FuIHBlcmZvcm0gYWRkaXRpb25hbCBhY3Rpb25zIGluIHBhcnRpY3VsYXIgbmF2aWdhdGlvbiBtb2RlIGltcGxlbWVudGF0aW9ucy5cbiAgICpcbiAgICogQHBhcmFtIHdpemFyZCBUaGUgd2l6YXJkIGNvbXBvbmVudCB0byBvcGVyYXRlIG9uXG4gICAqIEBwYXJhbSBkZXN0aW5hdGlvbkluZGV4IFRoZSBpbmRleCBvZiB0aGUgZGVzdGluYXRpb24gd2l6YXJkIHN0ZXBcbiAgICovXG4gIHByb3RlY3RlZCB0cmFuc2l0aW9uKHdpemFyZDogV2l6YXJkQ29tcG9uZW50LCBkZXN0aW5hdGlvbkluZGV4OiBudW1iZXIpOiB2b2lkIHtcbiAgICB3aXphcmQuY3VycmVudFN0ZXBJbmRleCA9IGRlc3RpbmF0aW9uSW5kZXg7XG4gIH1cblxuICAvKipcbiAgICogQGluaGVyaXREb2NcbiAgICovXG4gIHB1YmxpYyBhYnN0cmFjdCBpc05hdmlnYWJsZShXaXphcmRDb21wb25lbnQ6IFdpemFyZENvbXBvbmVudCwgZGVzdGluYXRpb25JbmRleDogbnVtYmVyKTogYm9vbGVhbjtcblxuICAvKipcbiAgICogUmVzZXRzIHRoZSBzdGF0ZSBvZiB0aGlzIHdpemFyZC5cbiAgICpcbiAgICogQSByZXNldCB0cmFuc2l0aW9ucyB0aGUgd2l6YXJkIGF1dG9tYXRpY2FsbHkgdG8gdGhlIGZpcnN0IHN0ZXAgYW5kIHNldHMgYWxsIHN0ZXBzIGFzIGluY29tcGxldGUuXG4gICAqIEluIGFkZGl0aW9uIHRoZSB3aG9sZSB3aXphcmQgaXMgc2V0IGFzIGluY29tcGxldGUuXG4gICAqXG4gICAqIEBwYXJhbSB3aXphcmQgVGhlIHdpemFyZCBjb21wb25lbnQgdG8gb3BlcmF0ZSBvblxuICAgKi9cbiAgcHVibGljIHJlc2V0KHdpemFyZDogV2l6YXJkQ29tcG9uZW50KTogdm9pZCB7XG4gICAgdGhpcy5lbnN1cmVDYW5SZXNldCh3aXphcmQpO1xuXG4gICAgLy8gcmVzZXQgdGhlIHN0ZXAgaW50ZXJuYWwgc3RhdGVcbiAgICB3aXphcmQud2l6YXJkU3RlcHMuZm9yRWFjaChzdGVwID0+IHtcbiAgICAgIHN0ZXAuY29tcGxldGVkID0gc3RlcC5pbml0aWFsbHlDb21wbGV0ZWQ7XG4gICAgICBzdGVwLnNlbGVjdGVkID0gZmFsc2U7XG4gICAgICBzdGVwLmVkaXRpbmcgPSBmYWxzZTtcbiAgICB9KTtcblxuICAgIC8vIHNldCB0aGUgZmlyc3Qgc3RlcCBhcyB0aGUgY3VycmVudCBzdGVwXG4gICAgd2l6YXJkLmN1cnJlbnRTdGVwSW5kZXggPSB3aXphcmQuZGVmYXVsdFN0ZXBJbmRleDtcbiAgICB3aXphcmQuY3VycmVudFN0ZXAuc2VsZWN0ZWQgPSB0cnVlO1xuICAgIHdpemFyZC5jdXJyZW50U3RlcC5lbnRlcihNb3ZpbmdEaXJlY3Rpb24uRm9yd2FyZHMpO1xuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrcyBpZiB3aXphcmQgY29uZmlndXJhdGlvbiBhbGxvd3MgdG8gcGVyZm9ybSByZXNldC5cbiAgICpcbiAgICogQSBjaGVjayBmYWlsdXJlIGlzIGluZGljYXRlZCBieSB0aHJvd2luZyBhbiBgRXJyb3JgIHdpdGggdGhlIG1lc3NhZ2UgZGlzY3JpYmluZyB0aGUgZGlzY292ZXJlZCBtaXNjb25maWd1cmF0aW9uIGlzc3VlLlxuICAgKlxuICAgKiBDYW4gaW5jbHVkZSBhZGRpdGlvbmFsIGNoZWNrcyBpbiBwYXJ0aWN1bGFyIG5hdmlnYXRpb24gbW9kZSBpbXBsZW1lbnRhdGlvbnMuXG4gICAqXG4gICAqIEBwYXJhbSB3aXphcmQgVGhlIHdpemFyZCBjb21wb25lbnQgdG8gb3BlcmF0ZSBvblxuICAgKiBAdGhyb3dzIEFuIGBFcnJvcmAgaXMgdGhyb3duLCBpZiBhIG1pY2NvbmZpZ3VyYXRpb24gaXNzdWUgaXMgZGlzY292ZXJlZC5cbiAgICovXG4gIHByb3RlY3RlZCBlbnN1cmVDYW5SZXNldCh3aXphcmQ6IFdpemFyZENvbXBvbmVudCk6IHZvaWQge1xuICAgIC8vIHRoZSB3aXphcmQgZG9lc24ndCBjb250YWluIGEgc3RlcCB3aXRoIHRoZSBkZWZhdWx0IHN0ZXAgaW5kZXhcbiAgICBpZiAoIXdpemFyZC5oYXNTdGVwKHdpemFyZC5kZWZhdWx0U3RlcEluZGV4KSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBUaGUgd2l6YXJkIGRvZXNuJ3QgY29udGFpbiBhIHN0ZXAgd2l0aCBpbmRleCAke3dpemFyZC5kZWZhdWx0U3RlcEluZGV4fWApO1xuICAgIH1cbiAgfVxufVxuIl19