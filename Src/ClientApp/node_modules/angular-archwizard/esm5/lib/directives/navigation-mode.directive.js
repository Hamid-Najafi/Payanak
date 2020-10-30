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
var NavigationModeDirective = /** @class */ (function () {
    function NavigationModeDirective(wizard) {
        this.wizard = wizard;
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    NavigationModeDirective.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        this.wizard.navigation = this.getNavigationMode();
    };
    /**
     * @private
     * @return {?}
     */
    NavigationModeDirective.prototype.getNavigationMode = /**
     * @private
     * @return {?}
     */
    function () {
        if (this.awNavigationMode) {
            return this.awNavigationMode;
        }
        return new ConfigurableNavigationMode(this.navigateBackward, this.navigateForward);
    };
    NavigationModeDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[awNavigationMode]',
                },] }
    ];
    /** @nocollapse */
    NavigationModeDirective.ctorParameters = function () { return [
        { type: WizardComponent }
    ]; };
    NavigationModeDirective.propDecorators = {
        awNavigationMode: [{ type: Input }],
        navigateBackward: [{ type: Input }],
        navigateForward: [{ type: Input }]
    };
    return NavigationModeDirective;
}());
export { NavigationModeDirective };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmF2aWdhdGlvbi1tb2RlLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2FuZ3VsYXItYXJjaHdpemFyZC8iLCJzb3VyY2VzIjpbImxpYi9kaXJlY3RpdmVzL25hdmlnYXRpb24tbW9kZS5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUUsS0FBSyxFQUEyQixNQUFNLGVBQWUsQ0FBQztBQUd6RSxPQUFPLEVBQUMsMEJBQTBCLEVBQUMsTUFBTSw0Q0FBNEMsQ0FBQztBQUN0RixPQUFPLEVBQUMsZUFBZSxFQUFDLE1BQU0sZ0NBQWdDLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWtEL0Q7SUE4QkUsaUNBQW9CLE1BQXVCO1FBQXZCLFdBQU0sR0FBTixNQUFNLENBQWlCO0lBQUksQ0FBQzs7Ozs7SUFFekMsNkNBQVc7Ozs7SUFBbEIsVUFBbUIsT0FBc0I7UUFDdkMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixFQUFFLENBQUM7SUFDcEQsQ0FBQzs7Ozs7SUFFTyxtREFBaUI7Ozs7SUFBekI7UUFDRSxJQUFJLElBQUksQ0FBQyxnQkFBZ0IsRUFBRTtZQUN6QixPQUFPLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQztTQUM5QjtRQUNELE9BQU8sSUFBSSwwQkFBMEIsQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLEVBQUUsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDO0lBQ3JGLENBQUM7O2dCQXpDRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLG9CQUFvQjtpQkFDL0I7Ozs7Z0JBcERPLGVBQWU7OzttQ0EwRHBCLEtBQUs7bUNBU0wsS0FBSztrQ0FVTCxLQUFLOztJQWdCUiw4QkFBQztDQUFBLEFBM0NELElBMkNDO1NBeENZLHVCQUF1Qjs7Ozs7O0lBS2xDLG1EQUM2Qzs7Ozs7Ozs7SUFRN0MsbURBQzZDOzs7Ozs7Ozs7SUFTN0Msa0RBQ3NEOzs7OztJQUUxQyx5Q0FBK0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0RpcmVjdGl2ZSwgSW5wdXQsIE9uQ2hhbmdlcywgU2ltcGxlQ2hhbmdlc30gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7TmF2aWdhdGlvbk1vZGV9IGZyb20gJy4uL25hdmlnYXRpb24vbmF2aWdhdGlvbi1tb2RlLmludGVyZmFjZSc7XG5pbXBvcnQge0NvbmZpZ3VyYWJsZU5hdmlnYXRpb25Nb2RlfSBmcm9tICcuLi9uYXZpZ2F0aW9uL2NvbmZpZ3VyYWJsZS1uYXZpZ2F0aW9uLW1vZGUnO1xuaW1wb3J0IHtXaXphcmRDb21wb25lbnR9IGZyb20gJy4uL2NvbXBvbmVudHMvd2l6YXJkLmNvbXBvbmVudCc7XG5cblxuLyoqXG4gKiBUaGUgW1thd05hdmlnYXRpb25Nb2RlXV0gZGlyZWN0aXZlIGNhbiBiZSB1c2VkIHRvIGN1c3RvbWl6ZSB3aXphcmQnZCBuYXZpZ2F0aW9uIG1vZGUuXG4gKlxuICogVGhlcmUgYXJlIHNldmVyYWwgdXNhZ2Ugb3B0aW9uczpcbiAqXG4gKiAjIyMgT3B0aW9uIDEuIEN1c3RvbWl6ZSB0aGUgZGVmYXVsdCBuYXZpZ2F0aW9uIG1vZGUgd2l0aCBbW25hdmlnYXRlQmFja3dhcmRdXSBhbmQvb3IgW1tuYXZpZ2F0ZUZvcndhcmRdXSBpbnB1dHMuXG4gKlxuICogYGBgaHRtbFxuICogPGF3LXdpemFyZCBbYXdOYXZpZ2F0aW9uTW9kZV0gbmF2aWdhdGVCYWNrd2FyZD1cImRlbnlcIiBuYXZpZ2F0ZUZvcndhcmQ9XCJhbGxvd1wiPi4uLjwvYXctd2l6YXJkPlxuICogYGBgXG4gKlxuICogIyMjIE9wdGlvbiAyLiBQYXNzIGluIGEgY3VzdG9tIG5hdmlnYXRpb24gbW9kZVxuICpcbiAqIGBgYHR5cGVzY3JpcHRcbiAqIGltcG9ydCB7IEJhc2VOYXZpZ2F0aW9uTW9kZSB9IGZyb20gJ2FuZ3VsYXItYXJjaHdpemFyZCdcbiAqXG4gKiBjbGFzcyBDdXN0b21OYXZpZ2F0aW9uTW9kZSBleHRlbmRzIEJhc2VOYXZpZ2F0aW9uTW9kZSB7XG4gKlxuICogICAvLyAuLi5cbiAqIH1cbiAqIGBgYFxuICpcbiAqIGBgYHR5cGVzY3JpcHRcbiAqIEBDb21wb25lbnQoe1xuICogICAvLyAuLi5cbiAqIH0pXG4gKiBjbGFzcyBNeUNvbXBvbmVudCB7XG4gKlxuICogICBuYXZpZ2F0aW9uTW9kZSA9IG5ldyBDdXN0b21OYXZpZ2F0aW9uTW9kZSgpO1xuICogfVxuICogYGBgXG4gKlxuICogYGBgaHRtbFxuICogPGF3LXdpemFyZCBbYXdOYXZpZ2F0aW9uTW9kZV09XCJuYXZpZ2F0aW9uTW9kZVwiPi4uLjwvYXctd2l6YXJkPlxuICogYGBgXG4gKlxuICogIyMjIEFkZGl0aW9uYWwgTm90ZXNcbiAqXG4gKiAtIFNwZWNpZnlpbmcgYSBjdXN0b20gbmF2aWdhdGlvbiBtb2RlIHRha2VzIHByaW9yaXR5IG92ZXIgW1tuYXZpZ2F0ZUJhY2t3YXJkXV0gYW5kIFtbbmF2aWdhdGVGb3J3YXJkXV0gaW5wdXRzXG4gKlxuICogLSBPbWl0dGluZyB0aGUgW1thd05hdmlnYXRpb25Nb2RlXV0gZGlyZWN0aXZlIG9yLCBlcXVhbGx5LCBzcGVjaWZ5aW5nIGp1c3QgW1thd05hdmlnYXRpb25Nb2RlXV0gd2l0aG91dFxuICogICBhbnkgaW5wdXRzIG9yIHBhcmFtZXRlcnMgY2F1c2VzIHRoZSB3aXphcmQgdG8gdXNlIHRoZSBkZWZhdWx0IFwic3RyaWN0XCIgbmF2aWdhdGlvbiBtb2RlIGVxdWl2YWxlbnQgdG9cbiAqXG4gKiBgYGBodG1sXG4gKiA8YXctd2l6YXJkIFthd05hdmlnYXRpb25Nb2RlXSBuYXZpZ2F0ZUJhY2t3YXJkPVwiZGVueVwiIG5hdmlnYXRlRm9yd2FyZD1cImFsbG93XCI+Li4uPC9hdy13aXphcmQ+XG4gKiBgYGBgXG4gKi9cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1thd05hdmlnYXRpb25Nb2RlXScsXG59KVxuZXhwb3J0IGNsYXNzIE5hdmlnYXRpb25Nb2RlRGlyZWN0aXZlIGltcGxlbWVudHMgT25DaGFuZ2VzIHtcblxuICAvKipcbiAgICogQ3VzdG9tIG5hdmlnYXRpb24gbW9kZSBpbnN0YW5jZSAob3B0aW9uYWwpLlxuICAgKi9cbiAgQElucHV0KClcbiAgcHVibGljIGF3TmF2aWdhdGlvbk1vZGU6IE5hdmlnYXRpb25Nb2RlfG51bGw7XG5cbiAgLyoqXG4gICAqIEEgcGFyYW1ldGVyIGZvciB0aGUgZGVmYXVsdCBuYXZpZ2F0aW9uIG1vZGUuICBDb250cm9scyB3aGV0aGVyIHdpemFyZCBzdGVwcyBiZWZvcmUgdGhlIGN1cnJlbnQgc3RlcCBhcmUgbmF2aWdhYmxlOlxuICAgKlxuICAgKiAtIGBuYXZpZ2F0ZUJhY2t3YXJkPVwiZGVueVwiYCAtLSB0aGUgc3RlcHMgYXJlIG5vdCBuYXZpZ2FibGVcbiAgICogLSBgbmF2aWdhdGVCYWNrd2FyZD1cImFsbG93XCJgIC0tIHRoZSBzdGVwcyBhcmUgbmF2aWdhYmxlXG4gICAqL1xuICBASW5wdXQoKVxuICBwdWJsaWMgbmF2aWdhdGVCYWNrd2FyZDogJ2FsbG93J3wnZGVueSd8bnVsbDtcblxuICAvKipcbiAgICogQSBwYXJhbWV0ZXIgZm9yIHRoZSBkZWZhdWx0IG5hdmlnYXRpb24gbW9kZS4gIENvbnRyb2xzIHdoZXRoZXIgd2l6YXJkIHN0ZXBzIGFmdGVyIHRoZSBjdXJyZW50IHN0ZXAgYXJlIG5hdmlnYWJsZTpcbiAgICpcbiAgICogLSBgbmF2aWdhdGVGb3J3YXJkPVwiZGVueVwiYCAtLSB0aGUgc3RlcHMgYXJlIG5vdCBuYXZpZ2FibGVcbiAgICogLSBgbmF2aWdhdGVGb3J3YXJkPVwiYWxsb3dcImAgLS0gdGhlIHN0ZXBzIGFyZSBuYXZpZ2FibGVcbiAgICogLSBgbmF2aWdhdGVGb3J3YXJkPVwidmlzaXRlZFwiYCAtLSBhIHN0ZXAgaXMgbmF2aWdhYmxlIGlmZiBpdCB3YXMgYWxyZWFkeSB2aXNpdGVkIGJlZm9yZVxuICAgKi9cbiAgQElucHV0KClcbiAgcHVibGljIG5hdmlnYXRlRm9yd2FyZDogJ2FsbG93J3wnZGVueSd8J3Zpc2l0ZWQnfG51bGw7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSB3aXphcmQ6IFdpemFyZENvbXBvbmVudCkgeyB9XG5cbiAgcHVibGljIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcbiAgICB0aGlzLndpemFyZC5uYXZpZ2F0aW9uID0gdGhpcy5nZXROYXZpZ2F0aW9uTW9kZSgpO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXROYXZpZ2F0aW9uTW9kZSgpOiBOYXZpZ2F0aW9uTW9kZSB7XG4gICAgaWYgKHRoaXMuYXdOYXZpZ2F0aW9uTW9kZSkge1xuICAgICAgcmV0dXJuIHRoaXMuYXdOYXZpZ2F0aW9uTW9kZTtcbiAgICB9XG4gICAgcmV0dXJuIG5ldyBDb25maWd1cmFibGVOYXZpZ2F0aW9uTW9kZSh0aGlzLm5hdmlnYXRlQmFja3dhcmQsIHRoaXMubmF2aWdhdGVGb3J3YXJkKTtcbiAgfVxuXG59XG4iXX0=