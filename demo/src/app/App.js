import React from 'react'
import Header from './componment/Header';
import LoginForm from './containers/Main/pages/Login'



class App extends React.Component{
    render(){
        return(
            <div>
            <Header/>
            <LoginForm/>
            </div>
        )
    }
}

export default App