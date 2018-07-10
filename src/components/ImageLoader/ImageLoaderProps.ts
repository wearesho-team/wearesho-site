import * as PropTypes from "prop-types";

export interface ImageLoaderProps
    extends React.DetailedHTMLProps<React.ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement> {
    imageStack: string[];
    initialImage?: string;
}

export const ImageLoaderPropTypes: {[P in keyof ImageLoaderProps]: PropTypes.Validator<any>} = {
    imageStack: PropTypes.array.isRequired,
    initialImage: PropTypes.string
};

export const ImageLoaderDefaultProps: {[P in keyof ImageLoaderProps]?: ImageLoaderProps[P]} = {
    // tslint:disable-next-line
    initialImage: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
};
