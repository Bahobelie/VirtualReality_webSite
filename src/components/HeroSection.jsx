import Images from '../assets/index.jsx';

const HeroSection=()=>{
    return(
        <div className='flex flex-col  items-center mt-6 lg:mt-20'>
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
                <a className='border bg-gradient-to-r from-orange-300 to-red-800 hover:cursor-pointer rounded-md px-3 py-2'>Start for Free</a>
                <a className='border hover:cursor-pointer  border-neutral-100 px-3 rounded-lg py-2'>Documentation</a>
            </div>

            <div className='mt-20 flex space-x-20 justify-center'>
                <video
                    autoPlay
                    loop
                    muted
                    className='rounded-md px-2 w-1/2 border border-neutral-300 drop-shadow-lg shadow:lg shadow-orange-400 mx-2 my-4'
                >
                    <source src={Images.Video1} type="video/mp4"/>
                    Your browser does not support the video tag.
                </video>
                <video
                    autoPlay
                    loop
                    muted
                    className='rounded-md px-2 w-1/2 border border-neutral-300 shadow-orange-400 mx-2 my-4'
                >
                    <source src={Images.Video2} type="video/mp4"/>
                    Your browser does not support the video tag.
                </video>
            </div>
        </div>
    )
}
export default HeroSection;