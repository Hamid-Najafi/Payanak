/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { WizardCompletionStepComponent } from './components/wizard-completion-step.component';
import { WizardNavigationBarComponent } from './components/wizard-navigation-bar.component';
import { WizardStepComponent } from './components/wizard-step.component';
import { WizardComponent } from './components/wizard.component';
import { EnableBackLinksDirective } from './directives/enable-back-links.directive';
import { GoToStepDirective } from './directives/go-to-step.directive';
import { NextStepDirective } from './directives/next-step.directive';
import { OptionalStepDirective } from './directives/optional-step.directive';
import { PreviousStepDirective } from './directives/previous-step.directive';
import { ResetWizardDirective } from './directives/reset-wizard.directive';
import { SelectedStepDirective } from './directives/selected-step.directive';
import { WizardCompletionStepDirective } from './directives/wizard-completion-step.directive';
import { WizardStepSymbolDirective } from './directives/wizard-step-symbol.directive';
import { WizardStepTitleDirective } from './directives/wizard-step-title.directive';
import { WizardStepDirective } from './directives/wizard-step.directive';
import { NavigationModeDirective } from './directives/navigation-mode.directive';
import { CompletedStepDirective } from './directives/completed-step.directive';
/**
 * The module defining all the content inside `angular-archwizard`
 *
 * @author Marc Arndt
 */
