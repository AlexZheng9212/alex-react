import React from 'react'
import {Route, Router} from 'react-router-dom'
import App from './app/App'
import LoginPage from './app/containers/Main/pages/Login'
import history from './app/history'

export default (
    <Router history={history}>
    <App />
    </Router>
)