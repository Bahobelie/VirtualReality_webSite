import {NavItems} from "./NavItems.jsx";
import {AiFillMessage} from "react-icons/ai";
import {FaFingerprint} from "react-icons/fa";
import {BiArrowToTop, BiPlug, BiShieldAlt} from "react-icons/bi";
import {GiLockedDoor} from "react-icons/gi";
import Images from "../assets/index.jsx";
import {Facebook,Instagram,Telegram} from "@mui/icons-material";

export const features = [
    {
        icon: AiFillMessage,
        text: "Drag-and-Drop Interface",
        description:
            "Easily design and arrange your VR environments with a user-friendly drag-and-drop interface.",
    },
    {
        icon: FaFingerprint,
        text: "Multi-Platform Compatibility",
        description:
            "Build VR applications that run seamlessly across multiple platforms, including mobile, desktop, and VR headsets.",
    },
    {
        icon: BiShieldAlt,
        text: "Built-in Templates",
        description:
            "Jumpstart your VR projects with a variety of built-in templates for different types of applications and environments.",
    },
    {
        icon: BiArrowToTop,
        text: "Real-Time Preview",
        description:
            "Preview your VR application in real-time as you make changes, allowing for quick iterations and adjustments.",
    },
    {
        icon: BiPlug,
        text: "Collaboration Tools",
        description:
            "Work together with your team in real-time on VR projects, enabling seamless collaboration and idea sharing.",
    },
    {
        icon: GiLockedDoor,
        text: "Analytics Dashboard",
        description:
            "Gain valuable insights into user interactions and behavior within your VR applications with an integrated analytics dashboard.",
    },
];

export const checklistItems = [
    {
        title: "Code merge made easy",
        description:
            "Track the performance of your VR apps and gain insights into user behavior.",
    },
    {
        title: "Review code without worry",
        description:
            "Track the performance of your VR apps and gain insights into user behavior.",
    },
    {
        title: "AI Assistance to reduce time",
        description:
            "Track the performance of your VR apps and gain insights into user behavior.",
    },
    {
        title: "Share work in minutes",
        description:
            "Track the performance of your VR apps and gain insights into user behavior.",
    },
];

export const pricingOptions = [
    {
        title: "Free",
        price: "$0",
        features: [
            "Private board sharing",
            "5 Gb Storage",
            "Web Analytics",
            "Private Mode",
        ],
    },
    {
        title: "Pro",
        price: "$10",
        features: [
            "Private board sharing",
            "10 Gb Storage",
            "Web Analytics (Advance)",
            "Private Mode",
        ],
    },
    {
        title: "Enterprise",
        price: "$200",
        features: [
            "Private board sharing",
            "Unlimited Storage",
            "High Performance Network",
            "Private Mode",
        ],
    },
];

export const testimonials = [
    {
        user: "John Doe",
        company: "Stellar Solutions",
        image: Images.user1,
        text: "I am extremely satisfied with the services provided. The team was responsive, professional, and delivered results beyond my expectations.",
    },
    {
        user: "Jane Smith",
        company: "Blue Horizon Technologies",
        image: Images.user2,
        text: "I couldn't be happier with the outcome of our project. The team's creativity and problem-solving skills were instrumental in bringing our vision to life",
    },
    {
        user: "David Johnson",
        company: "Quantum Innovations",
        image: Images.user3,
        text: "Working with this company was a pleasure. Their attention to detail and commitment to excellence are commendable. I would highly recommend them to anyone looking for top-notch service.",
    },
    {
        user: "Renee Brown",
        company: "Fusion Dynamics",
        image: Images.user4,
        text: "Working with the team at XYZ Company was a game-changer for our project. Their attention to detail and innovative solutions helped us achieve our goals faster than we thought possible. We are grateful for their expertise and professionalism!",
    },
    {
        user: "Michael Wilson",
        company: "Visionary Creations",
        image: Images.user5,
        text: "I am amazed by the level of professionalism and dedication shown by the team. They were able to exceed our expectations and deliver outstanding results.innovative solutions helped us achieve our goals  We are grateful for their expertise and professionalism!",
    },
    {
        user: "Emily Davis",
        company: "Synergy Systems",
        image: Images.user6,
        text: "The team went above and beyond to ensure our project was a success. Their expertise and dedication are unmatched. I look forward to working with them again in the future. We are grateful for their expertise and professionalism!",
    },
];

export const resourcesLinks = [
    { href: "#", text: "Getting Started" },
    { href: "#", text: "Documentation" },
    { href: "#", text: "Tutorials" },
    { href: "#", text: "API Reference" },
    { href: "#", text: "Community Forums" },
];

export const platformLinks = [
    { href: "#", text: "Features" },
    { href: "#", text: "Supported Devices" },
    { href: "#", text: "System Requirements" },
    { href: "#", text: "Downloads" },
    { href: "#", text: "Release Notes" },
];

export const communityLinks = [
    { href: "#", text: "Events" },
    { href: "#", text: "Meetups" },
    { href: "#", text: "Conferences" },
    { href: "#", text: "Hackathons" },
    { href: "#", text: "Jobs" },
];
export  const socialMedeaIcon=[
    {name:"Facebook",icon:Facebook,link:"#"},
    {name:"Instagram",icon:Instagram,link:"#"},
    {name:"Telegram",icon:Telegram,link:"https://t.me/Lamesgnc"},
]

const Constants={
    NavItems,
    checklistItems,
    features,
    pricingOptions,
    testimonials,
    platformLinks,
    communityLinks,
    resourcesLinks,
    socialMedeaIcon
};

export default Constants;