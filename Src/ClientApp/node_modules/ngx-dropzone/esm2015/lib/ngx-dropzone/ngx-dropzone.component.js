/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, EventEmitter, Output, Input, ViewChild, ContentChildren, QueryList, HostBinding, HostListener, Self, ElementRef } from '@angular/core';
import { NgxDropzoneService } from '../ngx-dropzone.service';
import { coerceBooleanProperty, coerceNumberProperty } from '../helpers';
import { NgxDropzonePreviewComponent } from '../ngx-dropzone-preview/ngx-dropzone-preview.component';
/**
 * @record
 */
export function NgxDropzoneChangeEvent() { }
if (false) {
    /** @type {?} */
    NgxDropzoneChangeEvent.prototype.source;
    /** @type {?} */
    NgxDropzoneChangeEvent.prototype.addedFiles;
    /** @type {?} */
    NgxDropzoneChangeEvent.prototype.rejectedFiles;
}
export class NgxDropzoneComponent {
    /**
     * @param {?} service
     */
    constructor(service) {
        this.service = service;
        /**
         * Emitted when any files were added or rejected.
         */
        this.change = new EventEmitter();
        /**
         * Set the accepted file types. Defaults to '*'.
         */
        this.accept = '*';
        this._disabled = false;
        this._multiple = true;
        this._maxFileSize = undefined;
        this._expandable = false;
        this._disableClick = false;
        this._isHovered = false;
    }
    /**
     * @return {?}
     */
    get _hasPreviews() {
        return !!this._previewChildren.length;
    }
    /**
     * Disable any user interaction with the component.
     * @return {?}
     */
    get disabled() {
        return this._disabled;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set disabled(value) {
        this._disabled = coerceBooleanProperty(value);
        if (this._isHovered) {
            this._isHovered = false;
        }
    }
    /**
     * Allow the selection of multiple files.
     * @return {?}
     */
    get multiple() {
        return this._multiple;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set multiple(value) {
        this._multiple = coerceBooleanProperty(value);
    }
    /**
     * Set the maximum size a single file may have.
     * @return {?}
     */
    get maxFileSize() {
        return this._maxFileSize;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set maxFileSize(value) {
        this._maxFileSize = coerceNumberProperty(value);
    }
    /**
     * Allow the dropzone container to expand vertically.
     * @return {?}
     */
    get expandable() {
        return this._expandable;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set expandable(value) {
        this._expandable = coerceBooleanProperty(value);
    }
    /**
     * Open the file selector on click.
     * @return {?}
     */
    get disableClick() {
        return this._disableClick;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set disableClick(value) {
        this._disableClick = coerceBooleanProperty(value);
    }
    /**
     * Show the native OS file explorer to select files.
     * @return {?}
     */
    _onClick() {
        if (!this.disableClick) {
            this.showFileSelector();
        }
    }
    /**
     * @param {?} event
     * @return {?}
     */
    _onDragOver(event) {
        if (this.disabled) {
            return;
        }
        this.preventDefault(event);
        this._isHovered = true;
    }
    /**
     * @return {?}
     */
    _onDragLeave() {
        this._isHovered = false;
    }
    /**
     * @param {?} event
     * @return {?}
     */
    _onDrop(event) {
        if (this.disabled) {
            return;
        }
        this.preventDefault(event);
        this._isHovered = false;
        this.handleFileDrop(event.dataTransfer.files);
    }
    /**
     * @return {?}
     */
    showFileSelector() {
        if (!this.disabled) {
            ((/** @type {?} */ (this._fileInput.nativeElement))).click();
        }
    }
    /**
     * @param {?} event
     * @return {?}
     */
    _onFilesSelected(event) {
        /** @type {?} */
        const files = event.target.files;
        this.handleFileDrop(files);
        // Reset the native file input element to allow selecting the same file again
        this._fileInput.nativeElement.value = '';
        // fix(#32): Prevent the default event behaviour which caused the change event to emit twice.
        this.preventDefault(event);
    }
    /**
     * @private
     * @param {?} files
     * @return {?}
     */
    handleFileDrop(files) {
        /** @type {?} */
        const result = this.service.parseFileList(files, this.accept, this.maxFileSize, this.multiple);
        this.change.next({
            addedFiles: result.addedFiles,
            rejectedFiles: result.rejectedFiles,
            source: this
        });
    }
    /**
     * @private
     * @param {?} event
     * @return {?}
     */
    preventDefault(event) {
        event.preventDefault();
        event.stopPropagation();
    }
}
NgxDropzoneComponent.decorators = [
    { type: Component, args: [{
                selector: 'ngx-dropzone, [ngx-dropzone]',
                template: `<input #fileInput type="file" [id]="id" [multiple]="multiple" [accept]="accept" [disabled]="disabled"
  (change)="_onFilesSelected($event)" [attr.aria-label]="ariaLabel" [attr.aria-labelledby]="ariaLabelledby"
  [attr.aria-describedby]="ariaDescribedBy">
<ng-content select="ngx-dropzone-label" *ngIf="!_hasPreviews"></ng-content>
<ng-content select="ngx-dropzone-preview"></ng-content>
<ng-content></ng-content>
`,
                styles: [`:host(){display:flex;align-items:center;height:180px;background:#fff;cursor:pointer;color:#717386;border:2px dashed #717386;border-radius:5px;font-size:16px;overflow-x:auto}:host().ngx-dz-hovered{border-style:solid}:host().ngx-dz-disabled{opacity:.5;cursor:no-drop;pointer-events:none}:host().expandable{overflow:hidden;height:unset;min-height:180px;flex-wrap:wrap}:host().unclickable{cursor:default}:host() ::ng-deep ngx-dropzone-label{text-align:center;z-index:10;margin:10px auto}:host() input{width:.1px;height:.1px;opacity:0;overflow:hidden;position:absolute;z-index:-1}:host() input:focus+::ng-deep ngx-dropzone-label{outline:#000 dotted 1px;outline:-webkit-focus-ring-color auto 5px}`],
                providers: [NgxDropzoneService]
            },] },
];
/** @nocollapse */
NgxDropzoneComponent.ctorParameters = () => [
    { type: NgxDropzoneService, decorators: [{ type: Self }] }
];
NgxDropzoneComponent.propDecorators = {
    _previewChildren: [{ type: ContentChildren, args: [NgxDropzonePreviewComponent, { descendants: true },] }],
    _fileInput: [{ type: ViewChild, args: ['fileInput',] }],
    change: [{ type: Output }],
    accept: [{ type: Input }],
    disabled: [{ type: Input }, { type: HostBinding, args: ['class.ngx-dz-disabled',] }],
    multiple: [{ type: Input }],
    maxFileSize: [{ type: Input }],
    expandable: [{ type: Input }, { type: HostBinding, args: ['class.expandable',] }],
    disableClick: [{ type: Input }, { type: HostBinding, args: ['class.unclickable',] }],
    id: [{ type: Input }],
    ariaLabel: [{ type: Input, args: ['aria-label',] }],
    ariaLabelledby: [{ type: Input, args: ['aria-labelledby',] }],
    ariaDescribedBy: [{ type: Input, args: ['aria-describedby',] }],
    _isHovered: [{ type: HostBinding, args: ['class.ngx-dz-hovered',] }],
    _onClick: [{ type: HostListener, args: ['click',] }],
    _onDragOver: [{ type: HostListener, args: ['dragover', ['$event'],] }],
    _onDragLeave: [{ type: HostListener, args: ['dragleave',] }],
    _onDrop: [{ type: HostListener, args: ['drop', ['$event'],] }]
};
if (false) {
    /**
     * A list of the content-projected preview children.
     * @type {?}
     */
    NgxDropzoneComponent.prototype._previewChildren;
    /**
     * A template reference to the native file input element.
     * @type {?}
     */
    NgxDropzoneComponent.prototype._fileInput;
    /**
     * Emitted when any files were added or rejected.
     * @type {?}
     */
    NgxDropzoneComponent.prototype.change;
    /**
     * Set the accepted file types. Defaults to '*'.
     * @type {?}
     */
    NgxDropzoneComponent.prototype.accept;
    /**
     * @type {?}
     * @private
     */
    NgxDropzoneComponent.prototype._disabled;
    /**
     * @type {?}
     * @private
     */
    NgxDropzoneComponent.prototype._multiple;
    /**
     * @type {?}
     * @private
     */
    NgxDropzoneComponent.prototype._maxFileSize;
    /**
     * @type {?}
     * @private
     */
    NgxDropzoneComponent.prototype._expandable;
    /**
     * @type {?}
     * @private
     */
    NgxDropzoneComponent.prototype._disableClick;
    /**
     * Expose the id, aria-label, aria-labelledby and aria-describedby of the native file input for proper accessibility.
     * @type {?}
     */
    NgxDropzoneComponent.prototype.id;
    /** @type {?} */
    NgxDropzoneComponent.prototype.ariaLabel;
    /** @type {?} */
    NgxDropzoneComponent.prototype.ariaLabelledby;
    /** @type {?} */
    NgxDropzoneComponent.prototype.ariaDescribedBy;
    /** @type {?} */
    NgxDropzoneComponent.prototype._isHovered;
    /**
     * @type {?}
     * @private
     */
    NgxDropzoneComponent.prototype.service;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWRyb3B6b25lLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1kcm9wem9uZS8iLCJzb3VyY2VzIjpbImxpYi9uZ3gtZHJvcHpvbmUvbmd4LWRyb3B6b25lLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxZQUFZLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUUsZUFBZSxFQUFFLFNBQVMsRUFBRSxXQUFXLEVBQUUsWUFBWSxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDbkssT0FBTyxFQUFFLGtCQUFrQixFQUFvQixNQUFNLHlCQUF5QixDQUFDO0FBQy9FLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxvQkFBb0IsRUFBRSxNQUFNLFlBQVksQ0FBQztBQUN6RSxPQUFPLEVBQUUsMkJBQTJCLEVBQUUsTUFBTSx3REFBd0QsQ0FBQzs7OztBQUVyRyw0Q0FJQzs7O0lBSEMsd0NBQTZCOztJQUM3Qiw0Q0FBbUI7O0lBQ25CLCtDQUFzQjs7QUFleEIsTUFBTSxPQUFPLG9CQUFvQjs7OztJQUUvQixZQUNrQixPQUEyQjtRQUEzQixZQUFPLEdBQVAsT0FBTyxDQUFvQjs7OztRQWUxQixXQUFNLEdBQUcsSUFBSSxZQUFZLEVBQTBCLENBQUM7Ozs7UUFHOUQsV0FBTSxHQUFHLEdBQUcsQ0FBQztRQWVkLGNBQVMsR0FBRyxLQUFLLENBQUM7UUFVbEIsY0FBUyxHQUFHLElBQUksQ0FBQztRQVVqQixpQkFBWSxHQUFXLFNBQVMsQ0FBQztRQVdqQyxnQkFBVyxHQUFZLEtBQUssQ0FBQztRQVc3QixrQkFBYSxHQUFHLEtBQUssQ0FBQztRQVM5QixlQUFVLEdBQUcsS0FBSyxDQUFDO0lBbkZmLENBQUM7Ozs7SUFNTCxJQUFJLFlBQVk7UUFDZCxPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxDQUFDO0lBQ3hDLENBQUM7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QkFVbkMsWUFBWSxTQUFDLFdBQVc7c0JBS3hCLFlBQVksU0FBQyxNQUFNLEVBQUUsQ0FBQyxRQUFRLENBQUM7Ozs7Ozs7SUF6R2hDLGdEQUN5RDs7Ozs7SUFPekQsMENBQStDOzs7OztJQUcvQyxzQ0FBdUU7Ozs7O0lBR3ZFLHNDQUFzQjs7Ozs7SUFldEIseUNBQTBCOzs7OztJQVUxQix5Q0FBeUI7Ozs7O0lBVXpCLDRDQUF5Qzs7Ozs7SUFXekMsMkNBQXFDOzs7OztJQVdyQyw2Q0FBOEI7Ozs7O0lBRzlCLGtDQUFvQjs7SUFDcEIseUNBQXVDOztJQUN2Qyw4Q0FBaUQ7O0lBQ2pELCtDQUFtRDs7SUFFbkQsMENBQ21COzs7OztJQXBGakIsdUNBQTJDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIEV2ZW50RW1pdHRlciwgT3V0cHV0LCBJbnB1dCwgVmlld0NoaWxkLCBDb250ZW50Q2hpbGRyZW4sIFF1ZXJ5TGlzdCwgSG9zdEJpbmRpbmcsIEhvc3RMaXN0ZW5lciwgU2VsZiwgRWxlbWVudFJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTmd4RHJvcHpvbmVTZXJ2aWNlLCBGaWxlU2VsZWN0UmVzdWx0IH0gZnJvbSAnLi4vbmd4LWRyb3B6b25lLnNlcnZpY2UnO1xuaW1wb3J0IHsgY29lcmNlQm9vbGVhblByb3BlcnR5LCBjb2VyY2VOdW1iZXJQcm9wZXJ0eSB9IGZyb20gJy4uL2hlbHBlcnMnO1xuaW1wb3J0IHsgTmd4RHJvcHpvbmVQcmV2aWV3Q29tcG9uZW50IH0gZnJvbSAnLi4vbmd4LWRyb3B6b25lLXByZXZpZXcvbmd4LWRyb3B6b25lLXByZXZpZXcuY29tcG9uZW50JztcblxuZXhwb3J0IGludGVyZmFjZSBOZ3hEcm9wem9uZUNoYW5nZUV2ZW50IHtcbiAgc291cmNlOiBOZ3hEcm9wem9uZUNvbXBvbmVudDtcbiAgYWRkZWRGaWxlczogRmlsZVtdO1xuICByZWplY3RlZEZpbGVzOiBGaWxlW107XG59XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ25neC1kcm9wem9uZSwgW25neC1kcm9wem9uZV0nLFxuICB0ZW1wbGF0ZTogYDxpbnB1dCAjZmlsZUlucHV0IHR5cGU9XCJmaWxlXCIgW2lkXT1cImlkXCIgW211bHRpcGxlXT1cIm11bHRpcGxlXCIgW2FjY2VwdF09XCJhY2NlcHRcIiBbZGlzYWJsZWRdPVwiZGlzYWJsZWRcIlxuICAoY2hhbmdlKT1cIl9vbkZpbGVzU2VsZWN0ZWQoJGV2ZW50KVwiIFthdHRyLmFyaWEtbGFiZWxdPVwiYXJpYUxhYmVsXCIgW2F0dHIuYXJpYS1sYWJlbGxlZGJ5XT1cImFyaWFMYWJlbGxlZGJ5XCJcbiAgW2F0dHIuYXJpYS1kZXNjcmliZWRieV09XCJhcmlhRGVzY3JpYmVkQnlcIj5cbjxuZy1jb250ZW50IHNlbGVjdD1cIm5neC1kcm9wem9uZS1sYWJlbFwiICpuZ0lmPVwiIV9oYXNQcmV2aWV3c1wiPjwvbmctY29udGVudD5cbjxuZy1jb250ZW50IHNlbGVjdD1cIm5neC1kcm9wem9uZS1wcmV2aWV3XCI+PC9uZy1jb250ZW50PlxuPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxuYCxcbiAgc3R5bGVzOiBbYDpob3N0KCl7ZGlzcGxheTpmbGV4O2FsaWduLWl0ZW1zOmNlbnRlcjtoZWlnaHQ6MTgwcHg7YmFja2dyb3VuZDojZmZmO2N1cnNvcjpwb2ludGVyO2NvbG9yOiM3MTczODY7Ym9yZGVyOjJweCBkYXNoZWQgIzcxNzM4Njtib3JkZXItcmFkaXVzOjVweDtmb250LXNpemU6MTZweDtvdmVyZmxvdy14OmF1dG99Omhvc3QoKS5uZ3gtZHotaG92ZXJlZHtib3JkZXItc3R5bGU6c29saWR9Omhvc3QoKS5uZ3gtZHotZGlzYWJsZWR7b3BhY2l0eTouNTtjdXJzb3I6bm8tZHJvcDtwb2ludGVyLWV2ZW50czpub25lfTpob3N0KCkuZXhwYW5kYWJsZXtvdmVyZmxvdzpoaWRkZW47aGVpZ2h0OnVuc2V0O21pbi1oZWlnaHQ6MTgwcHg7ZmxleC13cmFwOndyYXB9Omhvc3QoKS51bmNsaWNrYWJsZXtjdXJzb3I6ZGVmYXVsdH06aG9zdCgpIDo6bmctZGVlcCBuZ3gtZHJvcHpvbmUtbGFiZWx7dGV4dC1hbGlnbjpjZW50ZXI7ei1pbmRleDoxMDttYXJnaW46MTBweCBhdXRvfTpob3N0KCkgaW5wdXR7d2lkdGg6LjFweDtoZWlnaHQ6LjFweDtvcGFjaXR5OjA7b3ZlcmZsb3c6aGlkZGVuO3Bvc2l0aW9uOmFic29sdXRlO3otaW5kZXg6LTF9Omhvc3QoKSBpbnB1dDpmb2N1cys6Om5nLWRlZXAgbmd4LWRyb3B6b25lLWxhYmVse291dGxpbmU6IzAwMCBkb3R0ZWQgMXB4O291dGxpbmU6LXdlYmtpdC1mb2N1cy1yaW5nLWNvbG9yIGF1dG8gNXB4fWBdLFxuICBwcm92aWRlcnM6IFtOZ3hEcm9wem9uZVNlcnZpY2VdXG59KVxuZXhwb3J0IGNsYXNzIE5neERyb3B6b25lQ29tcG9uZW50IHtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBAU2VsZigpIHByaXZhdGUgc2VydmljZTogTmd4RHJvcHpvbmVTZXJ2aWNlXG4gICkgeyB9XG5cbiAgLyoqIEEgbGlzdCBvZiB0aGUgY29udGVudC1wcm9qZWN0ZWQgcHJldmlldyBjaGlsZHJlbi4gKi9cbiAgQENvbnRlbnRDaGlsZHJlbihOZ3hEcm9wem9uZVByZXZpZXdDb21wb25lbnQsIHsgZGVzY2VuZGFudHM6IHRydWUgfSlcbiAgX3ByZXZpZXdDaGlsZHJlbjogUXVlcnlMaXN0PE5neERyb3B6b25lUHJldmlld0NvbXBvbmVudD47XG5cbiAgZ2V0IF9oYXNQcmV2aWV3cygpOiBib29sZWFuIHtcbiAgICByZXR1cm4gISF0aGlzLl9wcmV2aWV3Q2hpbGRyZW4ubGVuZ3RoO1xuICB9XG5cbiAgLyoqIEEgdGVtcGxhdGUgcmVmZXJlbmNlIHRvIHRoZSBuYXRpdmUgZmlsZSBpbnB1dCBlbGVtZW50LiAqL1xuICBAVmlld0NoaWxkKCdmaWxlSW5wdXQnKSBfZmlsZUlucHV0OiBFbGVtZW50UmVmO1xuXG4gIC8qKiBFbWl0dGVkIHdoZW4gYW55IGZpbGVzIHdlcmUgYWRkZWQgb3IgcmVqZWN0ZWQuICovXG4gIEBPdXRwdXQoKSByZWFkb25seSBjaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPE5neERyb3B6b25lQ2hhbmdlRXZlbnQ+KCk7XG5cbiAgLyoqIFNldCB0aGUgYWNjZXB0ZWQgZmlsZSB0eXBlcy4gRGVmYXVsdHMgdG8gJyonLiAqL1xuICBASW5wdXQoKSBhY2NlcHQgPSAnKic7XG5cbiAgLyoqIERpc2FibGUgYW55IHVzZXIgaW50ZXJhY3Rpb24gd2l0aCB0aGUgY29tcG9uZW50LiAqL1xuICBASW5wdXQoKVxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLm5neC1kei1kaXNhYmxlZCcpXG4gIGdldCBkaXNhYmxlZCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fZGlzYWJsZWQ7XG4gIH1cbiAgc2V0IGRpc2FibGVkKHZhbHVlOiBib29sZWFuKSB7XG4gICAgdGhpcy5fZGlzYWJsZWQgPSBjb2VyY2VCb29sZWFuUHJvcGVydHkodmFsdWUpO1xuXG4gICAgaWYgKHRoaXMuX2lzSG92ZXJlZCkge1xuICAgICAgdGhpcy5faXNIb3ZlcmVkID0gZmFsc2U7XG4gICAgfVxuICB9XG4gIHByaXZhdGUgX2Rpc2FibGVkID0gZmFsc2U7XG5cbiAgLyoqIEFsbG93IHRoZSBzZWxlY3Rpb24gb2YgbXVsdGlwbGUgZmlsZXMuICovXG4gIEBJbnB1dCgpXG4gIGdldCBtdWx0aXBsZSgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fbXVsdGlwbGU7XG4gIH1cbiAgc2V0IG11bHRpcGxlKHZhbHVlOiBib29sZWFuKSB7XG4gICAgdGhpcy5fbXVsdGlwbGUgPSBjb2VyY2VCb29sZWFuUHJvcGVydHkodmFsdWUpO1xuICB9XG4gIHByaXZhdGUgX211bHRpcGxlID0gdHJ1ZTtcblxuICAvKiogU2V0IHRoZSBtYXhpbXVtIHNpemUgYSBzaW5nbGUgZmlsZSBtYXkgaGF2ZS4gKi9cbiAgQElucHV0KClcbiAgZ2V0IG1heEZpbGVTaXplKCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuX21heEZpbGVTaXplO1xuICB9XG4gIHNldCBtYXhGaWxlU2l6ZSh2YWx1ZTogbnVtYmVyKSB7XG4gICAgdGhpcy5fbWF4RmlsZVNpemUgPSBjb2VyY2VOdW1iZXJQcm9wZXJ0eSh2YWx1ZSk7XG4gIH1cbiAgcHJpdmF0ZSBfbWF4RmlsZVNpemU6IG51bWJlciA9IHVuZGVmaW5lZDtcblxuICAvKiogQWxsb3cgdGhlIGRyb3B6b25lIGNvbnRhaW5lciB0byBleHBhbmQgdmVydGljYWxseS4gKi9cbiAgQElucHV0KClcbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5leHBhbmRhYmxlJylcbiAgZ2V0IGV4cGFuZGFibGUoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX2V4cGFuZGFibGU7XG4gIH1cbiAgc2V0IGV4cGFuZGFibGUodmFsdWU6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl9leHBhbmRhYmxlID0gY29lcmNlQm9vbGVhblByb3BlcnR5KHZhbHVlKTtcbiAgfVxuICBwcml2YXRlIF9leHBhbmRhYmxlOiBib29sZWFuID0gZmFsc2U7XG5cbiAgLyoqIE9wZW4gdGhlIGZpbGUgc2VsZWN0b3Igb24gY2xpY2suICovXG4gIEBJbnB1dCgpXG4gIEBIb3N0QmluZGluZygnY2xhc3MudW5jbGlja2FibGUnKVxuICBnZXQgZGlzYWJsZUNsaWNrKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9kaXNhYmxlQ2xpY2s7XG4gIH1cbiAgc2V0IGRpc2FibGVDbGljayh2YWx1ZTogYm9vbGVhbikge1xuICAgIHRoaXMuX2Rpc2FibGVDbGljayA9IGNvZXJjZUJvb2xlYW5Qcm9wZXJ0eSh2YWx1ZSk7XG4gIH1cbiAgcHJpdmF0ZSBfZGlzYWJsZUNsaWNrID0gZmFsc2U7XG5cbiAgLyoqIEV4cG9zZSB0aGUgaWQsIGFyaWEtbGFiZWwsIGFyaWEtbGFiZWxsZWRieSBhbmQgYXJpYS1kZXNjcmliZWRieSBvZiB0aGUgbmF0aXZlIGZpbGUgaW5wdXQgZm9yIHByb3BlciBhY2Nlc3NpYmlsaXR5LiAqL1xuICBASW5wdXQoKSBpZDogc3RyaW5nO1xuICBASW5wdXQoJ2FyaWEtbGFiZWwnKSBhcmlhTGFiZWw6IHN0cmluZztcbiAgQElucHV0KCdhcmlhLWxhYmVsbGVkYnknKSBhcmlhTGFiZWxsZWRieTogc3RyaW5nO1xuICBASW5wdXQoJ2FyaWEtZGVzY3JpYmVkYnknKSBhcmlhRGVzY3JpYmVkQnk6IHN0cmluZztcblxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLm5neC1kei1ob3ZlcmVkJylcbiAgX2lzSG92ZXJlZCA9IGZhbHNlO1xuXG4gIC8qKiBTaG93IHRoZSBuYXRpdmUgT1MgZmlsZSBleHBsb3JlciB0byBzZWxlY3QgZmlsZXMuICovXG4gIEBIb3N0TGlzdGVuZXIoJ2NsaWNrJylcbiAgX29uQ2xpY2soKSB7XG4gICAgaWYgKCF0aGlzLmRpc2FibGVDbGljaykge1xuICAgICAgdGhpcy5zaG93RmlsZVNlbGVjdG9yKCk7XG4gICAgfSBcbiAgfVxuXG4gIEBIb3N0TGlzdGVuZXIoJ2RyYWdvdmVyJywgWyckZXZlbnQnXSlcbiAgX29uRHJhZ092ZXIoZXZlbnQpIHtcbiAgICBpZiAodGhpcy5kaXNhYmxlZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMucHJldmVudERlZmF1bHQoZXZlbnQpO1xuICAgIHRoaXMuX2lzSG92ZXJlZCA9IHRydWU7XG4gIH1cblxuICBASG9zdExpc3RlbmVyKCdkcmFnbGVhdmUnKVxuICBfb25EcmFnTGVhdmUoKSB7XG4gICAgdGhpcy5faXNIb3ZlcmVkID0gZmFsc2U7XG4gIH1cblxuICBASG9zdExpc3RlbmVyKCdkcm9wJywgWyckZXZlbnQnXSlcbiAgX29uRHJvcChldmVudCkge1xuICAgIGlmICh0aGlzLmRpc2FibGVkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5wcmV2ZW50RGVmYXVsdChldmVudCk7XG4gICAgdGhpcy5faXNIb3ZlcmVkID0gZmFsc2U7XG4gICAgdGhpcy5oYW5kbGVGaWxlRHJvcChldmVudC5kYXRhVHJhbnNmZXIuZmlsZXMpO1xuICB9XG4gIFxuICBzaG93RmlsZVNlbGVjdG9yKCkge1xuICAgIGlmICghdGhpcy5kaXNhYmxlZCkge1xuICAgICAgKHRoaXMuX2ZpbGVJbnB1dC5uYXRpdmVFbGVtZW50IGFzIEhUTUxJbnB1dEVsZW1lbnQpLmNsaWNrKCk7XG4gICAgfVxuICB9XG5cbiAgX29uRmlsZXNTZWxlY3RlZChldmVudCkge1xuICAgIGNvbnN0IGZpbGVzOiBGaWxlTGlzdCA9IGV2ZW50LnRhcmdldC5maWxlcztcbiAgICB0aGlzLmhhbmRsZUZpbGVEcm9wKGZpbGVzKTtcblxuICAgIC8vIFJlc2V0IHRoZSBuYXRpdmUgZmlsZSBpbnB1dCBlbGVtZW50IHRvIGFsbG93IHNlbGVjdGluZyB0aGUgc2FtZSBmaWxlIGFnYWluXG4gICAgdGhpcy5fZmlsZUlucHV0Lm5hdGl2ZUVsZW1lbnQudmFsdWUgPSAnJztcblxuICAgIC8vIGZpeCgjMzIpOiBQcmV2ZW50IHRoZSBkZWZhdWx0IGV2ZW50IGJlaGF2aW91ciB3aGljaCBjYXVzZWQgdGhlIGNoYW5nZSBldmVudCB0byBlbWl0IHR3aWNlLlxuICAgIHRoaXMucHJldmVudERlZmF1bHQoZXZlbnQpO1xuICB9XG5cbiAgcHJpdmF0ZSBoYW5kbGVGaWxlRHJvcChmaWxlczogRmlsZUxpc3QpIHtcbiAgICBjb25zdCByZXN1bHQgPSB0aGlzLnNlcnZpY2UucGFyc2VGaWxlTGlzdChmaWxlcywgdGhpcy5hY2NlcHQsIHRoaXMubWF4RmlsZVNpemUsIHRoaXMubXVsdGlwbGUpO1xuXG4gICAgdGhpcy5jaGFuZ2UubmV4dCh7XG4gICAgICBhZGRlZEZpbGVzOiByZXN1bHQuYWRkZWRGaWxlcyxcbiAgICAgIHJlamVjdGVkRmlsZXM6IHJlc3VsdC5yZWplY3RlZEZpbGVzLFxuICAgICAgc291cmNlOiB0aGlzXG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIHByZXZlbnREZWZhdWx0KGV2ZW50OiBEcmFnRXZlbnQpIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICB9XG59XG4iXX0=