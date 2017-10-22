import * as React from "react";
import GoogleMapReact from "google-map-react";

import {Config} from "../../../data/Config";
import {styles} from "../../../data/Widgets/Map";

import {MapDefaultProps, MapProps, MapPropTypes} from "./MapProps";

import {Marker} from "./Marker";
import {AbstractWidget} from "../AbstractWidget";

export class Map extends AbstractWidget<MapProps> {
    public static defaultProps = MapDefaultProps;
    public static propTypes = MapPropTypes;

    public element: GoogleMapReact;

    public componentWillUnmount() {
        this.clearTimeout(this.timer);
    }

    public render(): JSX.Element {
        if (!this.state.readyToMount) {
            // tslint:disable:no-null-keyword
            return null;
        }

        const props = {
            ...{
                options: {styles},
                bootstrapURLKeys: {
                    key: Config.mapApiKey,
                    language: "en"
                },
                yesIWantToUseGoogleMapApiInternals: true,
                onGoogleApiLoaded: this.onMapLoad,
                ref: this.setElement
            },
            ...this.props
        };

        return (
            <div className="map-container">
                <GoogleMapReact {...props}>
                    {this.Marker}
                </GoogleMapReact>
            </div>
        );
    }

    protected setElement = (element: GoogleMapReact) => element && (this.element = element);

    protected onMapLoad = () => {
        const map = this.element as any;

        map && map.maps_.event.addDomListener(window, "resize", () => {
            map.map_ && map.map_.setCenter(this.props.center);
        });
    };

    protected get Marker(): JSX.Element {
        return this.props.children && (
            <Marker lat={this.props.center.lat} lng={this.props.center.lng}>
                {this.props.children}
            </Marker>
        );
    }
}
