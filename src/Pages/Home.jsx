import { Typewriter } from 'react-simple-typewriter'
import CountUp from 'react-countup';
import { FaXTwitter } from "react-icons/fa6";
import { ImFacebook2 } from "react-icons/im";
import { FaDribbble } from "react-icons/fa";
import Footer from '../Component/Footer';
import { Link } from 'react-router-dom';
import { Helmet } from "react-helmet";
const Home = () => {

    return (
        <div className=''>
            <Helmet>
                <title>Rakibul-Hasan | Home</title>
            </Helmet>
            <div className='lg:mt-52 mt-10  lg:flex justify-around lg:ml-[300px] lg:mr-[300px] mr-5  ml-5 '>
                <div className=" text-black">
                    <h1 className="text-[0.8rem] " >Hey there, My Name is</h1>
                    <h1 className="font-roboto lg:text-7xl text-5xl font-bold mt-3 " >Rakibul Hasan</h1>
                    <div className='App relative bottom-[70px]'>
                        <h1 style={{ paddingTop: '5rem', margin: 'auto 0', fontWeight: 'normal' }}>
                            {' '}
                            <span style={{ color: 'orange', fontWeight: 'bold', fontSize: '17px', marginTop: '5px', marginLeft: '10px' }}>
                                {/* Style will be inherited from the parent element */}
                                <Typewriter className='text-5xl'
                                    words={['<Fornt-end-Devoloper/>', '<React-Devoloper/>', '<Digital Marketing specialist/>']}
                                    loop={'auto'}
                                    cursor
                                    cursorStyle='_'
                                    typeSpeed={50}
                                    deleteSpeed={40}
                                    delaySpeed={1000}

                                />
                            </span>
                        </h1>
                        <p className='lg:w-[500px] mt-5 text-[0.8rem] text-pretty text-black'>I am Rakibul Hasan. I am a front-end web developer. I consider coding as the most important thing in my life. I love to tackle complex problems.</p>
                    </div>
                    <div className='flex gap-4 relative bottom-10'>
                       <Link to=''> <button className=" text-[0.8rem] p-1 w-20 rounded-sm text-white bg-orange-500 font-roboto">Hire Me</button></Link>
                        <Link to='/about'>   <button className=" text-[0.8rem] p-1 w-20 rounded-sm text-orange-500 border  border-orange-500 hover:bg-sky-600 hover:text-white font-roboto">About Me</button></Link>
                        <Link to='/skill'>  <button className=" text-[0.8rem] p-1 w-20 rounded-sm text-white bg-orange-500 font-roboto">Skills</button></Link>
                        <Link to='/resume'>   <button className=" text-[0.8rem] p-1 w-20 rounded-sm text-orange-500 border  border-orange-500 hover:bg-sky-600 hover:text-white font-roboto">Resume</button></Link>

                    </div>
                </div>
                {/* --------- picture section------- */}
                <div>
                    <div
                        className="w-full sm:w-[80%] lg:w-[60%] rounded-md relative group overflow-hidden lg:relative lg:left-24">

                        {/*  image  */}
                        <button className='lg:hidden relative top-8 ml-2 text-black'>Press Here</button>
                        <img
                            src="https://img.freepik.com/free-photo/indoor-picture-cheerful-handsome-young-man-having-folded-hands-looking-directly-smiling-sincerely-wearing-casual-clothes_176532-10257.jpg?t=st=1728139729~exp=1728143329~hmac=dd0870841ecbe138afdb639fee17206241a94b02b17e1e681ad16eba38f0bd7b&w=996"
                            alt="animated_cards" className="w-full h-[350px] object-cover"  />

                        {/*  texts  */}
                        <div
                            className="flex flex-col items-center justify-center backdrop-blur-md text-white absolute bottom-0 w-full pt-[15px] pb-[30px] translate-y-[200px] group-hover:translate-y-0 transition-all duration-[400ms] overflow-hidden">
                            <h3 className="text-[1.7rem] translate-y-[-50px] group-hover:translate-y-0 transition-all duration-700 font-bold tracking-[5px] leading-[30px] opacity-0 group-hover:opacity-100">Rakibul Hasan
                            </h3>
                            <p className="text-[1rem] translate-y-[100px] group-hover:translate-y-0 transition-all duration-500 opacity-0 group-hover:opacity-100">Web Developer</p>

                            {/*  socials icons  */}
                            <div className="flex items-center gap-[20px] mt-[15px]">
                               <Link to='https://www.facebook.com/RakibulHasanGuddu/' target='https://www.facebook.com/RakibulHasanGuddu/'>
                               <div
                                    className="translate-y-[100px] group-hover:translate-y-0 transition-all duration-500 opacity-0 group-hover:opacity-100">
                                    <ImFacebook2
                                        className="text-[1.3rem] text-white cursor-pointer hover:scale-[1.3] transition-all duration-200" />
                                </div></Link>
                                <div
                                    className="translate-y-[100px] group-hover:translate-y-0 transition-all duration-[800ms] opacity-0 group-hover:opacity-100">
                                    <FaXTwitter
                                        className="text-[1.3rem] text-white cursor-pointer hover:scale-[1.3] transition-all duration-200" />
                                </div>
                                <div
                                    className="translate-y-[100px] group-hover:translate-y-0 transition-all duration-[1100ms] opacity-0 group-hover:opacity-100">
                                    <FaDribbble
                                        className="text-[1.3rem] text-white cursor-pointer hover:scale-[1.3] transition-all duration-200" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='lg:mt-8 mt-6 lg:ml-0 ml-24'>
                    <h1 className='text-4xl text-black font-bold ml-[70px] lg:mt-7 '><CountUp end={1} />+</h1>
                    <h1 className=' text-black font-roboto lg:ml-0 ml-10 text-[0.8rem] '>Years of experience</h1>
                    <h1 className='text-4xl text-black  ml-[60px] font-bold mt-8'><CountUp duration={5} end={10} />+</h1>
                    <h1 className=' text-black font-roboto   lg:ml-0 ml-10 text-[0.8rem] '>Adds Run experience</h1>
                    <h1 className='text-4xl text-black  ml-[60px] font-bold mt-8'><CountUp duration={5} end={15} />+</h1>
                    <h1 className=' text-black font-roboto   lg:ml-0 ml-10 text-[0.8rem] '>Completed projects</h1>
                </div>

            </div>
            <Footer></Footer>

        </div>
    );
};

export default Home;