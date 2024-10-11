
import {FaGithubSquare, FaInstagramSquare, FaLinkedin} from "react-icons/fa";
import {FiMessageCircle} from "react-icons/fi";
// react icons


import { TbBrandGithubFilled } from "react-icons/tb";
import { CiMenuFries } from "react-icons/ci";
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
// font-roboto text-lg hover:border-b-orange-400 border-b-[2px] border-transparent transition-all duration-500 cursor-pointer hover:text-orange-400 hover:font-semibold capitalize
const Navbar = () => {
    const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false)
    const [isActive, setIsActive] = useState(1);
    const [isProfileHovered, setIsProfileHovered] = useState(false);
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


                   
                   <Link to='https://github.com/Rakibulhasanguddu' target="https://github.com/Rakibulhasanguddu"> <TbBrandGithubFilled
                        className="text-[1.6rem] text-textc cursor-pointer hover:text-primary transition-all duration-500" /></Link>
<div className="relative w-fit h-full flex items-center justify-center"
             onMouseEnter={() => setIsProfileHovered(true)}
             onMouseLeave={() => setIsProfileHovered(false)}
        >
            {/*  initial profile picture  */}
            <img
                src="https://i.postimg.cc/wB80Mgzb/profile-pic-1.png"
                alt="profile"
                className="w-[50px] h-[50px] rounded-full object-cover border-[3px] cursor-pointer border-[#3B9DF8]"/>

            {/*  tooltip  */}
            <div
                className={` ${isProfileHovered ? "opacity-100 z-20 translate-y-0" : "opacity-0 z-[-1] translate-y-[20px]"} absolute -top-[-70px] left-[50%] transform translate-x-[-50%] bg-white w-[250px] rounded-md p-[15px] shadow-md transition-all duration-300`}>

                {/*  socials  */}
                <div
                    className="flex items-center justify-between border-b border-gray-200 pb-[7px]">
                    <p className="text-[1rem] font-[600] text-gray-700">Socials</p>
                    <div className="flex items-center gap-[8px]">
                        <a href="https://www.linkedin.com/in/rakibul-hasan-guddu/" target="https://www.linkedin.com/in/rakibul-hasan-guddu/">
                            <FaLinkedin
                                className="text-[1.3rem] text-gray-700 hover:text-[#3B9DF8] cursor-pointer hover:scale-[1.2] transition-all duration-200 ease-out"/>
                        </a>
                        <a href="https://github.com/Rakibulhasanguddu" target="https://github.com/Rakibulhasanguddu">
                            <FaGithubSquare
                                className="text-[1.3rem] text-gray-700 hover:text-[#3B9DF8] cursor-pointer hover:scale-[1.2] transition-all duration-200 ease-out"/>
                        </a>
                        <a href="https://www.instagram.com/rakibul_hasan_guddu/" target="https://www.instagram.com/rakibul_hasan_guddu/">
                            <FaInstagramSquare
                                className="text-[1.3rem] text-gray-700 hover:text-[#3B9DF8] cursor-pointer hover:scale-[1.2] transition-all duration-200 ease-out"/>
                        </a>
                    </div>
                </div>

                {/*  account details  */}
                <div className="flex items-center justify-center flex-col mt-5">
                    <div className="relative">
                        <img
                            src="https://i.postimg.cc/wB80Mgzb/profile-pic-1.png"
                            alt="profile"
                            className="w-[80px] h-[80px] rounded-full object-cover"/>
                        <div
                            className="w-[10px] h-[10px] rounded-full bg-green-400 absolute top-[7px] right-[8px] border-[2px] border-white"></div>
                    </div>
                    <h4 className="text-[1.1rem] font-[600] text-gray-700 mt-2">Rakibul Hasan
                       </h4>
                    <p className="text-[0.8rem] text-gray-600">Programmer</p>
                </div>

                {/*  send message  */}
                <button
                    className="flex mx-auto hover:underline items-center gap-[8px] font-[500] text-[0.9rem] text-[#3B9DF8] mt-4">
                    <FiMessageCircle className="text-[1.1rem]"/>
                    Send Message
                </button>

                {/*  bottom arrow  */}
                <div
                    className="bg-orange-400 w-[15px] h-[15px] rotate-[45deg] absolute bottom-[-7px] left-[50%] transform translate-x-[-50%]"></div>
            </div>
        </div>
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
                      <NavLink to='/resume'>  <li className="hover:border-b-primary border-b-[2px] border-transparent transition-all duration-500 cursor-pointer capitalize">Resume</li></NavLink>
                    </ul>
                </aside>
            </nav>
        </div>
    );
};

export default Navbar;