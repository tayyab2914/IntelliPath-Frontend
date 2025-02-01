export const QUIZ_DATA = {
    topic: "React",
    level: "Intermediate",
    questions: [
        {
            question: "What is the primary purpose of React?",
            options: [
                "To manage databases",
                "To build user interfaces",
                "To create server-side applications",
                "To style web pages"
            ]
        },
        {
            question: "Which of the following is a key feature of React?",
            options: [
                "Two-way data binding",
                "Virtual DOM",
                "Inline styles only",
                "Direct DOM manipulation"
            ]
        },
        {
            question: "What is JSX in React?",
            options: [
                "A CSS library",
                "A JavaScript library",
                "A syntax extension for JavaScript",
                "A JSON format"
            ]
        },
        {
            question: "Which method is used to create components in React?",
            options: [
                "createComponent()",
                "renderComponent()",
                "Component()",
                "React.Component"
            ]
        },
        {
            question: "What does the useState hook do in React?",
            options: [
                "Manages state in functional components",
                "Connects components to Redux",
                "Fetches data from an API",
                "Creates custom hooks"
            ]
        },
        {
            question: "Which of the following is true about props in React?",
            options: [
                "They are used to store local state",
                "They are immutable",
                "They can only be strings",
                "They can only be used in functional components"
            ]
        },
        {
            question: "What is a React fragment?",
            options: [
                "A way to add CSS styles",
                "A shorthand for defining lists",
                "A way to group multiple elements without adding extra nodes to the DOM",
                "A debugging tool"
            ]
        },
        {
            question: "Which of the following is used to pass data from a parent to a child component?",
            options: [
                "State",
                "Props",
                "Context",
                "Reducer"
            ]
        },
        {
            question: "What is the purpose of the useEffect hook?",
            options: [
                "To manage component rendering",
                "To fetch data after every render",
                "To add side effects in functional components",
                "To handle errors"
            ]
        },
        {
            question: "What is the correct way to update state in React?",
            options: [
                "this.state = newState",
                "this.setState(newState)",
                "state = newState",
                "updateState(newState)"
            ]
        }
    ]
    
};

export const RESULT_DATA = {
    correct_answers:3,
    incorrect_answers:3,
}