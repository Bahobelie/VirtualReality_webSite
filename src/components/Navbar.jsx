
import Images from "../assets/index.jsx";
import Constants from "../constants/Index.js";
import {useState} from "react";
;
import {IoClose} from "react-icons/io5";
import {BiMenu, BiSolidLogInCircle} from "react-icons/bi";
import {CiCirclePlus} from "react-icons/ci";


const Navbar=()=>{
    const [mobileOpenDrawerOpen,setMobileDrawerOpen]=useState(false);

    //Todo:handle all event

    const toggleOpen=()=>{
        setMobileDrawerOpen(!mobileOpenDrawerOpen);
    }

    return(
        <div className='sticky top-0 z-50 backdrop-blur border-b border-neutral-700/80'>
            <div className=' container flex mx-auto justify-between items-center'>

                <div className="flex hover:cursor-pointer items-center">
                  <img className='w-4/4 h-20 rounded mr-3' src={Images.virtual2} alt='log'/>
                    <span className='font-tangerine text-3xl font-semibold'>Virtual Reality</span>
                </div>

                <div className='hidden lg:flex'>
                   <ul className='flex space-x-6'>
                       {Constants.NavItems.map((item,index)=>(
                           <div key={index} className='hidden lg:flex hover:border rounded-lg cursor-pointer'>
                               <li key={index} className='px-3 py-2'>
                                   {item.title}
                               </li>
                           </div>
                       ))}
                   </ul>
                </div>
                <div className='hidden lg:flex p-3 justify-end items-center space-x-12'>
                    <a className='hover:border rounded-md px-3 py-1' href='#'>
                        Sign in
                    </a>
                    <button className='px-3 py-1 rounded-md bg-gradient-to-r from-orange-300 to-orange-600'>
                        Create an Account
                    </button>
                </div>
                    <div className='lg:hidden md:flex flex-col justify-end'>
                        <button onClick={toggleOpen}>
                            {mobileOpenDrawerOpen?<IoClose/>:<BiMenu/>}
                        </button>
                    </div>
            </div>

            {mobileOpenDrawerOpen &&(
                <div className='fixed right-0 z-20 p-12 w-full flex flex-col bg-neutral-800 justify-center items-center lg:hidden'>
                    <ul>
                        {Constants.NavItems.map((item,index)=>(
                            <div>
                                <li key={index} className='py-4'>
                                <a href='#'>{item.title}</a>
                                </li>
                            </div>
                        ))}
                    </ul>
                    <div className='lg:hidden flex mt-6 space-x-10'>
                        <div className='flex items-center space-x-2 border border-amber-200 rounded-md px-3 py-2 '>
                            <span><BiSolidLogInCircle /></span>
                            <button>
                                Sign In
                            </button>
                        </div>
                        <div className='px-3 space-x-2 items-center flex py-2 border bg-gradient-to-r from-orange-300 to-orange-600 rounded-md'>
                            <span className='bg-sky-500 rounded-lg'><CiCirclePlus/></span>
                            <button>
                                Create an Account
                            </button>

                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}
export default Navbar;