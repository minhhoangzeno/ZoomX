import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import LibraryPage from './page/LibraryPage';
import ContactPage from './page/ContactPage';
import DetailProjectPage from './page/DetailProjectPage';
import DetailRecruitmentPage from './page/DetailRecruitmentPage';
import HomePage from './page/HomePage';
import InvestmentPage from './page/InvestmentPage';
import NewsPage from './page/NewsPage';
import ProjectPage from './page/ProjectPage';
import RecruitmentPage from './page/RecruitmentPage';
import ZoomXPage from './page/ZoomXPage';
import BlogDetailPage from './page/BlogDetailPage';
import AdminPage from './page/AdminPage';
import SignupPage from './page/SignupPage';

import LoginPage from './page/LoginPage';
import DemoSignUp from './component/signup/DemoSignUp'
import BlogDetail from './component/admin/news/blog/BlogDetail';
import BlogAdd from './component/admin/news/blog/BlogAdd';
import ProjectAdd from './component/admin/project/ProjectAdd';
import ProjectDetail from './component/admin/project/ProjectDetail';
import ProjectUpdate from './component/admin/project/ProjectUpdate';
import BlogUpdate from './component/admin/news/blog/BlogUpdate';
import Login from './component/login/Login';

const user = JSON.parse(localStorage.getItem("user"));

export default function Navigation() {
    return (
        <Router>
            <Switch>
                <Route exact path="/">
                    <HomePage />
                </Route>
                <Route exact path="/login">
                    <LoginPage />
                </Route>
                <Route exact path="/signup">
                    <SignupPage />
                </Route>
                <Route exact path="/library">
                    <LibraryPage />
                </Route>
                <Route exact path="/zoomX">
                    <ZoomXPage />
                </Route>
                <Route exact path="/contact">
                    <ContactPage />
                </Route>
                <Route exact path="/project">
                    <ProjectPage />
                </Route>
                <Route exact path="/detail-project">
                    <DetailProjectPage />
                </Route>
                <Route exact path="/news">
                    <NewsPage />
                </Route>
                <Route exact path="/investment">
                    <InvestmentPage />
                </Route>
                <Route exact path="/recruitment">
                    <RecruitmentPage />
                </Route>
                <Route exact path="/detail-recruitment">
                    <DetailRecruitmentPage />
                </Route>
                <Route exact path="/blog-detail">
                    <BlogDetailPage />
                </Route>
                <Route exact path="/login">
                    <Login />
                </Route>
                <Route exact path="/admin" render={() => {
                    return (user ? <AdminPage /> : <Login />)
                }}>
                </Route>

                <Route exact path="/auth/blog/add" render={() => {
                    return (user && (user.isAdmin !== "Member")) ? <BlogAdd /> : <Login />
                }}>
                </Route>

                <Route exact path="/auth/blog/detail" render={() => {
                    return (user && (user.isAdmin !== "Member")) ? <BlogDetail /> : <Login />
                }}>
                </Route>

                <Route exact path="/auth/blog/update" render={() => {
                    return (user && (user.isAdmin !== "Member")) ? <BlogUpdate /> : <Login />
                }}>
                </Route>

                <Route exact path="/auth/project/add" render={() => {
                    return (user && (user.isAdmin === "Admin")) ? <ProjectAdd /> : <Login />
                }}>
                </Route>

                <Route exact path="/auth/project/detail" render={() => {
                    return (user && (user.isAdmin === "Admin")) ? <ProjectDetail /> : <Login />
                }}>
                </Route>

                <Route exact path="/auth/project/update" render={() => {
                    return (user && (user.isAdmin === "Admin")) ? <ProjectUpdate /> : <Login />
                }}>
                </Route>
            </Switch>
        </Router>
    )
}