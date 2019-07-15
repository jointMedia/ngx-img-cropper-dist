import { CropperDrawSettings } from "./cropperDrawSettings";
export interface ICropperSettings {
    canvasWidth?: number;
    canvasHeight?: number;
    dynamicSizing?: boolean;
    cropperClass?: string;
    croppingClass?: string;
    width?: number;
    height?: number;
    minWidth?: number;
    minHeight?: number;
    minWithRelativeToResolution?: boolean;
    croppedWidth?: number;
    croppedHeight?: number;
    cropperDrawSettings?: any;
    touchRadius?: number;
    noFileInput?: boolean;
    fileType?: string;
    resampleFn?: Function;
    markerSizeMultiplier?: number;
    centerTouchRadius?: number;
    showCenterMarker?: boolean;
    allowedFilesRegex?: RegExp;
    cropOnResize?: boolean;
    preserveSize?: boolean;
    compressRatio?: number;
    rounded?: boolean;
    keepAspect?: boolean;
    showFullCropInitial?: boolean;
}
export declare class CropperSettings implements ICropperSettings {
    canvasWidth: number;
    canvasHeight: number;
    dynamicSizing: boolean;
    cropperClass: string;
    croppingClass: string;
    width: number;
    height: number;
    minWidth: number;
    minHeight: number;
    minWithRelativeToResolution: boolean;
    croppedWidth: number;
    croppedHeight: number;
    cropperDrawSettings: CropperDrawSettings;
    touchRadius: number;
    noFileInput: boolean;
    fileType: string;
    resampleFn: Function;
    markerSizeMultiplier: number;
    centerTouchRadius: number;
    showCenterMarker: boolean;
    allowedFilesRegex: RegExp;
    cropOnResize: boolean;
    preserveSize: boolean;
    compressRatio: number;
    showFullCropInitial: boolean;
    private _rounded;
    private _keepAspect;
    constructor(settings?: ICropperSettings);
    rounded: boolean;
    keepAspect: boolean;
}