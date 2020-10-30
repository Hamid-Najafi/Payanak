/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, Input } from '@angular/core';
import { ConfigurableNavigationMode } from '../navigation/configurable-navigation-mode';
import { WizardComponent } from '../components/wizard.component';
/**
 * The [[awNavigationMode]] directive can be used to customize wizard'd navigation mode.
 *
 * There are several usage options:
 *
 * ### Option 1. Customize the default navigation mode with [[navigateBackward]] and/or [[navigateForward]] inputs.
 *
 * ```html
 * <aw-wizard [awNavigationMode] navigateBackward="deny" navigateForward="allow">...</aw-wizard>
 * ```
 *
 * ### Option 2. Pass in a custom navigation mode
 *
 * ```typescript
 * import { BaseNavigationMode } from 'angular-archwizard'
 *
 * class CustomNavigationMode extends BaseNavigationMode {
 *
 *   // ...
 * }
 * ```
 *
 * ```typescript
 * \@Component({
 *   // ...
 * })
 * class MyComponent {
 *
 *   navigationMode = new CustomNavigationMode();
 * }
 * ```
 *
 * ```html
 * <aw-wizard [awNavigationMode]="navigationMode">...</aw-wizard>
 * ```
 *
 * ### Additional Notes
 *
 * - Specifying a custom navigation mode takes priority over [[navigateBackward]] and [[navigateForward]] inputs
 *
 * - Omitting the [[awNavigationMode]] directive or, equally, specifying just [[awNavigationMode]] without
 *   any inputs or parameters causes the wizard to use the default "strict" navigation mode equivalent to
 *
 * ```html
 * <aw-wizard [awNavigationMode] navigateBackward="deny" navigateForward="allow">...</aw-wizard>
 * ````
 */
