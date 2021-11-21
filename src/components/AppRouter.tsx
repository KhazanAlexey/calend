import React from 'react';
import {Routes, Route, Navigate} from 'react-router-dom';
import {privateRoutes, publicRoutes, RouteNames} from "../router";
import Login from "../pages/login";
import Event from "../pages/event";
import {useSelector} from "react-redux";
import {useTupeSelector} from "../hooks/useTupeSelector";

const AppRouter = () => {
    const auth = false
    const {isAuth}=useTupeSelector(state => state.authReducer)
    return (
        isAuth
            ? <Routes>
                {/*{privateRoutes.map(route =>*/}
                {/*    <Route*/}
                {/*        key={route.path}*/}
                {/*        path={route.path}*/}
                {/*        element={route.component}*/}
                {/*    />)*/}
                {/*}*/}
                <Route path='/' element={<Event/>}/>
                <Route path="*" element={<Navigate to={RouteNames.EVENT}/>}/>
            </Routes>
            :
            <Routes>
                {/*{publicRoutes.map(route =>*/}
                {/*    <Route*/}
                {/*        key={route.path}*/}
                {/*        path={route.path}*/}
                {/*        element={route.component}*/}
                {/*    />)*/}
                {/*}*/}
                <Route path='/login' element={<Login/>}/>

                <Route path="*" element={<Navigate to={RouteNames.LOGIN}/>}/>
            </Routes>
    );
};

export default AppRouter;