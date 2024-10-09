import Tabs from "./tabs";


const Tools = () => {
    return (
        <div className="mt-2 lg:ml-[300px] lg:mr-[300px] mr-5  ml-5">
            <Tabs></Tabs>
        <h1 className="text-center text-3xl text-black font-roboto mt-5 ">Tools</h1>
        <div className="lg:ml-32 mt-10 lg:grid lg:grid-cols-5 grid grid-cols-2 ml-8"> 
      <div className="w-[150px] h-[150px] bg-[#D9EEFF] rounded-xl animate-pulse lg:mt-5  mt-10">
     
          <img className=" p-3" src="https://i.postimg.cc/cHDR9H5V/vscode-bb07e55e.png " alt="" />
          <h1 className="text-center font-bold text-black">Vs Code</h1>
      </div>
      <div className="w-[150px] h-[150px] bg-[#D9EEFF] rounded-xl animate-pulse lg:mt-5 mt-10">
          <img className=" p-6" src="https://i.postimg.cc/8c9hGYG4/vite-969267d6.png" alt=""  />
          <h1 className="text-center font-bold text-black">Vite</h1>
      </div>
      <div className="w-[150px] h-[150px] bg-[#D9EEFF] rounded-xl animate-pulse lg:mt-5 mt-10">
          <img className=" p-6" src="https://i.postimg.cc/zfrF34gP/git-cd056e6e.png" alt="" />
          <h1 className="text-center font-bold text-black">Git</h1>
      </div>
      <div className="w-[150px] h-[150px] bg-[#D9EEFF] rounded-xl animate-pulse lg:mt-5 mt-10">
          <img className=" p-6" src="https://i.postimg.cc/bYB01Znn/download.png" alt="" />
          <h1 className="text-center font-bold text-black">Npm</h1>
      </div>
      <div className="w-[150px] h-[150px] bg-[#D9EEFF] rounded-xl animate-pulse lg:mt-5 mt-10">
          <img className=" p-6" src="https://i.postimg.cc/Nf26DQ8z/swiperjs-ccd82f2f.png" alt="" />
          <h1 className="text-center font-bold text-black">Swpier Js</h1>
      </div>
    
   
    
     
    
      
 
        
    </div>
  </div>
    );
};

export default Tools;