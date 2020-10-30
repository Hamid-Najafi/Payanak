/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * An interface containing the basic functionality, which must be provided by a navigation mode.
 * A navigation mode manages the navigation between different wizard steps, this contains the validation, if a step transition can be done
 *
 * For base implementation see [[BaseNavigationMode]].
 *
 * @author Marc Arndt
 * @record
 */
export function NavigationMode() { }
if (false) {
    /**
     * Checks, whether a wizard step, as defined by the given destination index, can be transitioned to.
     *
     * This method controls navigation by [[goToStep]], [[goToPreviousStep]], and [[goToNextStep]] directives.
     * Navigation by navigation bar is governed by [[isNavigable]].
     *
     * @param {?} wizard The wizard component to operate on
     * @param {?} destinationIndex The index of the destination step
     * @return {?} A [[Promise]] containing `true`, if the destination step can be transitioned to and false otherwise
     */
    NavigationMode.prototype.canGoToStep = function (wizard, destinationIndex) { };
    /**
     * Tries to transition to the wizard step, as denoted by the given destination index.
     *
     * Note: You do not have to call [[canGoToStep]] before calling [[goToStep]].
     * The [[canGoToStep]] method will be called automatically.
     *
     * @param {?} wizard The wizard component to operate on
     * @param {?} destinationIndex The index of the destination wizard step, which should be entered
     * @param {?=} preFinalize An event emitter, to be called before the step has been transitioned
     * @param {?=} postFinalize An event emitter, to be called after the step has been transitioned
     * @return {?}
     */
    NavigationMode.prototype.goToStep = function (wizard, destinationIndex, preFinalize, postFinalize) { };
    /**
     * Checks, whether the wizard step, located at the given index, can be navigated to using the navigation bar.
     *
     * @param {?} wizard The wizard component to operate on
     * @param {?} destinationIndex The index of the destination step
     * @return {?} True if the step can be navigated to, false otherwise
     */
    NavigationMode.prototype.isNavigable = function (wizard, destinationIndex) { };
    /**
     * Resets the state of this wizard.
     *
     * @param {?} wizard The wizard component to operate on
     * @return {?}
     */
    NavigationMode.prototype.reset = function (wizard) { };
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmF2aWdhdGlvbi1tb2RlLmludGVyZmFjZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2FuZ3VsYXItYXJjaHdpemFyZC8iLCJzb3VyY2VzIjpbImxpYi9uYXZpZ2F0aW9uL25hdmlnYXRpb24tbW9kZS5pbnRlcmZhY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQVdBLG9DQThDQzs7Ozs7Ozs7Ozs7O0lBbENDLCtFQUFpRjs7Ozs7Ozs7Ozs7OztJQWFqRix1R0FJMkM7Ozs7Ozs7O0lBUzNDLCtFQUF3RTs7Ozs7OztJQU94RSx1REFBcUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0V2ZW50RW1pdHRlcn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1dpemFyZENvbXBvbmVudH0gZnJvbSAnLi4vY29tcG9uZW50cy93aXphcmQuY29tcG9uZW50JztcblxuLyoqXG4gKiBBbiBpbnRlcmZhY2UgY29udGFpbmluZyB0aGUgYmFzaWMgZnVuY3Rpb25hbGl0eSwgd2hpY2ggbXVzdCBiZSBwcm92aWRlZCBieSBhIG5hdmlnYXRpb24gbW9kZS5cbiAqIEEgbmF2aWdhdGlvbiBtb2RlIG1hbmFnZXMgdGhlIG5hdmlnYXRpb24gYmV0d2VlbiBkaWZmZXJlbnQgd2l6YXJkIHN0ZXBzLCB0aGlzIGNvbnRhaW5zIHRoZSB2YWxpZGF0aW9uLCBpZiBhIHN0ZXAgdHJhbnNpdGlvbiBjYW4gYmUgZG9uZVxuICpcbiAqIEZvciBiYXNlIGltcGxlbWVudGF0aW9uIHNlZSBbW0Jhc2VOYXZpZ2F0aW9uTW9kZV1dLlxuICpcbiAqIEBhdXRob3IgTWFyYyBBcm5kdFxuICovXG5leHBvcnQgaW50ZXJmYWNlIE5hdmlnYXRpb25Nb2RlIHtcblxuICAvKipcbiAgICogQ2hlY2tzLCB3aGV0aGVyIGEgd2l6YXJkIHN0ZXAsIGFzIGRlZmluZWQgYnkgdGhlIGdpdmVuIGRlc3RpbmF0aW9uIGluZGV4LCBjYW4gYmUgdHJhbnNpdGlvbmVkIHRvLlxuICAgKlxuICAgKiBUaGlzIG1ldGhvZCBjb250cm9scyBuYXZpZ2F0aW9uIGJ5IFtbZ29Ub1N0ZXBdXSwgW1tnb1RvUHJldmlvdXNTdGVwXV0sIGFuZCBbW2dvVG9OZXh0U3RlcF1dIGRpcmVjdGl2ZXMuXG4gICAqIE5hdmlnYXRpb24gYnkgbmF2aWdhdGlvbiBiYXIgaXMgZ292ZXJuZWQgYnkgW1tpc05hdmlnYWJsZV1dLlxuICAgKlxuICAgKiBAcGFyYW0gd2l6YXJkIFRoZSB3aXphcmQgY29tcG9uZW50IHRvIG9wZXJhdGUgb25cbiAgICogQHBhcmFtIGRlc3RpbmF0aW9uSW5kZXggVGhlIGluZGV4IG9mIHRoZSBkZXN0aW5hdGlvbiBzdGVwXG4gICAqIEByZXR1cm5zIEEgW1tQcm9taXNlXV0gY29udGFpbmluZyBgdHJ1ZWAsIGlmIHRoZSBkZXN0aW5hdGlvbiBzdGVwIGNhbiBiZSB0cmFuc2l0aW9uZWQgdG8gYW5kIGZhbHNlIG90aGVyd2lzZVxuICAgKi9cbiAgY2FuR29Ub1N0ZXAod2l6YXJkOiBXaXphcmRDb21wb25lbnQsIGRlc3RpbmF0aW9uSW5kZXg6IG51bWJlcik6IFByb21pc2U8Ym9vbGVhbj47XG5cbiAgLyoqXG4gICAqIFRyaWVzIHRvIHRyYW5zaXRpb24gdG8gdGhlIHdpemFyZCBzdGVwLCBhcyBkZW5vdGVkIGJ5IHRoZSBnaXZlbiBkZXN0aW5hdGlvbiBpbmRleC5cbiAgICpcbiAgICogTm90ZTogWW91IGRvIG5vdCBoYXZlIHRvIGNhbGwgW1tjYW5Hb1RvU3RlcF1dIGJlZm9yZSBjYWxsaW5nIFtbZ29Ub1N0ZXBdXS5cbiAgICogVGhlIFtbY2FuR29Ub1N0ZXBdXSBtZXRob2Qgd2lsbCBiZSBjYWxsZWQgYXV0b21hdGljYWxseS5cbiAgICpcbiAgICogQHBhcmFtIHdpemFyZCBUaGUgd2l6YXJkIGNvbXBvbmVudCB0byBvcGVyYXRlIG9uXG4gICAqIEBwYXJhbSBkZXN0aW5hdGlvbkluZGV4IFRoZSBpbmRleCBvZiB0aGUgZGVzdGluYXRpb24gd2l6YXJkIHN0ZXAsIHdoaWNoIHNob3VsZCBiZSBlbnRlcmVkXG4gICAqIEBwYXJhbSBwcmVGaW5hbGl6ZSBBbiBldmVudCBlbWl0dGVyLCB0byBiZSBjYWxsZWQgYmVmb3JlIHRoZSBzdGVwIGhhcyBiZWVuIHRyYW5zaXRpb25lZFxuICAgKiBAcGFyYW0gcG9zdEZpbmFsaXplIEFuIGV2ZW50IGVtaXR0ZXIsIHRvIGJlIGNhbGxlZCBhZnRlciB0aGUgc3RlcCBoYXMgYmVlbiB0cmFuc2l0aW9uZWRcbiAgICovXG4gIGdvVG9TdGVwKFxuICAgIHdpemFyZDogV2l6YXJkQ29tcG9uZW50LFxuICAgIGRlc3RpbmF0aW9uSW5kZXg6IG51bWJlcixcbiAgICBwcmVGaW5hbGl6ZT86IEV2ZW50RW1pdHRlcjx2b2lkPixcbiAgICBwb3N0RmluYWxpemU/OiBFdmVudEVtaXR0ZXI8dm9pZD4pOiB2b2lkO1xuXG4gIC8qKlxuICAgKiBDaGVja3MsIHdoZXRoZXIgdGhlIHdpemFyZCBzdGVwLCBsb2NhdGVkIGF0IHRoZSBnaXZlbiBpbmRleCwgY2FuIGJlIG5hdmlnYXRlZCB0byB1c2luZyB0aGUgbmF2aWdhdGlvbiBiYXIuXG4gICAqXG4gICAqIEBwYXJhbSB3aXphcmQgVGhlIHdpemFyZCBjb21wb25lbnQgdG8gb3BlcmF0ZSBvblxuICAgKiBAcGFyYW0gZGVzdGluYXRpb25JbmRleCBUaGUgaW5kZXggb2YgdGhlIGRlc3RpbmF0aW9uIHN0ZXBcbiAgICogQHJldHVybnMgVHJ1ZSBpZiB0aGUgc3RlcCBjYW4gYmUgbmF2aWdhdGVkIHRvLCBmYWxzZSBvdGhlcndpc2VcbiAgICovXG4gIGlzTmF2aWdhYmxlKHdpemFyZDogV2l6YXJkQ29tcG9uZW50LCBkZXN0aW5hdGlvbkluZGV4OiBudW1iZXIpOiBib29sZWFuO1xuXG4gIC8qKlxuICAgKiBSZXNldHMgdGhlIHN0YXRlIG9mIHRoaXMgd2l6YXJkLlxuICAgKlxuICAgKiBAcGFyYW0gd2l6YXJkIFRoZSB3aXphcmQgY29tcG9uZW50IHRvIG9wZXJhdGUgb25cbiAgICovXG4gIHJlc2V0KHdpemFyZDogV2l6YXJkQ29tcG9uZW50KTogdm9pZDtcbn1cbiJdfQ==