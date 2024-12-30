import React from 'react';
import "./myNav.css"
import { AiFillLinkedin , AiOutlineGithub} from "react-icons/ai";
import { SiLeetcode } from "react-icons/si";

const Footer = () => {
    return (
        <div>
            <div className="contianer pt-14 px-14 flex justify-evenly bg-footer-bg">
                <div className="row items-center">
                    <div className="col-sm-6">
                        <div className="text-4xl text-white logo font-logo">
                            Vishal
                        </div>
                    </div>
                    <div className="col-sm-6 text-center ml-auto">
                    <div className="socail-icons flex gap-2 ">
                        <a className="w-[40px] h-[40px] flex justify-center items-center border-[1px] border-opacity-75 text-white hover:bg-white  border-white rounded-full  " href="/">
                            <AiFillLinkedin 
                            className=' text-lg'/>
                        </a>
                        <a className="w-[40px] h-[40px] flex justify-center items-center border-[1px] border-opacity-75 border-white rounded-full  text-white  hover:bg-white  " href="/">                <AiOutlineGithub
                            className=' text-lg'/>
                        </a>
                        <a className="w-[40px] h-[40px] flex justify-center items-center border-[1px] border-opacity-75 border-white rounded-full   text-white  hover:bg-white  " href="/">
                            <SiLeetcode
                            className=' text-lg'/>
                        </a>
                   </div>
                    </div>
                </div>


            </div>
        </div>
    );
}

export default Footer;
