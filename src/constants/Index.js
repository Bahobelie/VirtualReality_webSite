import {NavItems} from "./NavItems.jsx";
import {AiFillMessage} from "react-icons/ai";
import {FaFingerprint} from "react-icons/fa";
import {BiArrowToTop, BiPlug, BiShieldAlt} from "react-icons/bi";
import {GiLockedDoor} from "react-icons/gi";


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

const Constants={
    NavItems,
    features
};

export default Constants;