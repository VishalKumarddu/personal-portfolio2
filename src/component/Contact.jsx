

import React, { useState } from 'react';

const Contact = () => {
    const formInitalDetsils = {
        firstName:"",
        LastName : "",
        email:"",
        phone:"",
        message:""
    }


    const [formDetails, setFormDetails] = useState( {
        firstName:"",
        LastName : "",
        email:"",
        phone:"",
        message:""
    });
    const [btnText, setBtnText] = useState('send');
    const [status, setStatus] = useState({});

    const onFormUpdate = (category, value) => {
        setFormDetails({
          ...formDetails,
          [category]: value
        })
    }
  
    const handleSubmit= async (event)=>{
        event.preventDefault();
        setBtnText("Sending...");
        let response = await fetch("http://localhost:5000/contact" ,{
        method:"POST",
        headers:{
            'Content-Type': 'application/json;charset=utf-',
        },
        body: JSON.stringify(formDetails),

            });
        setBtnText("send");
        let result = await response.json();
         setFormDetails(formInitalDetsils);
        if(result.code === 200)
         setStatus({succuess:true , message: "message sent successfuly "});
        else {
            setStatus({succuess:false , message: "not sent successfuly "})
        }

    }
    return (
<div className="contact bg-contact-bg  py-32" id="connect">
<div className="container">
    <div className="row items-center">
        <div className="col-md-6">
            <img src={"https://ik.imagekit.io/b80sh2n2k/contact-img.svg?updatedAt=1679470984116"} alt="" />
        </div>
        <div className="col-md-6">
            <h2>Get In Touch</h2>
     

<form action={handleSubmit}>
        <div className="row">
            <div className="col-sm-6 px-1">
                <input className ="focus:outline-none focus:bg-white focus:text-black" type="text" name="firstName"  placeholder='First Name' value={formDetails.firstName} onChange={(e) => onFormUpdate('firstName', e.target.value)}/>
            </div>
            <div className="col-sm-6 px-1">
                  <input className ="focus:outline-none focus:bg-white focus:text-black" type="text" name="LastName"  placeholder='Last Name' value={formDetails.LastName} onChange={(e) => onFormUpdate('LastName', e.target.value)}/>
              </div>
            <div className="col-sm-6 px-1">
                 <input className ="focus:outline-none focus:bg-white focus:text-black" type="email" name="email"  placeholder='email' value={formDetails.email} onChange={(e) => onFormUpdate('email', e.target.value)}/>
              </div>
            <div className="col-sm-6 px-1">
                 <input className ="focus:outline-none focus:bg-white focus:text-black" type="tel" name="phone"  placeholder='phone' value={formDetails.phone} onChange={(e) => onFormUpdate('phone', e.target.value)}/>
            </div>
            <div className="col-sm-12 px-1">
                 <textarea name="message" className =" h-[150px] focus:outline-none focus:bg-white focus:text-black" placeholder='message' value={formDetails.message} onChange={(e) => onFormUpdate('message', e.target.value)}/>
                <button className='py-3 px-6 my-5 bg-white text-black font-bold' type="submit" onClick={handleSubmit}>{btnText}</button>
            </div>
       </div> 
       </form>

      {
        status.message && 
        <div className="col">
            <p className={status.message === 'false' ? "danger" : "success"}>{status.message}</p>
        </div>

      }
             </div>
    </div>
    
</div>

</div>
    );
}

export default Contact;
