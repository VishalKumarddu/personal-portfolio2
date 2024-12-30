
import React from 'react';

const ProjectCard = ({title,description,url,websiteUrl}) => {
    return (
     


      <div className="col-12 col-md-6 col-lg-4 mt-4">
             <div className="proj-imgbx">
        <img src={url}  alt = {title}/>
        <a rel="noopener noreferrer" className="proj-txtx  no-underline text-white w-full h-full flex items-center justify-center flex-col" href = {websiteUrl} target='_blank'>
          <h4>{title}</h4>
          <span>{description}</span>
        </a>
      </div>
      </div>
    );
}

export default ProjectCard;

