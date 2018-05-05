import * as React from "react";

import { ImageLoaderProps, ImageLoaderPropTypes, ImageLoaderDefaultProps } from "./ImageLoaderProps";

export interface ImageLoaderState {
    currentImage: number;
    errorOnLoad: boolean;
}

export class ImageLoader extends React.Component<ImageLoaderProps, ImageLoaderState> {
    public static readonly propTypes = ImageLoaderPropTypes;
    public static readonly defaultProps = ImageLoaderDefaultProps;

    public readonly imageStack = [this.props.initialImage, ...this.props.imageStack];
    public readonly state: ImageLoaderState = {
        currentImage: 0,
        errorOnLoad: false
    };

    public render(): React.ReactNode {
        const { imageStack, initialImage, ...imageProps } = this.props;

        return (
            <React.Fragment>
                <img {...imageProps} src={this.getSrc(this.state.currentImage)} />
                {(!this.isAllLoaded && !this.state.errorOnLoad) && (
                    <img
                        {...imageProps}
                        src={this.getSrc(this.state.currentImage + 1)}
                        onError={this.handleError}
                        onLoad={this.nextImage}
                    />
                )}
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

    protected handleError = (): void => {
        this.setState({
            errorOnLoad: true
        });
    }
}
