import { AfterContentInit, QueryList, EventEmitter } from '@angular/core';
import { NavigationMode } from '../navigation/navigation-mode.interface';
import { WizardStep } from '../util/wizard-step.interface';
import { MovingDirection } from '../util/moving-direction.enum';
/**
 * The `aw-wizard` component defines the root component of a wizard.
 * Through the setting of input parameters for the `aw-wizard` component it's possible to change the location and size
 * of its navigation bar.
 *
 * ### Syntax
 * ```html
 * <aw-wizard [navBarLocation]="location of navigation bar" [navBarLayout]="layout of navigation bar">
 *     ...
 * </aw-wizard>
 * ```
 *
 * ### Example
 *
 * Without completion step:
 *
 * ```html
 * <aw-wizard navBarLocation="top" navBarLayout="small">
 *     <aw-wizard-step>...</aw-wizard-step>
 *     <aw-wizard-step>...</aw-wizard-step>
 * </aw-wizard>
 * ```
 *
 * With completion step:
 *
 * ```html
 * <aw-wizard navBarLocation="top" navBarLayout="small">
 *     <aw-wizard-step>...</aw-wizard-step>
 *     <aw-wizard-step>...</aw-wizard-step>
 *     <aw-wizard-completion-step>...</aw-wizard-completion-step>
 * </aw-wizard>
 * ```
 *
 * @author Marc Arndt
 */
