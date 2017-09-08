import * as React from "react";
import GoogleMapReact from "google-map-react";

import {ElementWithTimer, smartClearTimeout} from "../../../helpers/smartClearTimeout";

import {Config} from "../../../data/Config";
import {styles} from "../../../data/Widgets/Map";

import {MapDefaultProps, MapProps, MapPropTypes} from "./MapProps";

import {TransitionSwitch} from "../../TransitionSwitch";
import {MapState} from "./MapState";

export class Map extends React.Component<MapProps, MapState> implements ElementWithTimer {
    public static defaultProps = MapDefaultProps;
    public static propTypes = MapPropTypes;

    public timer: any;
    public state: MapState = {
        readyToMount: false
    };

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
            },
            ...this.props
        };

        return this.state.readyToMount && (
            <div className="map-container">
                <GoogleMapReact {...props}/>
            </div>
        );
    }
}
