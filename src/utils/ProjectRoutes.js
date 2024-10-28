import React from 'react';
import { Route, Routes, BrowserRouter, Navigate } from "react-router-dom";
import FeaturesMain from '../pages/Features/FeaturesMain';
import HomeMain from '../pages/Home/HomeMain';
import DashboardMain from '../pages/Dashboard/DashboardMain';
import ProfileMain from '../pages/Profile/ProfileMain';
import NotificationsMain from '../pages/Notifications/NotificationsMain';
import RoadmapMain from '../pages/Roadmap/RoadmapMain';
import LeaderboardMain from '../pages/Leaderboard/LeaderboardMain';
import DocumentationMain from '../pages/Documentation/DocumentationMain';
import SettingsMain from '../pages/Settings/SettingsMain';
import AccountMain from '../pages/Account/AccountMain';
import CoursesMain from '../pages/Courses/CoursesMain';
import GamificationMain from '../pages/Gamification/GamificationMain';
import OnBoardingMain from '../pages/OnBoarding/OnBoardingMain';
import VocalAssistanceMain from '../pages/VocalAssistance/VocalAssistanceMain';
import AboutMain from '../pages/About/AboutMain';
import QuizMain from '../pages/Quiz/QuizMain';
import GithubMain from '../pages/Github/GithubMain';
import TribesMain from '../pages/Tribes/TribesMain';
import { useSelector } from 'react-redux';
import CoursePage from '../pages/Courses/CoursePage';

const ProjectRoutes = () => {
    const { token, isLoggedIn } = useSelector((state) => state.authToken);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeMain />} />
        <Route path="/dashboard" element={<DashboardMain />} />
        <Route path="/account" element={<AccountMain />} />
        <Route path="/courses" element={<CoursesMain />} />
        <Route path="/about" element={<AboutMain />} />
        <Route path="/quiz" element={<QuizMain />} />
        <Route path="/github-integration" element={<GithubMain />} />
        <Route path="/tribes" element={isLoggedIn ? <TribesMain />: <AccountMain/>} /> 
        <Route path="/gamification" element={<GamificationMain />} />
        <Route path="/onboarding" element={isLoggedIn ? <OnBoardingMain />: <AccountMain/>} />
        <Route path="/vocal-assistance" element={<VocalAssistanceMain />} />
        <Route path="/notifications" element={<NotificationsMain />} />
        <Route path="/roadmap" element={isLoggedIn ? <RoadmapMain />: <AccountMain/>} />
        <Route path="/leaderboard" element={<LeaderboardMain />} />
        <Route path="/profile" element={isLoggedIn ? <ProfileMain /> : <AccountMain/>} />
        <Route path="/features" element={<FeaturesMain />} />
        <Route path="/documentation" element={<DocumentationMain />} />
        <Route path="/settings" element={<SettingsMain />} />
        <Route path="/user/:user_id" element={<ProfileMain />} />
        <Route path="/course/:course_id" element={<CoursePage />} />

      </Routes>
    </BrowserRouter>
  );
};

export default ProjectRoutes;
