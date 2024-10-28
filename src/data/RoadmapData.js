export const ROADMAP_DATA = {
    goal:"Frontend Developer",
    techs_completed:3,
    techs_total:5,
    techs:[{
        id: "major-1",
        label: "HTML & CSS",
        minorNodes: [
            { id: "minor-1", label: "HTML Basics", parent: "major-1", is_minor: true },
            { id: "minor-2", label: "CSS Styling", parent: "major-1", is_minor: true },
            { id: "minor-3", label: "Responsive Design ahsl lroem ipsumbs vd vsd ", parent: "major-1", is_minor: true }
        ]
    },
    {
        id: "major-2",
        label: "JavaScript",
        minorNodes: [
            { id: "minor-4", label: "JavaScript Syntax", parent: "major-2", is_minor: true },
            { id: "minor-5", label: "DOM Manipulation", parent: "major-2", is_minor: true },
            { id: "minor-6", label: "Event Handling", parent: "major-2", is_minor: true },
            { id: "minor-7", label: "ES6 and Beyond", parent: "major-2", is_minor: true }
        ]
    },
    {
        id: "major-3",
        label: "ReactJS",
        minorNodes: [
            { id: "minor-8", label: "Components and JSX", parent: "major-3", is_minor: true },
            { id: "minor-9", label: "State and Props", parent: "major-3", is_minor: true },
        ]
    },
    {
        id: "major-4",
        label: "Redux",
        minorNodes: [
            { id: "minor-11", label: "Redux Basics", parent: "major-4", is_minor: true },
            { id: "minor-12", label: "State Management", parent: "major-4", is_minor: true },
        ]
    },
    {
        id: "major-5",
        label: "Backend with Django",
        minorNodes: [
            { id: "minor-14", label: "Django Basics", parent: "major-5", is_minor: true },
            { id: "minor-15", label: "Django ORM", parent: "major-5", is_minor: true },
            { id: "minor-16", label: "Django REST Framework", parent: "major-5", is_minor: true }
        ]
    }]
}