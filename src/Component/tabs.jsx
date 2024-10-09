import { useState } from "react";
import { NavLink } from "react-router-dom";


const Tabs = () => {
    const [isActive, setIsActive] = useState(1);
    const [iisActive, ssetIsActive] = useState(3);

    return (
        <div className="flex justify-center">
     <ul className='flex items-center gap-5'>
     <NavLink to='/front'> <li
        className={`${
          isActive === 1 && 'bg-[#3B9DF8] text-[#ffffff]'
        } px-6 py-2 border  text-[#3B9DF8] transition duration-300 border-[#3B9DF8] cursor-pointer`}
        onClick={() => setIsActive(1)}> Front-end
      </li></NavLink>
     <NavLink to='/back'> <li
        className={`${
          isActive === 2 && 'bg-[#3B9DF8] text-[#ffffff]'
        } px-6 py-2 border text-[#3B9DF8] transition duration-300 border-[#3B9DF8] cursor-pointer`}
        onClick={() => setIsActive(2)}> Backned
      </li></NavLink>
      <NavLink to='/tools'><li
        className={`${
          iisActive === 3 && 'bg-[#3B9DF8] text-[#ffffff]'
        } px-6 py-2 border text-[#3B9DF8] transition duration-300 border-[#3B9DF8] cursor-pointer`}
        onClick={() => ssetIsActive(3)}> Tools
      </li></NavLink>
    </ul>
        </div>
    );
};

export default Tabs;