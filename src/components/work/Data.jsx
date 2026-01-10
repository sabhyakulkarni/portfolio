// src/components/work/Data.jsx
import work2 from "../../assets/work2.jpg";
import works8 from "../../assets/works8.jpg"; // <- note the 's' matches your file
import todo from "../../assets/todo.jpg";



export const projectsData = [

    {
        id: 8,
        image: works8,
        title: "Financial Fraud Detection using Machine Learning",
        category: "Machine Learning",
        link: "https://github.com/sabhyakulkarni",
    },

    {
        id: 9,
        image: todo,
        title: "ToDo Task Management Wesbute",
        category: "Full Stack",
        link: "https://github.com/sabhyakulkarni/To-Do-Web-Application",
    },

    {
        id: 2,
        image: work2,
        title: " Time-Series Forecasting:",
        category: " Time-Series Forecasting:",
        link: "https://github.com/sabhyakulkarni",
    },


];

export const projectsNav = [
    {
        name: 'All',
    },

    {
        name: 'Web-Design',
    },

    {
        name: 'Miniproject',
    },

    {
        name: 'ML/DL',
    },
];