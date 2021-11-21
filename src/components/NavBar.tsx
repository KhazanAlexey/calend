import React from 'react';
import {Layout, Menu, Row} from 'antd'
import {useNavigate} from 'react-router-dom';
import '../App.css'
import {RouteNames} from "../router";
import {useTupeSelector} from "../hooks/useTupeSelector";
import {useDispatch} from "react-redux";
import {AuthActionCreators} from "../store/reducers/auth/actionCreators";


const NavBar = () => {
    const route = useNavigate()
    const dispatch=useDispatch()
    const {isAuth}=useTupeSelector(state => state.authReducer)
    return (
        <Layout.Header>
            <Row justify='end'>
                {isAuth
                    ?
                    <>
                        <div style={{color: 'white'}}> Alex</div>
                        <Menu theme='dark' mode='horizontal' selectable={false}>
                            <Menu.Item
                                onClick={() => dispatch(AuthActionCreators.logOut())}
                                key={1}
                            >LOGOUT
                            </Menu.Item>
                        </Menu></>
                    :
                    <>
                        <div style={{color: 'white'}}> Alex</div>
                        <Menu theme='dark' mode='horizontal' key={1} selectable={false}>
                            <Menu.Item onClick={() => {
                                route(RouteNames.LOGIN)
                            }} key={1}
                            >Login
                            </Menu.Item>
                        </Menu></>
                }
            </Row>
        </Layout.Header>
    );
};

export default NavBar;