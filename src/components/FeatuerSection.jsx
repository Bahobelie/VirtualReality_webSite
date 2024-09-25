import Constants from "../constants/Index.js";
import React from "react";

const FeatureSection=()=>{
    return(
        <div className='mt-20 flex items-center justify-center'>
            <div className='flex flex-col items-center'>
                <button className=' text-orange-300 font-tangerine text-5xl'>Feature</button>
                <div className='mt-10'>
                    <h1 className='tracking-wide text-5xl'>
                        Easily build
                        {" "}
                        <span className='bg-gradient-to-r from-orange-300 to-red-800 text-transparent bg-clip-text'>Your Code</span>

                    </h1>
                </div>
                <div className='lg:mt-40 mt-10 flex flex-wrap'>
                    {Constants.features.map((item,index)=>(
                        <div key={index} className='w-full sm:w-1/2 lg:w-1/3'>
                          <div className='flex'>
                              <div className='mr-2 w-10 h-10 p-2 bg-neutral-900 text-orange-300 justify-center items-center rounded-full'>
                                  {React.createElement(item.icon)}
                              </div>
                              <div>
                                  <h5 className='mt-1 mb-6 text-xl'>{item.text}</h5>
                                  <p className='text-md p-2 mb-20 text-neutral-500'>{item.description}</p>
                              </div>
                          </div>
                        </div>
                        )
                    )}
                </div>
            </div>

        </div>
    )
}
export default FeatureSection;