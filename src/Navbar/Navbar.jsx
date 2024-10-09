

// react icons
import { FaDiscord } from "react-icons/fa";

import { TbBrandGithubFilled } from "react-icons/tb";
import { CiMenuFries } from "react-icons/ci";
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
// font-roboto text-lg hover:border-b-orange-400 border-b-[2px] border-transparent transition-all duration-500 cursor-pointer hover:text-orange-400 hover:font-semibold capitalize
const Navbar = () => {
    const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false)
    const [isActive, setIsActive] = useState(1);
    return (
        <div className="mt-2 lg:ml-[300px] lg:mr-[300px] mr-5  ml-5">
            <nav className="flex items-center justify-between w-full relative text-black">
               <Link to='/'> <img src="https://i.postimg.cc/zvF0jNnV/RH-text-logo-with-orange-color-mix-and-font-bold-1-removebg-preview.png" alt="logo" className="w-[60px] " /></Link>
                <ul className="items-center  gap-[25px] relative left-72 text-[1rem] text-text lg:flex hidden">
                   <NavLink to='/'> <li className={`${isActive === 1 && 'text-orange-400'} font-roboto text-lg hover:border-b-orange-400 border-b-[2px] border-transparent transition-all duration-500 cursor-pointer hover:text-orange-400 hover:font-semibold capitalize`}  onClick={() => setIsActive(1)}>Home</li></NavLink>

                   <NavLink to='/about'> <li className={`${isActive === 2 && 'text-orange-400'} font-roboto text-lg hover:border-b-orange-400 border-b-[2px] border-transparent transition-all duration-500 cursor-pointer hover:text-orange-400 hover:font-semibold capitalize`}  onClick={() => setIsActive(2)}>About Me</li></NavLink>

                   <NavLink to='/skill'> <li className={`${isActive === 3 && 'text-orange-400'} font-roboto text-lg hover:border-b-orange-400 border-b-[2px] border-transparent transition-all duration-500 cursor-pointer hover:text-orange-400 hover:font-semibold capitalize`}  onClick={() => setIsActive(3)}>Skills</li></NavLink>


                    {/* <NavLink to='/about'><li className="font-roboto text-lg hover:border-b-orange-400 border-b-[2px] border-transparent transition-all duration-500 cursor-pointer  hover:text-orange-400 hover:font-semibold capitalize">About Me</li></NavLink> */}

                   {/* <NavLink to='/project'> <li className="font-roboto text-lg hover:border-b-orange-400 border-b-[2px] border-transparent transition-all duration-500 cursor-pointer hover:text-orange-400 hover:font-semibold capitalize">Project</li></NavLink> */}
                   {/* <NavLink to='/skill'> <li className="font-roboto text-lg hover:border-b-orange-400 border-b-[2px] border-transparent transition-all duration-500 cursor-pointer hover:text-orange-400 hover:font-semibold capitalize">Skills</li></NavLink>
                    <li className="font-roboto text-lg hover:border-b-orange-400 border-b-[2px] border-transparent transition-all duration-500 cursor-pointer hover:text-orange-400 hover:font-semibold capitalize">Certificate</li> */}
                   <NavLink to='/resume'> <li className= {`${isActive=== 4 &&'text-orange-400'} font-roboto text-lg hover:border-b-orange-400 border-b-[2px] border-transparent transition-all duration-500 cursor-pointer hover:text-orange-400 hover:font-semibold capitalize`} onClick={() => setIsActive(4)}>Resume</li></NavLink>
                </ul>

                <div className="flex items-center gap-[20px]">


                    <FaDiscord
                        className="text-[1.6rem] text-textc cursor-pointer hover:text-primary transition-all duration-500 " />
                   <Link to='https://github.com/Rakibulhasanguddu' target="https://github.com/Rakibulhasanguddu"> <TbBrandGithubFilled
                        className="text-[1.6rem] text-textc cursor-pointer hover:text-primary transition-all duration-500" /></Link>

                    <CiMenuFries className="text-[1.6rem] text-black cursor-pointer lg:hidden flex"
                        onClick={() => setMobileSidebarOpen(!mobileSidebarOpen)} />
                </div>

                <aside
                    className={` ${mobileSidebarOpen ? "translate-x-0 opacity-100 z-20" : "translate-x-[200px] opacity-0 z-[-1]"} lg:hidden bg-orange-400 p-4 text-center absolute top-[60px] right-0 w-full sm:w-[300px] rounded-md transition-all duration-300`}>

                    <ul className="items-center gap-[20px] text-[1rem] text-white flex flex-col">
                       <NavLink to='/'> <li className="hover:border-b-primary border-b-[2px] border-transparent transition-all duration-500 cursor-pointer capitalize">Home</li></NavLink>
                      <NavLink to='/about'>  <li className="hover:border-b-primary border-b-[2px] border-transparent transition-all duration-500 cursor-poin ter capitalize">About
                            Me
                        </li></NavLink>
                        {/* <NavLink to='/project'><li className="hover:border-b-primary border-b-[2px] border-transparent transition-all duration-500 cursor-pointer capitalize">Project</li></NavLink> */}
                        <NavLink to='/skill'><li className="hover:border-b-primary border-b-[2px] border-transparent transition-all duration-500 cursor-pointer capitalize">Skills</li></NavLink>
                       
                        {/* <li className="hover:border-b-primary border-b-[2px] border-transparent transition-all duration-500 cursor-pointer capitalize">Certificate</li> */}
                        <li className="hover:border-b-primary border-b-[2px] border-transparent transition-all duration-500 cursor-pointer capitalize">Resume</li>
                    </ul>
                </aside>
            </nav>
        </div>
    );
};

export default Navbar;