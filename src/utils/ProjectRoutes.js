import React from 'react';
import { Route, Routes, BrowserRouter } from "react-router-dom";
import FeaturesMain from '../pages/Features/FeaturesMain';
import DashboardMain from '../pages/Dashboard/DashboardMain';
import ProfileMain from '../pages/Profile/ProfileMain';
import NotificationsMain from '../pages/Notifications/NotificationsMain';
import RoadmapMain from '../pages/Roadmap/RoadmapMain';
import LeaderboardMain from '../pages/Leaderboard/LeaderboardMain';
import ManualMain from '../pages/Manual/ManualMain';
import SettingsMain from '../pages/Settings/SettingsMain';
import AccountMain from '../pages/Account/AccountMain';
import CoursesMain from '../pages/Courses/CoursesMain';
import OnBoardingMain from '../pages/OnBoarding/OnBoardingMain';
import VocalAssistanceMain from '../pages/VocalAssistance/VocalAssistanceMain';
import AboutMain from '../pages/About/AboutMain';
import QuizMain from '../pages/Quiz/QuizMain';
import GithubMain from '../pages/Github/GithubMain';
import TribesMain from '../pages/Tribes/TribeNavigation/TribesMain';
import { useSelector } from 'react-redux';
import CoursePage from '../pages/Courses/CoursePage';
import TribesExplore from '../pages/Tribes/TribeNavigation/TribesExplore';
import TribePage from '../pages/Tribes/TribeChat/TribeChatMain';
import AssessmentLanding from '../pages/Assessment/AssessmentLanding';
import HomeMain from '../pages/Home/HomeMain';

const ProjectRoutes = () => {
    const { isLoggedIn } = useSelector((state) => state.authToken);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeMain />} />   
        <Route path="/dashboard" element={<DashboardMain />} />
        <Route path="/account" element={<AccountMain />} />
        <Route path="/courses" element={isLoggedIn ? <CoursesMain />: <AccountMain/>} />
        <Route path="/about" element={<AboutMain />} />
        <Route path="/assessment" element={<AssessmentLanding />} />
        <Route path="/quiz" element={isLoggedIn ? <QuizMain />: <AccountMain/>} />
        <Route path="/github-integration" element={<GithubMain />} />
        <Route path="/tribes" element={isLoggedIn ? <TribesMain />: <AccountMain/>} /> 
        <Route path="/onboarding" element={isLoggedIn ? <OnBoardingMain />: <AccountMain/>} />
        <Route path="/vocal-assistance" element={isLoggedIn ?<VocalAssistanceMain />: <AccountMain/>} />
        <Route path="/notifications" element={<NotificationsMain />} />
        <Route path="/roadmap" element={isLoggedIn ? <RoadmapMain />: <AccountMain/>} />
        <Route path="/leaderboard" element={isLoggedIn ?<LeaderboardMain />: <AccountMain/>} />
        <Route path="/profile" element={isLoggedIn ? <ProfileMain /> : <AccountMain/>} />
        <Route path="/features" element={<FeaturesMain />} />
        <Route path="/manual" element={<ManualMain />} />
        <Route path="/settings" element={<SettingsMain />} />
        <Route path="/profile/:user_id" element={<ProfileMain />} />
        <Route path="/course/:course_id" element={<CoursePage />} />
        <Route path="/tribes/:tribe_id" element={isLoggedIn ? <TribePage />: <AccountMain/>} />
        <Route path="/tribes/explore" element={isLoggedIn ? <TribesExplore />: <AccountMain/>} />
      </Routes>
    </BrowserRouter>
  );
};

export default ProjectRoutes;
