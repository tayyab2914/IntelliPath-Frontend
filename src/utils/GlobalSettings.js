export const DEFAULT_BUTTON_HEIGHT = '36px'

export const PRODUCTION = false;
export const TESTING = true

let DOMAIN_NAME
let FRONTEND_DOMAIN_NAME
let REDIRECT_URI

DOMAIN_NAME = PRODUCTION ? 'https://admin.studentspace.website':'http://127.0.0.1:8000'
REDIRECT_URI = PRODUCTION ? 'https://studentspace.online/account':'http://localhost:3000/account'
FRONTEND_DOMAIN_NAME = PRODUCTION ? 'https://studentspace.online.app':'http://localhost:3000'

const GOOGLE_AUTH_URL = "https://accounts.google.com/o/oauth2/v2/auth";
const GOOGLE_AUTH_CLIENT_ID = "337525075460-6ltsjfmn3f0nl66q2jg3am4qr292981h.apps.googleusercontent.com"
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



export {  DOMAIN_NAME, GOOGLE_AUTH_URL,GOOGLE_AUTH_CLIENT_ID ,GOOGLE_AUTH_SCOPE,REDIRECT_URI,AVAILABLE_GOALS};




// USER
// user_id
// name
// email
// age 
// is_logged_in user //! this will help when we look a profile and whether we have to show profile options to user or not
// linkedin_link
// github_link
// display_image
// is_blind_mode_enables
// roadmap_id null if roadmap not generated
// onboarding_id null if not onboarded
// account creation_time
// goals = [
//     {
//         goal1:name,
//         goal1:rank,
//     },
//     {
//         goal2:name,
//         goal3:rank,
//     }
//  ]
// masteries = [
//     mastery_name:'',
//     mastery_name:'',
//  ]