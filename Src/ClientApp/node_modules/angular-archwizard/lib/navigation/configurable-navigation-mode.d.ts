import { BaseNavigationMode } from './base-navigation-mode.interface';
import { WizardComponent } from '../components/wizard.component';
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
export declare class ConfigurableNavigationMode extends BaseNavigationMode {
    private navigateBackward;
    private navigateForward;
    /**
     * Constructor
     *
     * @param navigateBackward Controls whether wizard steps before the current step are navigable
     * @param navigateForward Controls whether wizard steps before the current step are navigable
     */
    constructor(navigateBackward?: 'allow' | 'deny' | null, navigateForward?: 'allow' | 'deny' | 'visited' | null);
    /**
     * @inheritDoc
     */
    protected canTransitionToStep(wizard: WizardComponent, destinationIndex: number): boolean;
    /**
     * @inheritDoc
     */
    protected transition(wizard: WizardComponent, destinationIndex: number): void;
    /**
     * @inheritDoc
     */
    isNavigable(wizard: WizardComponent, destinationIndex: number): boolean;
    /**
     * @inheritDoc
     */
    protected ensureCanReset(wizard: WizardComponent): void;
}
