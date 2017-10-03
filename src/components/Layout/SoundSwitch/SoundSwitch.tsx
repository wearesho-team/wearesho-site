import * as React from "react";

export class SoundSwitch extends React.Component<undefined, undefined> {

    public render(): JSX.Element {
        return (
            <div className="sound-switch">
                <div className="sound-switch__bar"/>
                <div className="sound-switch__bar"/>
                <div className="sound-switch__bar"/>
            </div>
        );

    }
}
