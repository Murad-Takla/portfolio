import React from 'react';
import profilePic from '../../picture/profile.jpg'
const Home = () => {
    return (
        <div  id="home" className="mt-[85px] font-poppins bg-black relative ">
            <div className="  w-auto flex justify-center relative">
                <div id="container" className=" my-4 md:p-20 lg:p-24 xl:p-20 w-auto flex gap-5 flex-col md:flex-row px-4 sm:px-8 md:px-24 lg:px-24 xl:px-24 relative">
                    <div className='flex justify-center' >
                        <img
                            className="rounded-lg  lg:w-1/2"
                            src={profilePic}
                            alt="image of myself"
                        />
                    </div>
                    <div className="w-full sm:w-[70%] md:w-[60%] lg:w-[50%]">
                        <h1 className="text-white font-bold text-3xl mt-6 mb-8">
                            Hey, it's me, Md Irfan Chowdhury
                        </h1>

                        <p className="text-gray-400 font-semibold text-lg w-full sm:w-[35rem] md:w-[30rem] lg:w-[25rem] mb-10">
                            
                            My tech journey started with HTML, CSS, and JavaScript,
                            and I was hooked by the thrill of crafting dynamic, interactive
                            websites. As I grew, Node.js and ReactJS became my go-to tools for
                            building scalable applications. Feel free to connect if you have questions, collaboration ideas, or just want to
                            discuss the latest in web development!
                        </p>

                        <div id="social" className="flex flex-wrap justify-start items-center gap-4">
                            <a
                                rel="noopener noreferrer"
                                target="_blank"
                                href="https://github.com/Murad-Takla"
                                className="bg-gray-800 rounded-lg p-5 w-64 flex items-center gap-2 text-white"
                            >
                                <img
                                    className="mr-2 hover:scale-105 transition duration-300 ease-in-out"
                                    src="https://ucarecdn.com/1f465c47-4849-4935-91f4-29135d8607af/github2.svg"
                                    width="20px"
                                    height="20px"
                                    alt="Github"
                                />
                                <span>Visit my Github</span>
                            </a>
                            <a
                                rel="noopener noreferrer"
                                target="_blank"
                                href="https://www.linkedin.com/in/md-irfan-chowdhury-5ab863286/"
                                className="bg-gray-800 rounded-lg p-5 w-64 flex items-center gap-2 text-white"
                            >
                                <img
                                    className="mr-2 hover:scale-105 transition duration-300 ease-in-out"
                                    src="https://ucarecdn.com/95eebb9c-85cf-4d12-942f-3c40d7044dc6/linkedin.svg"
                                    width="20px"
                                    height="20px"
                                    alt="LinkedIn"
                                />
                                <span>Follow me on Linkedin</span>
                            </a>
                            <a
                                rel="noopener noreferrer"
                                target="_blank"
                                href="https://x.com/______Irfan____"
                                className="bg-gray-800 rounded-lg p-5 w-64 flex items-center gap-2 text-white"
                            >
                                <img
                                    className="mr-2 hover:scale-105 transition duration-300 ease-in-out"
                                    src="https://ucarecdn.com/82d7ca0a-c380-44c4-ba24-658723e2ab07/"
                                    width="20px"
                                    height="20px"
                                    alt="Twitter"
                                />
                                <span>Follow me on Twitter</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
