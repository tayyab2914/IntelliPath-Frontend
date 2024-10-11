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

const ProjectRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeMain />} />
        <Route path="/dashboard" element={<DashboardMain />} />
        <Route path="/account" element={<AccountMain />} />
        <Route path="/courses" element={<CoursesMain />} />
        <Route path="/gamification" element={<GamificationMain />} />
        <Route path="/onboarding" element={<OnBoardingMain />} />
        <Route path="/vocal-assistance" element={<VocalAssistanceMain />} />
        <Route path="/notifications" element={<NotificationsMain />} />
        <Route path="/roadmap" element={<RoadmapMain />} />
        <Route path="/leaderboard" element={<LeaderboardMain />} />
        <Route path="/features" element={<FeaturesMain />} />
        <Route path="/documentation" element={<DocumentationMain />} />
        <Route path="/settings" element={<SettingsMain />} />
      </Routes>
    </BrowserRouter>
  );
};

export default ProjectRoutes;
