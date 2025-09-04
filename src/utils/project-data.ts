import project1 from '../assets/ecommerce.png'
import project2 from '../assets/LandingPageMockup.png'
import project6 from '../assets/Weather_App_Mockup.png'
import project4 from '../assets/Task_Manager_Calendar_Mockup.png'
import project3 from '../assets/DashboardShadcnUIDarkGreen.png'
import project5 from '../assets/ComponentLibrary.png'


interface ProjectItem {
    title: string
    img: string
    description: string
    url: string
}

export const ProjectItems: ProjectItem[] = [
    {
        title: "E-Commerce Application",
        img: project1,
        description: "Next.js, TypeScript, TailwindCSS, Zustand, and Stripe",
        url: "https://aw-amanda.github.io/Ecommerce/",
    },
    {
        title: "Commercial Landing Page",
        img: project2,
        description: "React, TypeScript, and Zustand",
        url: "https://aw-amanda.github.io/React_Landing_Page/",
    },
    {
        title: "Admin Dashboard with Theming Capabilities",
        img: project3,
        description: "Next.js and Shadcn",
        url: "https://aw-amanda.github.io/Admin_Dashboard/",
    },
    {
        title: "Task Manager Application",
        img: project4,
        description: "React, TypeScript, and Supabase",
        url: "https://github.com/aw-amanda/Task_Manager",
    },
    {
        title: "Pure Python Weather Application",
        img: project6,
        description: "Python, PyQt, and OpenWeather API",
        url: "https://github.com/aw-amanda/Python_Weather_App",
    },
    {
        title: "UI Component Library",
        img: project5,
        description: "React, TypeScript, CSS",
        url: "https://github.com/aw-amanda/component_library"
    },
]