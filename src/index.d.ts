declare module "*.jpg";
declare module "*.png";
import webpack = require("webpack");
export = webpack;
declare module '*.jpg' {
    const jpgPath: string;

}
declare module '*.jpeg' {
    const jpegPath: string;

}
declare module '*.svg' {
    const svgPath: string;

}
declare module '*.png' {
    const pngPath: string;

}