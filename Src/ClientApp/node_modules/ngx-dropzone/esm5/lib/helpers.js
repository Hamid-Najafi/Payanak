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
    return value != null && "" + value !== 'false';
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVscGVycy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1kcm9wem9uZS8iLCJzb3VyY2VzIjpbImxpYi9oZWxwZXJzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFLQSxNQUFNLFVBQVUscUJBQXFCLENBQUMsS0FBVTtJQUUvQyxPQUFPLEtBQUssSUFBSSxJQUFJLElBQUksS0FBRyxLQUFPLEtBQUssT0FBTyxDQUFDO0FBQ2hELENBQUM7Ozs7Ozs7QUFNRCxNQUFNLFVBQVUsb0JBQW9CLENBQUMsS0FBVTtJQUU5QyxpR0FBaUc7SUFDakcsNEZBQTRGO0lBQzVGLG9GQUFvRjtJQUNwRixPQUFPLENBQUMsQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLG1CQUFBLEtBQUssRUFBTyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQztBQUMzRixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiXG4vKipcbiAqIENvZXJjZXMgYSBkYXRhLWJvdW5kIHZhbHVlICh0eXBpY2FsbHkgYSBzdHJpbmcpIHRvIGEgYm9vbGVhbi5cbiAqIFRha2VuIGZyb20gaHR0cHM6Ly9naXRodWIuY29tL2FuZ3VsYXIvY29tcG9uZW50cy9ibG9iL21hc3Rlci9zcmMvY2RrL2NvZXJjaW9uL2Jvb2xlYW4tcHJvcGVydHkudHNcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNvZXJjZUJvb2xlYW5Qcm9wZXJ0eSh2YWx1ZTogYW55KTogYm9vbGVhblxue1xuXHRyZXR1cm4gdmFsdWUgIT0gbnVsbCAmJiBgJHt2YWx1ZX1gICE9PSAnZmFsc2UnO1xufVxuXG4vKipcbiAqIFdoZXRoZXIgdGhlIHByb3ZpZGVkIHZhbHVlIGlzIGNvbnNpZGVyZWQgYSBudW1iZXIuXG4gKiBUYWtlbiBmcm9tIGh0dHBzOi8vZ2l0aHViLmNvbS9hbmd1bGFyL2NvbXBvbmVudHMvYmxvYi9tYXN0ZXIvc3JjL2Nkay9jb2VyY2lvbi9udW1iZXItcHJvcGVydHkudHNcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNvZXJjZU51bWJlclByb3BlcnR5KHZhbHVlOiBhbnkpOiBudW1iZXJcbntcblx0Ly8gcGFyc2VGbG9hdCh2YWx1ZSkgaGFuZGxlcyBtb3N0IG9mIHRoZSBjYXNlcyB3ZSdyZSBpbnRlcmVzdGVkIGluIChpdCB0cmVhdHMgbnVsbCwgZW1wdHkgc3RyaW5nLFxuXHQvLyBhbmQgb3RoZXIgbm9uLW51bWJlciB2YWx1ZXMgYXMgTmFOLCB3aGVyZSBOdW1iZXIganVzdCB1c2VzIDApIGJ1dCBpdCBjb25zaWRlcnMgdGhlIHN0cmluZ1xuXHQvLyAnMTIzaGVsbG8nIHRvIGJlIGEgdmFsaWQgbnVtYmVyLiBUaGVyZWZvcmUgd2UgYWxzbyBjaGVjayBpZiBOdW1iZXIodmFsdWUpIGlzIE5hTi5cblx0cmV0dXJuICghaXNOYU4ocGFyc2VGbG9hdCh2YWx1ZSBhcyBhbnkpKSAmJiAhaXNOYU4oTnVtYmVyKHZhbHVlKSkpID8gTnVtYmVyKHZhbHVlKSA6IG51bGw7XG59XG4iXX0=