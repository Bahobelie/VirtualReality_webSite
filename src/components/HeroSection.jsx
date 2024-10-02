import Images from '../assets/index.jsx';
import VideoCarousel from "./Carousel.jsx";
import Constants from "../constants/Index.js";

const videos=[
    Images.Video5,
    Images.Video4,
    Images.Video2,
    Images.Video3,
    Images.Video1,
];
const HeroSection=()=>{
    return(
        <div className='flex flex-col items-center mt-6 lg:mt-20'>
            <h1 className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide">
                VirtualR build tools
                <span className="bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text">
                    {" "}
                    for developers
                </span>
            </h1>
            <p className='mt-10 text-lg text-center text-neutral-500  max-w-4xl'>
                Empower your creativity and bring your VR app ideas to life with our
                intuitive development tools. Get started today and turn your imagination
                into immersive reality!
            </p>


            <div className='flex space-x-20 mt-20 items-center'>
                <a className='border bg-gradient-to-r from-orange-300 to-red-800 hover:scale-125 cursor-pointer transition-transform duration-500  rounded-md px-3 py-2'>Start for Free</a>
                <a className='border hover:scale-110 cursor-pointer transition-transform duration-500 border-neutral-100 px-3 rounded-lg py-2'>Documentation</a>
            </div>

            <div className='mt-20 w-full'>
                <VideoCarousel videos={videos}/>
            </div>
        </div>
    )
}
export default HeroSection;