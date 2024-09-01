import React from 'react';
import './Contact.css'
const Contact = () => {
    return (
        <div id='my-contact'>
            <div className="sm:p-10 my-auto">
                <section className="mx-auto max-w-screen-xl md:rounded-md md:border md:shadow-lg">
                    <div className="grid grid-cols-4 text-gray-800 lg:grid-cols-3">
                        <div className="col-span-4  bg-gray-50 px-8 py-10 text-gray-800 md:col-span-2 md:border-r md:px-10 md:py-12 lg:col-span-1">
                            <h2 className="mb-8 text-2xl font-black">Contact me</h2>
                            <ul className=''>
                                <li className="mb-6 flex  items-start gap-2 text-left">
                                    <a title="Gmail" className="flex  items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 dark:bg-violet-600 dark:text-gray-50">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 32 32" className="w-4 h-4">
                                            <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
                                        </svg>
                                    </a>
                                    <div>
                                        <span
                                            className="cursor-pointer font-serif text-base md:text-lg"

                                        >
                                            irfanchowdhurycr7@gmail.com
                                        </span>
                                        <span className="block text-xs uppercase">email</span>
                                    </div>
                                </li>
                                <li className="my-6 flex items-center gap-2  text-left">
                                    <a title="Instagram" className="flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 dark:bg-violet-600 dark:text-gray-50">
                                        <svg
                                            className="w-[16px] h-[16px] fill-[#000000]"
                                            viewBox="0 0 448 512"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            {/*! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. */}
                                            <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z" />
                                        </svg>

                                    </a>
                                    <div >
                                        <a
                                            target='blank'
                                            className="cursor-pointer font-serif text-base md:text-lg"
                                            href="https://www.linkedin.com/in/md-irfan-chowdhury-5ab863286/"
                                        >
                                           MD IRFAN CHOWDHURY

                                        </a>
                                        <span className="block text-xs uppercase">LINKEDIN</span>
                                    </div>
                                </li>
                                <li className="my-6 flex items-center gap-2  text-left">
                                    <a title="Facebook" className="flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 dark:bg-violet-600 dark:text-gray-50">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 32 32" className="w-4 h-4">
                                            <path d="M32 16c0-8.839-7.167-16-16-16-8.839 0-16 7.161-16 16 0 7.984 5.849 14.604 13.5 15.803v-11.177h-4.063v-4.625h4.063v-3.527c0-4.009 2.385-6.223 6.041-6.223 1.751 0 3.584 0.312 3.584 0.312v3.937h-2.021c-1.984 0-2.604 1.235-2.604 2.5v3h4.437l-0.713 4.625h-3.724v11.177c7.645-1.199 13.5-7.819 13.5-15.803z"></path>
                                        </svg>
                                    </a>
                                    <div>
                                        <a
                                            target='blank'
                                            href='https://www.facebook.com/MohammadirfanChowdhurymasud/'
                                            className="font-serif text-base md:text-lg">Irfan Chowdhury Masud</a>
                                        <span className="block text-xs uppercase">Facebook</span>
                                    </div>
                                </li>
                                <li className="my-6 flex items-center gap-2  text-left">
                                    <a title="Facebook" className="flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 dark:bg-violet-600 dark:text-gray-50">
                                        <svg
                                            className="w-[16px] h-[16px] fill-[#000000]"
                                            viewBox="0 0 496 512"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            {/*! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. */}
                                            <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" />
                                        </svg>

                                    </a>
                                    <div>
                                        <a
                                            target='blank'
                                            href='https://github.com/Murad-Takla'
                                            className="font-serif text-base md:text-lg">Murad Takla</a>
                                        <span className="block text-xs uppercase">GITHUB</span>
                                    </div>
                                </li>
                                <li className="my-6 flex items-center text-left gap-2 ">
                                    <a title="Facebook" className="flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 dark:bg-violet-600 dark:text-gray-50">
                                        <svg
                                            className="w-[16px] h-[16px] fill-[#000000]"
                                            viewBox="0 0 512 512"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            {/*! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. */}
                                            <path d="M280 0C408.1 0 512 103.9 512 232c0 13.3-10.7 24-24 24s-24-10.7-24-24c0-101.6-82.4-184-184-184c-13.3 0-24-10.7-24-24s10.7-24 24-24zm8 192a32 32 0 1 1 0 64 32 32 0 1 1 0-64zm-32-72c0-13.3 10.7-24 24-24c75.1 0 136 60.9 136 136c0 13.3-10.7 24-24 24s-24-10.7-24-24c0-48.6-39.4-88-88-88c-13.3 0-24-10.7-24-24zM117.5 1.4c19.4-5.3 39.7 4.6 47.4 23.2l40 96c6.8 16.3 2.1 35.2-11.6 46.3L144 207.3c33.3 70.4 90.3 127.4 160.7 160.7L345 318.7c11.2-13.7 30-18.4 46.3-11.6l96 40c18.6 7.7 28.5 28 23.2 47.4l-24 88C481.8 499.9 466 512 448 512C200.6 512 0 311.4 0 64C0 46 12.1 30.2 29.5 25.4l88-24z" />
                                        </svg>


                                    </a>
                                    <div>
                                        <a


                                            className="font-serif text-base md:text-lg">01754045486</a>
                                        <span className="block text-xs uppercase">MOBILE</span>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div className="order-first col-span-4 max-w-screen-md px-8 py-10 md:order-last md:col-span-2 md:px-10 md:py-12">
                            <h2 className="mb-8 text-2xl font-black">Get in touch</h2>
                            <p className="mt-2 mb-4 font-sans text-sm tracking-normal">
                                Don't be shy to ask me a question.
                            </p>
                            <form
                            >
                                <div className="md:col-gap-4 mb-5 grid md:grid-cols-2">
                                    <input
                                        className="col-span-1 w-full border-b py-3 text-sm outline-none focus:border-b-2 focus:border-black"
                                        type="text"
                                        required
                                        placeholder="Name"
                                        name="name"
                                    />
                                    <input
                                        required
                                        className="col-span-1 w-full border-b py-3 text-sm outline-none focus:border-b-2 focus:border-black"
                                        type="email"
                                        placeholder="Email"
                                        name="email"
                                    />
                                </div>
                                <textarea
                                    required
                                    className="mb-10 w-full resize-y whitespace-pre-wrap border-b py-3 text-sm outline-none focus:border-b-2 focus:border-black"
                                    id=""
                                    rows={6}
                                    placeholder="Question"
                                    name="question"
                                    defaultValue={""}
                                />
                                <button
                                    type="submit"
                                    className="group flex cursor-pointer items-center rounded-xl bg-blue-600 bg-none px-8 py-4 text-center font-semibold leading-tight text-white"
                                >
                                    Send
                                    <svg
                                        className="group-hover:ml-8 ml-4 transition-all"
                                        xmlns="http://www.w3.org/2000/svg"
                                        aria-hidden="true"
                                        role="img"
                                        width="1em"
                                        height="1em"
                                        preserveAspectRatio="xMidYMid meet"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            fill="none"
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M9.912 12H4L2.023 4.135A.662.662 0 0 1 2 3.995c-.022-.721.772-1.221 1.46-.891L22 12L3.46 20.896c-.68.327-1.464-.159-1.46-.867a.66.66 0 0 1 .033-.186L3.5 15"
                                        />
                                    </svg>
                                </button>
                            </form>
                        </div>
                    </div>
                </section>
            </div>

        </div>
    );
};

export default Contact;