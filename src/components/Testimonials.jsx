import Constants from "../constants/Index.js";

const Testimonials=()=>{
    return(
        <div className='mt-10 lg:mt-20'>
            <h1 className='text-3xl  sm:text-5xl text-center tracking-wide lg:text-6xl mb-5'> What People
                {" "}
                <span className='text-3xl sm:text-5xl lg:text-6xl bg-gradient-to-r from-orange-300 to-orange-600 text-transparent bg-clip-text'>are saying</span>
            </h1>
            <div className='flex mt-10 lg:mt-20 flex-wrap justify-center'>
                {Constants.testimonials.map((item,index)=>(
                    <div key={index} className='w-full hover:scale-110 transition-transform duration-1000 lg:w-1/3 sm:w-1/3 py-3 px-4'>
                        <div className='text-neutral-300 p-6 rounded-md text-md border border-neutral-800 font-thin'>
                            <p>{item.text}</p>
                            <div className='flex mt-8'>
                                <img className='rounded-full size-10' src={item.image} alt='image'/>
                                <div className='ml-5'>
                                    <h6>{item.user}</h6>
                                    <span className="text-sm font-normal italic text-neutral-600">
                                      {item.company}
                                   </span>
                                </div>
                                <span className='ml-20 flex text-neutral-500'>
                                    {new Date().toLocaleDateString()}
                                </span>
                            </div>

                        </div>
                    </div>
                ))}

            </div>
        </div>
    )
}
export default Testimonials;