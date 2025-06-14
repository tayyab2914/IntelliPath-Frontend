import {
    UsergroupAddOutlined,
    TeamOutlined,
    CompassOutlined,
    TrophyOutlined,
    GithubOutlined,
    BulbOutlined,
    EyeOutlined,
    RobotOutlined,
    BarChartOutlined,
} from "@ant-design/icons";
  
import { Tag, Typography } from "antd";
const { Title, Paragraph } = Typography;

export const MANUAL_FEATURES = [
    {
      title: "AI-Generated Learning Roadmap",
      icon: <CompassOutlined />,
      description: (
        <>
          <Paragraph>
            <strong>Your personalized path to success.</strong> IntelliPath's AI creates a custom learning roadmap tailored to your goals and skills.
            <ul>
              <li>Get a dynamic, AI-generated learning plan based on your career goals.</li>
              <li>Follow step-by-step skill progression with clear milestones.</li>
              <li>Receive adaptive updates as you progress through your learning journey.</li>
              <li>Track your progress and completion status for each milestone.</li>
            </ul>
          </Paragraph>
          <Tag color="cyan">AI-Powered</Tag> <Tag color="purple">Personalized</Tag>
        </>
      ),
    },
    {
      title: "Course Recommendations",
      icon: <BulbOutlined />,
      description: (
        <>
          <Paragraph>
            <strong>Discover the perfect courses for your goals.</strong> Our AI-powered course recommendation system helps you find the most relevant learning resources.
            <ul>
              <li>Get personalized course suggestions based on your roadmap and goals.</li>
              <li>Search courses by skill, technology, or learning objective.</li>
              <li>View detailed course information including prerequisites and learning outcomes.</li>
              <li>Access course reviews and ratings from other learners.</li>
            </ul>
          </Paragraph>
          <Tag color="blue">Smart Recommendations</Tag> <Tag color="green">Learning Resources</Tag>
        </>
      ),
    },
    {
      title: "GitHub Integration",
      icon: <GithubOutlined />,
      description: (
        <>
          <Paragraph>
            <strong>Track and showcase your coding journey.</strong> Connect your GitHub profile to enhance your learning experience and portfolio.
            <ul>
              <li>Automatically track your coding contributions and projects.</li>
              <li>Get insights and feedback on your GitHub repositories.</li>
              <li>Build a professional portfolio visible to potential employers.</li>
              <li>Earn points and recognition for your coding activity.</li>
            </ul>
          </Paragraph>
          <Tag color="black">Developer Focused</Tag> <Tag color="green">Portfolio Building</Tag>
        </>
      ),
    },
    {
      title: "Learning Tribes",
      icon: <UsergroupAddOutlined />,
      description: (
        <>
          <Paragraph>
            <strong>Learn and grow with like-minded peers.</strong> Join or create tribes to collaborate and share knowledge in focused learning communities.
            <ul>
              <li>Create or join tribes based on your interests and goals.</li>
              <li>Participate in topic-specific discussions and threads.</li>
              <li>Connect with other learners and share resources.</li>
              <li>Get real-time updates on tribe activities and discussions.</li>
            </ul>
          </Paragraph>
          <Tag color="blue">Community Learning</Tag> <Tag color="green">Collaboration</Tag>
        </>
      ),
    },
    {
      title: "AI-Powered Quizzes",
      icon: <RobotOutlined />,
      description: (
        <>
          <Paragraph>
            <strong>Test your knowledge with smart assessments.</strong> Take AI-generated quizzes that adapt to your learning progress.
            <ul>
              <li>Get instant feedback on your answers.</li>
              <li>Take quizzes that adjust to your skill level.</li>
              <li>Track your progress and identify areas for improvement.</li>
              <li>Earn points and achievements for completing quizzes.</li>
            </ul>
          </Paragraph>
          <Tag color="purple">Smart Assessment</Tag> <Tag color="gold">Progress Tracking</Tag>
        </>
      ),
    },
    {
      title: "Leaderboard & Rankings",
      icon: <TrophyOutlined />,
      description: (
        <>
          <Paragraph>
            <strong>Compete and excel in your learning journey.</strong> Track your progress and compare with peers through our gamified ranking system.
            <ul>
              <li>View your ranking across different skills and domains.</li>
              <li>Compete with peers in a healthy learning environment.</li>
              <li>Earn achievements and recognition for your progress.</li>
              <li>Get visibility to potential employers through your achievements.</li>
            </ul>
          </Paragraph>
          <Tag color="gold">Gamification</Tag> <Tag color="purple">Recognition</Tag>
        </>
      ),
    },
    {
      title: "Accessibility Features",
      icon: <EyeOutlined />,
      description: (
        <>
          <Paragraph>
            <strong>Inclusive learning for everyone.</strong> Access learning resources through multiple modes with our accessibility features.
            <ul>
              <li>Use Blind Mode for audio-guided navigation.</li>
              <li>Convert text content to speech for auditory learning.</li>
              <li>Access course materials in multiple formats.</li>
              <li>Customize the interface for your learning preferences.</li>
            </ul>
          </Paragraph>
          <Tag color="green">Inclusive</Tag> <Tag color="blue">Accessibility</Tag>
        </>
      ),
    },
    {
      title: "Profile & Progress Tracking",
      icon: <BarChartOutlined />,
      description: (
        <>
          <Paragraph>
            <strong>Monitor and showcase your learning journey.</strong> Track your progress and customize your learning profile.
            <ul>
              <li>View detailed statistics of your learning progress.</li>
              <li>Customize your profile with skills and achievements.</li>
              <li>Connect with learners who share similar goals.</li>
              <li>Get personalized recommendations based on your profile.</li>
            </ul>
          </Paragraph>
          <Tag color="blue">Progress Tracking</Tag> <Tag color="purple">Personalization</Tag>
        </>
      ),
    },
    {
      title: "Content Generation",
      icon: <RobotOutlined />,
      description: (
        <>
          <Paragraph>
            <strong>AI-powered learning content creation.</strong> Generate personalized learning materials tailored to your needs.
            <ul>
              <li>Get AI-generated explanations for complex topics.</li>
              <li>Create custom study materials based on your learning style.</li>
              <li>Generate practice questions and exercises.</li>
              <li>Receive personalized learning resources.</li>
            </ul>
          </Paragraph>
          <Tag color="cyan">AI Content</Tag> <Tag color="purple">Personalized Learning</Tag>
        </>
      ),
    },
    {
      title: "Smart Networking",
      icon: <TeamOutlined />,
      description: (
        <>
          <Paragraph>
            <strong>Connect with the right learning partners.</strong> Our AI helps you find and connect with like-minded learners.
            <ul>
              <li>Get matched with learners who share your goals.</li>
              <li>Find study partners and mentors.</li>
              <li>Join relevant learning communities.</li>
              <li>Collaborate on projects and assignments.</li>
            </ul>
          </Paragraph>
          <Tag color="blue">Networking</Tag> <Tag color="green">Collaboration</Tag>
        </>
      ),
    }
];
  