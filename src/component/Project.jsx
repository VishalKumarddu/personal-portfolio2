

import React from 'react';
import { Nav, TabContainer, TabContent, TabPane } from 'react-bootstrap';
import ProjectCard from './ProjectCard';
import UbFactory from "../assets/UbFactory/img2.png";
import pinkAprons from "../assets/pinkaprons/Screenshot (134).png";
import bitgert from "../assets/Bitgert/Screenshot (136).png";
import Ruffle from "../assets/Ruffle/Ruffle.png";
import methopia from "../assets/methopia/methopia.png";
import daylogics from "../assets/daylogics/daylogics.png";
import nayamitra from "../assets/nyamitra/nayamirta.png";
const Project = () => {
    const Projects =[
        {
            title: "Nyayamitra",
            description:"Design & Development",
            url : nayamitra,
            id : 1,
            websiteUrl : "https://nyayamitra.vercel.app/"


        },

        {
            title: "it Website Daylogics",
            description:"Design & Development",
            url : daylogics,
            id : 1,
            websiteUrl : "https://daylogics.vercel.app/"


        },
        {
            title: "PinkAprons costumer",
            description:"Design & Development",
            url :pinkAprons,
            websiteUrl : "https://pink-aprons-costumer.vercel.app/"
            

        },
        {
            title: "minethopia",
            description:"Design & Development",
            url : methopia,
            websiteUrl : "https://minetopia-henna.vercel.app/"  

        },
        {
            title: "Ub factory Next",
            description:"Design & Development",
            url : UbFactory,
            id : 1,
            websiteUrl : "https://food-order-lrne.vercel.app/"


        },
        {
            title: "Bitgert realEstate Blockchain",
            description:"Design & Development",
            url :bitgert,
            websiteUrl : "https://realestate.bitgert.market/"
            

        },
    
        {
            title: "Gaming website ",
            description:"Design & Development",
            url :"https://ik.imagekit.io/b80sh2n2k/Screenshot__216_.png?updatedAt=1679913364463",
            websiteUrl : "https://easegaming.netlify.app/"
        },
        {
            title: "Discord clone",
            description:"Design & Development",
            url :"https://ik.imagekit.io/b80sh2n2k/2023-03-27.png?updatedAt=1679913577541",
            websiteUrl : "https://geetdiscord.netlify.app/"
        },
        {
            title: "explore space",
            description:"Design & Development",
            url :"https://ik.imagekit.io/b80sh2n2k/Screenshot__8_.png?updatedAt=1679914133139",
            websiteUrl : "https://geetanjalichawla.github.io/explore-space/"
        },
        {
            title: "Testimonial component",
            description:"Design & Development",
            url : "https://ik.imagekit.io/b80sh2n2k/Screenshot__219_.png?updatedAt=1679914168476",
            websiteUrl : "https://testimonials-7jqo.vercel.app/"

        },
        {
            title: "Raffles",
            description:"Design & Development",
            url : Ruffle,
            id : 1,
            websiteUrl : "https://ruffles-geet.vercel.app"


        },
        {
            title: "Filter component",
            description:"Design & Development",
            url :"https://ik.imagekit.io/b80sh2n2k/Screenshot__220_.png?updatedAt=1679914864311",
            websiteUrl : "https://geet-filter.netlify.app"
        },
        {
            title: "Modern chair",
            description:"Design & Development",
            url :"https://ik.imagekit.io/b80sh2n2k/Screenshot__221_.png?updatedAt=1679915371756",
            websiteUrl : "https://github.com/geetanjalichawla/mordern-chair/deployments/activity_log?environment=github-pages"
        },
    ]


    return (
  <section className='project' id='projects'>
    <div className="conitaner px-9">
        <div className="row">
            <div className="col text-center">
            <div className='w-full text-4xl'> Project </div>
             <p>please click on the project to check the project sites </p>
                          
            </div>
            <TabContainer id="projects-tab" defaultActiveKey="first">

            <Nav variant='pills'  className='mb-8'>              
            <Nav.Item >
                    <Nav.Link eventKey="first">Tab one</Nav.Link>
                </Nav.Item>
                <Nav.Item >
                    <Nav.Link eventKey="second">Tab two</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="third">Tab three</Nav.Link>
                </Nav.Item>
            </Nav>
        
            <TabContent>
                <TabPane eventKey="first">
                    
                    <div className="row">
                    {
                        Projects.map((p,index)=>{
                            return (
                              <ProjectCard
                              key = {index}
                              {...p}
                              />
                            )
                        })
                    }
                    </div>
                    
                </TabPane>
                <TabPane eventKey="second">

                </TabPane>
                <TabPane eventKey="third">
             </TabPane>
            </TabContent> 
            </TabContainer>
        </div>
        
    </div>
    {/* <img className='left' src="https://ik.imagekit.io/b80sh2n2k/color-sharp2.png?updatedAt=1679470985047" alt="" /> */}

  </section>
    );
}

export default Project;

