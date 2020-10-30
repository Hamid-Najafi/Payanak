/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { NgxDropzonePreviewComponent } from '../ngx-dropzone-preview.component';
import { DomSanitizer } from '@angular/platform-browser';
var NgxDropzoneVideoPreviewComponent = /** @class */ (function (_super) {
    tslib_1.__extends(NgxDropzoneVideoPreviewComponent, _super);
    function NgxDropzoneVideoPreviewComponent(sanitizer) {
        return _super.call(this, sanitizer) || this;
    }
    /**
     * @return {?}
     */
    NgxDropzoneVideoPreviewComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        if (!this.file) {
            console.error('No file to read. Please provide a file using the [file] Input property.');
            return;
        }
        /**
         * We sanitize the URL here to enable the preview.
         * Please note that this could cause security issues!
         **/
        this.videoSrc = URL.createObjectURL(this.file);
        this.sanitizedVideoSrc = this.sanitizer.bypassSecurityTrustUrl(this.videoSrc);
    };
    /**
     * @return {?}
     */
    NgxDropzoneVideoPreviewComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        URL.revokeObjectURL(this.videoSrc);
    };
    NgxDropzoneVideoPreviewComponent.decorators = [
        { type: Component, args: [{
                    selector: 'ngx-dropzone-video-preview',
                    template: "\n    <video *ngIf=\"sanitizedVideoSrc\" controls (click)=\"$event.stopPropagation()\">\n      <source [src]=\"sanitizedVideoSrc\" />\n    </video>\n    <ng-content select=\"ngx-dropzone-label\"></ng-content>\n    <ngx-dropzone-remove-badge *ngIf=\"removable\" (click)=\"_remove($event)\">\n    </ngx-dropzone-remove-badge>\n\t",
                    styles: [":host(){min-width:unset!important;max-width:unset!important;padding:0!important}:host():focus video,:host():hover video{opacity:.7}:host():focus ngx-dropzone-remove-badge,:host():hover ngx-dropzone-remove-badge{opacity:1}:host() ngx-dropzone-remove-badge{opacity:0}:host() video{max-height:100%;border-radius:5px}:host() ::ng-deep ngx-dropzone-label{position:absolute;overflow-wrap:break-word}"],
                    providers: [
                        {
                            provide: NgxDropzonePreviewComponent,
                            useExisting: NgxDropzoneVideoPreviewComponent
                        }
                    ]
                },] },
    ];
    /** @nocollapse */
    NgxDropzoneVideoPreviewComponent.ctorParameters = function () { return [
        { type: DomSanitizer }
    ]; };
    return NgxDropzoneVideoPreviewComponent;
}(NgxDropzonePreviewComponent));
export { NgxDropzoneVideoPreviewComponent };
if (false) {
    /**
     * The video data source.
     * @type {?}
     */
    NgxDropzoneVideoPreviewComponent.prototype.sanitizedVideoSrc;
    /**
     * @type {?}
     * @private
     */
    NgxDropzoneVideoPreviewComponent.prototype.videoSrc;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWRyb3B6b25lLXZpZGVvLXByZXZpZXcuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LWRyb3B6b25lLyIsInNvdXJjZXMiOlsibGliL25neC1kcm9wem9uZS1wcmV2aWV3L25neC1kcm9wem9uZS12aWRlby1wcmV2aWV3L25neC1kcm9wem9uZS12aWRlby1wcmV2aWV3LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQXFCLE1BQU0sZUFBZSxDQUFDO0FBQzdELE9BQU8sRUFBRSwyQkFBMkIsRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBQ2hGLE9BQU8sRUFBRSxZQUFZLEVBQVcsTUFBTSwyQkFBMkIsQ0FBQztBQUVsRTtJQWtCc0QsNERBQTJCO0lBRS9FLDBDQUNFLFNBQXVCO2VBRXZCLGtCQUFNLFNBQVMsQ0FBQztJQUNsQixDQUFDOzs7O0lBT0QsbURBQVE7OztJQUFSO1FBQ0UsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUU7WUFDZCxPQUFPLENBQUMsS0FBSyxDQUFDLHlFQUF5RSxDQUFDLENBQUM7WUFDekYsT0FBTztTQUNSO1FBRUQ7OztZQUdJO1FBQ0osSUFBSSxDQUFDLFFBQVEsR0FBRyxHQUFHLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUMvQyxJQUFJLENBQUMsaUJBQWlCLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxzQkFBc0IsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDaEYsQ0FBQzs7OztJQUVELHNEQUFXOzs7SUFBWDtRQUNFLEdBQUcsQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ3JDLENBQUM7O2dCQS9DRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLDRCQUE0QjtvQkFDdEMsUUFBUSxFQUFFLHlVQU9WO29CQUNBLE1BQU0sRUFBRSxDQUFDLDJZQUEyWSxDQUFDO29CQUNyWixTQUFTLEVBQUU7d0JBQ1Q7NEJBQ0UsT0FBTyxFQUFFLDJCQUEyQjs0QkFDcEMsV0FBVyxFQUFFLGdDQUFnQzt5QkFDOUM7cUJBQ0Y7aUJBQ0Y7Ozs7Z0JBbkJRLFlBQVk7O0lBa0RyQix1Q0FBQztDQUFBLEFBaERELENBa0JzRCwyQkFBMkIsR0E4QmhGO1NBOUJZLGdDQUFnQzs7Ozs7O0lBUzNDLDZEQUEyQjs7Ozs7SUFFM0Isb0RBQXlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIE9uRGVzdHJveSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTmd4RHJvcHpvbmVQcmV2aWV3Q29tcG9uZW50IH0gZnJvbSAnLi4vbmd4LWRyb3B6b25lLXByZXZpZXcuY29tcG9uZW50JztcbmltcG9ydCB7IERvbVNhbml0aXplciwgU2FmZVVybCB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICduZ3gtZHJvcHpvbmUtdmlkZW8tcHJldmlldycsXG4gIHRlbXBsYXRlOiBgXG4gICAgPHZpZGVvICpuZ0lmPVwic2FuaXRpemVkVmlkZW9TcmNcIiBjb250cm9scyAoY2xpY2spPVwiJGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpXCI+XG4gICAgICA8c291cmNlIFtzcmNdPVwic2FuaXRpemVkVmlkZW9TcmNcIiAvPlxuICAgIDwvdmlkZW8+XG4gICAgPG5nLWNvbnRlbnQgc2VsZWN0PVwibmd4LWRyb3B6b25lLWxhYmVsXCI+PC9uZy1jb250ZW50PlxuICAgIDxuZ3gtZHJvcHpvbmUtcmVtb3ZlLWJhZGdlICpuZ0lmPVwicmVtb3ZhYmxlXCIgKGNsaWNrKT1cIl9yZW1vdmUoJGV2ZW50KVwiPlxuICAgIDwvbmd4LWRyb3B6b25lLXJlbW92ZS1iYWRnZT5cblx0YCxcbiAgc3R5bGVzOiBbYDpob3N0KCl7bWluLXdpZHRoOnVuc2V0IWltcG9ydGFudDttYXgtd2lkdGg6dW5zZXQhaW1wb3J0YW50O3BhZGRpbmc6MCFpbXBvcnRhbnR9Omhvc3QoKTpmb2N1cyB2aWRlbyw6aG9zdCgpOmhvdmVyIHZpZGVve29wYWNpdHk6Ljd9Omhvc3QoKTpmb2N1cyBuZ3gtZHJvcHpvbmUtcmVtb3ZlLWJhZGdlLDpob3N0KCk6aG92ZXIgbmd4LWRyb3B6b25lLXJlbW92ZS1iYWRnZXtvcGFjaXR5OjF9Omhvc3QoKSBuZ3gtZHJvcHpvbmUtcmVtb3ZlLWJhZGdle29wYWNpdHk6MH06aG9zdCgpIHZpZGVve21heC1oZWlnaHQ6MTAwJTtib3JkZXItcmFkaXVzOjVweH06aG9zdCgpIDo6bmctZGVlcCBuZ3gtZHJvcHpvbmUtbGFiZWx7cG9zaXRpb246YWJzb2x1dGU7b3ZlcmZsb3ctd3JhcDpicmVhay13b3JkfWBdLFxuICBwcm92aWRlcnM6IFtcbiAgICB7XG4gICAgICBwcm92aWRlOiBOZ3hEcm9wem9uZVByZXZpZXdDb21wb25lbnQsXG4gICAgICB1c2VFeGlzdGluZzogTmd4RHJvcHpvbmVWaWRlb1ByZXZpZXdDb21wb25lbnRcbiAgICB9XG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgTmd4RHJvcHpvbmVWaWRlb1ByZXZpZXdDb21wb25lbnQgZXh0ZW5kcyBOZ3hEcm9wem9uZVByZXZpZXdDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgc2FuaXRpemVyOiBEb21TYW5pdGl6ZXJcbiAgKSB7XG4gICAgc3VwZXIoc2FuaXRpemVyKTtcbiAgfVxuXG4gIC8qKiBUaGUgdmlkZW8gZGF0YSBzb3VyY2UuICovXG4gIHNhbml0aXplZFZpZGVvU3JjOiBTYWZlVXJsO1xuXG4gIHByaXZhdGUgdmlkZW9TcmM6IHN0cmluZztcblxuICBuZ09uSW5pdCgpIHtcbiAgICBpZiAoIXRoaXMuZmlsZSkge1xuICAgICAgY29uc29sZS5lcnJvcignTm8gZmlsZSB0byByZWFkLiBQbGVhc2UgcHJvdmlkZSBhIGZpbGUgdXNpbmcgdGhlIFtmaWxlXSBJbnB1dCBwcm9wZXJ0eS4nKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBXZSBzYW5pdGl6ZSB0aGUgVVJMIGhlcmUgdG8gZW5hYmxlIHRoZSBwcmV2aWV3LlxuICAgICAqIFBsZWFzZSBub3RlIHRoYXQgdGhpcyBjb3VsZCBjYXVzZSBzZWN1cml0eSBpc3N1ZXMhXG4gICAgICoqL1xuICAgIHRoaXMudmlkZW9TcmMgPSBVUkwuY3JlYXRlT2JqZWN0VVJMKHRoaXMuZmlsZSk7XG4gICAgdGhpcy5zYW5pdGl6ZWRWaWRlb1NyYyA9IHRoaXMuc2FuaXRpemVyLmJ5cGFzc1NlY3VyaXR5VHJ1c3RVcmwodGhpcy52aWRlb1NyYyk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICBVUkwucmV2b2tlT2JqZWN0VVJMKHRoaXMudmlkZW9TcmMpO1xuICB9XG59XG4iXX0=