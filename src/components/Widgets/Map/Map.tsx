import * as React from "react";
import GoogleMapReact from "google-map-react";

import {Config} from "../../../data/Config";

import {styles} from "../../../data/Widgets/Map";
import {MapDefaultProps, MapProps, MapPropTypes} from "./MapProps";

export class Map extends React.Component<MapProps, undefined> {

    public static defaultProps = MapDefaultProps;
    public static propTypes = MapPropTypes;

    public render(): JSX.Element {
        const props = {
            ...{
                options: {styles},
                bootstrapURLKeys: {
                    key: Config.mapApiKey,
                    language: "en"
                },
            },
            ...this.props
        };

        return (
            <div className="map-container">
                <GoogleMapReact {...props}/>
            </div>
        );
    }
}
