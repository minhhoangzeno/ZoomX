import React from 'react';
import DemoSignUp from '../component/signup/DemoSignUp';
import '../style/signup.scss';
import { MetaTags } from 'react-meta-tags';

export default function SignupPage() {
    return (
        <>
            <MetaTags>
                <title>Đăng ký</title>
            </MetaTags>
            <DemoSignUp />
        </>
    )
}