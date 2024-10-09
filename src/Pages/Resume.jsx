// import pdfrom from '../assets/pd.pdf';

import { Helmet } from "react-helmet";

const Resume = () => {
   
    const onButtonClick = () => {
        const pdfUrl ='https://jmp.sh/s/c97Nb9EkUsjjWWEDwfDQ';
        const link = document.createElement("a");
        link.href = pdfUrl;
        link.download = "document.pdf"; // specify the filename
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };
  
   
    return (
        <div className="mt-2 lg:ml-[300px] lg:mr-[300px] mr-5  ml-5">
              <Helmet>
        <title >Rakibul-Hasan | Resume</title>
    </Helmet>
     <div className="lg:flex justify-center">
        <div>
            <img src='https://i.postimg.cc/7PVPDypx/Md-Rakibul-Hasan-Resume-1-page-0001.jpg' alt="" />
        </div>
        <div>
        <center className="lg:mt-32">
             
             <h3 className="text-black font-roboto">
                 Click on below button to download PDF
                 file
             </h3>
             {/* <button onClick={onButtonClick}>
                 Download PDF
             </button> */}
             
<button onClick={onButtonClick}
    className="relative mt-5 inline-flex items-center justify-start py-3 pl-4 pr-12 overflow-hidden font-semibold text-primary transition-all duration-150 ease-in-out rounded hover:pl-10 hover:pr-6 bg-orange-400 group">
      <span
          className="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out bg-primary group-hover:h-full"></span>
    <span className="absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12">
        <svg className="w-5 h-5 text-green-400" fill="none" stroke="#3B9DF8" viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
        </svg>
    </span>
        <span
        className="absolute left-0 pl-2.5 -translate-x-12 group-hover:translate-x-0 ease-out duration-200">
            <svg className="w-5 h-5 text-green-400" fill="none" stroke="#fff" viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
            </svg>
        </span>
    <span className="relative w-full text-left transition-colors text-black duration-200 ease-in-out group-hover:text-white">Download</span>
</button>
         </center>
        </div>
     </div>
        </div>
    );
};

export default Resume;