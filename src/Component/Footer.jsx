import {CgFacebook} from "react-icons/cg";
import {BsInstagram, BsLinkedin, BsTwitter} from "react-icons/bs";

const Footer = () => {
    return (
        <div className="mt-2 lg:ml-[300px] lg:mr-[300px] mr-5  ml-5">
              <footer className="bg-white boxShadow rounded-xl w-full p-3 lg:p-4 relative">

<div
    className="w-full flex items-center justify-center pt-[30px] flex-col gap-[20px] pb-[130px]">
    {/* <img src="" alt=""
         className="w-[150px]"/> */}



   

    <div className="flex gap-[15px] text-black mt-4">
        <a href="https://www.facebook.com/RakibulHasanGuddu/" target="https://www.facebook.com/RakibulHasanGuddu/" className="text-[1.3rem] p-1.5 cursor-pointer rounded-full bg-orange-500 animate-bounce  text-text boxShadow">
            <CgFacebook/>
        </a>
        <a href="https://www.linkedin.com/in/rakibul-hasan-guddu/" target="https://www.linkedin.com/in/rakibul-hasan-guddu/" className="text-[1.2rem] p-1.5 cursor-pointer rounded-full bg-orange-500 animate-bounce  text-text boxShadow">
            <BsLinkedin/>
        </a>
        <a href="https://x.com/i/flow/login?redirect_after_login=%2FRakibulHasanGud" target="https://x.com/i/flow/login?redirect_after_login=%2FRakibulHasanGud" className="text-[1.2rem] p-1.5 cursor-pointer rounded-full bg-orange-500 animate-bounce text-text boxShadow">
            <BsTwitter/>
        </a>
        <a href="https://www.instagram.com/rakibul_hasan_guddu/" target="https://www.instagram.com/rakibul_hasan_guddu/" className="text-[1.2rem] p-1.5 cursor-pointer rounded-full bg-orange-500 animate-bounce  text-text boxShadow">
            <BsInstagram/>
        </a>
       
    </div>
</div>

<div
    className="z-30 absolute bottom-3 left-0 right-0 px-3 flex items-center justify-between w-full">
   

    
</div>

<img src="https://i.ibb.co/zNk7XT4/Rectangle-97.png" alt="background/image"
     className="absolute bottom-[20px] sm:bottom-0 left-0 right-0 z-10 rounded-b-xl"/>
<img src="https://i.ibb.co/0mp2FwS/Rectangle-95.png"
     alt="background/image"
     className="absolute bottom-0 left-0 right-0 z-10 rounded-b-xl"/>
</footer>
        </div>
    );
};

export default Footer;