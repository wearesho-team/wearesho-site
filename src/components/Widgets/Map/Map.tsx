import * as React from "react";
import GoogleMapReact from "google-map-react";

import {ElementWithTimer, smartClearTimeout} from "../../../helpers/smartClearTimeout";

import {Config} from "../../../data/Config";
import {styles} from "../../../data/Widgets/Map";

import {MapDefaultProps, MapProps, MapPropTypes} from "./MapProps";

import {TransitionSwitch} from "../../TransitionSwitch";
import {MapState} from "./MapState";
import {Marker} from "./Marker";

export class Map extends React.Component<MapProps, MapState> implements ElementWithTimer {
    public static defaultProps = MapDefaultProps;
    public static propTypes = MapPropTypes;

    public timer: any;
    public state: MapState = {
        readyToMount: false
    };

    public element: GoogleMapReact;

    protected readonly additionalTimeout = 100;
    protected clearTimeout = smartClearTimeout.bind(this);

    public componentWillMount() {
        this.clearTimeout(this.timer);

        this.timer = setTimeout(() => {
            this.setState({readyToMount: true});
        }, TransitionSwitch.animationDuration + this.additionalTimeout);
    }

    public componentWillUnmount() {
        this.clearTimeout(this.timer);
    }

    public render(): JSX.Element {
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

        return this.state.readyToMount && (
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
