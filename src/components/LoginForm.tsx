import React, {ChangeEvent, ChangeEventHandler, useState} from 'react';
import {Button, Form, Input} from "antd";
import {rules} from "../utils/rules";
import {useDispatch, useSelector} from "react-redux";
import {AuthActionCreators} from "../store/reducers/auth/actionCreators";
import {useTupeSelector} from "../hooks/useTupeSelector";

const LoginForm = () => {
const dispatch=useDispatch()
    const {isAuth,isLoading,error}=useTupeSelector(state => state.authReducer)
 const submit=()=>{
     console.log('submit')
     dispatch(AuthActionCreators.login('username','123'))
 }
const [userName,setUserName]=useState<string>('')
const [password,setPassword]=useState<string>('')
    return (
        <Form
            onFinish={submit}
        >
            {error && <div style={{color:'red'}}>{error}</div>}

            <Form.Item
                label="Username"
                name="username"
                rules={[rules.requetied('Введите имя')]}
            >
                <Input value={userName} onChange={(event:ChangeEvent<HTMLInputElement>)=>setUserName(event.target.value)} />
            </Form.Item>
            <Form.Item
                label="Password"
                name="password"
                rules={[rules.requetied('Введите пароль')]}
            >
                <Input  value={password} onChange={(event:ChangeEvent<HTMLInputElement>)=>setPassword(event.target.value)}/>
            </Form.Item>
            <Form.Item >
                <Button type="primary" htmlType="submit" loading={isLoading}>
                    Войти
                </Button>
            </Form.Item>

        </Form>
    );
};

export default LoginForm;