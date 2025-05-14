export const DEFAULT_BUTTON_HEIGHT = '40px'

export const PRODUCTION = false;
export const TESTING = true

let REDIRECT_URI
REDIRECT_URI = PRODUCTION ? 'https://studentspace.online/account':'http://localhost:3000/account'

export const FRONTEND_DOMAIN_NAME =  process.env.REACT_APP_FRONTEND_DOMAIN
export const DOMAIN_NAME = process.env.REACT_APP_BACKEND_DOMAIN
export const WEB_SOCKET_DOMAIN_NAME = process.env.REACT_APP_WEBSOCKET_DOMAIN

const GOOGLE_AUTH_URL = process.env.GOOGLE_AUTH_URL
const GOOGLE_AUTH_CLIENT_ID = process.env.GOOGLE_AUTH_CLIENT_ID
const GOOGLE_AUTH_SCOPE = [ "https://www.googleapis.com/auth/userinfo.email", "https://www.googleapis.com/auth/userinfo.profile",  ].join(" ");

const AVAILABLE_GOALS = [
    "Data Scientist",
    "Backend Developer",
    "Frontend Developer",
    "Mobile App Developer",
    "Full Stack Developer",
    "DevOps Engineer",
    "Machine Learning Engineer",
    "Quality Assurance Engineer",
    "Cybersecurity Specialist",
    "Software Architect",
    "AR/VR Developer",
    "Big Data Engineer",
    "Database Administrator",
    "Embedded Systems Engineer",
    "Blockchain Developer",
    "AI/ML Researcher",
    "Game Designer",
]



export {   GOOGLE_AUTH_URL,GOOGLE_AUTH_CLIENT_ID ,GOOGLE_AUTH_SCOPE,REDIRECT_URI,AVAILABLE_GOALS};


