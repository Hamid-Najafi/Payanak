/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
/**
 * @record
 */
export function FileSelectResult() { }
if (false) {
    /**
     * The added files, emitted in the filesAdded event.
     * @type {?}
     */
    FileSelectResult.prototype.addedFiles;
    /**
     * The rejected files, emitted in the filesRejected event.
     * @type {?}
     */
    FileSelectResult.prototype.rejectedFiles;
}
/**
 * @record
 */
export function RejectedFile() { }
if (false) {
    /**
     * The reason the file was rejected.
     * @type {?|undefined}
     */
    RejectedFile.prototype.reason;
}
/**
 * This service contains the filtering logic to be applied to
 * any dropped or selected file. If a file matches all criteria
 * like maximum size or accept type, it will be emitted in the
 * addedFiles array, otherwise in the rejectedFiles array.
 */
var NgxDropzoneService = /** @class */ (function () {
    function NgxDropzoneService() {
    }
    /**
     * @param {?} files
     * @param {?} accept
     * @param {?} maxFileSize
     * @param {?} multiple
     * @return {?}
     */
    NgxDropzoneService.prototype.parseFileList = /**
     * @param {?} files
     * @param {?} accept
     * @param {?} maxFileSize
     * @param {?} multiple
     * @return {?}
     */
    function (files, accept, maxFileSize, multiple) {
        /** @type {?} */
        var addedFiles = [];
        /** @type {?} */
        var rejectedFiles = [];
        for (var i = 0; i < files.length; i++) {
            /** @type {?} */
            var file = files.item(i);
            if (!this.isAccepted(file, accept)) {
                this.rejectFile(rejectedFiles, file, 'type');
                continue;
            }
            if (maxFileSize && file.size > maxFileSize) {
                this.rejectFile(rejectedFiles, file, 'size');
                continue;
            }
            if (!multiple && addedFiles.length >= 1) {
                this.rejectFile(rejectedFiles, file, 'no_multiple');
                continue;
            }
            addedFiles.push(file);
        }
        /** @type {?} */
        var result = {
            addedFiles: addedFiles,
            rejectedFiles: rejectedFiles
        };
        return result;
    };
    /**
     * @private
     * @param {?} file
     * @param {?} accept
     * @return {?}
     */
    NgxDropzoneService.prototype.isAccepted = /**
     * @private
     * @param {?} file
     * @param {?} accept
     * @return {?}
     */
    function (file, accept) {
        if (accept === '*') {
            return true;
        }
        /** @type {?} */
        var acceptFiletypes = accept.split(',').map((/**
         * @param {?} it
         * @return {?}
         */
        function (it) { return it.toLowerCase().trim(); }));
        /** @type {?} */
        var filetype = file.type.toLowerCase();
        /** @type {?} */
        var filename = file.name.toLowerCase();
        /** @type {?} */
        var matchedFileType = acceptFiletypes.find((/**
         * @param {?} acceptFiletype
         * @return {?}
         */
        function (acceptFiletype) {
            // check for wildcard mimetype (e.g. image/*)
            if (acceptFiletype.endsWith('/*')) {
                return filetype.split('/')[0] === acceptFiletype.split('/')[0];
            }
            // check for file extension (e.g. .csv)
            if (acceptFiletype.startsWith(".")) {
                return filename.endsWith(acceptFiletype);
            }
            // check for exact mimetype match (e.g. image/jpeg)
            return acceptFiletype == filetype;
        }));
        return !!matchedFileType;
    };
    /**
     * @private
     * @param {?} rejectedFiles
     * @param {?} file
     * @param {?} reason
     * @return {?}
     */
    NgxDropzoneService.prototype.rejectFile = /**
     * @private
     * @param {?} rejectedFiles
     * @param {?} file
     * @param {?} reason
     * @return {?}
     */
    function (rejectedFiles, file, reason) {
        /** @type {?} */
        var rejectedFile = (/** @type {?} */ (file));
        rejectedFile.reason = reason;
        rejectedFiles.push(rejectedFile);
    };
    NgxDropzoneService.decorators = [
        { type: Injectable },
    ];
    return NgxDropzoneService;
}());
export { NgxDropzoneService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWRyb3B6b25lLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtZHJvcHpvbmUvIiwic291cmNlcyI6WyJsaWIvbmd4LWRyb3B6b25lLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7Ozs7QUFFM0Msc0NBT0M7Ozs7OztJQUpBLHNDQUFtQjs7Ozs7SUFHbkIseUNBQThCOzs7OztBQUcvQixrQ0FJQzs7Ozs7O0lBREEsOEJBQXNCOzs7Ozs7OztBQVd2QjtJQUFBO0lBeUVBLENBQUM7Ozs7Ozs7O0lBdEVBLDBDQUFhOzs7Ozs7O0lBQWIsVUFBYyxLQUFlLEVBQUUsTUFBYyxFQUFFLFdBQW1CLEVBQUUsUUFBaUI7O1lBRTlFLFVBQVUsR0FBVyxFQUFFOztZQUN2QixhQUFhLEdBQW1CLEVBQUU7UUFFeEMsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEtBQUssQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7O2dCQUNoQyxJQUFJLEdBQUcsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7WUFFMUIsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxFQUFFLE1BQU0sQ0FBQyxFQUFFO2dCQUNuQyxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsRUFBRSxJQUFJLEVBQUUsTUFBTSxDQUFDLENBQUM7Z0JBQzdDLFNBQVM7YUFDVDtZQUVELElBQUksV0FBVyxJQUFJLElBQUksQ0FBQyxJQUFJLEdBQUcsV0FBVyxFQUFFO2dCQUMzQyxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsRUFBRSxJQUFJLEVBQUUsTUFBTSxDQUFDLENBQUM7Z0JBQzdDLFNBQVM7YUFDVDtZQUVELElBQUksQ0FBQyxRQUFRLElBQUksVUFBVSxDQUFDLE1BQU0sSUFBSSxDQUFDLEVBQUU7Z0JBQ3hDLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxFQUFFLElBQUksRUFBRSxhQUFhLENBQUMsQ0FBQztnQkFDcEQsU0FBUzthQUNUO1lBRUQsVUFBVSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUN0Qjs7WUFFSyxNQUFNLEdBQXFCO1lBQ2hDLFVBQVUsWUFBQTtZQUNWLGFBQWEsZUFBQTtTQUNiO1FBRUQsT0FBTyxNQUFNLENBQUM7SUFDZixDQUFDOzs7Ozs7O0lBRU8sdUNBQVU7Ozs7OztJQUFsQixVQUFtQixJQUFVLEVBQUUsTUFBYztRQUU1QyxJQUFJLE1BQU0sS0FBSyxHQUFHLEVBQUU7WUFDbkIsT0FBTyxJQUFJLENBQUM7U0FDWjs7WUFFSyxlQUFlLEdBQUcsTUFBTSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHOzs7O1FBQUMsVUFBQSxFQUFFLElBQUksT0FBQSxFQUFFLENBQUMsV0FBVyxFQUFFLENBQUMsSUFBSSxFQUFFLEVBQXZCLENBQXVCLEVBQUM7O1lBQ3RFLFFBQVEsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRTs7WUFDbEMsUUFBUSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFOztZQUVsQyxlQUFlLEdBQUcsZUFBZSxDQUFDLElBQUk7Ozs7UUFBQyxVQUFBLGNBQWM7WUFFMUQsNkNBQTZDO1lBQzdDLElBQUksY0FBYyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsRUFBRTtnQkFDbEMsT0FBTyxRQUFRLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLGNBQWMsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7YUFDL0Q7WUFFRCx1Q0FBdUM7WUFDdkMsSUFBSSxjQUFjLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxFQUFFO2dCQUNuQyxPQUFPLFFBQVEsQ0FBQyxRQUFRLENBQUMsY0FBYyxDQUFDLENBQUM7YUFDekM7WUFFRCxtREFBbUQ7WUFDbkQsT0FBTyxjQUFjLElBQUksUUFBUSxDQUFDO1FBQ25DLENBQUMsRUFBQztRQUVGLE9BQU8sQ0FBQyxDQUFDLGVBQWUsQ0FBQztJQUMxQixDQUFDOzs7Ozs7OztJQUVPLHVDQUFVOzs7Ozs7O0lBQWxCLFVBQW1CLGFBQTZCLEVBQUUsSUFBVSxFQUFFLE1BQW9COztZQUUzRSxZQUFZLEdBQUcsbUJBQUEsSUFBSSxFQUFnQjtRQUN6QyxZQUFZLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztRQUU3QixhQUFhLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO0lBQ2xDLENBQUM7O2dCQXhFRCxVQUFVOztJQXlFWCx5QkFBQztDQUFBLEFBekVELElBeUVDO1NBeEVZLGtCQUFrQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuZXhwb3J0IGludGVyZmFjZSBGaWxlU2VsZWN0UmVzdWx0IHtcblxuXHQvKiogVGhlIGFkZGVkIGZpbGVzLCBlbWl0dGVkIGluIHRoZSBmaWxlc0FkZGVkIGV2ZW50LiAqL1xuXHRhZGRlZEZpbGVzOiBGaWxlW107XG5cblx0LyoqIFRoZSByZWplY3RlZCBmaWxlcywgZW1pdHRlZCBpbiB0aGUgZmlsZXNSZWplY3RlZCBldmVudC4gKi9cblx0cmVqZWN0ZWRGaWxlczogUmVqZWN0ZWRGaWxlW107XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgUmVqZWN0ZWRGaWxlIGV4dGVuZHMgRmlsZSB7XG5cblx0LyoqIFRoZSByZWFzb24gdGhlIGZpbGUgd2FzIHJlamVjdGVkLiAqL1xuXHRyZWFzb24/OiBSZWplY3RSZWFzb247XG59XG5cbmV4cG9ydCB0eXBlIFJlamVjdFJlYXNvbiA9ICd0eXBlJyB8ICdzaXplJyB8ICdub19tdWx0aXBsZSc7XG5cbi8qKlxuICogVGhpcyBzZXJ2aWNlIGNvbnRhaW5zIHRoZSBmaWx0ZXJpbmcgbG9naWMgdG8gYmUgYXBwbGllZCB0b1xuICogYW55IGRyb3BwZWQgb3Igc2VsZWN0ZWQgZmlsZS4gSWYgYSBmaWxlIG1hdGNoZXMgYWxsIGNyaXRlcmlhXG4gKiBsaWtlIG1heGltdW0gc2l6ZSBvciBhY2NlcHQgdHlwZSwgaXQgd2lsbCBiZSBlbWl0dGVkIGluIHRoZVxuICogYWRkZWRGaWxlcyBhcnJheSwgb3RoZXJ3aXNlIGluIHRoZSByZWplY3RlZEZpbGVzIGFycmF5LlxuICovXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgTmd4RHJvcHpvbmVTZXJ2aWNlIHtcblxuXHRwYXJzZUZpbGVMaXN0KGZpbGVzOiBGaWxlTGlzdCwgYWNjZXB0OiBzdHJpbmcsIG1heEZpbGVTaXplOiBudW1iZXIsIG11bHRpcGxlOiBib29sZWFuKTogRmlsZVNlbGVjdFJlc3VsdCB7XG5cblx0XHRjb25zdCBhZGRlZEZpbGVzOiBGaWxlW10gPSBbXTtcblx0XHRjb25zdCByZWplY3RlZEZpbGVzOiBSZWplY3RlZEZpbGVbXSA9IFtdO1xuXG5cdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCBmaWxlcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0Y29uc3QgZmlsZSA9IGZpbGVzLml0ZW0oaSk7XG5cblx0XHRcdGlmICghdGhpcy5pc0FjY2VwdGVkKGZpbGUsIGFjY2VwdCkpIHtcblx0XHRcdFx0dGhpcy5yZWplY3RGaWxlKHJlamVjdGVkRmlsZXMsIGZpbGUsICd0eXBlJyk7XG5cdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAobWF4RmlsZVNpemUgJiYgZmlsZS5zaXplID4gbWF4RmlsZVNpemUpIHtcblx0XHRcdFx0dGhpcy5yZWplY3RGaWxlKHJlamVjdGVkRmlsZXMsIGZpbGUsICdzaXplJyk7XG5cdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAoIW11bHRpcGxlICYmIGFkZGVkRmlsZXMubGVuZ3RoID49IDEpIHtcblx0XHRcdFx0dGhpcy5yZWplY3RGaWxlKHJlamVjdGVkRmlsZXMsIGZpbGUsICdub19tdWx0aXBsZScpO1xuXHRcdFx0XHRjb250aW51ZTtcblx0XHRcdH1cblxuXHRcdFx0YWRkZWRGaWxlcy5wdXNoKGZpbGUpO1xuXHRcdH1cblxuXHRcdGNvbnN0IHJlc3VsdDogRmlsZVNlbGVjdFJlc3VsdCA9IHtcblx0XHRcdGFkZGVkRmlsZXMsXG5cdFx0XHRyZWplY3RlZEZpbGVzXG5cdFx0fTtcblxuXHRcdHJldHVybiByZXN1bHQ7XG5cdH1cblxuXHRwcml2YXRlIGlzQWNjZXB0ZWQoZmlsZTogRmlsZSwgYWNjZXB0OiBzdHJpbmcpOiBib29sZWFuIHtcblxuXHRcdGlmIChhY2NlcHQgPT09ICcqJykge1xuXHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0fVxuXG5cdFx0Y29uc3QgYWNjZXB0RmlsZXR5cGVzID0gYWNjZXB0LnNwbGl0KCcsJykubWFwKGl0ID0+IGl0LnRvTG93ZXJDYXNlKCkudHJpbSgpKTtcblx0XHRjb25zdCBmaWxldHlwZSA9IGZpbGUudHlwZS50b0xvd2VyQ2FzZSgpO1xuXHRcdGNvbnN0IGZpbGVuYW1lID0gZmlsZS5uYW1lLnRvTG93ZXJDYXNlKCk7XG5cblx0XHRjb25zdCBtYXRjaGVkRmlsZVR5cGUgPSBhY2NlcHRGaWxldHlwZXMuZmluZChhY2NlcHRGaWxldHlwZSA9PiB7XG5cblx0XHRcdC8vIGNoZWNrIGZvciB3aWxkY2FyZCBtaW1ldHlwZSAoZS5nLiBpbWFnZS8qKVxuXHRcdFx0aWYgKGFjY2VwdEZpbGV0eXBlLmVuZHNXaXRoKCcvKicpKSB7XG5cdFx0XHRcdHJldHVybiBmaWxldHlwZS5zcGxpdCgnLycpWzBdID09PSBhY2NlcHRGaWxldHlwZS5zcGxpdCgnLycpWzBdO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBjaGVjayBmb3IgZmlsZSBleHRlbnNpb24gKGUuZy4gLmNzdilcblx0XHRcdGlmIChhY2NlcHRGaWxldHlwZS5zdGFydHNXaXRoKFwiLlwiKSkge1xuXHRcdFx0XHRyZXR1cm4gZmlsZW5hbWUuZW5kc1dpdGgoYWNjZXB0RmlsZXR5cGUpO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBjaGVjayBmb3IgZXhhY3QgbWltZXR5cGUgbWF0Y2ggKGUuZy4gaW1hZ2UvanBlZylcblx0XHRcdHJldHVybiBhY2NlcHRGaWxldHlwZSA9PSBmaWxldHlwZTtcblx0XHR9KTtcblxuXHRcdHJldHVybiAhIW1hdGNoZWRGaWxlVHlwZTtcblx0fVxuXG5cdHByaXZhdGUgcmVqZWN0RmlsZShyZWplY3RlZEZpbGVzOiBSZWplY3RlZEZpbGVbXSwgZmlsZTogRmlsZSwgcmVhc29uOiBSZWplY3RSZWFzb24pIHtcblxuXHRcdGNvbnN0IHJlamVjdGVkRmlsZSA9IGZpbGUgYXMgUmVqZWN0ZWRGaWxlO1xuXHRcdHJlamVjdGVkRmlsZS5yZWFzb24gPSByZWFzb247XG5cblx0XHRyZWplY3RlZEZpbGVzLnB1c2gocmVqZWN0ZWRGaWxlKTtcblx0fVxufVxuIl19