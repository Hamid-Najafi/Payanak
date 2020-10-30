import { OnInit } from '@angular/core';
import { NgxDropzonePreviewComponent } from '../ngx-dropzone-preview.component';
import { DomSanitizer } from '@angular/platform-browser';
export declare class NgxDropzoneImagePreviewComponent extends NgxDropzonePreviewComponent implements OnInit {
    constructor(sanitizer: DomSanitizer);
    /** The image data source. */
    imageSrc: string | ArrayBuffer;
    ngOnInit(): void;
}
