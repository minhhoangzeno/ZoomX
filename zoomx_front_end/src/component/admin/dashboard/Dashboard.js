import React from 'react';
import Blog from './blog/Blog';
import Investment from './investment/Investment';
import Partner from './partner/Partner';
import Project from './project/Project';
import Recruitment from './recruitment/Recruitment';
export default function Dashboard({ isPage }) {
    return (
        <>
            <div style={{padding:50}}>
                {isPage == "investment" ? <Investment /> : <></>}
                {isPage == "project" ? <Project /> : <></>}
                {isPage == "blog" ? <Blog /> : <></>}
                {isPage == "recruitment" ? <Recruitment /> : <></>}
                {isPage == "partner" ? <Partner /> : <></>}
            </div>
        </>
    )
}