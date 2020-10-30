/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, forwardRef } from '@angular/core';
import { WizardCompletionStep } from '../util/wizard-completion-step.interface';
import { WizardStep } from '../util/wizard-step.interface';
/**
 * The `aw-wizard-completion-step` component can be used to define a completion/success step at the end of your wizard
 * After a `aw-wizard-completion-step` has been entered, it has the characteristic that the user is blocked from
 * leaving it again to a previous step.
 * In addition entering a `aw-wizard-completion-step` automatically sets the `aw-wizard` and all steps inside the `aw-wizard`
 * as completed.
 *
 * ### Syntax
 *
 * ```html
 * <aw-wizard-completion-step [stepTitle]="title of the wizard step"
 *    [navigationSymbol]="{ symbol: 'navigation symbol', fontFamily: 'navigation symbol font family' }"
 *    (stepEnter)="event emitter to be called when the wizard step is entered"
 *    (stepExit)="event emitter to be called when the wizard step is exited">
 *    ...
 * </aw-wizard-completion-step>
 * ```
 *
 * ### Example
 *
 * ```html
 * <aw-wizard-completion-step stepTitle="Step 1" [navigationSymbol]="{ symbol: '1' }">
 *    ...
 * </aw-wizard-completion-step>
 * ```
 *
 * With a navigation symbol from the `font-awesome` font:
 *
 * ```html
 * <aw-wizard-completion-step stepTitle="Step 1" [navigationSymbol]="{ symbol: '&#xf1ba;', fontFamily: 'FontAwesome' }">
 *    ...
 * </aw-wizard-completion-step>
 * ```
 *
 * @author Marc Arndt
 */
