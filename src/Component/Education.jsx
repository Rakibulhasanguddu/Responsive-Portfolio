import { CgFacebook } from "react-icons/cg";
import { BsInstagram, BsLinkedin, BsTwitter } from "react-icons/bs";

const Education = () => {
    return (
        <div>
            <div className="mt-10">
                <h1 className="text-center text-3xl text-black font-roboto ">Education</h1>
                <div>
                    <h1 className="text-center mt-5 text-black">
                        <span className="font-bold">Diploma:</span> I studied my Diploma of Computer science and technology in june 2024 </h1>

                    <h1 className="text-center mt-5 text-black">
                        <span className="font-bold">HSC :</span>I completed my Higher Secondary Certificate in March 2023. My GPA was 4.83</h1>
                   
                    <h1 className="text-center mt-5 text-black">
                        <span className="font-bold">SSC :</span> I completed my Secondary School Certificate in November 2021. My GPA was 8.83.74</h1>
                        <h1 className="text-center mt-5 text-black">
                        <span className="font-bold">JSC :</span>  I completed my Junior School Certificate in july 2018. My GPA was 8.89</h1>
                </div>
            </div>


            <div>
                <h1 className="text-center text-3xl text-black font-roboto mt-9">Hobby</h1>
                <h1 className="text-center text-black mt-6  lg:w-[600px] lg:ml-72">I love coding more. But besides that, I love to do other things. For example: taking pictures, making videos, editing pictures, traveling to different places, eating good food, etc. But another thing I love to do is to help people.</h1>
            </div>
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
                    className="absolute bottom-[20px] sm:bottom-0 left-0 right-0 z-10 rounded-b-xl" />
                <img src="https://i.ibb.co/0mp2FwS/Rectangle-95.png"
                    alt="background/image"
                    className="absolute bottom-0 left-0 right-0 z-10 rounded-b-xl" />
            </footer>
        </div>
    );
};

export default Education;