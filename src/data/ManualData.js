import {
  UsergroupAddOutlined,
  TeamOutlined,
  SafetyOutlined,
  ThunderboltOutlined,
  UserAddOutlined,
  CompassOutlined,
  EditOutlined,
  TrophyOutlined,
  GithubOutlined,
  BookOutlined,
  BulbOutlined,
  AudioOutlined,
} from "@ant-design/icons";

import { Tag, Typography } from "antd";
const { Title, Paragraph } = Typography;
export const MANUAL_FEATURES = [
  {
    title: "Thread Tribe Page",
    icon: <UsergroupAddOutlined />,
    description: (
      <>
        <Paragraph>
          <strong>Your personalized learning circle.</strong> IntelliPath
          automatically places you in a "tribe" — a group of users with similar
          learning interests and habits.
          <ul>
            <li>See trending discussions tailored to your interests.</li>
            <li>Interact with like-minded learners.</li>
            <li>Discover topics that match your curiosity.</li>
          </ul>
        </Paragraph>
        <Tag color="blue">Auto-matching</Tag>{" "}
        <Tag color="geekblue">Community Driven</Tag>
      </>
    ),
  },
  {
    title: "Similar Profile Recommendation",
    icon: <TeamOutlined />,
    description: (
      <>
        <Paragraph>
          <strong>Connect with peers who learn like you.</strong>
          Discover users with similar learning paths and interests.
          <ul>
            <li>Browse recommended profiles.</li>
            <li>Expand your IntelliPath network.</li>
            <li>Collaborate with peers on shared goals.</li>
          </ul>
        </Paragraph>
        <Tag color="purple">Smart Networking</Tag>
      </>
    ),
  },
  {
    title: "Foul Speech Detection & Auto-Moderation",
    icon: <SafetyOutlined />,
    description: (
      <>
        <Paragraph>
          <strong>A safe space to express and explore.</strong> IntelliPath
          filters out offensive or inappropriate language in real-time.
          <ul>
            <li>Clean, constructive discussions.</li>
            <li>Auto-flagging of inappropriate content.</li>
            <li>Friendly warnings if language is off-track.</li>
          </ul>
        </Paragraph>
        <Tag color="red">Real-Time Filter</Tag>{" "}
        <Tag color="gold">Safe Learning</Tag>
      </>
    ),
  },
  {
    title: "Engagement Prediction",
    icon: <ThunderboltOutlined />,
    description: (
      <>
        <Paragraph>
          <strong>Get content that keeps you inspired.</strong> IntelliPath
          learns what engages you best and recommends it first.
          <ul>
            <li>Personalized content suggestions.</li>
            <li>Smarter course/discussion recommendations.</li>
            <li>Boosted motivation through tailored learning paths.</li>
          </ul>
        </Paragraph>
        <Tag color="green">AI-Powered</Tag> <Tag color="cyan">Personalized</Tag>
      </>
    ),
  },
  {
    title: "User Registration and Login",
    icon: <UserAddOutlined />,
    description: (
      <>
        <Paragraph>
          <strong>Get started with ease.</strong> Create an account or log in to
          begin your IntelliPath journey.
          <ul>
            <li>Secure sign-up and login process.</li>
            <li>Quick access across all devices.</li>
            <li>Recover your account anytime.</li>
          </ul>
        </Paragraph>
        <Tag color="blue">Secure</Tag> <Tag color="green">User-Friendly</Tag>
      </>
    ),
  },
  {
    title: "Roadmap Generation",
    icon: <CompassOutlined />,
    description: (
      <>
        <Paragraph>
          <strong>Your guided path to success.</strong> IntelliPath creates a
          custom learning roadmap tailored to your goals.
          <ul>
            <li>Auto-generated learning plans.</li>
            <li>Step-by-step skill progression.</li>
            <li>Adaptive updates based on your pace.</li>
          </ul>
        </Paragraph>
        <Tag color="cyan">Dynamic</Tag> <Tag color="purple">Personalized</Tag>
      </>
    ),
  },
  {
    title: "Profile Customization",
    icon: <EditOutlined />,
    description: (
      <>
        <Paragraph>
          <strong>Make it your own.</strong> Show off your interests, skills,
          and personality.
          <ul>
            <li>Add skills, achievements, and learning goals.</li>
            <li>Customize your profile details.</li>
            <li>Get noticed by peers and collaborators.</li>
          </ul>
        </Paragraph>
        <Tag color="geekblue">Customizable</Tag>{" "}
        <Tag color="magenta">Expressive</Tag>
      </>
    ),
  },
  {
    title: "Leaderboard",
    icon: <TrophyOutlined />,
    description: (
      <>
        <Paragraph>
          <strong>Climb the ranks and stay motivated.</strong> Track your
          progress and compare with fellow learners.
          <ul>
            <li>Earn points for activity and growth.</li>
            <li>View top learners in your tribe or course.</li>
            <li>Celebrate your milestones.</li>
          </ul>
        </Paragraph>
        <Tag color="gold">Gamified</Tag> <Tag color="orange">Competitive</Tag>
      </>
    ),
  },
  {
    title: "GitHub Repo Evaluation",
    icon: <GithubOutlined />,
    description: (
      <>
        <Paragraph>
          <strong>Code smarter, get insights.</strong> IntelliPath evaluates
          your GitHub repositories for project quality and learning value.
          <ul>
            <li>Connect your GitHub profile.</li>
            <li>Receive feedback and project suggestions.</li>
            <li>Enhance your coding portfolio.</li>
          </ul>
        </Paragraph>
        <Tag color="black">Developer Focused</Tag>{" "}
        <Tag color="green">Integrated</Tag>
      </>
    ),
  },
  {
    title: "Quiz and Assignments",
    icon: <BookOutlined />,
    description: (
      <>
        <Paragraph>
          <strong>Test your skills, track your learning.</strong> Engage with
          quizzes and assignments after each topic.
          <ul>
            <li>Instant feedback on answers.</li>
            <li>Interactive learning checks.</li>
            <li>Sharpen understanding through challenges.</li>
          </ul>
        </Paragraph>
        <Tag color="blue">Interactive</Tag> <Tag color="lime">Skill-Based</Tag>
      </>
    ),
  },
  {
    title: "Course Recommendation",
    icon: <BulbOutlined />,
    description: (
      <>
        <Paragraph>
          <strong>Smarter suggestions, faster growth.</strong> IntelliPath
          recommends courses that match your skill level and interests.
          <ul>
            <li>Based on your progress and goals.</li>
            <li>Stay relevant with trending content.</li>
            <li>Explore new topics with confidence.</li>
          </ul>
        </Paragraph>
        <Tag color="volcano">Smart Suggestions</Tag>{" "}
        <Tag color="cyan">Personalized</Tag>
      </>
    ),
  },
  {
    title: "AI-Generated Content",
    icon: <BulbOutlined />,
    description: (
      <>
        <Paragraph>
          <strong>Instant, intelligent support.</strong> Let AI assist you with
          summaries, explanations, and more.
          <ul>
            <li>Auto-generated notes and overviews.</li>
            <li>Clarify doubts instantly.</li>
            <li>Boost retention with smart insights.</li>
          </ul>
        </Paragraph>
        <Tag color="green">AI Support</Tag>{" "}
        <Tag color="blue">Fast Learning</Tag>
      </>
    ),
  },
  {
    title: "Text to Speech",
    icon: <AudioOutlined />,
    description: (
      <>
        <Paragraph>
          <strong>Learn by listening.</strong> Convert written content into
          audio and absorb knowledge on the go.
          <ul>
            <li>Supports all major content areas.</li>
            <li>Great for auditory learners.</li>
            <li>Ideal for multitasking or revision.</li>
          </ul>
        </Paragraph>
        <Tag color="magenta">Accessibility</Tag>{" "}
        <Tag color="purple">Convenient</Tag>
      </>
    ),
  },
];
