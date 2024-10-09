// import {BsInstagram, BsLinkedin, BsTwitter} from "react-icons/bs";
// import {CgFacebook} from "react-icons/cg";
import { Helmet } from "react-helmet";
import Education from "../Component/Education";
const Aboutme = () => {
    return (
        <div className="mt-8 lg:ml-[400px] lg:mr-[300px] mr-5  ml-5">
             <Helmet>
        <title>Rakibul-Hasan | About ME</title>
    </Helmet>
      

                <div className="lg:flex lg:ml-4  gap-8 mt-5">
                    <div>
                        <img className="lg:w-[450px] lg:h-400px" src="https://i.postimg.cc/YSsTdJsR/pexels-fotios-photos-16129724.jpg" alt="" />
                    </div>
                    <div>
                        <h1 className="lg:w-[500px] text-black lg:mt-0 mt-3 text-[0.8rem]  ">My name is Rakibul Hasan, and I am passionate about crafting exceptional user experiences as a Front-End Web Developer. With over 1 years of hands-on experience in the industry, I currently thrive in my role at Doplac CRM, where I contribute to building intuitive interfaces that drive user engagement and satisfaction. Previously, I had the opportunity to work remotely for Goatmove Inc., an esteemed American company. This experience not only sharpened my technical skills but also enriched my understanding of global standards in web development and the nuances of remote collaboration.  In my toolkit, I wield expertise in HTML, CSS, JavaScript, and proficiently navigate various front-end frameworks like React and Vue. These technical competencies enable me to tackle complex challenges and deliver solutions that resonate with end-users and stakeholders alike.</h1>
{/* 
                        <div className="lg:flex flex lg:ml-0 ml-24  gap-[15px] text-black mt-6">
        <a className="text-[1.3rem] p-1.5 cursor-pointer rounded-full bg-orange-500 animate-bounce  text-text boxShadow">
            <CgFacebook/>
        </a>
        <a className="text-[1.2rem] p-1.5 cursor-pointer rounded-full bg-orange-500 animate-bounce text-text boxShadow">
            <BsTwitter/>
        </a>
        <a className="text-[1.2rem] p-1.5 cursor-pointer rounded-full bg-orange-500 animate-bounce  text-text boxShadow">
            <BsInstagram/>
        </a>
        <a className="text-[1.2rem] p-1.5 cursor-pointer rounded-full bg-orange-500 animate-bounce  text-text boxShadow">
            <BsLinkedin/>
        </a>
    </div> */}
                    </div>
                    

                    
                </div>
                <Education></Education>
            
        </div>
    );
};

export default Aboutme;