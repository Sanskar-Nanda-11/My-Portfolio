import { useState } from "react";
import React from 'react';
import img_hero from '/img_hero.png';
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;


const Contact = () => {
  // State to store form data (Keys match with my backend code exactly!)
  const [Formdata, setFormdata] = useState({
    name:'',                                // to set the data given by user 
    email:'',
    subject:'',
    message:'',
  });

  const handleChange = (e)=>{  // to update the state when user types in the form
    setFormdata({   // updating the state
      ...Formdata, // spread operator to keep other data intact
      [e.target.name]:e.target.value  // updating the specific field
  })
  };

  const handleSubmit = async(e) => {  // to handle form submission
    e.preventDefault(); // Prevent the default form submission behavior

    try{             // try block to catch any errors
      const respone = await fetch('${API_BASE_URL}/api/contact',{  // sending data to backend
        method : 'POST',     // method type
        headers : {           // it is telling the server what type of data is being sent
          'Content-Type' : 'application/json',   // content type
        },
        body : JSON.stringify(Formdata),  // converting js object to json string and sending it to backend ( Actual data )
      });
      if (respone.ok) {
        alert("🎉 Message Sent Successfully!");
        setFormdata({name : " " , email : " " , subject : " " , message : " "})
      }else{
        alert("❌ Failed to send message.");
      }
    }catch(error){
       console.error("Error : " , error); 
       alert("❌ Server is not responding. Is Spring Boot running?");
      }
  }


  return (
    <section
      id="contact"
      data-aos='fade-up'
      data-aos-delay='300'
      className='min-h-screen overflow-hidden justify-around flex items-center p-6 m-10 relative scroll-mt-20'
    >
      <article className='shadow-lg rounded-lg flex flex-col md:flex-row max-w-4xl w-full relative'>
        <aside className='w-full md:w-1/2 relative'>
          <div className='absolute z-0 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[300px] sm:w-[400px] h-[300px] sm:h-[400px] rounded-full bg-linear-to-r from-[#6d2897] via-[#8e6cf5] to-[#bb61c5] shadow-[0_0_70px_rgba(182,0,182,0.7)]'></div>
          <img src={img_hero} alt="Contact Illustration" className='h-[250px] sm:h-[400px] md:h-[485px] w-[300px] sm:w-[480px] object-cover rounded-t-lg md:rounded-r-lg relative' />
        </aside>

        {/* CONTACT FORM */}
        <section className='p-8 w-full md:w-1/2'onSubmit={handleSubmit}>
          <header className='mb-6'>
            <h2 className='text-4xl font-bold text-center text-white'>Contact Us</h2>
          </header>
          <form className='space-y-4'>
            <div>
              <label htmlFor="name" className='block text-gray-300 font-medium mb-2'>Name</label>
              <input type="text" name='name' id='name' placeholder='Your Name' className='w-full px-4 py-2 text-white bg-gray-900 rounded-lg focus:outline-none' value={Formdata.name} onChange={handleChange}/>
            </div>
            <div>
              <label htmlFor="email" className='block text-gray-300 font-medium mb-2'>Email</label>
              <input type="email" name='email' id='email' placeholder='Your Email' className='w-full px-4 py-2 text-white bg-gray-900 rounded-lg focus:outline-none' value={Formdata.email} onChange={handleChange}/>
            </div>
            <div>
            <label htmlFor="subject" className='block text-gray-300 font-medium mb-2'>Subject</label>
              <input type="text" name='subject' id='subject' placeholder='Your Subject' className='w-full px-4 py-2 text-white bg-gray-900 rounded-lg focus:outline-none' value={Formdata.subject} onChange={handleChange}/>
            </div>
            <div>
              {/* FIXED: htmlFor must match id exactly (was "Messages") */}
              <label htmlFor="message" className='block text-gray-300 font-medium mb-2'>Messages</label>
              <textarea name="message" id="message" placeholder='Your Message' className='w-full px-4 py-2 text-white bg-gray-900 rounded-lg focus:outline-none' value={Formdata.message} onChange={handleChange} ></textarea> 
            </div>
            {/* make button type explicit */}
            <button type="submit" className='w-full text-white border-2 py-2 px-6 focus:outline-none hover:bg-[#801b9c] hover:shadow-[0_0_40px_rgba(128,0,128,0.7)] rounded-full text-lg'>Send Message</button>
          </form>
        </section>
      </article>
    </section>
  );
};

export default Contact;
