import React from 'react'
import { withRouter } from 'react-router-dom'
import { LoginForm } from '../../componment/Form'
import history from '../../../../history';

class Login extends React.Component {
    handleOnSubmit = (user, pwd) => {
        if(user === '123'&&pwd ==='123'){
        history.push('/abc')
        }
    }
    render() {
        return (
            <LoginForm handleSubmit={this.handleOnSubmit}/>
        )
    }
}
export default Login