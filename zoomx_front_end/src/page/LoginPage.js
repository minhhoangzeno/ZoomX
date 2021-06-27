import React from 'react';
import Login from '../component/login/Login';
import '../style/login.scss';
import { MetaTags } from 'react-meta-tags';

export default function LoginPage() {
    return (
        <>
            <MetaTags>
                <title>Đăng nhập</title>
            </MetaTags>
            <Login />
        </>
    )
}