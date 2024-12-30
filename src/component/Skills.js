import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const Skills = () => {
    const responsive = {
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3,
          slidesToSlide: 3 // optional, default to 1.
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2,
          slidesToSlide: 2 // optional, default to 1.
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1,
          slidesToSlide: 1 // optional, default to 1.
        }
      };
      
      const skill = [
        {
            img: "https://ik.imagekit.io/b80sh2n2k/meter1.svg?updatedAt=1679470984296",
            title:"web devopment"
        },
        {
            img: "https://ik.imagekit.io/b80sh2n2k/meter1.svg?updatedAt=1679470984296",
            title:"Algorithms"
        },
        {
            img: "https://ik.imagekit.io/b80sh2n2k/meter2.svg?updatedAt=1679470984296",
            title:"Data stuctures"
        },
        {
            img: "https://ik.imagekit.io/b80sh2n2k/meter3.svg?updatedAt=1679470984296",
            title:"node js"
        },
        {
            img: "https://ik.imagekit.io/b80sh2n2k/meter1.svg?updatedAt=1679470984296",
            title:"HTML "
        },
        {
            img: "https://ik.imagekit.io/b80sh2n2k/meter2.svg?updatedAt=1679470984296",
            title:"CSS"
        },
        {
            img: "https://ik.imagekit.io/b80sh2n2k/meter3.svg?updatedAt=1679470984296",
            title:"Java Script"
        },
        {
            img: "https://ik.imagekit.io/b80sh2n2k/meter1.svg?updatedAt=1679470984296",
            title:"React js"
        },
        {
            img: "https://ik.imagekit.io/b80sh2n2k/meter2.svg?updatedAt=1679470984296",
            title:"Express js"
        },
        {
            img: "https://ik.imagekit.io/b80sh2n2k/meter3.svg?updatedAt=1679470984296",
            title:"MongoDb"
        },

      ]
    return (
    <section  id='skills' className='skills relative pb-14'  >
        <div className="container">
            <div className="row">
                <div className="col">
                    <div className=" bg-black rounded-3xl text-center py-16 px-12 -mt-12">
                        <div className="text-4xl">
                            Skills
                        </div>
                    <p className='text-para text-xl tracking-tight leading-5  mt-4 mb-20'>please check the projects for the web devlopement skils and my leetcode for the dsa skills also you can check my linkdin throgh the social icons on the top</p>
                             <Carousel responsive={responsive} infinite={true} className='w-[80%] relative mx-auto '>
                             {skill.map((s)=>{
                                return(<div className='items'>
                                <img src={s.img} alt={s.title} className='w-[50%] mx-auto mr-4' />
                                <h5 className='lg:text-3xl md:text-2xl text-lg font-bold'>{s.title}</h5>
                            </div>)})
                             }
                             </Carousel>
                    </div>
                </div>
            </div>
        </div>
       
        {/* <img className='relative top-1/4 bottom-0 w-5/12 -z-10' src="https://ik.imagekit.io/b80sh2n2k/color-sharp.png?updatedAt=1679470985047" alt="" /> */}

    </section>
    );
}

export default Skills;
