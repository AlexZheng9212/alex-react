import React, { Component } from 'react'
import Input from '../Input'
import Button from '../Button'

interface IForm {
    width: number;
    height: number;
    disable: boolean;
    onSubmit: Function;
    onCancel: Function;
    onReset: Function;
}

class LoginForm extends Component<IForm>{
    handleChange = (event) => {
        console.log(event.target.value)
    }
    handleClick = () => {
        alert()
    }

    render() {
        return (
            <form onSubmit={this.onSubmit}>
            <Input type='text' onChange={this.handleChange}/>
            <Button type='button' name='WTF' />
            </form>
        )
    }
}

export default LoginForm