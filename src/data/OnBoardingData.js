import { AVAILABLE_GOALS } from "../utils/GlobalSettings";

export const ONBOARDING_DATA = [
  {
     
    HasSuboptions:false,
    Question:
      "Hey there! Let's kick things off—what’s your current education level?",
    Options: [
      "High school",
      "Undergraduate",
      "Graduate",
      "Master’s Degree",
      "PhD / Doctorate",
      "Self-Taught",
    ],
  },
  {
     
    HasSuboptions:false,
    Question:
      "Awesome! Now, what gets you excited? Which field would you love to dive deeper into?",
    Options: AVAILABLE_GOALS,
  },
  {
     
    HasSuboptions:true,
    Question: "Awesome! Now, which specific skills would you like to focus on?",
    Options: {
      "Frontend Developer": [
        "React",
        "Vue",
        "Angular",
        "Svelte",
        "Ember",
      ],

      "Backend Developer": [
        "Node.js (Express.js)",
        "Django (Python)",
        "Flask (Python)",
        "Ruby on Rails",
        "Spring Boot (Java)",
        "PHP (Laravel)",
        "Go (Gin/Gorilla)",
        ".NET Core (C#)",
      ],

      "Full Stack Developer": [
        "MERN (MongoDB, Express.js, React.js, Node.js)",
        "MEVN (MongoDB, Express.js, Vue.js, Node.js)",
        "LAMP (Linux, Apache, MySQL, PHP)",
        "Django + React",
        "Ruby on Rails + Vue.js",
        "Spring Boot + Angular",
        "Firebase + React Native",
      ],

      "Mobile App Developer": [
        "React Native",
        "Flutter (Dart)",
        "Swift (iOS)",
        "Kotlin (Android)",
        "Ionic",
        "Xamarin",
        "Java (Android)",
      ],

      "DevOps Engineer": [
        "Docker",
        "Kubernetes",
        "Jenkins",
        "Terraform",
        "Ansible",
        "AWS",
        "Google Cloud",
        "Azure",
        "CI/CD Pipelines",
      ],

      "Data Scientist": [
        "Python (Pandas, NumPy)",
        "R",
        "SQL",
        "TensorFlow",
        "PyTorch",
        "scikit-learn",
        "Apache Spark",
        "Hadoop",
        "Jupyter Notebooks",
      ],

      "Cybersecurity Specialist": [
        "Network Security",
        "Penetration Testing",
        "Ethical Hacking (Kali Linux)",
        "Cloud Security (AWS, Azure)",
        "Cryptography",
        "Firewalls and VPNs",
        "Incident Response",
        "Forensic Analysis",
      ],

      "Blockchain Developer": [
        "Solidity (Ethereum)",
        "Hyperledger",
        "Rust (Polkadot, Solana)",
        "Smart Contracts",
        "DApps (Decentralized Applications)",
        "Web3.js",
        "Cryptography",
        "Token Development",
      ],

      "AI/ML Researcher": [
        "Python (TensorFlow, PyTorch)",
        "Natural Language Processing (NLP)",
        "Computer Vision",
        "Reinforcement Learning",
        "Deep Learning",
        "Scikit-learn",
        "Model Deployment (AWS, Google Cloud)",
        "Data Visualization (Matplotlib, Seaborn)",
      ],

      "Cloud Engineer": [
        "AWS (EC2, S3, Lambda)",
        "Google Cloud Platform",
        "Microsoft Azure",
        "Kubernetes",
        "Terraform",
        "Serverless Architectures",
        "Cloud Security",
        "Load Balancing and Scaling",
      ],

      "Software Architect": [
        "Microservices Architecture",
        "Event-Driven Architecture",
        "Serverless Architectures",
        "Design Patterns (MVC, Singleton, etc.)",
        "Cloud Native Design",
        "API Design (REST, GraphQL)",
        "Distributed Systems",
        "Performance Optimization",
      ],

      "Database Administrator": [
        "MySQL",
        "PostgreSQL",
        "MongoDB",
        "Cassandra",
        "Redis",
        "MariaDB",
        "SQL Server",
        "Database Replication",
        "Backup & Recovery",
      ],

      "Embedded Systems Engineer": [
        "C/C++ Programming",
        "Real-Time Operating Systems (RTOS)",
        "Microcontrollers (ARM, AVR, PIC)",
        "Circuit Design",
        "Embedded Linux",
        "IoT Integration",
        "Communication Protocols (I2C, SPI, UART)",
        "Assembly Language",
      ],

      "AR/VR Developer": [
        "Unity3D",
        "Unreal Engine",
        "C# for Unity",
        "C++ for Unreal",
        "3D Modeling (Blender, Maya)",
        "Oculus SDK",
        "WebXR",
        "Motion Tracking",
      ],

      "Big Data Engineer": [
        "Hadoop",
        "Apache Spark",
        "Apache Kafka",
        "Hive",
        "Pig",
        "NoSQL Databases (Cassandra, HBase)",
        "Data Warehousing (Amazon Redshift)",
        "Data Pipelines (Airflow)",
      ],

      "Quality Assurance Engineer": [
        "Selenium",
        "JUnit",
        "TestNG",
        "Cucumber",
        "Load Testing (JMeter)",
        "Performance Testing (Gatling)",
        "API Testing (Postman, REST Assured)",
        "CI/CD for QA",
      ],

      "Game Designer": [
        "Unity3D",
        "Unreal Engine",
        "C# for Unity",
        "C++ for Unreal",
        "Game Physics",
        "Game AI",
        "Blender for 3D Models",
        "Storyboarding and Level Design",
      ],
    },
  },

  {
     
    HasSuboptions:false,
    Question:
      "Got it! Now, how experienced are you in this field? Be honest, no judgments here!",
    Options: ["Beginner", "Intermediate", "Advanced", "Expert", "Professional"],
  },
  {
     
    HasSuboptions:false,
    Question:
      "Let’s be real—how much time do you think you can dedicate to learning each week? We’ll make it work!",
    Options: [
      "Less than 5 hours",
      "5-10 hours",
      "10-15 hours",
      "15-20 hours",
      "20+ hours",
    ],
  },
  {
     
    HasSuboptions:false,
    Question:
      "Next, what’s your learning pace? How soon do you want to see results?",
    Options: [
      "🚀 1 Month (Let’s go full speed!)",
      "🏃 3 Months (Quick and steady)",
      "🐢 6 Months (Balanced and paced)",
      "🐌 9 Months (I’m in for the long haul)",
      "🌳 12+ Months (Slow growth, deep roots)",
    ],
  },
];
