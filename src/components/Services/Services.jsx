import React from 'react';
import HTML from '../../../src/picture/html-5.svg';
import css from '../../../src/picture/css-3-svgrepo-com.svg';
import JS from '../../../src/picture/js-svgrepo-com.svg';
import NodeJs from '../../../src/picture/nodejs-1-logo-svgrepo-com.svg';
import Mongo from '../../../src/picture/mongo-svgrepo-com.svg';
import Bootstrap from '../../../src/picture/bootstrap-svgrepo-com.svg';
import Tailwind from '../../../src/picture/tailwind-svgrepo-com.svg';
import postgres from '../../../src/picture/postgresql-logo-svgrepo-com.svg';
import mysql from '../../../src/picture/mysql-svgrepo-com.svg';
import git from '../../../src/picture/git-svgrepo-com.svg';
import figma from '../../../src/picture/figma-svgrepo-com.svg';
import docker from '../../../src/picture/docker-svgrepo-com.svg';
import react from '../../../src/picture/react-svgrepo-com.svg';
import vite from '../../../src/picture/vite-svgrepo-com.svg';
import firebase from '../../../src/picture/firebase-svgrepo-com.svg';
import './Services.css';

const Services = () => {
    return (
        <div id='my-skills' className='container mx-auto'>
                <div className='mx-5 lg:mx-0'>
                    <div className=" my-5 flex items-center before:h-px before:flex-1  before:bg-[#241E4C] before:content-[''] after:h-px after:flex-1 after:bg-[#241E4C]  after:content-['']">
                        <div
                            type="button"
                            className="flex items-center rounded border border-gray-300 bg-[#241E4C] px-3 py-2 text-center text-md font-serif  text-white"
                        >

                            Skills
                        </div>
                    </div>
                </div>

            <div className="marquee-wrapper ">
                <div className="marquee">
                    <div className="marquee-item "><img src={HTML} alt="HTML" /></div>
                    <div className="marquee-item"><img src={css} alt="CSS" /></div>
                    <div className="marquee-item"><img src={JS} alt="JavaScript" /></div>
                    <div className="marquee-item"><img src={NodeJs} alt="NodeJS" /></div>
                    <div className="marquee-item"><img src={Mongo} alt="MongoDB" /></div>
                    <div className="marquee-item"><img src={Bootstrap} alt="Bootstrap" /></div>
                    <div className="marquee-item"><img src={Tailwind} alt="Tailwind" /></div>
                    <div className="marquee-item"><img src={postgres} alt="Postgres" /></div>
                    <div className="marquee-item"><img src={mysql} alt="MySQL" /></div>
                    <div className="marquee-item"><img src={git} alt="Git" /></div>
                    <div className="marquee-item"><img src={figma} alt="Figma" /></div>
                    <div className="marquee-item"><img src={docker} alt="Docker" /></div>
                    <div className="marquee-item"><img src={react} alt="React" /></div>
                    <div className="marquee-item"><img src={vite} alt="Vite" /></div>
                    <div className="marquee-item"><img src={firebase} alt="Firebase" /></div>
                </div>
            </div>
           


        </div>
    );
};

export default Services;
