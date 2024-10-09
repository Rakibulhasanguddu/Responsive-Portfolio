import { Helmet } from "react-helmet";

import Tabs from "../Component/tabs";



const Skills = () => {
    return (
        <div className="mt-2 lg:ml-[300px] lg:mr-[300px] mr-5  ml-5">
              <Helmet>
        <title>Rakibul-Hasan | Skills</title>
    </Helmet>
        <Tabs></Tabs>
        
          
          <div className="lg:ml-32 mt-2 lg:grid lg:grid-cols-5 grid grid-cols-2 ml-8"> 
            <div className="w-[150px] h-[150px] bg-[#D9EEFF] rounded-xl animate-pulse lg:mt-5 mt-10">
           
                <img className=" p-3" src="https://i.postimg.cc/xdGGDgcD/html-5132b1f6.png" alt="" />
                <h1 className="text-center font-bold text-black">Html</h1>
            </div>
            <div className="w-[150px] h-[150px] bg-[#D9EEFF] rounded-xl animate-pulse lg:mt-5  mt-10">
                <img className=" p-6" src="https://i.postimg.cc/ZYW6gV9K/css-7c2f7af3.png" alt=""  />
                <h1 className="text-center font-bold text-black">CSS</h1>
            </div>
            <div className="w-[150px] h-[150px] bg-[#D9EEFF] rounded-xl animate-pulse lg:mt-5 mt-10">
                <img className=" p-6" src="https://i.postimg.cc/qB2vz3Sx/js-6b71920c.png" alt="" />
                <h1 className="text-center font-bold text-black">Java Script</h1>
            </div>
            <div className="w-[150px] h-[150px] bg-[#D9EEFF] rounded-xl animate-pulse lg:mt-5 mt-10">
                <img className=" p-6" src="https://i.postimg.cc/Rhm9cgyQ/sass-3a3665d6.png" alt="" />
                <h1 className="text-center font-bold text-black">Sass</h1>
            </div>
            <div className="w-[150px] h-[150px] bg-[#D9EEFF] rounded-xl animate-pulse lg:mt-5 mt-10">
                <img className=" p-6" src="https://i.postimg.cc/XYqWcGHh/react-462ddb5a.png" alt="" />
                <h1 className="text-center font-bold text-black">React Js</h1>
            </div>
            <div className="w-[150px] h-[150px] bg-[#D9EEFF] rounded-xl animate-pulse mt-10">
                <img className=" p-6" src="https://i.postimg.cc/GmTty2CX/redux-70d6dc8d.png" alt="" />
                <h1 className="text-center font-bold text-black">Redux</h1>
            </div>
            <div className="w-[150px] h-[150px] bg-[#D9EEFF] rounded-xl animate-pulse  mt-10">
                <img className=" p-6" src="https://i.postimg.cc/NF0ffGD7/tailwind-0ab529d8.png" alt="" />
                <h1 className="text-center font-bold text-black">Tailwind CSS</h1>
            </div>
            <div className="w-[150px] h-[150px] bg-[#D9EEFF] rounded-xl animate-pulse  mt-10">
                <img className=" p-6" src="https://i.postimg.cc/5twtsRjv/meterialui-c1786856.png" alt="" />
                <h1 className="text-center font-bold text-black">Meterial UI</h1>
            </div>
            <div className="w-[150px] h-[150px] bg-[#D9EEFF] rounded-xl animate-pulse  mt-10">
                <img className=" p-6" src="https://i.ibb.co.com/0BZfPq6/darklogo.png" alt="" />
                <h1 className="text-center font-bold text-black mt-6">Zen UI</h1>
            </div>
            <div className="w-[150px] h-[150px] bg-[#D9EEFF] rounded-xl animate-pulse  mt-10">
                <img className=" p-6" src="https://i.postimg.cc/0jz3KD2d/ant-Design-0a22c7e0-1.png" alt="" />
                <h1 className="text-center font-bold text-black">Art UI</h1>
            </div>
            
       
              
          </div>
         
          
        </div>
    );
};

export default Skills;