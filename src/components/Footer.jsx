import {LuCheckCircle2} from "react-icons/lu";
import Images from "../assets/index.jsx";
import Constants from "../constants/Index.js";
import React from "react";

const Footer=()=>{
 return (
     <footer className="mt-20 border-t  py-10 border-neutral-700 w-full">
         <div className="justify-around flex">
             <div>
                 <h3 className="text-md font-semibold mb-4">Resources</h3>
                 <ul className="space-y-2">
                     {Constants.resourcesLinks.map((link, index) => (
                         <li key={index}>
                             <a
                                 href={link.href}
                                 className="text-neutral-500 hover:text-green-300"
                             >
                                 {link.text}
                             </a>
                         </li>
                     ))}
                 </ul>
             </div>
             <div>
                 <h3 className="text-md font-semibold mb-4">Platform</h3>
                 <ul className="space-y-2">
                     {Constants.platformLinks.map((link, index) => (
                         <li key={index}>
                             <a
                                 href={link.href}
                                 className="text-neutral-500 hover:text-green-300"
                             >
                                 {link.text}
                             </a>
                         </li>
                     ))}
                 </ul>
             </div>
             <div>
                 <h3 className="text-md font-semibold mb-4">Community</h3>
                 <ul className="space-y-2">
                     {Constants.communityLinks.map((link, index) => (
                         <li key={index}>
                             <a
                                 href={link.href}
                                 className="text-neutral-500 hover:text-green-300"
                             >
                                 {link.text}
                             </a>
                         </li>
                     ))}
                 </ul>
             </div>

         </div>
         <div className="mt-20 flex justify-center items-center">
             <div className="flex flex-row hover:cursor-pointer space-x-4">
                 {Constants.socialMedeaIcon.map((item, index) => (
                     <ul key={index}>
                         <a href={item.link}>{React.createElement(item.icon)}</a>
                     </ul>
                 ))}
             </div>
         </div>

     </footer>

 )
}
export default Footer;