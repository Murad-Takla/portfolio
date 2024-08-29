import React from 'react';
import './Project.css'
import foodi from '../../picture/foodie.jpg'
import carDoctor from '../../picture/cardoctor.jpg'
import JS from '../../picture/JS.jpg'
import PhoneHunter from '../../picture/PhoneHunter.jpg'
const Project = () => {
    return (
        <div id='my-projects'>
            <div className='container mx-auto text-center mt-10'>
                <h1 className='text-5xl'><span>MY</span><span> RECENT WORK</span></h1>
            </div>
            <div  className='container mx-auto my-10 grid max-w-screen-xl gap-y-8 sm:grid-cols-2 lg:grid-cols-3'>
                <div className="group relative m-10 h-96 overflow-hidden rounded-lg shadow-md">
                    {/* Page1 */}
                    <div className="absolute left-0 top-0 h-full w-full transition-all duration-300 ease-in-out group-hover:-top-96">
                        <img
                            className="h-4/6 w-full object-cover"
                            src={foodi}
                            alt=""
                        />
                        <h1 className="mt-8 px-4 text-center font-serif text-xl font-semibold text-[#101123]">
                            Food order website
                        </h1>

                    </div>
                    {/* /Page1 */}
                    {/* Page2 */}
                    <div className="absolute left-0 -bottom-96 flex h-full w-full flex-col justify-center transition-all duration-300 ease-in-out group-hover:bottom-0">
                        <h1 className="mb-2 px-8 text-center font-serif text-xl font-semibold text-[#101123]">
                            React, Mongodb
                        </h1>
                        <p className="px-8 text-center font-semibold text-gray-500">
                            Firebase authentication , Tailwind css , daisiUI
                        </p>
                        <div className='flex justify-center mt-8'>


                            <button
                                className="button"
                                onClick={() => window.open("https://foodi-b203a.web.app/", "_blank")}
                            >
                                <svg className="svgIcon" viewBox="0 0 384 512">
                                    <path
                                        d="M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.2V448c0 17.7 14.3 32 32 32s32-14.3 32-32V141.2L329.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z"
                                    ></path>
                                </svg>
                            </button>
                        </div>



                    </div>

                </div>
                <div className="group relative m-10 h-96 overflow-hidden rounded-lg shadow-md">
                    {/* Page1 */}
                    <div className="absolute left-0 top-0 h-full w-full transition-all duration-300 ease-in-out group-hover:-top-96">
                        <img
                            className="h-4/6 w-full object-cover"
                            src={carDoctor}
                            alt=""
                        />
                        <h1 className="mt-8 px-4 text-center font-serif text-xl font-semibold text-[#101123]">
                            Car Services
                        </h1>

                    </div>
                    {/* /Page1 */}
                    {/* Page2 */}
                    <div className="absolute left-0 -bottom-96 flex h-full w-full flex-col justify-center transition-all duration-300 ease-in-out group-hover:bottom-0">
                        <h1 className="mb-2 px-8 text-center font-serif text-xl font-semibold text-[#101123]">
                            React, Mongodb
                        </h1>
                        <p className="px-8 text-center font-semibold text-gray-500">
                            Firebase authentication , Tailwind css , daisiUI
                        </p>
                        <div className='flex justify-center mt-8'>


                            <button
                                className="button"
                                onClick={() => window.open("https://genius-car-6b7cb.web.app/", "_blank")}
                            >
                                <svg className="svgIcon" viewBox="0 0 384 512">
                                    <path
                                        d="M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.2V448c0 17.7 14.3 32 32 32s32-14.3 32-32V141.2L329.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z"
                                    ></path>
                                </svg>
                            </button>
                        </div>



                    </div>

                </div>
                <div className="group relative m-10 h-96 overflow-hidden rounded-lg shadow-md">
                    {/* Page1 */}
                    <div className="absolute left-0 top-0 h-full w-full transition-all duration-300 ease-in-out group-hover:-top-96">
                        <img
                            className="h-4/6 w-full object-fill"
                            src={JS}
                            alt=""
                        />
                        <h1 className="mt-8 px-4 text-center font-serif text-xl font-semibold text-[#101123]">
                            Ecommerce
                        </h1>

                    </div>
                    {/* /Page1 */}
                    {/* Page2 */}
                    <div className="absolute left-0 -bottom-96 flex h-full w-full flex-col justify-center transition-all duration-300 ease-in-out group-hover:bottom-0">
                        <h1 className="mb-2 px-8 text-center font-serif text-xl font-semibold text-[#101123]">
                            Java script
                        </h1>
                        <p className="px-8 text-center font-semibold text-gray-500">
                            Product Add , Delete , Cart
                        </p>
                        <div className='flex justify-center mt-8'>


                            <button
                                className="button"
                                onClick={() => window.open("https://main--classy-syrniki-29da4a.netlify.app/", "_blank")}
                            >
                                <svg className="svgIcon" viewBox="0 0 384 512">
                                    <path
                                        d="M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.2V448c0 17.7 14.3 32 32 32s32-14.3 32-32V141.2L329.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z"
                                    ></path>
                                </svg>
                            </button>
                        </div>



                    </div>

                </div>
                <div className="group relative m-10 h-96 overflow-hidden rounded-lg shadow-md">
                    {/* Page1 */}
                    <div className="absolute left-0 top-0 h-full w-full transition-all duration-300 ease-in-out group-hover:-top-96">
                        <img
                            className="h-4/6 w-full object-cover"
                            src={PhoneHunter}
                            alt=""
                        />
                        <h1 className="mt-8 px-4 text-center font-serif text-xl font-semibold text-[#101123]">
                            Phone Searching
                        </h1>

                    </div>
                    {/* /Page1 */}
                    {/* Page2 */}
                    <div className="absolute left-0 -bottom-96 flex h-full w-full flex-col justify-center transition-all duration-300 ease-in-out group-hover:bottom-0">
                        <h1 className="mb-2 px-8 text-center font-serif text-xl font-semibold text-[#101123]">
                            JS
                        </h1>
                        <p className="px-8 text-center font-semibold text-gray-500">
                            API calling , Modal , Details in a Modal
                        </p>
                        <div className='flex justify-center mt-8'>


                            <button
                                className="button"
                                onClick={() => window.open("https://zingy-churros-b968e3.netlify.app/", "_blank")}
                            >
                                <svg className="svgIcon" viewBox="0 0 384 512">
                                    <path
                                        d="M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.2V448c0 17.7 14.3 32 32 32s32-14.3 32-32V141.2L329.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z"
                                    ></path>
                                </svg>
                            </button>
                        </div>



                    </div>

                </div>





            </div>
        </div>

    );
};

export default Project;