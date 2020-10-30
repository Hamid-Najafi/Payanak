import { OnChanges, OnInit, SimpleChanges, EventEmitter } from '@angular/core';
import { ImageWMS } from 'ol/source';
import { LayerImageComponent } from '../layers/layerimage.component';
import { SourceComponent } from './source.component';
import { ProjectionLike } from 'ol/proj';
import { AttributionLike } from 'ol/source/Source';
import { LoadFunction } from 'ol/Image';
export declare class SourceImageWMSComponent extends SourceComponent implements OnChanges, OnInit {
    instance: ImageWMS;
    attributions: AttributionLike;
    crossOrigin: string;
    hidpi: boolean;
    serverType: string;
    imageLoadFunction?: LoadFunction;
    params: {
        [key: string]: any;
    };
    projection: ProjectionLike | string;
    ratio: number;
    resolutions: Array<number>;
    url: string;
    imageLoadStart: EventEmitter<any>;
    imageLoadEnd: EventEmitter<any>;
    imageLoadError: EventEmitter<any>;
    constructor(layer: LayerImageComponent);
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
}