export class ArchwizardModule {
    /* istanbul ignore next */
    /**
     * @return {?}
     */
    static forRoot() {
        return {
            ngModule: ArchwizardModule,
            providers: [
            // Nothing here yet
            ]
        };
    }
}
ArchwizardModule.decorators = [
    { type: NgModule, args: [{
                declarations: [
                    WizardComponent,
                    WizardStepComponent,
                    WizardNavigationBarComponent,
                    WizardCompletionStepComponent,
                    GoToStepDirective,
                    NextStepDirective,
                    PreviousStepDirective,
                    OptionalStepDirective,
                    WizardStepSymbolDirective,
                    WizardStepTitleDirective,
                    EnableBackLinksDirective,
                    WizardStepDirective,
                    WizardCompletionStepDirective,
                    SelectedStepDirective,
                    ResetWizardDirective,
                    NavigationModeDirective,
                    CompletedStepDirective,
                ],
                imports: [
                    CommonModule
                ],
                exports: [
                    WizardComponent,
                    WizardStepComponent,
                    WizardNavigationBarComponent,
                    WizardCompletionStepComponent,
                    GoToStepDirective,
                    NextStepDirective,
                    PreviousStepDirective,
                    OptionalStepDirective,
                    WizardStepSymbolDirective,
                    WizardStepTitleDirective,
                    EnableBackLinksDirective,
                    WizardStepDirective,
                    WizardCompletionStepDirective,
                    SelectedStepDirective,
                    ResetWizardDirective,
                    NavigationModeDirective,
                    CompletedStepDirective,
                ]
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXJjaHdpemFyZC5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9hbmd1bGFyLWFyY2h3aXphcmQvIiwic291cmNlcyI6WyJsaWIvYXJjaHdpemFyZC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBQyxZQUFZLEVBQUMsTUFBTSxpQkFBaUIsQ0FBQztBQUM3QyxPQUFPLEVBQXNCLFFBQVEsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUM1RCxPQUFPLEVBQUMsNkJBQTZCLEVBQUMsTUFBTSwrQ0FBK0MsQ0FBQztBQUM1RixPQUFPLEVBQUMsNEJBQTRCLEVBQUMsTUFBTSw4Q0FBOEMsQ0FBQztBQUMxRixPQUFPLEVBQUMsbUJBQW1CLEVBQUMsTUFBTSxvQ0FBb0MsQ0FBQztBQUN2RSxPQUFPLEVBQUMsZUFBZSxFQUFDLE1BQU0sK0JBQStCLENBQUM7QUFDOUQsT0FBTyxFQUFDLHdCQUF3QixFQUFDLE1BQU0sMENBQTBDLENBQUM7QUFDbEYsT0FBTyxFQUFDLGlCQUFpQixFQUFDLE1BQU0sbUNBQW1DLENBQUM7QUFDcEUsT0FBTyxFQUFDLGlCQUFpQixFQUFDLE1BQU0sa0NBQWtDLENBQUM7QUFDbkUsT0FBTyxFQUFDLHFCQUFxQixFQUFDLE1BQU0sc0NBQXNDLENBQUM7QUFDM0UsT0FBTyxFQUFDLHFCQUFxQixFQUFDLE1BQU0sc0NBQXNDLENBQUM7QUFDM0UsT0FBTyxFQUFDLG9CQUFvQixFQUFDLE1BQU0scUNBQXFDLENBQUM7QUFDekUsT0FBTyxFQUFDLHFCQUFxQixFQUFDLE1BQU0sc0NBQXNDLENBQUM7QUFDM0UsT0FBTyxFQUFDLDZCQUE2QixFQUFDLE1BQU0sK0NBQStDLENBQUM7QUFDNUYsT0FBTyxFQUFDLHlCQUF5QixFQUFDLE1BQU0sMkNBQTJDLENBQUM7QUFDcEYsT0FBTyxFQUFDLHdCQUF3QixFQUFDLE1BQU0sMENBQTBDLENBQUM7QUFDbEYsT0FBTyxFQUFDLG1CQUFtQixFQUFDLE1BQU0sb0NBQW9DLENBQUM7QUFDdkUsT0FBTyxFQUFDLHVCQUF1QixFQUFDLE1BQU0sd0NBQXdDLENBQUM7QUFDL0UsT0FBTyxFQUFDLHNCQUFzQixFQUFDLE1BQU0sdUNBQXVDLENBQUM7Ozs7OztBQW1EN0UsTUFBTSxPQUFPLGdCQUFnQjs7Ozs7SUFFcEIsTUFBTSxDQUFDLE9BQU87UUFDbkIsT0FBTztZQUNMLFFBQVEsRUFBRSxnQkFBZ0I7WUFDMUIsU0FBUyxFQUFFO1lBQ1QsbUJBQW1CO2FBQ3BCO1NBQ0YsQ0FBQztJQUNKLENBQUM7OztZQXBERixRQUFRLFNBQUM7Z0JBQ1IsWUFBWSxFQUFFO29CQUNaLGVBQWU7b0JBQ2YsbUJBQW1CO29CQUNuQiw0QkFBNEI7b0JBQzVCLDZCQUE2QjtvQkFDN0IsaUJBQWlCO29CQUNqQixpQkFBaUI7b0JBQ2pCLHFCQUFxQjtvQkFDckIscUJBQXFCO29CQUNyQix5QkFBeUI7b0JBQ3pCLHdCQUF3QjtvQkFDeEIsd0JBQXdCO29CQUN4QixtQkFBbUI7b0JBQ25CLDZCQUE2QjtvQkFDN0IscUJBQXFCO29CQUNyQixvQkFBb0I7b0JBQ3BCLHVCQUF1QjtvQkFDdkIsc0JBQXNCO2lCQUN2QjtnQkFDRCxPQUFPLEVBQUU7b0JBQ1AsWUFBWTtpQkFDYjtnQkFDRCxPQUFPLEVBQUU7b0JBQ1AsZUFBZTtvQkFDZixtQkFBbUI7b0JBQ25CLDRCQUE0QjtvQkFDNUIsNkJBQTZCO29CQUM3QixpQkFBaUI7b0JBQ2pCLGlCQUFpQjtvQkFDakIscUJBQXFCO29CQUNyQixxQkFBcUI7b0JBQ3JCLHlCQUF5QjtvQkFDekIsd0JBQXdCO29CQUN4Qix3QkFBd0I7b0JBQ3hCLG1CQUFtQjtvQkFDbkIsNkJBQTZCO29CQUM3QixxQkFBcUI7b0JBQ3JCLG9CQUFvQjtvQkFDcEIsdUJBQXVCO29CQUN2QixzQkFBc0I7aUJBQ3ZCO2FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbW1vbk1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7TW9kdWxlV2l0aFByb3ZpZGVycywgTmdNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtXaXphcmRDb21wbGV0aW9uU3RlcENvbXBvbmVudH0gZnJvbSAnLi9jb21wb25lbnRzL3dpemFyZC1jb21wbGV0aW9uLXN0ZXAuY29tcG9uZW50JztcbmltcG9ydCB7V2l6YXJkTmF2aWdhdGlvbkJhckNvbXBvbmVudH0gZnJvbSAnLi9jb21wb25lbnRzL3dpemFyZC1uYXZpZ2F0aW9uLWJhci5jb21wb25lbnQnO1xuaW1wb3J0IHtXaXphcmRTdGVwQ29tcG9uZW50fSBmcm9tICcuL2NvbXBvbmVudHMvd2l6YXJkLXN0ZXAuY29tcG9uZW50JztcbmltcG9ydCB7V2l6YXJkQ29tcG9uZW50fSBmcm9tICcuL2NvbXBvbmVudHMvd2l6YXJkLmNvbXBvbmVudCc7XG5pbXBvcnQge0VuYWJsZUJhY2tMaW5rc0RpcmVjdGl2ZX0gZnJvbSAnLi9kaXJlY3RpdmVzL2VuYWJsZS1iYWNrLWxpbmtzLmRpcmVjdGl2ZSc7XG5pbXBvcnQge0dvVG9TdGVwRGlyZWN0aXZlfSBmcm9tICcuL2RpcmVjdGl2ZXMvZ28tdG8tc3RlcC5kaXJlY3RpdmUnO1xuaW1wb3J0IHtOZXh0U3RlcERpcmVjdGl2ZX0gZnJvbSAnLi9kaXJlY3RpdmVzL25leHQtc3RlcC5kaXJlY3RpdmUnO1xuaW1wb3J0IHtPcHRpb25hbFN0ZXBEaXJlY3RpdmV9IGZyb20gJy4vZGlyZWN0aXZlcy9vcHRpb25hbC1zdGVwLmRpcmVjdGl2ZSc7XG5pbXBvcnQge1ByZXZpb3VzU3RlcERpcmVjdGl2ZX0gZnJvbSAnLi9kaXJlY3RpdmVzL3ByZXZpb3VzLXN0ZXAuZGlyZWN0aXZlJztcbmltcG9ydCB7UmVzZXRXaXphcmREaXJlY3RpdmV9IGZyb20gJy4vZGlyZWN0aXZlcy9yZXNldC13aXphcmQuZGlyZWN0aXZlJztcbmltcG9ydCB7U2VsZWN0ZWRTdGVwRGlyZWN0aXZlfSBmcm9tICcuL2RpcmVjdGl2ZXMvc2VsZWN0ZWQtc3RlcC5kaXJlY3RpdmUnO1xuaW1wb3J0IHtXaXphcmRDb21wbGV0aW9uU3RlcERpcmVjdGl2ZX0gZnJvbSAnLi9kaXJlY3RpdmVzL3dpemFyZC1jb21wbGV0aW9uLXN0ZXAuZGlyZWN0aXZlJztcbmltcG9ydCB7V2l6YXJkU3RlcFN5bWJvbERpcmVjdGl2ZX0gZnJvbSAnLi9kaXJlY3RpdmVzL3dpemFyZC1zdGVwLXN5bWJvbC5kaXJlY3RpdmUnO1xuaW1wb3J0IHtXaXphcmRTdGVwVGl0bGVEaXJlY3RpdmV9IGZyb20gJy4vZGlyZWN0aXZlcy93aXphcmQtc3RlcC10aXRsZS5kaXJlY3RpdmUnO1xuaW1wb3J0IHtXaXphcmRTdGVwRGlyZWN0aXZlfSBmcm9tICcuL2RpcmVjdGl2ZXMvd2l6YXJkLXN0ZXAuZGlyZWN0aXZlJztcbmltcG9ydCB7TmF2aWdhdGlvbk1vZGVEaXJlY3RpdmV9IGZyb20gJy4vZGlyZWN0aXZlcy9uYXZpZ2F0aW9uLW1vZGUuZGlyZWN0aXZlJztcbmltcG9ydCB7Q29tcGxldGVkU3RlcERpcmVjdGl2ZX0gZnJvbSAnLi9kaXJlY3RpdmVzL2NvbXBsZXRlZC1zdGVwLmRpcmVjdGl2ZSc7XG5cblxuLyoqXG4gKiBUaGUgbW9kdWxlIGRlZmluaW5nIGFsbCB0aGUgY29udGVudCBpbnNpZGUgYGFuZ3VsYXItYXJjaHdpemFyZGBcbiAqXG4gKiBAYXV0aG9yIE1hcmMgQXJuZHRcbiAqL1xuQE5nTW9kdWxlKHtcbiAgZGVjbGFyYXRpb25zOiBbXG4gICAgV2l6YXJkQ29tcG9uZW50LFxuICAgIFdpemFyZFN0ZXBDb21wb25lbnQsXG4gICAgV2l6YXJkTmF2aWdhdGlvbkJhckNvbXBvbmVudCxcbiAgICBXaXphcmRDb21wbGV0aW9uU3RlcENvbXBvbmVudCxcbiAgICBHb1RvU3RlcERpcmVjdGl2ZSxcbiAgICBOZXh0U3RlcERpcmVjdGl2ZSxcbiAgICBQcmV2aW91c1N0ZXBEaXJlY3RpdmUsXG4gICAgT3B0aW9uYWxTdGVwRGlyZWN0aXZlLFxuICAgIFdpemFyZFN0ZXBTeW1ib2xEaXJlY3RpdmUsXG4gICAgV2l6YXJkU3RlcFRpdGxlRGlyZWN0aXZlLFxuICAgIEVuYWJsZUJhY2tMaW5rc0RpcmVjdGl2ZSxcbiAgICBXaXphcmRTdGVwRGlyZWN0aXZlLFxuICAgIFdpemFyZENvbXBsZXRpb25TdGVwRGlyZWN0aXZlLFxuICAgIFNlbGVjdGVkU3RlcERpcmVjdGl2ZSxcbiAgICBSZXNldFdpemFyZERpcmVjdGl2ZSxcbiAgICBOYXZpZ2F0aW9uTW9kZURpcmVjdGl2ZSxcbiAgICBDb21wbGV0ZWRTdGVwRGlyZWN0aXZlLFxuICBdLFxuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlXG4gIF0sXG4gIGV4cG9ydHM6IFtcbiAgICBXaXphcmRDb21wb25lbnQsXG4gICAgV2l6YXJkU3RlcENvbXBvbmVudCxcbiAgICBXaXphcmROYXZpZ2F0aW9uQmFyQ29tcG9uZW50LFxuICAgIFdpemFyZENvbXBsZXRpb25TdGVwQ29tcG9uZW50LFxuICAgIEdvVG9TdGVwRGlyZWN0aXZlLFxuICAgIE5leHRTdGVwRGlyZWN0aXZlLFxuICAgIFByZXZpb3VzU3RlcERpcmVjdGl2ZSxcbiAgICBPcHRpb25hbFN0ZXBEaXJlY3RpdmUsXG4gICAgV2l6YXJkU3RlcFN5bWJvbERpcmVjdGl2ZSxcbiAgICBXaXphcmRTdGVwVGl0bGVEaXJlY3RpdmUsXG4gICAgRW5hYmxlQmFja0xpbmtzRGlyZWN0aXZlLFxuICAgIFdpemFyZFN0ZXBEaXJlY3RpdmUsXG4gICAgV2l6YXJkQ29tcGxldGlvblN0ZXBEaXJlY3RpdmUsXG4gICAgU2VsZWN0ZWRTdGVwRGlyZWN0aXZlLFxuICAgIFJlc2V0V2l6YXJkRGlyZWN0aXZlLFxuICAgIE5hdmlnYXRpb25Nb2RlRGlyZWN0aXZlLFxuICAgIENvbXBsZXRlZFN0ZXBEaXJlY3RpdmUsXG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgQXJjaHdpemFyZE1vZHVsZSB7XG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXG4gIHB1YmxpYyBzdGF0aWMgZm9yUm9vdCgpOiBNb2R1bGVXaXRoUHJvdmlkZXJzIHtcbiAgICByZXR1cm4ge1xuICAgICAgbmdNb2R1bGU6IEFyY2h3aXphcmRNb2R1bGUsXG4gICAgICBwcm92aWRlcnM6IFtcbiAgICAgICAgLy8gTm90aGluZyBoZXJlIHlldFxuICAgICAgXVxuICAgIH07XG4gIH1cbn1cbiJdfQ==