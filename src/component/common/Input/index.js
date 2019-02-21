import React, { Component } from 'react'

interface IInputProps {
    type: string;
    width: string;
    height: string;
    validation: Function;
}

interface IInputState {
    value: string;
}


class Input extends Component<IInputProps, IInputState> {
    render() {
        return (
            <div>
                <input type={this.props.type} onChange={this.props.validation} />
            </div>
        )
    }
}

export default Input