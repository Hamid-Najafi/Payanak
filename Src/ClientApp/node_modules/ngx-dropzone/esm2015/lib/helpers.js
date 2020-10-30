/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Coerces a data-bound value (typically a string) to a boolean.
 * Taken from https://github.com/angular/components/blob/master/src/cdk/coercion/boolean-property.ts
 * @param {?} value
 * @return {?}
 */
export function coerceBooleanProperty(value) {
    return value != null && `${value}` !== 'false';
}
/**
 * Whether the provided value is considered a number.
 * Taken from https://github.com/angular/components/blob/master/src/cdk/coercion/number-property.ts
 * @param {?} value
 * @return {?}
 */
export function coerceNumberProperty(value) {
    // parseFloat(value) handles most of the cases we're interested in (it treats null, empty string,
    // and other non-number values as NaN, where Number just uses 0) but it considers the string
    // '123hello' to be a valid number. Therefore we also check if Number(value) is NaN.
    return (!isNaN(parseFloat((/** @type {?} */ (value)))) && !isNaN(Number(value))) ? Number(value) : null;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVscGVycy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1kcm9wem9uZS8iLCJzb3VyY2VzIjpbImxpYi9oZWxwZXJzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFLQSxNQUFNLFVBQVUscUJBQXFCLENBQUMsS0FBVTtJQUUvQyxPQUFPLEtBQUssSUFBSSxJQUFJLElBQUksR0FBRyxLQUFLLEVBQUUsS0FBSyxPQUFPLENBQUM7QUFDaEQsQ0FBQzs7Ozs7OztBQU1ELE1BQU0sVUFBVSxvQkFBb0IsQ0FBQyxLQUFVO0lBRTlDLGlHQUFpRztJQUNqRyw0RkFBNEY7SUFDNUYsb0ZBQW9GO0lBQ3BGLE9BQU8sQ0FBQyxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsbUJBQUEsS0FBSyxFQUFPLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO0FBQzNGLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJcbi8qKlxuICogQ29lcmNlcyBhIGRhdGEtYm91bmQgdmFsdWUgKHR5cGljYWxseSBhIHN0cmluZykgdG8gYSBib29sZWFuLlxuICogVGFrZW4gZnJvbSBodHRwczovL2dpdGh1Yi5jb20vYW5ndWxhci9jb21wb25lbnRzL2Jsb2IvbWFzdGVyL3NyYy9jZGsvY29lcmNpb24vYm9vbGVhbi1wcm9wZXJ0eS50c1xuICovXG5leHBvcnQgZnVuY3Rpb24gY29lcmNlQm9vbGVhblByb3BlcnR5KHZhbHVlOiBhbnkpOiBib29sZWFuXG57XG5cdHJldHVybiB2YWx1ZSAhPSBudWxsICYmIGAke3ZhbHVlfWAgIT09ICdmYWxzZSc7XG59XG5cbi8qKlxuICogV2hldGhlciB0aGUgcHJvdmlkZWQgdmFsdWUgaXMgY29uc2lkZXJlZCBhIG51bWJlci5cbiAqIFRha2VuIGZyb20gaHR0cHM6Ly9naXRodWIuY29tL2FuZ3VsYXIvY29tcG9uZW50cy9ibG9iL21hc3Rlci9zcmMvY2RrL2NvZXJjaW9uL251bWJlci1wcm9wZXJ0eS50c1xuICovXG5leHBvcnQgZnVuY3Rpb24gY29lcmNlTnVtYmVyUHJvcGVydHkodmFsdWU6IGFueSk6IG51bWJlclxue1xuXHQvLyBwYXJzZUZsb2F0KHZhbHVlKSBoYW5kbGVzIG1vc3Qgb2YgdGhlIGNhc2VzIHdlJ3JlIGludGVyZXN0ZWQgaW4gKGl0IHRyZWF0cyBudWxsLCBlbXB0eSBzdHJpbmcsXG5cdC8vIGFuZCBvdGhlciBub24tbnVtYmVyIHZhbHVlcyBhcyBOYU4sIHdoZXJlIE51bWJlciBqdXN0IHVzZXMgMCkgYnV0IGl0IGNvbnNpZGVycyB0aGUgc3RyaW5nXG5cdC8vICcxMjNoZWxsbycgdG8gYmUgYSB2YWxpZCBudW1iZXIuIFRoZXJlZm9yZSB3ZSBhbHNvIGNoZWNrIGlmIE51bWJlcih2YWx1ZSkgaXMgTmFOLlxuXHRyZXR1cm4gKCFpc05hTihwYXJzZUZsb2F0KHZhbHVlIGFzIGFueSkpICYmICFpc05hTihOdW1iZXIodmFsdWUpKSkgPyBOdW1iZXIodmFsdWUpIDogbnVsbDtcbn1cbiJdfQ==