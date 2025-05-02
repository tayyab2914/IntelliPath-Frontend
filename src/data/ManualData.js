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
            <strong>Collaborate in focused learning communities.</strong> The Tribes feature helps learners create or join interest-based groups to grow together.
            <ul>
             <li>Create or join tribes filtered by category of interest.</li>
             <li>Start threads for topic-specific discussions within a tribe.</li>
             <li>View all tribe members, see who is online, and connect with suggested users.</li>
             <li>Easily switch tribes anytime to explore new communities.</li>
            </ul>
         </Paragraph>
        <Tag color="blue">Community Learning</Tag> <Tag color="green">Interest-Based Groups</Tag>
  
        </>
      ),
    },
    {
      title: "Foul Speech Detection",
      icon: <SafetyOutlined />,
      description: (
        <>
          <Paragraph>
          <strong>A safe space to express and explore.</strong> The Foul Speech Detection feature ensures respectful communication by using AI to monitor and flag inappropriate language.
            <ul>
              <li>Real-time scanning of text messages in tribes and threads.</li>
              <li>AI detects and flags offensive or foul language automatically.</li>
              <li>Users receive multiple warnings before permanent ban enforcement.</li>
            </ul>
          </Paragraph>
          <Tag color="red">Real-Time Filter</Tag> <Tag color="gold">Safe Learning</Tag>
        </>
      ),
    },
    {
      title: "Engagement Prediction",
      icon: <ThunderboltOutlined />,
      description: (
        <>
          <Paragraph>
          <strong>Predict and boost meaningful participation.</strong> The Engagement Prediction feature analyzes user behavior to forecast future activity and involvement within tribes.
            <ul>
              <li>Predicts whether a new or existing tribe member will engage with others.</li>
              <li>Estimates a user’s likelihood of being active and contributing positively.</li>
              <li>Helps community leaders and the system encourage more valuable interactions.</li>
            </ul>
          </Paragraph>
          <Tag color="blue">Behavior Analysis</Tag> <Tag color="green">Community Growth</Tag>
        </>
      ),
    },
    {
      title: "User Registration and Login",
      icon: <UserAddOutlined />,
      description: (
        <>
          <Paragraph>
          <strong>Seamless access to your personalized learning journey.</strong> The User Registration and Login feature allows easy and secure access to the IntelliPath platform.
            <ul>
              <li>Existing users can log in with their email and password or reset their password if forgotten.</li>
              <li>Option to sign in quickly using a Google account for faster access.</li>
              <li>New users can click "Sign Up" to create an account by entering the required personal information.</li>
            </ul>
          </Paragraph>
          <Tag color="purple">User Access</Tag> <Tag color="gold">Secure Login</Tag>
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
          <strong>Showcase and personalize your learning journey.</strong> The Profile Customization feature allows users to manage their career goals, track progress, and connect with like-minded learners.
            <ul>
              <li>Access your profile by clicking on your profile picture and selecting the "Profile" option from the dropdown menu.</li>
              <li>View your career goals, personal stats, and discover profiles similar to yours with a quick "View Profile" button.</li>
              <li>Click the three dots on the top to open additional options: access your roadmap, view leadership status, or edit your profile.</li>
              <li>Choosing "Edit Profile" redirects you to the settings page where you can update your information and preferences.</li>
            </ul>
          </Paragraph>
          <Tag color="blue">Personalization</Tag> <Tag color="green">Career Management</Tag>
        </>
      ),
    },
    {
      title: "Leaderboard",
      icon: <TrophyOutlined />,
      description: (
        <>
          <Paragraph>
           <strong>Celebrate learning achievements with healthy competition.</strong> The Leaderboard feature highlights top-performing learners across various domains.
           <ul>
             <li>View ranked learners based on points and achievements.</li>
             <li>Filter top performers by field of interest.</li>
             <li>Click any learner’s name to view their profile and learning journey.</li>
           </ul>
          </Paragraph>
          <Tag color="purple">Recognition</Tag> <Tag color="gold">Gamified Learning</Tag>
  
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
           <strong>Discover courses that match your goals.</strong> The Course Recommendation feature allows personalized exploration of available courses.
            <ul>
              <li>Explore the full catalog of courses by clicking "Explore" under Course Recommendation.</li>
              <li>Search courses based on interest, skill, or goal.</li>
              <li>Access complete course details: what you’ll learn, content, prerequisites, description, and reviews.</li>
            </ul>
          </Paragraph>
          <Tag color="blue">Smart Recommendations</Tag> <Tag color="purple">Personalized Learning</Tag>
        </>
      ),
    },
    {
      title: "Text to Speech",
      icon: <AudioOutlined />,
      description: (
        <>
          <Paragraph>
            <strong>Listen to content, don’t just read it.</strong> Text-to-Speech Integration allows learners to hear written content and AI-generated answers.
            <ul>
              <li>Type or paste any text to convert it into speech instantly.</li>
              <li>Upload files and listen instead of reading.</li>
              <li>Ask questions and hear AI-generated answers through audio.</li>
            </ul>
          </Paragraph>
          <Tag color="green">Voice Assistant</Tag> <Tag color="gold">Accessible Experience</Tag>
        </>
      ),
    },
  ];
  