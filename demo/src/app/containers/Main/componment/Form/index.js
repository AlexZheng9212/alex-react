import React, { useState } from 'react'
import style from './index.scss'
import { Button, FormGroup } from 'react-bootstrap'

export const LoginForm = ({ handleSubmit }) => {
    const handleReset = () => {
        setUser('')
        setPwd('')
    }
    const [user, setUser] = useState('')
    const [pwd, setPwd] = useState('')
    const disabled = (user === null || pwd === null) || (user === '' || pwd === '')
    return (
        <form className={style.form}>
            <FormGroup controlId='email'>
                <input type='text' value={user} onChange={(e) => setUser(e.target.value)} />
            </FormGroup>
            <FormGroup controlId='pwd'>
                <input type='text' value={pwd} onChange={(e) => setPwd(e.target.value)} />
            </FormGroup>
            <Button type='button' onClick={() => {handleSubmit(user, pwd)}} disabled={disabled} >Submit</Button>
            <Button type='reset' onClick={() => { handleReset() }}>Reset</Button>
        </form>
    )

}
