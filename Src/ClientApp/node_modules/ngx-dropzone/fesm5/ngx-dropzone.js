import { Directive, Component, Input, Output, EventEmitter, HostBinding, HostListener, Injectable, ViewChild, ContentChildren, Self, NgModule } from '@angular/core';
import { __extends, __awaiter, __generator } from 'tslib';
import { DomSanitizer } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var NgxDropzoneLabelDirective = /** @class */ (function () {
    function NgxDropzoneLabelDirective() {
    }
    NgxDropzoneLabelDirective.decorators = [
        { type: Directive, args: [{
                    selector: 'ngx-dropzone-label'
                },] },
    ];
    return NgxDropzoneLabelDirective;
}());

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
function coerceBooleanProperty(value) {
    return value != null && "" + value !== 'false';
}
/**
 * Whether the provided value is considered a number.
 * Taken from https://github.com/angular/components/blob/master/src/cdk/coercion/number-property.ts
 * @param {?} value
 * @return {?}
 */
function coerceNumberProperty(value) {
    // parseFloat(value) handles most of the cases we're interested in (it treats null, empty string,
    // and other non-number values as NaN, where Number just uses 0) but it considers the string
    // '123hello' to be a valid number. Therefore we also check if Number(value) is NaN.
    return (!isNaN(parseFloat((/** @type {?} */ (value)))) && !isNaN(Number(value))) ? Number(value) : null;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @enum {number} */
var KEY_CODE = {
    BACKSPACE: 8,
    DELETE: 46,
};
KEY_CODE[KEY_CODE.BACKSPACE] = 'BACKSPACE';
KEY_CODE[KEY_CODE.DELETE] = 'DELETE';
var NgxDropzonePreviewComponent = /** @class */ (function () {
    function NgxDropzonePreviewComponent(sanitizer) {
        this.sanitizer = sanitizer;
        this._removable = false;
        /**
         * Emitted when the element should be removed.
         */
        this.removed = new EventEmitter();
        /**
         * Make the preview item focusable using the tab key.
         */
        this.tabIndex = 0;
    }
    Object.defineProperty(NgxDropzonePreviewComponent.prototype, "removable", {
        /** Allow the user to remove files. */
        get: /**
         * Allow the user to remove files.
         * @return {?}
         */
        function () {
            return this._removable;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._removable = coerceBooleanProperty(value);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} event
     * @return {?}
     */
    NgxDropzonePreviewComponent.prototype.keyEvent = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        switch (event.keyCode) {
            case KEY_CODE.BACKSPACE:
            case KEY_CODE.DELETE:
                this.remove();
                break;
            default:
                break;
        }
    };
    Object.defineProperty(NgxDropzonePreviewComponent.prototype, "hostStyle", {
        /** We use the HostBinding to pass these common styles to child components. */
        get: /**
         * We use the HostBinding to pass these common styles to child components.
         * @return {?}
         */
        function () {
            /** @type {?} */
            var styles = "\n\t\t\tdisplay: flex;\n\t\t\theight: 140px;\n\t\t\tmin-height: 140px;\n\t\t\tmin-width: 180px;\n\t\t\tmax-width: 180px;\n\t\t\tjustify-content: center;\n\t\t\talign-items: center;\n\t\t\tpadding: 0 20px;\n\t\t\tmargin: 10px;\n\t\t\tborder-radius: 5px;\n\t\t\tposition: relative;\n\t\t";
            return this.sanitizer.bypassSecurityTrustStyle(styles);
        },
        enumerable: true,
        configurable: true
    });
    /** Remove method to be used from the template. */
    /**
     * Remove method to be used from the template.
     * @param {?} event
     * @return {?}
     */
    NgxDropzonePreviewComponent.prototype._remove = /**
     * Remove method to be used from the template.
     * @param {?} event
     * @return {?}
     */
    function (event) {
        event.stopPropagation();
        this.remove();
    };
    /** Remove the preview item (use from component code). */
    /**
     * Remove the preview item (use from component code).
     * @return {?}
     */
    NgxDropzonePreviewComponent.prototype.remove = /**
     * Remove the preview item (use from component code).
     * @return {?}
     */
    function () {
        if (this._removable) {
            this.removed.next(this.file);
        }
    };
    /**
     * @protected
     * @return {?}
     */
    NgxDropzonePreviewComponent.prototype.readFile = /**
     * @protected
     * @return {?}
     */
    function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise((/**
                     * @param {?} resolve
                     * @param {?} reject
                     * @return {?}
                     */
                    function (resolve, reject) {
                        /** @type {?} */
                        var reader = new FileReader();
                        reader.onload = (/**
                         * @param {?} e
                         * @return {?}
                         */
                        function (e) {
                            resolve(((/** @type {?} */ (e.target))).result);
                        });
                        reader.onerror = (/**
                         * @param {?} e
                         * @return {?}
                         */
                        function (e) {
                            console.error("FileReader failed on file " + _this.file.name + ".");
                            reject(e);
                        });
                        if (!_this.file) {
                            return reject('No file to read. Please provide a file using the [file] Input property.');
                        }
                        reader.readAsDataURL(_this.file);
                    }))];
            });
        });
    };
    NgxDropzonePreviewComponent.decorators = [
        { type: Component, args: [{
                    selector: 'ngx-dropzone-preview',
                    template: "\n\t\t<ng-content select=\"ngx-dropzone-label\"></ng-content>\n\t\t<ngx-dropzone-remove-badge *ngIf=\"removable\" (click)=\"_remove($event)\">\n\t\t</ngx-dropzone-remove-badge>\n\t",
                    styles: [":host(){background-image:linear-gradient(to top,#ededed,#efefef,#f1f1f1,#f4f4f4,#f6f6f6)}:host():focus,:host():hover{background-image:linear-gradient(to top,#e3e3e3,#ebeaea,#e8e7e7,#ebeaea,#f4f4f4);outline:0}:host():focus ngx-dropzone-remove-badge,:host():hover ngx-dropzone-remove-badge{opacity:1}:host() ngx-dropzone-remove-badge{opacity:0}:host() ::ng-deep ngx-dropzone-label{overflow-wrap:break-word}"]
                },] },
    ];
    /** @nocollapse */
    NgxDropzonePreviewComponent.ctorParameters = function () { return [
        { type: DomSanitizer }
    ]; };
    NgxDropzonePreviewComponent.propDecorators = {
        file: [{ type: Input }],
        removable: [{ type: Input }],
        removed: [{ type: Output }],
        keyEvent: [{ type: HostListener, args: ['keyup', ['$event'],] }],
        hostStyle: [{ type: HostBinding, args: ['style',] }],
        tabIndex: [{ type: HostBinding, args: ['tabindex',] }]
    };
    return NgxDropzonePreviewComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var NgxDropzoneComponent = /** @class */ (function () {
    function NgxDropzoneComponent(service) {
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
    Object.defineProperty(NgxDropzoneComponent.prototype, "_hasPreviews", {
        get: /**
         * @return {?}
         */
        function () {
            return !!this._previewChildren.length;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NgxDropzoneComponent.prototype, "disabled", {
        /** Disable any user interaction with the component. */
        get: /**
         * Disable any user interaction with the component.
         * @return {?}
         */
        function () {
            return this._disabled;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._disabled = coerceBooleanProperty(value);
            if (this._isHovered) {
                this._isHovered = false;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NgxDropzoneComponent.prototype, "multiple", {
        /** Allow the selection of multiple files. */
        get: /**
         * Allow the selection of multiple files.
         * @return {?}
         */
        function () {
            return this._multiple;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._multiple = coerceBooleanProperty(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NgxDropzoneComponent.prototype, "maxFileSize", {
        /** Set the maximum size a single file may have. */
        get: /**
         * Set the maximum size a single file may have.
         * @return {?}
         */
        function () {
            return this._maxFileSize;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._maxFileSize = coerceNumberProperty(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NgxDropzoneComponent.prototype, "expandable", {
        /** Allow the dropzone container to expand vertically. */
        get: /**
         * Allow the dropzone container to expand vertically.
         * @return {?}
         */
        function () {
            return this._expandable;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._expandable = coerceBooleanProperty(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NgxDropzoneComponent.prototype, "disableClick", {
        /** Open the file selector on click. */
        get: /**
         * Open the file selector on click.
         * @return {?}
         */
        function () {
            return this._disableClick;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._disableClick = coerceBooleanProperty(value);
        },
        enumerable: true,
        configurable: true
    });
    /** Show the native OS file explorer to select files. */
    /**
     * Show the native OS file explorer to select files.
     * @return {?}
     */
    NgxDropzoneComponent.prototype._onClick = /**
     * Show the native OS file explorer to select files.
     * @return {?}
     */
    function () {
        if (!this.disableClick) {
            this.showFileSelector();
        }
    };
    /**
     * @param {?} event
     * @return {?}
     */
    NgxDropzoneComponent.prototype._onDragOver = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if (this.disabled) {
            return;
        }
        this.preventDefault(event);
        this._isHovered = true;
    };
    /**
     * @return {?}
     */
    NgxDropzoneComponent.prototype._onDragLeave = /**
     * @return {?}
     */
    function () {
        this._isHovered = false;
    };
    /**
     * @param {?} event
     * @return {?}
     */
    NgxDropzoneComponent.prototype._onDrop = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if (this.disabled) {
            return;
        }
        this.preventDefault(event);
        this._isHovered = false;
        this.handleFileDrop(event.dataTransfer.files);
    };
    /**
     * @return {?}
     */
    NgxDropzoneComponent.prototype.showFileSelector = /**
     * @return {?}
     */
    function () {
        if (!this.disabled) {
            ((/** @type {?} */ (this._fileInput.nativeElement))).click();
        }
    };
    /**
     * @param {?} event
     * @return {?}
     */
    NgxDropzoneComponent.prototype._onFilesSelected = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        /** @type {?} */
        var files = event.target.files;
        this.handleFileDrop(files);
        // Reset the native file input element to allow selecting the same file again
        this._fileInput.nativeElement.value = '';
        // fix(#32): Prevent the default event behaviour which caused the change event to emit twice.
        this.preventDefault(event);
    };
    /**
     * @private
     * @param {?} files
     * @return {?}
     */
    NgxDropzoneComponent.prototype.handleFileDrop = /**
     * @private
     * @param {?} files
     * @return {?}
     */
    function (files) {
        /** @type {?} */
        var result = this.service.parseFileList(files, this.accept, this.maxFileSize, this.multiple);
        this.change.next({
            addedFiles: result.addedFiles,
            rejectedFiles: result.rejectedFiles,
            source: this
        });
    };
    /**
     * @private
     * @param {?} event
     * @return {?}
     */
    NgxDropzoneComponent.prototype.preventDefault = /**
     * @private
     * @param {?} event
     * @return {?}
     */
    function (event) {
        event.preventDefault();
        event.stopPropagation();
    };
    NgxDropzoneComponent.decorators = [
        { type: Component, args: [{
                    selector: 'ngx-dropzone, [ngx-dropzone]',
                    template: "<input #fileInput type=\"file\" [id]=\"id\" [multiple]=\"multiple\" [accept]=\"accept\" [disabled]=\"disabled\"\n  (change)=\"_onFilesSelected($event)\" [attr.aria-label]=\"ariaLabel\" [attr.aria-labelledby]=\"ariaLabelledby\"\n  [attr.aria-describedby]=\"ariaDescribedBy\">\n<ng-content select=\"ngx-dropzone-label\" *ngIf=\"!_hasPreviews\"></ng-content>\n<ng-content select=\"ngx-dropzone-preview\"></ng-content>\n<ng-content></ng-content>\n",
                    styles: [":host(){display:flex;align-items:center;height:180px;background:#fff;cursor:pointer;color:#717386;border:2px dashed #717386;border-radius:5px;font-size:16px;overflow-x:auto}:host().ngx-dz-hovered{border-style:solid}:host().ngx-dz-disabled{opacity:.5;cursor:no-drop;pointer-events:none}:host().expandable{overflow:hidden;height:unset;min-height:180px;flex-wrap:wrap}:host().unclickable{cursor:default}:host() ::ng-deep ngx-dropzone-label{text-align:center;z-index:10;margin:10px auto}:host() input{width:.1px;height:.1px;opacity:0;overflow:hidden;position:absolute;z-index:-1}:host() input:focus+::ng-deep ngx-dropzone-label{outline:#000 dotted 1px;outline:-webkit-focus-ring-color auto 5px}"],
                    providers: [NgxDropzoneService]
                },] },
    ];
    /** @nocollapse */
    NgxDropzoneComponent.ctorParameters = function () { return [
        { type: NgxDropzoneService, decorators: [{ type: Self }] }
    ]; };
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
    return NgxDropzoneComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var NgxDropzoneImagePreviewComponent = /** @class */ (function (_super) {
    __extends(NgxDropzoneImagePreviewComponent, _super);
    function NgxDropzoneImagePreviewComponent(sanitizer) {
        var _this = _super.call(this, sanitizer) || this;
        /**
         * The image data source.
         */
        _this.imageSrc = '';
        return _this;
    }
    /**
     * @return {?}
     */
    NgxDropzoneImagePreviewComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.readFile()
            .then((/**
         * @param {?} img
         * @return {?}
         */
        function (img) { return setTimeout((/**
         * @return {?}
         */
        function () { return _this.imageSrc = img; })); }))
            .catch((/**
         * @param {?} err
         * @return {?}
         */
        function (err) { return console.error(err); }));
    };
    NgxDropzoneImagePreviewComponent.decorators = [
        { type: Component, args: [{
                    selector: 'ngx-dropzone-image-preview',
                    template: "\n    <img [src]=\"imageSrc\" />\n\t\t<ng-content select=\"ngx-dropzone-label\"></ng-content>\n    <ngx-dropzone-remove-badge *ngIf=\"removable\" (click)=\"_remove($event)\">\n    </ngx-dropzone-remove-badge>\n\t",
                    styles: [":host(){min-width:unset!important;max-width:unset!important;padding:0!important}:host():focus img,:host():hover img{opacity:.7}:host():focus ngx-dropzone-remove-badge,:host():hover ngx-dropzone-remove-badge{opacity:1}:host() ngx-dropzone-remove-badge{opacity:0}:host() img{max-height:100%;border-radius:5px;opacity:.8}:host() ::ng-deep ngx-dropzone-label{position:absolute;overflow-wrap:break-word}"],
                    providers: [
                        {
                            provide: NgxDropzonePreviewComponent,
                            useExisting: NgxDropzoneImagePreviewComponent
                        }
                    ]
                },] },
    ];
    /** @nocollapse */
    NgxDropzoneImagePreviewComponent.ctorParameters = function () { return [
        { type: DomSanitizer }
    ]; };
    return NgxDropzoneImagePreviewComponent;
}(NgxDropzonePreviewComponent));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var NgxDropzoneRemoveBadgeComponent = /** @class */ (function () {
    function NgxDropzoneRemoveBadgeComponent() {
    }
    NgxDropzoneRemoveBadgeComponent.decorators = [
        { type: Component, args: [{
                    selector: 'ngx-dropzone-remove-badge',
                    template: "\n    <svg>\n      <line x1=\"0\" y1=\"0\" x2=\"10\" y2=\"10\" />\n      <line x1=\"0\" y1=\"10\" x2=\"10\" y2=\"0\" />\n    </svg>\n  ",
                    styles: [":host(){display:flex;justify-content:center;align-items:center;height:22px;width:22px;position:absolute;top:5px;right:5px;border-radius:50%;background:#bbb;color:#333;cursor:pointer}:host():hover{background:#aeaeae}:host()>svg{height:10px;width:10px}:host()>svg>line{stroke-width:2px;stroke:#fff}"]
                },] },
    ];
    return NgxDropzoneRemoveBadgeComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var NgxDropzoneVideoPreviewComponent = /** @class */ (function (_super) {
    __extends(NgxDropzoneVideoPreviewComponent, _super);
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var NgxDropzoneModule = /** @class */ (function () {
    function NgxDropzoneModule() {
    }
    NgxDropzoneModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule
                    ],
                    declarations: [
                        NgxDropzoneComponent,
                        NgxDropzoneLabelDirective,
                        NgxDropzonePreviewComponent,
                        NgxDropzoneImagePreviewComponent,
                        NgxDropzoneRemoveBadgeComponent,
                        NgxDropzoneVideoPreviewComponent,
                    ],
                    exports: [
                        NgxDropzoneComponent,
                        NgxDropzoneLabelDirective,
                        NgxDropzonePreviewComponent,
                        NgxDropzoneImagePreviewComponent,
                        NgxDropzoneRemoveBadgeComponent,
                        NgxDropzoneVideoPreviewComponent,
                    ]
                },] },
    ];
    return NgxDropzoneModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { NgxDropzoneModule, NgxDropzoneComponent, NgxDropzonePreviewComponent, NgxDropzoneImagePreviewComponent, NgxDropzoneVideoPreviewComponent, NgxDropzoneRemoveBadgeComponent, NgxDropzoneLabelDirective as ɵb, NgxDropzoneService as ɵa };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWRyb3B6b25lLmpzLm1hcCIsInNvdXJjZXMiOlsibmc6Ly9uZ3gtZHJvcHpvbmUvbGliL25neC1kcm9wem9uZS1sYWJlbC5kaXJlY3RpdmUudHMiLCJuZzovL25neC1kcm9wem9uZS9saWIvaGVscGVycy50cyIsIm5nOi8vbmd4LWRyb3B6b25lL2xpYi9uZ3gtZHJvcHpvbmUtcHJldmlldy9uZ3gtZHJvcHpvbmUtcHJldmlldy5jb21wb25lbnQudHMiLCJuZzovL25neC1kcm9wem9uZS9saWIvbmd4LWRyb3B6b25lLnNlcnZpY2UudHMiLCJuZzovL25neC1kcm9wem9uZS9saWIvbmd4LWRyb3B6b25lL25neC1kcm9wem9uZS5jb21wb25lbnQudHMiLCJuZzovL25neC1kcm9wem9uZS9saWIvbmd4LWRyb3B6b25lLXByZXZpZXcvbmd4LWRyb3B6b25lLWltYWdlLXByZXZpZXcvbmd4LWRyb3B6b25lLWltYWdlLXByZXZpZXcuY29tcG9uZW50LnRzIiwibmc6Ly9uZ3gtZHJvcHpvbmUvbGliL25neC1kcm9wem9uZS1wcmV2aWV3L25neC1kcm9wem9uZS1yZW1vdmUtYmFkZ2Uvbmd4LWRyb3B6b25lLXJlbW92ZS1iYWRnZS5jb21wb25lbnQudHMiLCJuZzovL25neC1kcm9wem9uZS9saWIvbmd4LWRyb3B6b25lLXByZXZpZXcvbmd4LWRyb3B6b25lLXZpZGVvLXByZXZpZXcvbmd4LWRyb3B6b25lLXZpZGVvLXByZXZpZXcuY29tcG9uZW50LnRzIiwibmc6Ly9uZ3gtZHJvcHpvbmUvbGliL25neC1kcm9wem9uZS5tb2R1bGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBEaXJlY3RpdmUoe1xuXHRzZWxlY3RvcjogJ25neC1kcm9wem9uZS1sYWJlbCdcbn0pXG5leHBvcnQgY2xhc3MgTmd4RHJvcHpvbmVMYWJlbERpcmVjdGl2ZSB7IH1cbiIsIlxuLyoqXG4gKiBDb2VyY2VzIGEgZGF0YS1ib3VuZCB2YWx1ZSAodHlwaWNhbGx5IGEgc3RyaW5nKSB0byBhIGJvb2xlYW4uXG4gKiBUYWtlbiBmcm9tIGh0dHBzOi8vZ2l0aHViLmNvbS9hbmd1bGFyL2NvbXBvbmVudHMvYmxvYi9tYXN0ZXIvc3JjL2Nkay9jb2VyY2lvbi9ib29sZWFuLXByb3BlcnR5LnRzXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjb2VyY2VCb29sZWFuUHJvcGVydHkodmFsdWU6IGFueSk6IGJvb2xlYW5cbntcblx0cmV0dXJuIHZhbHVlICE9IG51bGwgJiYgYCR7dmFsdWV9YCAhPT0gJ2ZhbHNlJztcbn1cblxuLyoqXG4gKiBXaGV0aGVyIHRoZSBwcm92aWRlZCB2YWx1ZSBpcyBjb25zaWRlcmVkIGEgbnVtYmVyLlxuICogVGFrZW4gZnJvbSBodHRwczovL2dpdGh1Yi5jb20vYW5ndWxhci9jb21wb25lbnRzL2Jsb2IvbWFzdGVyL3NyYy9jZGsvY29lcmNpb24vbnVtYmVyLXByb3BlcnR5LnRzXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjb2VyY2VOdW1iZXJQcm9wZXJ0eSh2YWx1ZTogYW55KTogbnVtYmVyXG57XG5cdC8vIHBhcnNlRmxvYXQodmFsdWUpIGhhbmRsZXMgbW9zdCBvZiB0aGUgY2FzZXMgd2UncmUgaW50ZXJlc3RlZCBpbiAoaXQgdHJlYXRzIG51bGwsIGVtcHR5IHN0cmluZyxcblx0Ly8gYW5kIG90aGVyIG5vbi1udW1iZXIgdmFsdWVzIGFzIE5hTiwgd2hlcmUgTnVtYmVyIGp1c3QgdXNlcyAwKSBidXQgaXQgY29uc2lkZXJzIHRoZSBzdHJpbmdcblx0Ly8gJzEyM2hlbGxvJyB0byBiZSBhIHZhbGlkIG51bWJlci4gVGhlcmVmb3JlIHdlIGFsc28gY2hlY2sgaWYgTnVtYmVyKHZhbHVlKSBpcyBOYU4uXG5cdHJldHVybiAoIWlzTmFOKHBhcnNlRmxvYXQodmFsdWUgYXMgYW55KSkgJiYgIWlzTmFOKE51bWJlcih2YWx1ZSkpKSA/IE51bWJlcih2YWx1ZSkgOiBudWxsO1xufVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIsIEhvc3RCaW5kaW5nLCBIb3N0TGlzdGVuZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IGNvZXJjZUJvb2xlYW5Qcm9wZXJ0eSB9IGZyb20gJy4uL2hlbHBlcnMnO1xuaW1wb3J0IHsgU2FmZVN0eWxlLCBEb21TYW5pdGl6ZXIgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcblxuZW51bSBLRVlfQ09ERSB7XG5cdEJBQ0tTUEFDRSA9IDgsXG5cdERFTEVURSA9IDQ2XG59XG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogJ25neC1kcm9wem9uZS1wcmV2aWV3Jyxcblx0dGVtcGxhdGU6IGBcblx0XHQ8bmctY29udGVudCBzZWxlY3Q9XCJuZ3gtZHJvcHpvbmUtbGFiZWxcIj48L25nLWNvbnRlbnQ+XG5cdFx0PG5neC1kcm9wem9uZS1yZW1vdmUtYmFkZ2UgKm5nSWY9XCJyZW1vdmFibGVcIiAoY2xpY2spPVwiX3JlbW92ZSgkZXZlbnQpXCI+XG5cdFx0PC9uZ3gtZHJvcHpvbmUtcmVtb3ZlLWJhZGdlPlxuXHRgLFxuXHRzdHlsZXM6IFtgOmhvc3QoKXtiYWNrZ3JvdW5kLWltYWdlOmxpbmVhci1ncmFkaWVudCh0byB0b3AsI2VkZWRlZCwjZWZlZmVmLCNmMWYxZjEsI2Y0ZjRmNCwjZjZmNmY2KX06aG9zdCgpOmZvY3VzLDpob3N0KCk6aG92ZXJ7YmFja2dyb3VuZC1pbWFnZTpsaW5lYXItZ3JhZGllbnQodG8gdG9wLCNlM2UzZTMsI2ViZWFlYSwjZThlN2U3LCNlYmVhZWEsI2Y0ZjRmNCk7b3V0bGluZTowfTpob3N0KCk6Zm9jdXMgbmd4LWRyb3B6b25lLXJlbW92ZS1iYWRnZSw6aG9zdCgpOmhvdmVyIG5neC1kcm9wem9uZS1yZW1vdmUtYmFkZ2V7b3BhY2l0eToxfTpob3N0KCkgbmd4LWRyb3B6b25lLXJlbW92ZS1iYWRnZXtvcGFjaXR5OjB9Omhvc3QoKSA6Om5nLWRlZXAgbmd4LWRyb3B6b25lLWxhYmVse292ZXJmbG93LXdyYXA6YnJlYWstd29yZH1gXVxufSlcbmV4cG9ydCBjbGFzcyBOZ3hEcm9wem9uZVByZXZpZXdDb21wb25lbnQge1xuXG5cdGNvbnN0cnVjdG9yKFxuXHRcdHByb3RlY3RlZCBzYW5pdGl6ZXI6IERvbVNhbml0aXplclxuXHQpIHsgfVxuXG5cdC8qKiBUaGUgZmlsZSB0byBwcmV2aWV3LiAqL1xuXHRASW5wdXQoKSBmaWxlOiBGaWxlO1xuXG5cdC8qKiBBbGxvdyB0aGUgdXNlciB0byByZW1vdmUgZmlsZXMuICovXG5cdEBJbnB1dCgpXG5cdGdldCByZW1vdmFibGUoKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMuX3JlbW92YWJsZTtcblx0fVxuXHRzZXQgcmVtb3ZhYmxlKHZhbHVlOiBib29sZWFuKSB7XG5cdFx0dGhpcy5fcmVtb3ZhYmxlID0gY29lcmNlQm9vbGVhblByb3BlcnR5KHZhbHVlKTtcblx0fVxuXHRwcm90ZWN0ZWQgX3JlbW92YWJsZSA9IGZhbHNlO1xuXG5cdC8qKiBFbWl0dGVkIHdoZW4gdGhlIGVsZW1lbnQgc2hvdWxkIGJlIHJlbW92ZWQuICovXG5cdEBPdXRwdXQoKSByZWFkb25seSByZW1vdmVkID0gbmV3IEV2ZW50RW1pdHRlcjxGaWxlPigpO1xuXG5cdEBIb3N0TGlzdGVuZXIoJ2tleXVwJywgWyckZXZlbnQnXSlcblx0a2V5RXZlbnQoZXZlbnQ6IEtleWJvYXJkRXZlbnQpIHtcblx0XHRzd2l0Y2ggKGV2ZW50LmtleUNvZGUpIHtcblx0XHRcdGNhc2UgS0VZX0NPREUuQkFDS1NQQUNFOlxuXHRcdFx0Y2FzZSBLRVlfQ09ERS5ERUxFVEU6XG5cdFx0XHRcdHRoaXMucmVtb3ZlKCk7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0ZGVmYXVsdDpcblx0XHRcdFx0YnJlYWs7XG5cdFx0fVxuXHR9XG5cblx0LyoqIFdlIHVzZSB0aGUgSG9zdEJpbmRpbmcgdG8gcGFzcyB0aGVzZSBjb21tb24gc3R5bGVzIHRvIGNoaWxkIGNvbXBvbmVudHMuICovXG5cdEBIb3N0QmluZGluZygnc3R5bGUnKVxuXHRnZXQgaG9zdFN0eWxlKCk6IFNhZmVTdHlsZSB7XG5cdFx0Y29uc3Qgc3R5bGVzID0gYFxuXHRcdFx0ZGlzcGxheTogZmxleDtcblx0XHRcdGhlaWdodDogMTQwcHg7XG5cdFx0XHRtaW4taGVpZ2h0OiAxNDBweDtcblx0XHRcdG1pbi13aWR0aDogMTgwcHg7XG5cdFx0XHRtYXgtd2lkdGg6IDE4MHB4O1xuXHRcdFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cdFx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHRcdFx0cGFkZGluZzogMCAyMHB4O1xuXHRcdFx0bWFyZ2luOiAxMHB4O1xuXHRcdFx0Ym9yZGVyLXJhZGl1czogNXB4O1xuXHRcdFx0cG9zaXRpb246IHJlbGF0aXZlO1xuXHRcdGA7XG5cblx0XHRyZXR1cm4gdGhpcy5zYW5pdGl6ZXIuYnlwYXNzU2VjdXJpdHlUcnVzdFN0eWxlKHN0eWxlcyk7XG5cdH1cblxuXHQvKiogTWFrZSB0aGUgcHJldmlldyBpdGVtIGZvY3VzYWJsZSB1c2luZyB0aGUgdGFiIGtleS4gKi9cblx0QEhvc3RCaW5kaW5nKCd0YWJpbmRleCcpIHRhYkluZGV4ID0gMDtcblxuXHQvKiogUmVtb3ZlIG1ldGhvZCB0byBiZSB1c2VkIGZyb20gdGhlIHRlbXBsYXRlLiAqL1xuXHRfcmVtb3ZlKGV2ZW50KSB7XG5cdFx0ZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG5cdFx0dGhpcy5yZW1vdmUoKTtcblx0fVxuXG5cdC8qKiBSZW1vdmUgdGhlIHByZXZpZXcgaXRlbSAodXNlIGZyb20gY29tcG9uZW50IGNvZGUpLiAqL1xuXHRyZW1vdmUoKSB7XG5cdFx0aWYgKHRoaXMuX3JlbW92YWJsZSkge1xuXHRcdFx0dGhpcy5yZW1vdmVkLm5leHQodGhpcy5maWxlKTtcblx0XHR9XG5cdH1cblxuXHRwcm90ZWN0ZWQgYXN5bmMgcmVhZEZpbGUoKTogUHJvbWlzZTxzdHJpbmcgfCBBcnJheUJ1ZmZlcj4ge1xuXHRcdHJldHVybiBuZXcgUHJvbWlzZTxzdHJpbmcgfCBBcnJheUJ1ZmZlcj4oKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuXHRcdFx0Y29uc3QgcmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKTtcblxuXHRcdFx0cmVhZGVyLm9ubG9hZCA9IGUgPT4ge1xuXHRcdFx0XHRyZXNvbHZlKChlLnRhcmdldCBhcyBGaWxlUmVhZGVyKS5yZXN1bHQpO1xuXHRcdFx0fTtcblxuXHRcdFx0cmVhZGVyLm9uZXJyb3IgPSBlID0+IHtcblx0XHRcdFx0Y29uc29sZS5lcnJvcihgRmlsZVJlYWRlciBmYWlsZWQgb24gZmlsZSAke3RoaXMuZmlsZS5uYW1lfS5gKTtcblx0XHRcdFx0cmVqZWN0KGUpO1xuXHRcdFx0fTtcblxuXHRcdFx0aWYgKCF0aGlzLmZpbGUpIHtcblx0XHRcdFx0cmV0dXJuIHJlamVjdCgnTm8gZmlsZSB0byByZWFkLiBQbGVhc2UgcHJvdmlkZSBhIGZpbGUgdXNpbmcgdGhlIFtmaWxlXSBJbnB1dCBwcm9wZXJ0eS4nKTtcblx0XHRcdH1cblxuXHRcdFx0cmVhZGVyLnJlYWRBc0RhdGFVUkwodGhpcy5maWxlKTtcblx0XHR9KTtcblx0fVxufVxuIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5leHBvcnQgaW50ZXJmYWNlIEZpbGVTZWxlY3RSZXN1bHQge1xuXG5cdC8qKiBUaGUgYWRkZWQgZmlsZXMsIGVtaXR0ZWQgaW4gdGhlIGZpbGVzQWRkZWQgZXZlbnQuICovXG5cdGFkZGVkRmlsZXM6IEZpbGVbXTtcblxuXHQvKiogVGhlIHJlamVjdGVkIGZpbGVzLCBlbWl0dGVkIGluIHRoZSBmaWxlc1JlamVjdGVkIGV2ZW50LiAqL1xuXHRyZWplY3RlZEZpbGVzOiBSZWplY3RlZEZpbGVbXTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBSZWplY3RlZEZpbGUgZXh0ZW5kcyBGaWxlIHtcblxuXHQvKiogVGhlIHJlYXNvbiB0aGUgZmlsZSB3YXMgcmVqZWN0ZWQuICovXG5cdHJlYXNvbj86IFJlamVjdFJlYXNvbjtcbn1cblxuZXhwb3J0IHR5cGUgUmVqZWN0UmVhc29uID0gJ3R5cGUnIHwgJ3NpemUnIHwgJ25vX211bHRpcGxlJztcblxuLyoqXG4gKiBUaGlzIHNlcnZpY2UgY29udGFpbnMgdGhlIGZpbHRlcmluZyBsb2dpYyB0byBiZSBhcHBsaWVkIHRvXG4gKiBhbnkgZHJvcHBlZCBvciBzZWxlY3RlZCBmaWxlLiBJZiBhIGZpbGUgbWF0Y2hlcyBhbGwgY3JpdGVyaWFcbiAqIGxpa2UgbWF4aW11bSBzaXplIG9yIGFjY2VwdCB0eXBlLCBpdCB3aWxsIGJlIGVtaXR0ZWQgaW4gdGhlXG4gKiBhZGRlZEZpbGVzIGFycmF5LCBvdGhlcndpc2UgaW4gdGhlIHJlamVjdGVkRmlsZXMgYXJyYXkuXG4gKi9cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBOZ3hEcm9wem9uZVNlcnZpY2Uge1xuXG5cdHBhcnNlRmlsZUxpc3QoZmlsZXM6IEZpbGVMaXN0LCBhY2NlcHQ6IHN0cmluZywgbWF4RmlsZVNpemU6IG51bWJlciwgbXVsdGlwbGU6IGJvb2xlYW4pOiBGaWxlU2VsZWN0UmVzdWx0IHtcblxuXHRcdGNvbnN0IGFkZGVkRmlsZXM6IEZpbGVbXSA9IFtdO1xuXHRcdGNvbnN0IHJlamVjdGVkRmlsZXM6IFJlamVjdGVkRmlsZVtdID0gW107XG5cblx0XHRmb3IgKGxldCBpID0gMDsgaSA8IGZpbGVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRjb25zdCBmaWxlID0gZmlsZXMuaXRlbShpKTtcblxuXHRcdFx0aWYgKCF0aGlzLmlzQWNjZXB0ZWQoZmlsZSwgYWNjZXB0KSkge1xuXHRcdFx0XHR0aGlzLnJlamVjdEZpbGUocmVqZWN0ZWRGaWxlcywgZmlsZSwgJ3R5cGUnKTtcblx0XHRcdFx0Y29udGludWU7XG5cdFx0XHR9XG5cblx0XHRcdGlmIChtYXhGaWxlU2l6ZSAmJiBmaWxlLnNpemUgPiBtYXhGaWxlU2l6ZSkge1xuXHRcdFx0XHR0aGlzLnJlamVjdEZpbGUocmVqZWN0ZWRGaWxlcywgZmlsZSwgJ3NpemUnKTtcblx0XHRcdFx0Y29udGludWU7XG5cdFx0XHR9XG5cblx0XHRcdGlmICghbXVsdGlwbGUgJiYgYWRkZWRGaWxlcy5sZW5ndGggPj0gMSkge1xuXHRcdFx0XHR0aGlzLnJlamVjdEZpbGUocmVqZWN0ZWRGaWxlcywgZmlsZSwgJ25vX211bHRpcGxlJyk7XG5cdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0fVxuXG5cdFx0XHRhZGRlZEZpbGVzLnB1c2goZmlsZSk7XG5cdFx0fVxuXG5cdFx0Y29uc3QgcmVzdWx0OiBGaWxlU2VsZWN0UmVzdWx0ID0ge1xuXHRcdFx0YWRkZWRGaWxlcyxcblx0XHRcdHJlamVjdGVkRmlsZXNcblx0XHR9O1xuXG5cdFx0cmV0dXJuIHJlc3VsdDtcblx0fVxuXG5cdHByaXZhdGUgaXNBY2NlcHRlZChmaWxlOiBGaWxlLCBhY2NlcHQ6IHN0cmluZyk6IGJvb2xlYW4ge1xuXG5cdFx0aWYgKGFjY2VwdCA9PT0gJyonKSB7XG5cdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHR9XG5cblx0XHRjb25zdCBhY2NlcHRGaWxldHlwZXMgPSBhY2NlcHQuc3BsaXQoJywnKS5tYXAoaXQgPT4gaXQudG9Mb3dlckNhc2UoKS50cmltKCkpO1xuXHRcdGNvbnN0IGZpbGV0eXBlID0gZmlsZS50eXBlLnRvTG93ZXJDYXNlKCk7XG5cdFx0Y29uc3QgZmlsZW5hbWUgPSBmaWxlLm5hbWUudG9Mb3dlckNhc2UoKTtcblxuXHRcdGNvbnN0IG1hdGNoZWRGaWxlVHlwZSA9IGFjY2VwdEZpbGV0eXBlcy5maW5kKGFjY2VwdEZpbGV0eXBlID0+IHtcblxuXHRcdFx0Ly8gY2hlY2sgZm9yIHdpbGRjYXJkIG1pbWV0eXBlIChlLmcuIGltYWdlLyopXG5cdFx0XHRpZiAoYWNjZXB0RmlsZXR5cGUuZW5kc1dpdGgoJy8qJykpIHtcblx0XHRcdFx0cmV0dXJuIGZpbGV0eXBlLnNwbGl0KCcvJylbMF0gPT09IGFjY2VwdEZpbGV0eXBlLnNwbGl0KCcvJylbMF07XG5cdFx0XHR9XG5cblx0XHRcdC8vIGNoZWNrIGZvciBmaWxlIGV4dGVuc2lvbiAoZS5nLiAuY3N2KVxuXHRcdFx0aWYgKGFjY2VwdEZpbGV0eXBlLnN0YXJ0c1dpdGgoXCIuXCIpKSB7XG5cdFx0XHRcdHJldHVybiBmaWxlbmFtZS5lbmRzV2l0aChhY2NlcHRGaWxldHlwZSk7XG5cdFx0XHR9XG5cblx0XHRcdC8vIGNoZWNrIGZvciBleGFjdCBtaW1ldHlwZSBtYXRjaCAoZS5nLiBpbWFnZS9qcGVnKVxuXHRcdFx0cmV0dXJuIGFjY2VwdEZpbGV0eXBlID09IGZpbGV0eXBlO1xuXHRcdH0pO1xuXG5cdFx0cmV0dXJuICEhbWF0Y2hlZEZpbGVUeXBlO1xuXHR9XG5cblx0cHJpdmF0ZSByZWplY3RGaWxlKHJlamVjdGVkRmlsZXM6IFJlamVjdGVkRmlsZVtdLCBmaWxlOiBGaWxlLCByZWFzb246IFJlamVjdFJlYXNvbikge1xuXG5cdFx0Y29uc3QgcmVqZWN0ZWRGaWxlID0gZmlsZSBhcyBSZWplY3RlZEZpbGU7XG5cdFx0cmVqZWN0ZWRGaWxlLnJlYXNvbiA9IHJlYXNvbjtcblxuXHRcdHJlamVjdGVkRmlsZXMucHVzaChyZWplY3RlZEZpbGUpO1xuXHR9XG59XG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgRXZlbnRFbWl0dGVyLCBPdXRwdXQsIElucHV0LCBWaWV3Q2hpbGQsIENvbnRlbnRDaGlsZHJlbiwgUXVlcnlMaXN0LCBIb3N0QmluZGluZywgSG9zdExpc3RlbmVyLCBTZWxmLCBFbGVtZW50UmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOZ3hEcm9wem9uZVNlcnZpY2UsIEZpbGVTZWxlY3RSZXN1bHQgfSBmcm9tICcuLi9uZ3gtZHJvcHpvbmUuc2VydmljZSc7XG5pbXBvcnQgeyBjb2VyY2VCb29sZWFuUHJvcGVydHksIGNvZXJjZU51bWJlclByb3BlcnR5IH0gZnJvbSAnLi4vaGVscGVycyc7XG5pbXBvcnQgeyBOZ3hEcm9wem9uZVByZXZpZXdDb21wb25lbnQgfSBmcm9tICcuLi9uZ3gtZHJvcHpvbmUtcHJldmlldy9uZ3gtZHJvcHpvbmUtcHJldmlldy5jb21wb25lbnQnO1xuXG5leHBvcnQgaW50ZXJmYWNlIE5neERyb3B6b25lQ2hhbmdlRXZlbnQge1xuICBzb3VyY2U6IE5neERyb3B6b25lQ29tcG9uZW50O1xuICBhZGRlZEZpbGVzOiBGaWxlW107XG4gIHJlamVjdGVkRmlsZXM6IEZpbGVbXTtcbn1cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbmd4LWRyb3B6b25lLCBbbmd4LWRyb3B6b25lXScsXG4gIHRlbXBsYXRlOiBgPGlucHV0ICNmaWxlSW5wdXQgdHlwZT1cImZpbGVcIiBbaWRdPVwiaWRcIiBbbXVsdGlwbGVdPVwibXVsdGlwbGVcIiBbYWNjZXB0XT1cImFjY2VwdFwiIFtkaXNhYmxlZF09XCJkaXNhYmxlZFwiXG4gIChjaGFuZ2UpPVwiX29uRmlsZXNTZWxlY3RlZCgkZXZlbnQpXCIgW2F0dHIuYXJpYS1sYWJlbF09XCJhcmlhTGFiZWxcIiBbYXR0ci5hcmlhLWxhYmVsbGVkYnldPVwiYXJpYUxhYmVsbGVkYnlcIlxuICBbYXR0ci5hcmlhLWRlc2NyaWJlZGJ5XT1cImFyaWFEZXNjcmliZWRCeVwiPlxuPG5nLWNvbnRlbnQgc2VsZWN0PVwibmd4LWRyb3B6b25lLWxhYmVsXCIgKm5nSWY9XCIhX2hhc1ByZXZpZXdzXCI+PC9uZy1jb250ZW50PlxuPG5nLWNvbnRlbnQgc2VsZWN0PVwibmd4LWRyb3B6b25lLXByZXZpZXdcIj48L25nLWNvbnRlbnQ+XG48bmctY29udGVudD48L25nLWNvbnRlbnQ+XG5gLFxuICBzdHlsZXM6IFtgOmhvc3QoKXtkaXNwbGF5OmZsZXg7YWxpZ24taXRlbXM6Y2VudGVyO2hlaWdodDoxODBweDtiYWNrZ3JvdW5kOiNmZmY7Y3Vyc29yOnBvaW50ZXI7Y29sb3I6IzcxNzM4Njtib3JkZXI6MnB4IGRhc2hlZCAjNzE3Mzg2O2JvcmRlci1yYWRpdXM6NXB4O2ZvbnQtc2l6ZToxNnB4O292ZXJmbG93LXg6YXV0b306aG9zdCgpLm5neC1kei1ob3ZlcmVke2JvcmRlci1zdHlsZTpzb2xpZH06aG9zdCgpLm5neC1kei1kaXNhYmxlZHtvcGFjaXR5Oi41O2N1cnNvcjpuby1kcm9wO3BvaW50ZXItZXZlbnRzOm5vbmV9Omhvc3QoKS5leHBhbmRhYmxle292ZXJmbG93OmhpZGRlbjtoZWlnaHQ6dW5zZXQ7bWluLWhlaWdodDoxODBweDtmbGV4LXdyYXA6d3JhcH06aG9zdCgpLnVuY2xpY2thYmxle2N1cnNvcjpkZWZhdWx0fTpob3N0KCkgOjpuZy1kZWVwIG5neC1kcm9wem9uZS1sYWJlbHt0ZXh0LWFsaWduOmNlbnRlcjt6LWluZGV4OjEwO21hcmdpbjoxMHB4IGF1dG99Omhvc3QoKSBpbnB1dHt3aWR0aDouMXB4O2hlaWdodDouMXB4O29wYWNpdHk6MDtvdmVyZmxvdzpoaWRkZW47cG9zaXRpb246YWJzb2x1dGU7ei1pbmRleDotMX06aG9zdCgpIGlucHV0OmZvY3VzKzo6bmctZGVlcCBuZ3gtZHJvcHpvbmUtbGFiZWx7b3V0bGluZTojMDAwIGRvdHRlZCAxcHg7b3V0bGluZTotd2Via2l0LWZvY3VzLXJpbmctY29sb3IgYXV0byA1cHh9YF0sXG4gIHByb3ZpZGVyczogW05neERyb3B6b25lU2VydmljZV1cbn0pXG5leHBvcnQgY2xhc3MgTmd4RHJvcHpvbmVDb21wb25lbnQge1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIEBTZWxmKCkgcHJpdmF0ZSBzZXJ2aWNlOiBOZ3hEcm9wem9uZVNlcnZpY2VcbiAgKSB7IH1cblxuICAvKiogQSBsaXN0IG9mIHRoZSBjb250ZW50LXByb2plY3RlZCBwcmV2aWV3IGNoaWxkcmVuLiAqL1xuICBAQ29udGVudENoaWxkcmVuKE5neERyb3B6b25lUHJldmlld0NvbXBvbmVudCwgeyBkZXNjZW5kYW50czogdHJ1ZSB9KVxuICBfcHJldmlld0NoaWxkcmVuOiBRdWVyeUxpc3Q8Tmd4RHJvcHpvbmVQcmV2aWV3Q29tcG9uZW50PjtcblxuICBnZXQgX2hhc1ByZXZpZXdzKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiAhIXRoaXMuX3ByZXZpZXdDaGlsZHJlbi5sZW5ndGg7XG4gIH1cblxuICAvKiogQSB0ZW1wbGF0ZSByZWZlcmVuY2UgdG8gdGhlIG5hdGl2ZSBmaWxlIGlucHV0IGVsZW1lbnQuICovXG4gIEBWaWV3Q2hpbGQoJ2ZpbGVJbnB1dCcpIF9maWxlSW5wdXQ6IEVsZW1lbnRSZWY7XG5cbiAgLyoqIEVtaXR0ZWQgd2hlbiBhbnkgZmlsZXMgd2VyZSBhZGRlZCBvciByZWplY3RlZC4gKi9cbiAgQE91dHB1dCgpIHJlYWRvbmx5IGNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8Tmd4RHJvcHpvbmVDaGFuZ2VFdmVudD4oKTtcblxuICAvKiogU2V0IHRoZSBhY2NlcHRlZCBmaWxlIHR5cGVzLiBEZWZhdWx0cyB0byAnKicuICovXG4gIEBJbnB1dCgpIGFjY2VwdCA9ICcqJztcblxuICAvKiogRGlzYWJsZSBhbnkgdXNlciBpbnRlcmFjdGlvbiB3aXRoIHRoZSBjb21wb25lbnQuICovXG4gIEBJbnB1dCgpXG4gIEBIb3N0QmluZGluZygnY2xhc3Mubmd4LWR6LWRpc2FibGVkJylcbiAgZ2V0IGRpc2FibGVkKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9kaXNhYmxlZDtcbiAgfVxuICBzZXQgZGlzYWJsZWQodmFsdWU6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl9kaXNhYmxlZCA9IGNvZXJjZUJvb2xlYW5Qcm9wZXJ0eSh2YWx1ZSk7XG5cbiAgICBpZiAodGhpcy5faXNIb3ZlcmVkKSB7XG4gICAgICB0aGlzLl9pc0hvdmVyZWQgPSBmYWxzZTtcbiAgICB9XG4gIH1cbiAgcHJpdmF0ZSBfZGlzYWJsZWQgPSBmYWxzZTtcblxuICAvKiogQWxsb3cgdGhlIHNlbGVjdGlvbiBvZiBtdWx0aXBsZSBmaWxlcy4gKi9cbiAgQElucHV0KClcbiAgZ2V0IG11bHRpcGxlKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9tdWx0aXBsZTtcbiAgfVxuICBzZXQgbXVsdGlwbGUodmFsdWU6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl9tdWx0aXBsZSA9IGNvZXJjZUJvb2xlYW5Qcm9wZXJ0eSh2YWx1ZSk7XG4gIH1cbiAgcHJpdmF0ZSBfbXVsdGlwbGUgPSB0cnVlO1xuXG4gIC8qKiBTZXQgdGhlIG1heGltdW0gc2l6ZSBhIHNpbmdsZSBmaWxlIG1heSBoYXZlLiAqL1xuICBASW5wdXQoKVxuICBnZXQgbWF4RmlsZVNpemUoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5fbWF4RmlsZVNpemU7XG4gIH1cbiAgc2V0IG1heEZpbGVTaXplKHZhbHVlOiBudW1iZXIpIHtcbiAgICB0aGlzLl9tYXhGaWxlU2l6ZSA9IGNvZXJjZU51bWJlclByb3BlcnR5KHZhbHVlKTtcbiAgfVxuICBwcml2YXRlIF9tYXhGaWxlU2l6ZTogbnVtYmVyID0gdW5kZWZpbmVkO1xuXG4gIC8qKiBBbGxvdyB0aGUgZHJvcHpvbmUgY29udGFpbmVyIHRvIGV4cGFuZCB2ZXJ0aWNhbGx5LiAqL1xuICBASW5wdXQoKVxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLmV4cGFuZGFibGUnKVxuICBnZXQgZXhwYW5kYWJsZSgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fZXhwYW5kYWJsZTtcbiAgfVxuICBzZXQgZXhwYW5kYWJsZSh2YWx1ZTogYm9vbGVhbikge1xuICAgIHRoaXMuX2V4cGFuZGFibGUgPSBjb2VyY2VCb29sZWFuUHJvcGVydHkodmFsdWUpO1xuICB9XG4gIHByaXZhdGUgX2V4cGFuZGFibGU6IGJvb2xlYW4gPSBmYWxzZTtcblxuICAvKiogT3BlbiB0aGUgZmlsZSBzZWxlY3RvciBvbiBjbGljay4gKi9cbiAgQElucHV0KClcbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy51bmNsaWNrYWJsZScpXG4gIGdldCBkaXNhYmxlQ2xpY2soKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX2Rpc2FibGVDbGljaztcbiAgfVxuICBzZXQgZGlzYWJsZUNsaWNrKHZhbHVlOiBib29sZWFuKSB7XG4gICAgdGhpcy5fZGlzYWJsZUNsaWNrID0gY29lcmNlQm9vbGVhblByb3BlcnR5KHZhbHVlKTtcbiAgfVxuICBwcml2YXRlIF9kaXNhYmxlQ2xpY2sgPSBmYWxzZTtcblxuICAvKiogRXhwb3NlIHRoZSBpZCwgYXJpYS1sYWJlbCwgYXJpYS1sYWJlbGxlZGJ5IGFuZCBhcmlhLWRlc2NyaWJlZGJ5IG9mIHRoZSBuYXRpdmUgZmlsZSBpbnB1dCBmb3IgcHJvcGVyIGFjY2Vzc2liaWxpdHkuICovXG4gIEBJbnB1dCgpIGlkOiBzdHJpbmc7XG4gIEBJbnB1dCgnYXJpYS1sYWJlbCcpIGFyaWFMYWJlbDogc3RyaW5nO1xuICBASW5wdXQoJ2FyaWEtbGFiZWxsZWRieScpIGFyaWFMYWJlbGxlZGJ5OiBzdHJpbmc7XG4gIEBJbnB1dCgnYXJpYS1kZXNjcmliZWRieScpIGFyaWFEZXNjcmliZWRCeTogc3RyaW5nO1xuXG4gIEBIb3N0QmluZGluZygnY2xhc3Mubmd4LWR6LWhvdmVyZWQnKVxuICBfaXNIb3ZlcmVkID0gZmFsc2U7XG5cbiAgLyoqIFNob3cgdGhlIG5hdGl2ZSBPUyBmaWxlIGV4cGxvcmVyIHRvIHNlbGVjdCBmaWxlcy4gKi9cbiAgQEhvc3RMaXN0ZW5lcignY2xpY2snKVxuICBfb25DbGljaygpIHtcbiAgICBpZiAoIXRoaXMuZGlzYWJsZUNsaWNrKSB7XG4gICAgICB0aGlzLnNob3dGaWxlU2VsZWN0b3IoKTtcbiAgICB9IFxuICB9XG5cbiAgQEhvc3RMaXN0ZW5lcignZHJhZ292ZXInLCBbJyRldmVudCddKVxuICBfb25EcmFnT3ZlcihldmVudCkge1xuICAgIGlmICh0aGlzLmRpc2FibGVkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5wcmV2ZW50RGVmYXVsdChldmVudCk7XG4gICAgdGhpcy5faXNIb3ZlcmVkID0gdHJ1ZTtcbiAgfVxuXG4gIEBIb3N0TGlzdGVuZXIoJ2RyYWdsZWF2ZScpXG4gIF9vbkRyYWdMZWF2ZSgpIHtcbiAgICB0aGlzLl9pc0hvdmVyZWQgPSBmYWxzZTtcbiAgfVxuXG4gIEBIb3N0TGlzdGVuZXIoJ2Ryb3AnLCBbJyRldmVudCddKVxuICBfb25Ecm9wKGV2ZW50KSB7XG4gICAgaWYgKHRoaXMuZGlzYWJsZWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLnByZXZlbnREZWZhdWx0KGV2ZW50KTtcbiAgICB0aGlzLl9pc0hvdmVyZWQgPSBmYWxzZTtcbiAgICB0aGlzLmhhbmRsZUZpbGVEcm9wKGV2ZW50LmRhdGFUcmFuc2Zlci5maWxlcyk7XG4gIH1cbiAgXG4gIHNob3dGaWxlU2VsZWN0b3IoKSB7XG4gICAgaWYgKCF0aGlzLmRpc2FibGVkKSB7XG4gICAgICAodGhpcy5fZmlsZUlucHV0Lm5hdGl2ZUVsZW1lbnQgYXMgSFRNTElucHV0RWxlbWVudCkuY2xpY2soKTtcbiAgICB9XG4gIH1cblxuICBfb25GaWxlc1NlbGVjdGVkKGV2ZW50KSB7XG4gICAgY29uc3QgZmlsZXM6IEZpbGVMaXN0ID0gZXZlbnQudGFyZ2V0LmZpbGVzO1xuICAgIHRoaXMuaGFuZGxlRmlsZURyb3AoZmlsZXMpO1xuXG4gICAgLy8gUmVzZXQgdGhlIG5hdGl2ZSBmaWxlIGlucHV0IGVsZW1lbnQgdG8gYWxsb3cgc2VsZWN0aW5nIHRoZSBzYW1lIGZpbGUgYWdhaW5cbiAgICB0aGlzLl9maWxlSW5wdXQubmF0aXZlRWxlbWVudC52YWx1ZSA9ICcnO1xuXG4gICAgLy8gZml4KCMzMik6IFByZXZlbnQgdGhlIGRlZmF1bHQgZXZlbnQgYmVoYXZpb3VyIHdoaWNoIGNhdXNlZCB0aGUgY2hhbmdlIGV2ZW50IHRvIGVtaXQgdHdpY2UuXG4gICAgdGhpcy5wcmV2ZW50RGVmYXVsdChldmVudCk7XG4gIH1cblxuICBwcml2YXRlIGhhbmRsZUZpbGVEcm9wKGZpbGVzOiBGaWxlTGlzdCkge1xuICAgIGNvbnN0IHJlc3VsdCA9IHRoaXMuc2VydmljZS5wYXJzZUZpbGVMaXN0KGZpbGVzLCB0aGlzLmFjY2VwdCwgdGhpcy5tYXhGaWxlU2l6ZSwgdGhpcy5tdWx0aXBsZSk7XG5cbiAgICB0aGlzLmNoYW5nZS5uZXh0KHtcbiAgICAgIGFkZGVkRmlsZXM6IHJlc3VsdC5hZGRlZEZpbGVzLFxuICAgICAgcmVqZWN0ZWRGaWxlczogcmVzdWx0LnJlamVjdGVkRmlsZXMsXG4gICAgICBzb3VyY2U6IHRoaXNcbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgcHJldmVudERlZmF1bHQoZXZlbnQ6IERyYWdFdmVudCkge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gIH1cbn1cbiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBIb3N0QmluZGluZyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTmd4RHJvcHpvbmVQcmV2aWV3Q29tcG9uZW50IH0gZnJvbSAnLi4vbmd4LWRyb3B6b25lLXByZXZpZXcuY29tcG9uZW50JztcbmltcG9ydCB7IERvbVNhbml0aXplciwgU2FmZVN0eWxlIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ25neC1kcm9wem9uZS1pbWFnZS1wcmV2aWV3JyxcbiAgdGVtcGxhdGU6IGBcbiAgICA8aW1nIFtzcmNdPVwiaW1hZ2VTcmNcIiAvPlxuXHRcdDxuZy1jb250ZW50IHNlbGVjdD1cIm5neC1kcm9wem9uZS1sYWJlbFwiPjwvbmctY29udGVudD5cbiAgICA8bmd4LWRyb3B6b25lLXJlbW92ZS1iYWRnZSAqbmdJZj1cInJlbW92YWJsZVwiIChjbGljayk9XCJfcmVtb3ZlKCRldmVudClcIj5cbiAgICA8L25neC1kcm9wem9uZS1yZW1vdmUtYmFkZ2U+XG5cdGAsXG4gIHN0eWxlczogW2A6aG9zdCgpe21pbi13aWR0aDp1bnNldCFpbXBvcnRhbnQ7bWF4LXdpZHRoOnVuc2V0IWltcG9ydGFudDtwYWRkaW5nOjAhaW1wb3J0YW50fTpob3N0KCk6Zm9jdXMgaW1nLDpob3N0KCk6aG92ZXIgaW1ne29wYWNpdHk6Ljd9Omhvc3QoKTpmb2N1cyBuZ3gtZHJvcHpvbmUtcmVtb3ZlLWJhZGdlLDpob3N0KCk6aG92ZXIgbmd4LWRyb3B6b25lLXJlbW92ZS1iYWRnZXtvcGFjaXR5OjF9Omhvc3QoKSBuZ3gtZHJvcHpvbmUtcmVtb3ZlLWJhZGdle29wYWNpdHk6MH06aG9zdCgpIGltZ3ttYXgtaGVpZ2h0OjEwMCU7Ym9yZGVyLXJhZGl1czo1cHg7b3BhY2l0eTouOH06aG9zdCgpIDo6bmctZGVlcCBuZ3gtZHJvcHpvbmUtbGFiZWx7cG9zaXRpb246YWJzb2x1dGU7b3ZlcmZsb3ctd3JhcDpicmVhay13b3JkfWBdLFxuICBwcm92aWRlcnM6IFtcbiAgICB7XG4gICAgICBwcm92aWRlOiBOZ3hEcm9wem9uZVByZXZpZXdDb21wb25lbnQsXG4gICAgICB1c2VFeGlzdGluZzogTmd4RHJvcHpvbmVJbWFnZVByZXZpZXdDb21wb25lbnRcbiAgICB9XG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgTmd4RHJvcHpvbmVJbWFnZVByZXZpZXdDb21wb25lbnQgZXh0ZW5kcyBOZ3hEcm9wem9uZVByZXZpZXdDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHNhbml0aXplcjogRG9tU2FuaXRpemVyXG4gICkge1xuICAgIHN1cGVyKHNhbml0aXplcik7XG4gIH1cblxuICAvKiogVGhlIGltYWdlIGRhdGEgc291cmNlLiAqL1xuICBpbWFnZVNyYzogc3RyaW5nIHwgQXJyYXlCdWZmZXIgPSAnJztcblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLnJlYWRGaWxlKClcbiAgICAgIC50aGVuKGltZyA9PiBzZXRUaW1lb3V0KCgpID0+IHRoaXMuaW1hZ2VTcmMgPSBpbWcpKVxuICAgICAgLmNhdGNoKGVyciA9PiBjb25zb2xlLmVycm9yKGVycikpO1xuICB9XG59XG4iLCJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbmd4LWRyb3B6b25lLXJlbW92ZS1iYWRnZScsXG4gIHRlbXBsYXRlOiBgXG4gICAgPHN2Zz5cbiAgICAgIDxsaW5lIHgxPVwiMFwiIHkxPVwiMFwiIHgyPVwiMTBcIiB5Mj1cIjEwXCIgLz5cbiAgICAgIDxsaW5lIHgxPVwiMFwiIHkxPVwiMTBcIiB4Mj1cIjEwXCIgeTI9XCIwXCIgLz5cbiAgICA8L3N2Zz5cbiAgYCxcbiAgc3R5bGVzOiBbYDpob3N0KCl7ZGlzcGxheTpmbGV4O2p1c3RpZnktY29udGVudDpjZW50ZXI7YWxpZ24taXRlbXM6Y2VudGVyO2hlaWdodDoyMnB4O3dpZHRoOjIycHg7cG9zaXRpb246YWJzb2x1dGU7dG9wOjVweDtyaWdodDo1cHg7Ym9yZGVyLXJhZGl1czo1MCU7YmFja2dyb3VuZDojYmJiO2NvbG9yOiMzMzM7Y3Vyc29yOnBvaW50ZXJ9Omhvc3QoKTpob3ZlcntiYWNrZ3JvdW5kOiNhZWFlYWV9Omhvc3QoKT5zdmd7aGVpZ2h0OjEwcHg7d2lkdGg6MTBweH06aG9zdCgpPnN2Zz5saW5le3N0cm9rZS13aWR0aDoycHg7c3Ryb2tlOiNmZmZ9YF1cbn0pXG5leHBvcnQgY2xhc3MgTmd4RHJvcHpvbmVSZW1vdmVCYWRnZUNvbXBvbmVudCB7IH1cbiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBPbkRlc3Ryb3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE5neERyb3B6b25lUHJldmlld0NvbXBvbmVudCB9IGZyb20gJy4uL25neC1kcm9wem9uZS1wcmV2aWV3LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBEb21TYW5pdGl6ZXIsIFNhZmVVcmwgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbmd4LWRyb3B6b25lLXZpZGVvLXByZXZpZXcnLFxuICB0ZW1wbGF0ZTogYFxuICAgIDx2aWRlbyAqbmdJZj1cInNhbml0aXplZFZpZGVvU3JjXCIgY29udHJvbHMgKGNsaWNrKT1cIiRldmVudC5zdG9wUHJvcGFnYXRpb24oKVwiPlxuICAgICAgPHNvdXJjZSBbc3JjXT1cInNhbml0aXplZFZpZGVvU3JjXCIgLz5cbiAgICA8L3ZpZGVvPlxuICAgIDxuZy1jb250ZW50IHNlbGVjdD1cIm5neC1kcm9wem9uZS1sYWJlbFwiPjwvbmctY29udGVudD5cbiAgICA8bmd4LWRyb3B6b25lLXJlbW92ZS1iYWRnZSAqbmdJZj1cInJlbW92YWJsZVwiIChjbGljayk9XCJfcmVtb3ZlKCRldmVudClcIj5cbiAgICA8L25neC1kcm9wem9uZS1yZW1vdmUtYmFkZ2U+XG5cdGAsXG4gIHN0eWxlczogW2A6aG9zdCgpe21pbi13aWR0aDp1bnNldCFpbXBvcnRhbnQ7bWF4LXdpZHRoOnVuc2V0IWltcG9ydGFudDtwYWRkaW5nOjAhaW1wb3J0YW50fTpob3N0KCk6Zm9jdXMgdmlkZW8sOmhvc3QoKTpob3ZlciB2aWRlb3tvcGFjaXR5Oi43fTpob3N0KCk6Zm9jdXMgbmd4LWRyb3B6b25lLXJlbW92ZS1iYWRnZSw6aG9zdCgpOmhvdmVyIG5neC1kcm9wem9uZS1yZW1vdmUtYmFkZ2V7b3BhY2l0eToxfTpob3N0KCkgbmd4LWRyb3B6b25lLXJlbW92ZS1iYWRnZXtvcGFjaXR5OjB9Omhvc3QoKSB2aWRlb3ttYXgtaGVpZ2h0OjEwMCU7Ym9yZGVyLXJhZGl1czo1cHh9Omhvc3QoKSA6Om5nLWRlZXAgbmd4LWRyb3B6b25lLWxhYmVse3Bvc2l0aW9uOmFic29sdXRlO292ZXJmbG93LXdyYXA6YnJlYWstd29yZH1gXSxcbiAgcHJvdmlkZXJzOiBbXG4gICAge1xuICAgICAgcHJvdmlkZTogTmd4RHJvcHpvbmVQcmV2aWV3Q29tcG9uZW50LFxuICAgICAgdXNlRXhpc3Rpbmc6IE5neERyb3B6b25lVmlkZW9QcmV2aWV3Q29tcG9uZW50XG4gICAgfVxuICBdXG59KVxuZXhwb3J0IGNsYXNzIE5neERyb3B6b25lVmlkZW9QcmV2aWV3Q29tcG9uZW50IGV4dGVuZHMgTmd4RHJvcHpvbmVQcmV2aWV3Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHNhbml0aXplcjogRG9tU2FuaXRpemVyXG4gICkge1xuICAgIHN1cGVyKHNhbml0aXplcik7XG4gIH1cblxuICAvKiogVGhlIHZpZGVvIGRhdGEgc291cmNlLiAqL1xuICBzYW5pdGl6ZWRWaWRlb1NyYzogU2FmZVVybDtcblxuICBwcml2YXRlIHZpZGVvU3JjOiBzdHJpbmc7XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgaWYgKCF0aGlzLmZpbGUpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ05vIGZpbGUgdG8gcmVhZC4gUGxlYXNlIHByb3ZpZGUgYSBmaWxlIHVzaW5nIHRoZSBbZmlsZV0gSW5wdXQgcHJvcGVydHkuJyk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogV2Ugc2FuaXRpemUgdGhlIFVSTCBoZXJlIHRvIGVuYWJsZSB0aGUgcHJldmlldy5cbiAgICAgKiBQbGVhc2Ugbm90ZSB0aGF0IHRoaXMgY291bGQgY2F1c2Ugc2VjdXJpdHkgaXNzdWVzIVxuICAgICAqKi9cbiAgICB0aGlzLnZpZGVvU3JjID0gVVJMLmNyZWF0ZU9iamVjdFVSTCh0aGlzLmZpbGUpO1xuICAgIHRoaXMuc2FuaXRpemVkVmlkZW9TcmMgPSB0aGlzLnNhbml0aXplci5ieXBhc3NTZWN1cml0eVRydXN0VXJsKHRoaXMudmlkZW9TcmMpO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgVVJMLnJldm9rZU9iamVjdFVSTCh0aGlzLnZpZGVvU3JjKTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBOZ3hEcm9wem9uZUxhYmVsRGlyZWN0aXZlIH0gZnJvbSAnLi9uZ3gtZHJvcHpvbmUtbGFiZWwuZGlyZWN0aXZlJztcbmltcG9ydCB7IE5neERyb3B6b25lUHJldmlld0NvbXBvbmVudCB9IGZyb20gJy4vbmd4LWRyb3B6b25lLXByZXZpZXcvbmd4LWRyb3B6b25lLXByZXZpZXcuY29tcG9uZW50JztcbmltcG9ydCB7IE5neERyb3B6b25lQ29tcG9uZW50IH0gZnJvbSAnLi9uZ3gtZHJvcHpvbmUvbmd4LWRyb3B6b25lLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBOZ3hEcm9wem9uZUltYWdlUHJldmlld0NvbXBvbmVudCB9IGZyb20gJy4vbmd4LWRyb3B6b25lLXByZXZpZXcvbmd4LWRyb3B6b25lLWltYWdlLXByZXZpZXcvbmd4LWRyb3B6b25lLWltYWdlLXByZXZpZXcuY29tcG9uZW50JztcbmltcG9ydCB7IE5neERyb3B6b25lUmVtb3ZlQmFkZ2VDb21wb25lbnQgfSBmcm9tICcuL25neC1kcm9wem9uZS1wcmV2aWV3L25neC1kcm9wem9uZS1yZW1vdmUtYmFkZ2Uvbmd4LWRyb3B6b25lLXJlbW92ZS1iYWRnZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgTmd4RHJvcHpvbmVWaWRlb1ByZXZpZXdDb21wb25lbnQgfSBmcm9tICcuL25neC1kcm9wem9uZS1wcmV2aWV3L25neC1kcm9wem9uZS12aWRlby1wcmV2aWV3L25neC1kcm9wem9uZS12aWRlby1wcmV2aWV3LmNvbXBvbmVudCc7XG5cbkBOZ01vZHVsZSh7XG5cdGltcG9ydHM6IFtcblx0XHRDb21tb25Nb2R1bGVcblx0XSxcblx0ZGVjbGFyYXRpb25zOiBbXG5cdFx0Tmd4RHJvcHpvbmVDb21wb25lbnQsXG5cdFx0Tmd4RHJvcHpvbmVMYWJlbERpcmVjdGl2ZSxcblx0XHROZ3hEcm9wem9uZVByZXZpZXdDb21wb25lbnQsXG5cdFx0Tmd4RHJvcHpvbmVJbWFnZVByZXZpZXdDb21wb25lbnQsXG5cdFx0Tmd4RHJvcHpvbmVSZW1vdmVCYWRnZUNvbXBvbmVudCxcblx0XHROZ3hEcm9wem9uZVZpZGVvUHJldmlld0NvbXBvbmVudCxcblx0XSxcblx0ZXhwb3J0czogW1xuXHRcdE5neERyb3B6b25lQ29tcG9uZW50LFxuXHRcdE5neERyb3B6b25lTGFiZWxEaXJlY3RpdmUsXG5cdFx0Tmd4RHJvcHpvbmVQcmV2aWV3Q29tcG9uZW50LFxuXHRcdE5neERyb3B6b25lSW1hZ2VQcmV2aWV3Q29tcG9uZW50LFxuXHRcdE5neERyb3B6b25lUmVtb3ZlQmFkZ2VDb21wb25lbnQsXG5cdFx0Tmd4RHJvcHpvbmVWaWRlb1ByZXZpZXdDb21wb25lbnQsXG5cdF1cbn0pXG5leHBvcnQgY2xhc3MgTmd4RHJvcHpvbmVNb2R1bGUgeyB9XG4iXSwibmFtZXMiOlsidHNsaWJfMS5fX2V4dGVuZHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBO0lBRUE7S0FHMEM7O2dCQUh6QyxTQUFTLFNBQUM7b0JBQ1YsUUFBUSxFQUFFLG9CQUFvQjtpQkFDOUI7O0lBQ3dDLGdDQUFDO0NBQUE7Ozs7Ozs7Ozs7OztBQ0ExQyxTQUFnQixxQkFBcUIsQ0FBQyxLQUFVO0lBRS9DLE9BQU8sS0FBSyxJQUFJLElBQUksSUFBSSxLQUFHLEtBQU8sS0FBSyxPQUFPLENBQUM7Q0FDL0M7Ozs7Ozs7QUFNRCxTQUFnQixvQkFBb0IsQ0FBQyxLQUFVOzs7O0lBSzlDLE9BQU8sQ0FBQyxDQUFDLEtBQUssQ0FBQyxVQUFVLG9CQUFDLEtBQUssR0FBUSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLElBQUksTUFBTSxDQUFDLEtBQUssQ0FBQyxHQUFHLElBQUksQ0FBQztDQUMxRjs7Ozs7Ozs7SUNmQSxZQUFhO0lBQ2IsVUFBVzs7OztBQUdaO0lBV0MscUNBQ1csU0FBdUI7UUFBdkIsY0FBUyxHQUFULFNBQVMsQ0FBYztRQWN4QixlQUFVLEdBQUcsS0FBSyxDQUFDOzs7O1FBR1YsWUFBTyxHQUFHLElBQUksWUFBWSxFQUFRLENBQUM7Ozs7UUFtQzdCLGFBQVEsR0FBRyxDQUFDLENBQUM7S0FuRGpDO0lBTUwsc0JBQ0ksa0RBQVM7Ozs7OztRQURiO1lBRUMsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDO1NBQ3ZCOzs7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