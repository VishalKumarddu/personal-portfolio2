import React, { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './myNav.css';
import { AiFillLinkedin , AiOutlineGithub} from "react-icons/ai";
import { SiLeetcode } from "react-icons/si";
import cv from '../assets/Vishal_resume.pdf'
const MyNav = () => {
  const [activeLink, setActiveLink] = useState('home');
  const [scolled, setScolled] = useState(false);
  useEffect(() => {
    const onScroll =()=>{
      if(window.scrollY >50)
      {
        setScolled(true);
      }
      else {
        setScolled(false);
      }
    }
    window.addEventListener("scroll", onScroll)
    return()=>window.removeEventListener("scroll", onScroll);
  }, []);


const onUpdateActiveLink = (v)=>setActiveLink(v);
  return (
    <div>

    <Navbar expand="lg" className={`fixed w-full top-0 z-50 transition-all duration-75 ease-in-out  justify-center items-center flex ${scolled ? "p-0 bg-gray-900":"bg-black lg"}`}>
      <Container>
        <Navbar.Brand href="#home" className='text-9xl text-white logo' >
            Vishal
          </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav"  > 
          <span className='navbar-toggler-icon'></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto flex flex-col lg:flex-col">
            <Nav.Link href="#home" className={ ` no-underline text-white navbar-Link capitalize ${activeLink === 'home' ? 'active':""}`}  onClick={()=> onUpdateActiveLink('home')}>Home</Nav.Link>
            <Nav.Link href="#skills" className={ ` no-underline  text-white navbar-Link capitalize ${activeLink === 'skills' ? 'active':""}`}  onClick={()=> onUpdateActiveLink('skills')}>skills</Nav.Link>
            <Nav.Link href="#projects" className={ ` no-underline  text-white navbar-Link capitalize ${activeLink === 'projects' ? 'active':""}`}  onClick={()=> onUpdateActiveLink('projects')}>projects</Nav.Link>
          </Nav>
          <span className='navbar-text'>
            <div className="socail-icons flex gap-2 ">
            <a  rel="noopener noreferrer"className="w-[40px] h-[40px] flex justify-center items-center border-[1px] border-opacity-75 text-white hover:bg-white  border-white rounded-full  " href="https://www.linkedin.com/in/vishalkumarddu/" target='_blank'>
                <AiFillLinkedin 
                className=' text-lg'/>
              </a>
              <a rel="noopener noreferrer" className="w-[40px] h-[40px] flex justify-center items-center border-[1px] border-opacity-75 border-white rounded-full  text-white  hover:bg-white  " href="https://github.com/VishalKumarddu" target='_blank'>                <AiOutlineGithub
                className=' text-lg'/>
              </a>
              <a rel="noopener noreferrer" className="w-[40px] h-[40px] flex justify-center items-center border-[1px] border-opacity-75 border-white rounded-full   text-white  hover:bg-white  " href="" target='_blank'>
                <SiLeetcode
                className=' text-lg'/>
              </a>
            </div>
            <a className='text-white  no-underline' href={cv} download>  <button className='border-2 border-white mx-4 text-white px-3 py-2 button' onClick={()=>console.log("connect")}>Download CV</button></a>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  ); 
}

export default MyNav;
