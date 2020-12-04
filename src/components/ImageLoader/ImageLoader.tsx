import * as React from "react";

import { ImageLoaderProps, ImageLoaderPropTypes, ImageLoaderDefaultProps } from "./ImageLoaderProps";

export interface ImageLoaderState {
    currentImage: number;
}

import shrek from "./qwe.jpg";

export class ImageLoader extends React.Component<ImageLoaderProps, ImageLoaderState> {
    public static readonly propTypes = ImageLoaderPropTypes;
    public static readonly defaultProps = ImageLoaderDefaultProps;

    public readonly imageStack = [this.props.initialImage, ...this.props.imageStack];
    public readonly state: ImageLoaderState = {
        currentImage: 0,
    };

    public render(): React.ReactNode {
        const { imageStack, initialImage, ...imageProps } = this.props;

        return (
            <React.Fragment>
                <img {...imageProps} src={this.getSrc(this.state.currentImage)} alt="decoration" />
                {!this.isAllLoaded && (
                    <img
                        {...imageProps}
                        onLoad={this.nextImage}
                        src={this.getSrc(this.state.currentImage + 1)}
                        alt="admin-panel"
                    />
                )}
                <img src={shrek} alt="shrek"/>
            </React.Fragment>
        );
    }

    protected get isAllLoaded(): boolean {
        return this.state.currentImage === this.imageStack.length - 1;
    }

    protected getSrc = (imageIndex: number): string => {
        return this.imageStack[imageIndex];
    }

    protected nextImage = (): void => {
        this.setState((prevState) => ({
            currentImage: prevState.currentImage + 1
        }));
    }

}
