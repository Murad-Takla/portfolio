import React from 'react';

import './Education.css'
const Education = () => {
    return (
        <div id='myEducation' className='container mx-auto mt-5 px-4 mb-2'>
            <div className=' lg:mx-0'>
                    <div className=" my-5 flex items-center before:h-px before:flex-1  before:bg-[#241E4C] before:content-[''] after:h-px after:flex-1 after:bg-[#241E4C]  after:content-['']">
                        <div
                            type="button"
                            className="flex items-center rounded border border-gray-300 bg-[#241E4C] px-3 py-2 text-center text-md font-serif  text-white"
                        >

                            Educations
                        </div>
                    </div>
                </div>
            <div className="box flex flex-col lg:flex-row lg:space-x-4 ">

               <div className='w-1/2 lg:flex  items-center hidden'>
               <img 
                        src="https://i.pinimg.com/564x/85/6b/a3/856ba3492c8d8fac0ffd966432fee880.jpg" 
                        alt="Education" 
                       className='rounded-md shadow-md'
                    />
               </div>

                <div className="flex flex-col space-y-6 lg:w-1/2">
                    <div
                        className="relative glow-container"
                        style={{ '--gap': 32, '--blur': 12, '--spread': 80, '--direction': 'row' }}
                    >
                        <article className="glow-card h-fit cursor-pointer border border-[#2a2e5a] transition-all duration-300 relative bg-[#101123] text-gray-200 rounded-xl hover:border-transparent p-5">
                            <div className="glows"></div>
                            <div className="flex justify-center mb-4">
                                <p className="text-xs sm:text-sm text-[#16f2b3]">2020 - Present</p>
                            </div>
                            <div className="flex items-center gap-x-4">
                                <div className="text-violet-500 transition-all duration-300 hover:scale-125">
                                    <svg
                                        stroke="currentColor"
                                        fill="currentColor"
                                        strokeWidth="0"
                                        viewBox="0 0 16 16"
                                        height="36"
                                        width="36"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path d="M4 16s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1H4Zm4-5.95a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z"></path>
                                        <path d="M2 1a2 2 0 0 0-2 2v9.5A1.5 1.5 0 0 0 1.5 14h.653a5.373 5.373 0 0 1 1.066-2H1V3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v9h-2.219c.554.654.89 1.373 1.066 2h.653a1.5 1.5 0 0 0 1.5-1.5V3a2 2 0 0 0-2-2H2Z"></path>
                                    </svg>
                                </div>
                                <div>
                                    <p className="text-base sm:text-xl mb-2 font-medium uppercase">BS<span className='lowercase'>c</span> in Computer Science</p>
                                    <p className="text-sm sm:text-base">International Islamic University Chittagong</p>
                                </div>
                            </div>
                        </article>
                    </div>

                    <div
                        className="relative glow-container"
                        style={{ '--gap': 32, '--blur': 12, '--spread': 80, '--direction': 'row' }}
                    >
                        <article className="glow-card h-fit cursor-pointer border border-[#2a2e5a] transition-all duration-300 relative bg-[#101123] text-gray-200 rounded-xl hover:border-transparent p-5">
                            <div className="glows"></div>
                            <div className="flex justify-center mb-4">
                                <p className="text-xs sm:text-sm text-[#16f2b3]">2017 - 2019</p>
                            </div>
                            <div className="flex items-center gap-x-4">
                                <div className="text-violet-500 transition-all duration-300 hover:scale-125">
                                    <svg
                                        stroke="currentColor"
                                        fill="currentColor"
                                        strokeWidth="0"
                                        viewBox="0 0 16 16"
                                        height="36"
                                        width="36"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path d="M4 16s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1H4Zm4-5.95a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z"></path>
                                        <path d="M2 1a2 2 0 0 0-2 2v9.5A1.5 1.5 0 0 0 1.5 14h.653a5.373 5.373 0 0 1 1.066-2H1V3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v9h-2.219c.554.654.89 1.373 1.066 2h.653a1.5 1.5 0 0 0 1.5-1.5V3a2 2 0 0 0-2-2H2Z"></path>
                                    </svg>
                                </div>
                                <div>
                                    <p className="text-base sm:text-xl mb-2 font-medium uppercase">Higher Secondary Certificate</p>
                                    <p className="text-sm sm:text-base">Govt. City College, Chittagong</p>
                                </div>
                            </div>
                        </article>
                    </div>

                    <div
                        className="relative glow-container"
                        style={{ '--gap': 32, '--blur': 12, '--spread': 80, '--direction': 'row' }}
                    >
                        <article className="glow-card h-fit cursor-pointer border border-[#2a2e5a] transition-all duration-300 relative bg-[#101123] text-gray-200 rounded-xl hover:border-transparent p-5">
                            <div className="glows"></div>
                            <div className="flex justify-center mb-4">
                                <p className="text-xs sm:text-sm text-[#16f2b3]">2015 - 2017</p>
                            </div>
                            <div className="flex items-center gap-x-4">
                                <div className="text-violet-500 transition-all duration-300 hover:scale-125">
                                    <svg
                                        stroke="currentColor"
                                        fill="currentColor"
                                        strokeWidth="0"
                                        viewBox="0 0 16 16"
                                        height="36"
                                        width="36"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path d="M4 16s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1H4Zm4-5.95a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z"></path>
                                        <path d="M2 1a2 2 0 0 0-2 2v9.5A1.5 1.5 0 0 0 1.5 14h.653a5.373 5.373 0 0 1 1.066-2H1V3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v9h-2.219c.554.654.89 1.373 1.066 2h.653a1.5 1.5 0 0 0 1.5-1.5V3a2 2 0 0 0-2-2H2Z"></path>
                                    </svg>
                                </div>
                                <div>
                                    <p className="text-base sm:text-xl mb-2 font-medium uppercase">Secondary School Certificate</p>
                                    <p className="text-sm sm:text-base">Hatey Khari School & College</p>
                                </div>
                            </div>
                        </article>
                    </div>

                </div>
            </div>
            <div className='mt-5'>
                <hr className='bg-[#101123] h-[2px]'/>
            </div>
        </div>
    );
};

export default Education;
