import React, { Component } from 'react'

interface IButtonProps{
    type: string;
    onClick: Function;
    name?: string;
}

interface IButtonState{

}

class Button extends Component<IButtonProps, IButtonState>{
    render(){
        return(
            <div>
                <button type={this.props.type} onClick={this.props.onClick}>
                {this.props.name}
                </button>
            </div>
        )
    }
}

export default Button