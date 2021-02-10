import * as React from "react";
import { ImageLoader } from "../../ImageLoader";
import { canUseWebP } from "react-img-webp";

import webp20 from "../../../../images/bobraCS-20.webp";
import webp40 from "../../../../images/bobraCS-40.webp";
import webp60 from "../../../../images/bobraCS-60.webp";
import webp80 from "../../../../images/bobraCS-80.webp";
import webp100 from "../../../../images/bobraCS-100.webp";
import jpeg20 from "../../../../images/bobraCS-20.jpg";
import jpeg40 from "../../../../images/bobraCS-40.jpg";
import jpeg60 from "../../../../images/bobraCS-60.jpg";
import jpeg80 from "../../../../images/bobraCS-80.jpg";
import jpeg100 from "../../../../images/bobraCS-100.jpg";

const images = (): Array<[ number, string ]> => canUseWebP() ? [
    [ 20, webp20 ],
    [ 40, webp40 ],
    [ 60, webp60 ],
    [ 80, webp80 ],
    [ 100, webp100 ],
] : [
    [ 20, jpeg20 ],
    [ 40, jpeg40 ],
    [ 60, jpeg60 ],
    [ 80, jpeg80 ],
    [ 100, jpeg100 ],
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
