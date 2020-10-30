import { EventEmitter } from '@angular/core';
import { WizardComponent } from '../components/wizard.component';
/**
 * The `awNextStep` directive can be used to navigate to the next step.
 *
 * ### Syntax
 *
 * ```html
 * <button awNextStep (finalize)="finalize method">...</button>
 * ```
 *
 * @author Marc Arndt
 */
export declare class NextStepDirective {
    private wizard;
    /**
     * This [[EventEmitter]] is called directly before the current step is exited during a transition through a component with this directive.
     */
    preFinalize: EventEmitter<void>;
    /**
     * This [[EventEmitter]] is called directly after the current step is exited during a transition through a component with this directive.
     */
    postFinalize: EventEmitter<void>;
    /**
     * Constructor
     *
     * @param wizard The state of the wizard
     */
    constructor(wizard: WizardComponent);
    /**
     * A convenience field for `preFinalize`
     */
    /**
    * A convenience name for `preFinalize`
    *
    * @param emitter The [[EventEmitter]] to be set
    */
    finalize: EventEmitter<void>;
    /**
     * Listener method for `click` events on the component with this directive.
     * After this method is called the wizard will try to transition to the next step
     */
    onClick(event: Event): void;
}
