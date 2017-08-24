import * as React from "react";
import GoogleMapReact from "google-map-react";
import {styles} from "../../../data/Widgets/Map";
import {MapDefaultProps, MapProps, MapPropTypes} from "./MapProps";

export class Map extends React.Component<any, MapProps> {

    public static defaultProps = MapDefaultProps;
    public static propTypes = MapPropTypes;

    // Paste into config
    // AIzaSyDAq3RWOHVldSRJRvX90QG9IOkNMApLPwM
    public render() {
        const props = {
            ...{
                options: {styles},
                bootstrapURLKeys: {key: "", language: "en"},
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
