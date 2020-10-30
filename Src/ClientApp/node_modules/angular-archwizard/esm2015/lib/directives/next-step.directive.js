/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, EventEmitter, HostListener, Output } from '@angular/core';
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
export class NextStepDirective {
    /**
     * Constructor
     *
     * @param {?} wizard The state of the wizard
     */
    constructor(wizard) {
        this.wizard = wizard;
        /**
         * This [[EventEmitter]] is called directly before the current step is exited during a transition through a component with this directive.
         */
        this.preFinalize = new EventEmitter();
        /**
         * This [[EventEmitter]] is called directly after the current step is exited during a transition through a component with this directive.
         */
        this.postFinalize = new EventEmitter();
    }
    /**
     * A convenience field for `preFinalize`
     * @return {?}
     */
    get finalize() {
        return this.preFinalize;
    }
    /**
     * A convenience name for `preFinalize`
     *
     * @param {?} emitter The [[EventEmitter]] to be set
     * @return {?}
     */
    set finalize(emitter) {
        /* istanbul ignore next */
        this.preFinalize = emitter;
    }
    /**
     * Listener method for `click` events on the component with this directive.
     * After this method is called the wizard will try to transition to the next step
     * @param {?} event
     * @return {?}
     */
    onClick(event) {
        this.wizard.goToNextStep(this.preFinalize, this.postFinalize);
    }
}
NextStepDirective.decorators = [
    { type: Directive, args: [{
                selector: '[awNextStep]'
            },] }
];
/** @nocollapse */
NextStepDirective.ctorParameters = () => [
    { type: WizardComponent }
];
NextStepDirective.propDecorators = {
    preFinalize: [{ type: Output }],
    postFinalize: [{ type: Output }],
    finalize: [{ type: Output }],
    onClick: [{ type: HostListener, args: ['click', ['$event'],] }]
};
if (false) {
    /**
     * This [[EventEmitter]] is called directly before the current step is exited during a transition through a component with this directive.
     * @type {?}
     */
    NextStepDirective.prototype.preFinalize;
    /**
     * This [[EventEmitter]] is called directly after the current step is exited during a transition through a component with this directive.
     * @type {?}
     */
    NextStepDirective.prototype.postFinalize;
    /**
     * @type {?}
     * @private
     */
    NextStepDirective.prototype.wizard;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmV4dC1zdGVwLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2FuZ3VsYXItYXJjaHdpemFyZC8iLCJzb3VyY2VzIjpbImxpYi9kaXJlY3RpdmVzL25leHQtc3RlcC5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUUsWUFBWSxFQUFFLFlBQVksRUFBRSxNQUFNLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDNUUsT0FBTyxFQUFDLGVBQWUsRUFBQyxNQUFNLGdDQUFnQyxDQUFDOzs7Ozs7Ozs7Ozs7QUFnQi9ELE1BQU0sT0FBTyxpQkFBaUI7Ozs7OztJQWtCNUIsWUFBb0IsTUFBdUI7UUFBdkIsV0FBTSxHQUFOLE1BQU0sQ0FBaUI7Ozs7UUFicEMsZ0JBQVcsR0FBdUIsSUFBSSxZQUFZLEVBQUUsQ0FBQzs7OztRQU1yRCxpQkFBWSxHQUF1QixJQUFJLFlBQVksRUFBRSxDQUFDO0lBUTdELENBQUM7Ozs7O0lBS0QsSUFBVyxRQUFRO1FBQ2pCLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQztJQUMxQixDQUFDOzs7Ozs7O0lBT0QsSUFDVyxRQUFRLENBQUMsT0FBMkI7UUFDN0MsMEJBQTBCO1FBQzFCLElBQUksQ0FBQyxXQUFXLEdBQUcsT0FBTyxDQUFDO0lBQzdCLENBQUM7Ozs7Ozs7SUFPTSxPQUFPLENBQUMsS0FBWTtRQUN6QixJQUFJLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztJQUNoRSxDQUFDOzs7WUFqREYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxjQUFjO2FBQ3pCOzs7O1lBZk8sZUFBZTs7OzBCQW9CcEIsTUFBTTsyQkFNTixNQUFNO3VCQXVCTixNQUFNO3NCQVVOLFlBQVksU0FBQyxPQUFPLEVBQUUsQ0FBQyxRQUFRLENBQUM7Ozs7Ozs7SUF2Q2pDLHdDQUM0RDs7Ozs7SUFLNUQseUNBQzZEOzs7OztJQU9qRCxtQ0FBK0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0RpcmVjdGl2ZSwgRXZlbnRFbWl0dGVyLCBIb3N0TGlzdGVuZXIsIE91dHB1dH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1dpemFyZENvbXBvbmVudH0gZnJvbSAnLi4vY29tcG9uZW50cy93aXphcmQuY29tcG9uZW50JztcblxuLyoqXG4gKiBUaGUgYGF3TmV4dFN0ZXBgIGRpcmVjdGl2ZSBjYW4gYmUgdXNlZCB0byBuYXZpZ2F0ZSB0byB0aGUgbmV4dCBzdGVwLlxuICpcbiAqICMjIyBTeW50YXhcbiAqXG4gKiBgYGBodG1sXG4gKiA8YnV0dG9uIGF3TmV4dFN0ZXAgKGZpbmFsaXplKT1cImZpbmFsaXplIG1ldGhvZFwiPi4uLjwvYnV0dG9uPlxuICogYGBgXG4gKlxuICogQGF1dGhvciBNYXJjIEFybmR0XG4gKi9cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1thd05leHRTdGVwXSdcbn0pXG5leHBvcnQgY2xhc3MgTmV4dFN0ZXBEaXJlY3RpdmUge1xuICAvKipcbiAgICogVGhpcyBbW0V2ZW50RW1pdHRlcl1dIGlzIGNhbGxlZCBkaXJlY3RseSBiZWZvcmUgdGhlIGN1cnJlbnQgc3RlcCBpcyBleGl0ZWQgZHVyaW5nIGEgdHJhbnNpdGlvbiB0aHJvdWdoIGEgY29tcG9uZW50IHdpdGggdGhpcyBkaXJlY3RpdmUuXG4gICAqL1xuICBAT3V0cHV0KClcbiAgcHVibGljIHByZUZpbmFsaXplOiBFdmVudEVtaXR0ZXI8dm9pZD4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgLyoqXG4gICAqIFRoaXMgW1tFdmVudEVtaXR0ZXJdXSBpcyBjYWxsZWQgZGlyZWN0bHkgYWZ0ZXIgdGhlIGN1cnJlbnQgc3RlcCBpcyBleGl0ZWQgZHVyaW5nIGEgdHJhbnNpdGlvbiB0aHJvdWdoIGEgY29tcG9uZW50IHdpdGggdGhpcyBkaXJlY3RpdmUuXG4gICAqL1xuICBAT3V0cHV0KClcbiAgcHVibGljIHBvc3RGaW5hbGl6ZTogRXZlbnRFbWl0dGVyPHZvaWQ+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIC8qKlxuICAgKiBDb25zdHJ1Y3RvclxuICAgKlxuICAgKiBAcGFyYW0gd2l6YXJkIFRoZSBzdGF0ZSBvZiB0aGUgd2l6YXJkXG4gICAqL1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHdpemFyZDogV2l6YXJkQ29tcG9uZW50KSB7XG4gIH1cblxuICAvKipcbiAgICogQSBjb252ZW5pZW5jZSBmaWVsZCBmb3IgYHByZUZpbmFsaXplYFxuICAgKi9cbiAgcHVibGljIGdldCBmaW5hbGl6ZSgpOiBFdmVudEVtaXR0ZXI8dm9pZD4ge1xuICAgIHJldHVybiB0aGlzLnByZUZpbmFsaXplO1xuICB9XG5cbiAgLyoqXG4gICAqIEEgY29udmVuaWVuY2UgbmFtZSBmb3IgYHByZUZpbmFsaXplYFxuICAgKlxuICAgKiBAcGFyYW0gZW1pdHRlciBUaGUgW1tFdmVudEVtaXR0ZXJdXSB0byBiZSBzZXRcbiAgICovXG4gIEBPdXRwdXQoKVxuICBwdWJsaWMgc2V0IGZpbmFsaXplKGVtaXR0ZXI6IEV2ZW50RW1pdHRlcjx2b2lkPikge1xuICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXG4gICAgdGhpcy5wcmVGaW5hbGl6ZSA9IGVtaXR0ZXI7XG4gIH1cblxuICAvKipcbiAgICogTGlzdGVuZXIgbWV0aG9kIGZvciBgY2xpY2tgIGV2ZW50cyBvbiB0aGUgY29tcG9uZW50IHdpdGggdGhpcyBkaXJlY3RpdmUuXG4gICAqIEFmdGVyIHRoaXMgbWV0aG9kIGlzIGNhbGxlZCB0aGUgd2l6YXJkIHdpbGwgdHJ5IHRvIHRyYW5zaXRpb24gdG8gdGhlIG5leHQgc3RlcFxuICAgKi9cbiAgQEhvc3RMaXN0ZW5lcignY2xpY2snLCBbJyRldmVudCddKVxuICBwdWJsaWMgb25DbGljayhldmVudDogRXZlbnQpOiB2b2lkIHtcbiAgICB0aGlzLndpemFyZC5nb1RvTmV4dFN0ZXAodGhpcy5wcmVGaW5hbGl6ZSwgdGhpcy5wb3N0RmluYWxpemUpO1xuICB9XG59XG4iXX0=