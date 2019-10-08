import * as React from "react";
import { ImageLoader } from "../../ImageLoader";
import { canUseWebP } from "react-img-webp";

const images = (): Array<[ number, string ]> => canUseWebP() ? [
    [ 20, require("../../../../images/bobraCS-20.webp") ],
    [ 40, require("../../../../images/bobraCS-40.webp") ],
    [ 60, require("../../../../images/bobraCS-60.webp") ],
    [ 80, require("../../../../images/bobraCS-80.webp") ],
    [ 100, require("../../../../images/bobraCS-100.webp") ],
] : [
    [ 20, require("../../../../images/bobraCS-20.jpg") ],
    [ 40, require("../../../../images/bobraCS-40.jpg") ],
    [ 60, require("../../../../images/bobraCS-60.jpg") ],
    [ 80, require("../../../../images/bobraCS-80.jpg") ],
    [ 100, require("../../../../images/bobraCS-100.jpg") ],
];

const shortStack = [ 20, 40 ];
const defaultStack = [ 20, 40, 60 ];

export const ImageStack: React.FC<{ stack?: number[] }> = React.memo(({ stack = defaultStack }) => {
    const imageStack: string[] = React.useMemo(
        () => (stack ? images().filter(([ type ]) => stack.includes(type)) : images())
            .map(([ , image ]): string => image)
        ,
        [ stack ]
    );
    return (
        <ImageLoader
            imageStack={imageStack}
            width="582"
            height="322"
            alt="Image"
        />
    );
});
ImageStack.displayName = "BobraCSPage.ImageStack";

export const ShortImageStack: React.FC<{}> = React.memo(() => <ImageStack stack={shortStack}/>, () => false);
ShortImageStack.displayName = ImageStack.displayName + "(short)";