var WizardCompletionStepComponent = /** @class */ (function (_super) {
    tslib_1.__extends(WizardCompletionStepComponent, _super);
    function WizardCompletionStepComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    WizardCompletionStepComponent.decorators = [
        { type: Component, args: [{
                    selector: 'aw-wizard-completion-step',
                    template: "<ng-content></ng-content>\n",
                    providers: [
                        { provide: WizardStep, useExisting: forwardRef((/**
                             * @return {?}
                             */
                            function () { return WizardCompletionStepComponent; })) },
                        { provide: WizardCompletionStep, useExisting: forwardRef((/**
                             * @return {?}
                             */
                            function () { return WizardCompletionStepComponent; })) }
                    ]
                }] }
    ];
    return WizardCompletionStepComponent;
}(WizardCompletionStep));
export { WizardCompletionStepComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2l6YXJkLWNvbXBsZXRpb24tc3RlcC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9hbmd1bGFyLWFyY2h3aXphcmQvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy93aXphcmQtY29tcGxldGlvbi1zdGVwLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUUsVUFBVSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3BELE9BQU8sRUFBQyxvQkFBb0IsRUFBQyxNQUFNLDBDQUEwQyxDQUFDO0FBQzlFLE9BQU8sRUFBQyxVQUFVLEVBQUMsTUFBTSwrQkFBK0IsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXNDekQ7SUFRbUQseURBQW9CO0lBUnZFOztJQVNBLENBQUM7O2dCQVRBLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsMkJBQTJCO29CQUNyQyx1Q0FBb0Q7b0JBQ3BELFNBQVMsRUFBRTt3QkFDVCxFQUFDLE9BQU8sRUFBRSxVQUFVLEVBQUUsV0FBVyxFQUFFLFVBQVU7Ozs0QkFBQyxjQUFNLE9BQUEsNkJBQTZCLEVBQTdCLENBQTZCLEVBQUMsRUFBQzt3QkFDbkYsRUFBQyxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsV0FBVyxFQUFFLFVBQVU7Ozs0QkFBQyxjQUFNLE9BQUEsNkJBQTZCLEVBQTdCLENBQTZCLEVBQUMsRUFBQztxQkFDOUY7aUJBQ0Y7O0lBRUQsb0NBQUM7Q0FBQSxBQVRELENBUW1ELG9CQUFvQixHQUN0RTtTQURZLDZCQUE2QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBmb3J3YXJkUmVmfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7V2l6YXJkQ29tcGxldGlvblN0ZXB9IGZyb20gJy4uL3V0aWwvd2l6YXJkLWNvbXBsZXRpb24tc3RlcC5pbnRlcmZhY2UnO1xuaW1wb3J0IHtXaXphcmRTdGVwfSBmcm9tICcuLi91dGlsL3dpemFyZC1zdGVwLmludGVyZmFjZSc7XG5cbi8qKlxuICogVGhlIGBhdy13aXphcmQtY29tcGxldGlvbi1zdGVwYCBjb21wb25lbnQgY2FuIGJlIHVzZWQgdG8gZGVmaW5lIGEgY29tcGxldGlvbi9zdWNjZXNzIHN0ZXAgYXQgdGhlIGVuZCBvZiB5b3VyIHdpemFyZFxuICogQWZ0ZXIgYSBgYXctd2l6YXJkLWNvbXBsZXRpb24tc3RlcGAgaGFzIGJlZW4gZW50ZXJlZCwgaXQgaGFzIHRoZSBjaGFyYWN0ZXJpc3RpYyB0aGF0IHRoZSB1c2VyIGlzIGJsb2NrZWQgZnJvbVxuICogbGVhdmluZyBpdCBhZ2FpbiB0byBhIHByZXZpb3VzIHN0ZXAuXG4gKiBJbiBhZGRpdGlvbiBlbnRlcmluZyBhIGBhdy13aXphcmQtY29tcGxldGlvbi1zdGVwYCBhdXRvbWF0aWNhbGx5IHNldHMgdGhlIGBhdy13aXphcmRgIGFuZCBhbGwgc3RlcHMgaW5zaWRlIHRoZSBgYXctd2l6YXJkYFxuICogYXMgY29tcGxldGVkLlxuICpcbiAqICMjIyBTeW50YXhcbiAqXG4gKiBgYGBodG1sXG4gKiA8YXctd2l6YXJkLWNvbXBsZXRpb24tc3RlcCBbc3RlcFRpdGxlXT1cInRpdGxlIG9mIHRoZSB3aXphcmQgc3RlcFwiXG4gKiAgICBbbmF2aWdhdGlvblN5bWJvbF09XCJ7IHN5bWJvbDogJ25hdmlnYXRpb24gc3ltYm9sJywgZm9udEZhbWlseTogJ25hdmlnYXRpb24gc3ltYm9sIGZvbnQgZmFtaWx5JyB9XCJcbiAqICAgIChzdGVwRW50ZXIpPVwiZXZlbnQgZW1pdHRlciB0byBiZSBjYWxsZWQgd2hlbiB0aGUgd2l6YXJkIHN0ZXAgaXMgZW50ZXJlZFwiXG4gKiAgICAoc3RlcEV4aXQpPVwiZXZlbnQgZW1pdHRlciB0byBiZSBjYWxsZWQgd2hlbiB0aGUgd2l6YXJkIHN0ZXAgaXMgZXhpdGVkXCI+XG4gKiAgICAuLi5cbiAqIDwvYXctd2l6YXJkLWNvbXBsZXRpb24tc3RlcD5cbiAqIGBgYFxuICpcbiAqICMjIyBFeGFtcGxlXG4gKlxuICogYGBgaHRtbFxuICogPGF3LXdpemFyZC1jb21wbGV0aW9uLXN0ZXAgc3RlcFRpdGxlPVwiU3RlcCAxXCIgW25hdmlnYXRpb25TeW1ib2xdPVwieyBzeW1ib2w6ICcxJyB9XCI+XG4gKiAgICAuLi5cbiAqIDwvYXctd2l6YXJkLWNvbXBsZXRpb24tc3RlcD5cbiAqIGBgYFxuICpcbiAqIFdpdGggYSBuYXZpZ2F0aW9uIHN5bWJvbCBmcm9tIHRoZSBgZm9udC1hd2Vzb21lYCBmb250OlxuICpcbiAqIGBgYGh0bWxcbiAqIDxhdy13aXphcmQtY29tcGxldGlvbi1zdGVwIHN0ZXBUaXRsZT1cIlN0ZXAgMVwiIFtuYXZpZ2F0aW9uU3ltYm9sXT1cInsgc3ltYm9sOiAnJiN4ZjFiYTsnLCBmb250RmFtaWx5OiAnRm9udEF3ZXNvbWUnIH1cIj5cbiAqICAgIC4uLlxuICogPC9hdy13aXphcmQtY29tcGxldGlvbi1zdGVwPlxuICogYGBgXG4gKlxuICogQGF1dGhvciBNYXJjIEFybmR0XG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2F3LXdpemFyZC1jb21wbGV0aW9uLXN0ZXAnLFxuICB0ZW1wbGF0ZVVybDogJ3dpemFyZC1jb21wbGV0aW9uLXN0ZXAuY29tcG9uZW50Lmh0bWwnLFxuICBwcm92aWRlcnM6IFtcbiAgICB7cHJvdmlkZTogV2l6YXJkU3RlcCwgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gV2l6YXJkQ29tcGxldGlvblN0ZXBDb21wb25lbnQpfSxcbiAgICB7cHJvdmlkZTogV2l6YXJkQ29tcGxldGlvblN0ZXAsIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IFdpemFyZENvbXBsZXRpb25TdGVwQ29tcG9uZW50KX1cbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBXaXphcmRDb21wbGV0aW9uU3RlcENvbXBvbmVudCBleHRlbmRzIFdpemFyZENvbXBsZXRpb25TdGVwIHtcbn1cbiJdfQ==