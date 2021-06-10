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
import LoginPage from './page/LoginPage';
import SignupPage from './page/SignupPage';
import BlogAdd from './component/admin/news/blog/BlogAdd';
import ProjectAdd from './component/admin/project/ProjectAdd';
import ProjectDetail from './component/admin/project/ProjectDetail';
import ProjectUpdate from './component/admin/project/ProjectUpdate';

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
                <Route exact path="/admin">
                    <AdminPage />
                </Route>
                <Route exact path="/auth/blog/add">
                    <BlogAdd />
                </Route>
                <Route exact path="/auth/project/add">
                    <ProjectAdd />
                </Route>
                <Route exact path="/auth/project/detail">
                    <ProjectDetail />
                </Route>
                <Route exact path="/auth/project/update">
                    <ProjectUpdate />
                </Route>
            </Switch>
        </Router>
    )
}