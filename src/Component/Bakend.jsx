import Tabs from "./tabs";


const Bakend = () => {
    return (
        <div className="mt-2 lg:ml-[300px] lg:mr-[300px] mr-5  ml-5">
            <Tabs></Tabs>
              <h1 className="text-center text-3xl text-black font-roboto mt-5 ">Back-End</h1>
              <div className="lg:ml-32 mt-10 lg:grid lg:grid-cols-5 grid grid-cols-2 ml-8"> 
            <div className="w-[150px] h-[150px] bg-[#D9EEFF] rounded-xl animate-pulse lg:mt-5  mt-10">
           
                <img className=" p-3" src="https://i.postimg.cc/4yXyJ4fg/firebase-cc9c7613.png " alt="" />
                <h1 className="text-center font-bold text-black">Firebase</h1>
            </div>
            <div className="w-[150px] h-[150px] bg-[#D9EEFF] rounded-xl animate-pulse lg:mt-5 mt-10">
                <img className=" p-6" src="https://i.postimg.cc/rFFs3pZG/nodejs-0f4a3eeb.png" alt=""  />
                <h1 className="text-center font-bold text-black">Node</h1>
            </div>
            <div className="w-[150px] h-[150px] bg-[#D9EEFF] rounded-xl animate-pulse lg:mt-5 mt-10">
                <img className=" p-6" src="https://i.postimg.cc/k5CkY2fq/framermotion-b5e2afce.png" alt="" />
                <h1 className="text-center font-bold text-black">Farmer Motion</h1>
            </div>
            <div className="w-[150px] h-[150px] bg-[#D9EEFF] rounded-xl animate-pulse lg:mt-5 mt-10">
                <img className=" p-6" src="https://i.postimg.cc/Rhm9cgyQ/sass-3a3665d6.png" alt="" />
                <h1 className="text-center font-bold text-black">Sass</h1>
            </div>
            <div className="w-[150px] h-[150px] bg-[#D9EEFF] rounded-xl animate-pulse lg:mt-5 mt-10">
                <img className=" p-6" src="https://i.postimg.cc/XYqWcGHh/react-462ddb5a.png" alt="" />
                <h1 className="text-center font-bold text-black">React Js</h1>
            </div>
          
         
          
           
          
            
       
              
          </div>
        </div>
    );
};

export default Bakend;