export declare class WizardComponent implements AfterContentInit {
    /**
     * A QueryList containing all [[WizardStep]]s inside this wizard
     */
    wizardStepsQueryList: QueryList<WizardStep>;
    /**
     * The location of the navigation bar inside the wizard.
     * This location can be either top, bottom, left or right
     */
    navBarLocation: string;
    /**
     * The layout of the navigation bar inside the wizard.
     * The layout can be either small, large-filled, large-empty or large-symbols
     */
    navBarLayout: string;
    /**
     * The direction in which the steps inside the navigation bar should be shown.
     * The direction can be either `left-to-right` or `right-to-left`
     */
    navBarDirection: string;
    /**
     * The initially selected step, represented by its index
     * Beware: This initial default is only used if no wizard step has been enhanced with the `selected` directive
     */
    defaultStepIndex: number;
    private _defaultStepIndex;
    /**
     * True, if the navigation bar shouldn't be used for navigating
     */
    disableNavigationBar: boolean;
    /**
     * The navigation mode used to navigate inside the wizard
     *
     * For outside access, use the [[navigation]] getter.
     */
    private _navigation;
    /**
     * An array representation of all wizard steps belonging to this model
     *
     * For outside access, use the [[wizardSteps]] getter.
     */
    private _wizardSteps;
    /**
     * The index of the currently visible and selected step inside the wizardSteps QueryList.
     * If this wizard contains no steps, currentStepIndex is -1
     *
     * Note: Do not modify this field directly.  Instead, use navigation methods:
     * [[goToStep]], [[goToPreviousStep]], [[goToNextStep]].
     */
    currentStepIndex: number;
    /**
     * Constructor
     */
    constructor();
    /**
     * Returns true if this wizard uses a horizontal orientation.
     * The wizard uses a horizontal orientation, iff the navigation bar is shown at the top or bottom of this wizard
     *
     * @returns True if this wizard uses a horizontal orientation
     */
    readonly horizontalOrientation: boolean;
    /**
     * Returns true if this wizard uses a vertical orientation.
     * The wizard uses a vertical orientation, iff the navigation bar is shown at the left or right of this wizard
     *
     * @returns True if this wizard uses a vertical orientation
     */
    readonly verticalOrientation: boolean;
    /**
     * Initialization work
     */
    ngAfterContentInit(): void;
    /**
     * The WizardStep object belonging to the currently visible and selected step.
     * The currentStep is always the currently selected wizard step.
     * The currentStep can be either completed, if it was visited earlier,
     * or not completed, if it is visited for the first time or its state is currently out of date.
     *
     * If this wizard contains no steps, currentStep is null
     */
    readonly currentStep: WizardStep;
    /**
     * The completeness of the wizard.
     * If the wizard has been completed, i.e. all steps are either completed or optional, this value is true, otherwise it is false
     */
    readonly completed: boolean;
    /**
     * An array representation of all wizard steps belonging to this model
     */
    readonly wizardSteps: WizardStep[];
    /**
     * Updates the wizard steps to the new array
     *
     * @param wizardSteps The updated wizard steps
     */
    private updateWizardSteps;
    /**
     * The navigation mode used to navigate inside the wizard
     */
    /**
    * Updates the navigation mode for this wizard component
    *
    * @param navigation The updated navigation mode
    */
    navigation: NavigationMode;
    /**
     * Checks if a given index `stepIndex` is inside the range of possible wizard steps inside this wizard
     *
     * @param stepIndex The to be checked index of a step inside this wizard
     * @returns True if the given `stepIndex` is contained inside this wizard, false otherwise
     */
    hasStep(stepIndex: number): boolean;
    /**
     * Checks if this wizard has a previous step, compared to the current step
     *
     * @returns True if this wizard has a previous step before the current step
     */
    hasPreviousStep(): boolean;
    /**
     * Checks if this wizard has a next step, compared to the current step
     *
     * @returns True if this wizard has a next step after the current step
     */
    hasNextStep(): boolean;
    /**
     * Checks if this wizard is currently inside its last step
     *
     * @returns True if the wizard is currently inside its last step
     */
    isLastStep(): boolean;
    /**
     * Finds the [[WizardStep]] at the given index `stepIndex`.
     * If no [[WizardStep]] exists at the given index an Error is thrown
     *
     * @param stepIndex The given index
     * @returns The found [[WizardStep]] at the given index `stepIndex`
     * @throws An `Error` is thrown, if the given index `stepIndex` doesn't exist
     */
    getStepAtIndex(stepIndex: number): WizardStep;
    /**
     * Finds the index of the step with the given `stepId`.
     * If no step with the given `stepId` exists, `-1` is returned
     *
     * @param stepId The given step id
     * @returns The found index of a step with the given step id, or `-1` if no step with the given id is included in the wizard
     */
    getIndexOfStepWithId(stepId: string): number;
    /**
     * Finds the index of the given [[WizardStep]] `step`.
     * If the given [[WizardStep]] is not contained inside this wizard, `-1` is returned
     *
     * @param step The given [[WizardStep]]
     * @returns The found index of `step` or `-1` if the step is not included in the wizard
     */
    getIndexOfStep(step: WizardStep): number;
    /**
     * Calculates the correct [[MovingDirection]] value for a given `destinationStep` compared to the `currentStepIndex`.
     *
     * @param destinationStep The given destination step
     * @returns The calculated [[MovingDirection]]
     */
    getMovingDirection(destinationStep: number): MovingDirection;
    /**
     * Checks, whether a wizard step, as defined by the given destination index, can be transitioned to.
     *
     * This method controls navigation by [[goToStep]], [[goToPreviousStep]], and [[goToNextStep]] directives.
     * Navigation by navigation bar is governed by [[isNavigable]].
     *
     * @param destinationIndex The index of the destination step
     * @returns A [[Promise]] containing `true`, if the destination step can be transitioned to and false otherwise
     */
    canGoToStep(destinationIndex: number): Promise<boolean>;
    /**
     * Tries to transition to the wizard step, as denoted by the given destination index.
     *
     * Note: You do not have to call [[canGoToStep]] before calling [[goToStep]].
     * The [[canGoToStep]] method will be called automatically.
     *
     * @param destinationIndex The index of the destination wizard step, which should be entered
     * @param preFinalize An event emitter, to be called before the step has been transitioned
     * @param postFinalize An event emitter, to be called after the step has been transitioned
     */
    goToStep(destinationIndex: number, preFinalize?: EventEmitter<void>, postFinalize?: EventEmitter<void>): void;
    /**
     * Tries to transition the wizard to the previous step
     *
     * @param preFinalize An event emitter, to be called before the step has been transitioned
     * @param postFinalize An event emitter, to be called after the step has been transitioned
     */
    goToPreviousStep(preFinalize?: EventEmitter<void>, postFinalize?: EventEmitter<void>): void;
    /**
     * Tries to transition the wizard to the next step
     *
     * @param preFinalize An event emitter, to be called before the step has been transitioned
     * @param postFinalize An event emitter, to be called after the step has been transitioned
     */
    goToNextStep(preFinalize?: EventEmitter<void>, postFinalize?: EventEmitter<void>): void;
    /**
     * Checks, whether the wizard step, located at the given index, can be navigated to using the navigation bar.
     *
     * @param destinationIndex The index of the destination step
     * @returns True if the step can be navigated to, false otherwise
     */
    isNavigable(destinationIndex: number): boolean;
    /**
     * Resets the state of this wizard.
     */
    reset(): void;
}