export class NavigationModeDirective {
    /**
     * @param {?} wizard
     */
    constructor(wizard) {
        this.wizard = wizard;
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        this.wizard.navigation = this.getNavigationMode();
    }
    /**
     * @private
     * @return {?}
     */
    getNavigationMode() {
        if (this.awNavigationMode) {
            return this.awNavigationMode;
        }
        return new ConfigurableNavigationMode(this.navigateBackward, this.navigateForward);
    }
}
NavigationModeDirective.decorators = [
    { type: Directive, args: [{
                selector: '[awNavigationMode]',
            },] }
];
/** @nocollapse */
NavigationModeDirective.ctorParameters = () => [
    { type: WizardComponent }
];
NavigationModeDirective.propDecorators = {
    awNavigationMode: [{ type: Input }],
    navigateBackward: [{ type: Input }],
    navigateForward: [{ type: Input }]
};
if (false) {
    /**
     * Custom navigation mode instance (optional).
     * @type {?}
     */
    NavigationModeDirective.prototype.awNavigationMode;
    /**
     * A parameter for the default navigation mode.  Controls whether wizard steps before the current step are navigable:
     *
     * - `navigateBackward="deny"` -- the steps are not navigable
     * - `navigateBackward="allow"` -- the steps are navigable
     * @type {?}
     */
    NavigationModeDirective.prototype.navigateBackward;
    /**
     * A parameter for the default navigation mode.  Controls whether wizard steps after the current step are navigable:
     *
     * - `navigateForward="deny"` -- the steps are not navigable
     * - `navigateForward="allow"` -- the steps are navigable
     * - `navigateForward="visited"` -- a step is navigable iff it was already visited before
     * @type {?}
     */
    NavigationModeDirective.prototype.navigateForward;
    /**
     * @type {?}
     * @private
     */
    NavigationModeDirective.prototype.wizard;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmF2aWdhdGlvbi1tb2RlLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2FuZ3VsYXItYXJjaHdpemFyZC8iLCJzb3VyY2VzIjpbImxpYi9kaXJlY3RpdmVzL25hdmlnYXRpb24tbW9kZS5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUUsS0FBSyxFQUEyQixNQUFNLGVBQWUsQ0FBQztBQUd6RSxPQUFPLEVBQUMsMEJBQTBCLEVBQUMsTUFBTSw0Q0FBNEMsQ0FBQztBQUN0RixPQUFPLEVBQUMsZUFBZSxFQUFDLE1BQU0sZ0NBQWdDLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXFEL0QsTUFBTSxPQUFPLHVCQUF1Qjs7OztJQTJCbEMsWUFBb0IsTUFBdUI7UUFBdkIsV0FBTSxHQUFOLE1BQU0sQ0FBaUI7SUFBSSxDQUFDOzs7OztJQUV6QyxXQUFXLENBQUMsT0FBc0I7UUFDdkMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixFQUFFLENBQUM7SUFDcEQsQ0FBQzs7Ozs7SUFFTyxpQkFBaUI7UUFDdkIsSUFBSSxJQUFJLENBQUMsZ0JBQWdCLEVBQUU7WUFDekIsT0FBTyxJQUFJLENBQUMsZ0JBQWdCLENBQUM7U0FDOUI7UUFDRCxPQUFPLElBQUksMEJBQTBCLENBQUMsSUFBSSxDQUFDLGdCQUFnQixFQUFFLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQztJQUNyRixDQUFDOzs7WUF6Q0YsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxvQkFBb0I7YUFDL0I7Ozs7WUFwRE8sZUFBZTs7OytCQTBEcEIsS0FBSzsrQkFTTCxLQUFLOzhCQVVMLEtBQUs7Ozs7Ozs7SUFuQk4sbURBQzZDOzs7Ozs7OztJQVE3QyxtREFDNkM7Ozs7Ozs7OztJQVM3QyxrREFDc0Q7Ozs7O0lBRTFDLHlDQUErQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7RGlyZWN0aXZlLCBJbnB1dCwgT25DaGFuZ2VzLCBTaW1wbGVDaGFuZ2VzfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHtOYXZpZ2F0aW9uTW9kZX0gZnJvbSAnLi4vbmF2aWdhdGlvbi9uYXZpZ2F0aW9uLW1vZGUuaW50ZXJmYWNlJztcbmltcG9ydCB7Q29uZmlndXJhYmxlTmF2aWdhdGlvbk1vZGV9IGZyb20gJy4uL25hdmlnYXRpb24vY29uZmlndXJhYmxlLW5hdmlnYXRpb24tbW9kZSc7XG5pbXBvcnQge1dpemFyZENvbXBvbmVudH0gZnJvbSAnLi4vY29tcG9uZW50cy93aXphcmQuY29tcG9uZW50JztcblxuXG4vKipcbiAqIFRoZSBbW2F3TmF2aWdhdGlvbk1vZGVdXSBkaXJlY3RpdmUgY2FuIGJlIHVzZWQgdG8gY3VzdG9taXplIHdpemFyZCdkIG5hdmlnYXRpb24gbW9kZS5cbiAqXG4gKiBUaGVyZSBhcmUgc2V2ZXJhbCB1c2FnZSBvcHRpb25zOlxuICpcbiAqICMjIyBPcHRpb24gMS4gQ3VzdG9taXplIHRoZSBkZWZhdWx0IG5hdmlnYXRpb24gbW9kZSB3aXRoIFtbbmF2aWdhdGVCYWNrd2FyZF1dIGFuZC9vciBbW25hdmlnYXRlRm9yd2FyZF1dIGlucHV0cy5cbiAqXG4gKiBgYGBodG1sXG4gKiA8YXctd2l6YXJkIFthd05hdmlnYXRpb25Nb2RlXSBuYXZpZ2F0ZUJhY2t3YXJkPVwiZGVueVwiIG5hdmlnYXRlRm9yd2FyZD1cImFsbG93XCI+Li4uPC9hdy13aXphcmQ+XG4gKiBgYGBcbiAqXG4gKiAjIyMgT3B0aW9uIDIuIFBhc3MgaW4gYSBjdXN0b20gbmF2aWdhdGlvbiBtb2RlXG4gKlxuICogYGBgdHlwZXNjcmlwdFxuICogaW1wb3J0IHsgQmFzZU5hdmlnYXRpb25Nb2RlIH0gZnJvbSAnYW5ndWxhci1hcmNod2l6YXJkJ1xuICpcbiAqIGNsYXNzIEN1c3RvbU5hdmlnYXRpb25Nb2RlIGV4dGVuZHMgQmFzZU5hdmlnYXRpb25Nb2RlIHtcbiAqXG4gKiAgIC8vIC4uLlxuICogfVxuICogYGBgXG4gKlxuICogYGBgdHlwZXNjcmlwdFxuICogQENvbXBvbmVudCh7XG4gKiAgIC8vIC4uLlxuICogfSlcbiAqIGNsYXNzIE15Q29tcG9uZW50IHtcbiAqXG4gKiAgIG5hdmlnYXRpb25Nb2RlID0gbmV3IEN1c3RvbU5hdmlnYXRpb25Nb2RlKCk7XG4gKiB9XG4gKiBgYGBcbiAqXG4gKiBgYGBodG1sXG4gKiA8YXctd2l6YXJkIFthd05hdmlnYXRpb25Nb2RlXT1cIm5hdmlnYXRpb25Nb2RlXCI+Li4uPC9hdy13aXphcmQ+XG4gKiBgYGBcbiAqXG4gKiAjIyMgQWRkaXRpb25hbCBOb3Rlc1xuICpcbiAqIC0gU3BlY2lmeWluZyBhIGN1c3RvbSBuYXZpZ2F0aW9uIG1vZGUgdGFrZXMgcHJpb3JpdHkgb3ZlciBbW25hdmlnYXRlQmFja3dhcmRdXSBhbmQgW1tuYXZpZ2F0ZUZvcndhcmRdXSBpbnB1dHNcbiAqXG4gKiAtIE9taXR0aW5nIHRoZSBbW2F3TmF2aWdhdGlvbk1vZGVdXSBkaXJlY3RpdmUgb3IsIGVxdWFsbHksIHNwZWNpZnlpbmcganVzdCBbW2F3TmF2aWdhdGlvbk1vZGVdXSB3aXRob3V0XG4gKiAgIGFueSBpbnB1dHMgb3IgcGFyYW1ldGVycyBjYXVzZXMgdGhlIHdpemFyZCB0byB1c2UgdGhlIGRlZmF1bHQgXCJzdHJpY3RcIiBuYXZpZ2F0aW9uIG1vZGUgZXF1aXZhbGVudCB0b1xuICpcbiAqIGBgYGh0bWxcbiAqIDxhdy13aXphcmQgW2F3TmF2aWdhdGlvbk1vZGVdIG5hdmlnYXRlQmFja3dhcmQ9XCJkZW55XCIgbmF2aWdhdGVGb3J3YXJkPVwiYWxsb3dcIj4uLi48L2F3LXdpemFyZD5cbiAqIGBgYGBcbiAqL1xuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW2F3TmF2aWdhdGlvbk1vZGVdJyxcbn0pXG5leHBvcnQgY2xhc3MgTmF2aWdhdGlvbk1vZGVEaXJlY3RpdmUgaW1wbGVtZW50cyBPbkNoYW5nZXMge1xuXG4gIC8qKlxuICAgKiBDdXN0b20gbmF2aWdhdGlvbiBtb2RlIGluc3RhbmNlIChvcHRpb25hbCkuXG4gICAqL1xuICBASW5wdXQoKVxuICBwdWJsaWMgYXdOYXZpZ2F0aW9uTW9kZTogTmF2aWdhdGlvbk1vZGV8bnVsbDtcblxuICAvKipcbiAgICogQSBwYXJhbWV0ZXIgZm9yIHRoZSBkZWZhdWx0IG5hdmlnYXRpb24gbW9kZS4gIENvbnRyb2xzIHdoZXRoZXIgd2l6YXJkIHN0ZXBzIGJlZm9yZSB0aGUgY3VycmVudCBzdGVwIGFyZSBuYXZpZ2FibGU6XG4gICAqXG4gICAqIC0gYG5hdmlnYXRlQmFja3dhcmQ9XCJkZW55XCJgIC0tIHRoZSBzdGVwcyBhcmUgbm90IG5hdmlnYWJsZVxuICAgKiAtIGBuYXZpZ2F0ZUJhY2t3YXJkPVwiYWxsb3dcImAgLS0gdGhlIHN0ZXBzIGFyZSBuYXZpZ2FibGVcbiAgICovXG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBuYXZpZ2F0ZUJhY2t3YXJkOiAnYWxsb3cnfCdkZW55J3xudWxsO1xuXG4gIC8qKlxuICAgKiBBIHBhcmFtZXRlciBmb3IgdGhlIGRlZmF1bHQgbmF2aWdhdGlvbiBtb2RlLiAgQ29udHJvbHMgd2hldGhlciB3aXphcmQgc3RlcHMgYWZ0ZXIgdGhlIGN1cnJlbnQgc3RlcCBhcmUgbmF2aWdhYmxlOlxuICAgKlxuICAgKiAtIGBuYXZpZ2F0ZUZvcndhcmQ9XCJkZW55XCJgIC0tIHRoZSBzdGVwcyBhcmUgbm90IG5hdmlnYWJsZVxuICAgKiAtIGBuYXZpZ2F0ZUZvcndhcmQ9XCJhbGxvd1wiYCAtLSB0aGUgc3RlcHMgYXJlIG5hdmlnYWJsZVxuICAgKiAtIGBuYXZpZ2F0ZUZvcndhcmQ9XCJ2aXNpdGVkXCJgIC0tIGEgc3RlcCBpcyBuYXZpZ2FibGUgaWZmIGl0IHdhcyBhbHJlYWR5IHZpc2l0ZWQgYmVmb3JlXG4gICAqL1xuICBASW5wdXQoKVxuICBwdWJsaWMgbmF2aWdhdGVGb3J3YXJkOiAnYWxsb3cnfCdkZW55J3wndmlzaXRlZCd8bnVsbDtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHdpemFyZDogV2l6YXJkQ29tcG9uZW50KSB7IH1cblxuICBwdWJsaWMgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xuICAgIHRoaXMud2l6YXJkLm5hdmlnYXRpb24gPSB0aGlzLmdldE5hdmlnYXRpb25Nb2RlKCk7XG4gIH1cblxuICBwcml2YXRlIGdldE5hdmlnYXRpb25Nb2RlKCk6IE5hdmlnYXRpb25Nb2RlIHtcbiAgICBpZiAodGhpcy5hd05hdmlnYXRpb25Nb2RlKSB7XG4gICAgICByZXR1cm4gdGhpcy5hd05hdmlnYXRpb25Nb2RlO1xuICAgIH1cbiAgICByZXR1cm4gbmV3IENvbmZpZ3VyYWJsZU5hdmlnYXRpb25Nb2RlKHRoaXMubmF2aWdhdGVCYWNrd2FyZCwgdGhpcy5uYXZpZ2F0ZUZvcndhcmQpO1xuICB9XG5cbn1cbiJdfQ==