import React, { useRef, useState } from 'react'
import { BsFillTelephoneFill, BsLinkedin, BsGithub} from "react-icons/bs";
import { SiGmail } from "react-icons/si";
import { ImLocation2 } from "react-icons/im"; 
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {
  const form = useRef();
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [subject, setSubject] = useState("")
  const [phone, setPhone] = useState("")
  const [message, setMessage] = useState("")



  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_za7um4r', 'template_n0sh8di', form.current, 'AMwwHMq9fKnntHE9Q')

      .then((result) => {
        result.text ==="OK" ? toast.success('Thanks for contacting us!', {
          position: "bottom-center",
          autoClose: 5000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          }) : toast.error("Error Notification !", {
          position: toast.POSITION.BOTTOM_CENTER
        })
        
        setName("")
        setEmail("")
        setPhone("")
        setSubject("")
        setMessage("")
      }, (error) => {
        console.log(error.text);
      });
  };
  
  const handleChange = (event) => {
    event.target.name=="user_name" 
    ? setName(event.target.value)
    : event.target.name=="user_email" 
    ? setEmail(event.target.value)
    : event.target.name=="message" 
    ? setMessage(event.target.value)
    : event.target.name=="user_number" 
    ? setPhone(event.target.value)
    : event.target.name="user_subject" 
    ? setSubject(event.target.value)
    : console.log("error")

  }
  return (
    <div className='section' id='contact'>
      <div className='antialiased'>
      <div className='flex w-full min-h-screen justify-center items-center'>
        <div className='flex justify-between flex-col sm:flex-row md:space-x-8 md:space-y-0 space-y-6 w-full max-w-4xl p-8 
        sm:p-12 rounded-xl shadow-lg text-white bg-Teal overflow-hidden'>
          <div className='flex flex-col space-y-8 justify-between'>
            <div>
              <h1 className='font-bold text-4xl tracking-wide'>Contact Us</h1>
              <p className='pt-2 text-cyan-100 text-sm'>Feel Free</p>
            </div>
            <div className='flex flex-col space-y-6'>
              <div className='flex items-center space-x-2'>
                <BsFillTelephoneFill className='text-teal-400'/>{"    "}
                <span> +(216) 21 593 065</span>
              </div>
              <div className='flex items-center space-x-2'>
                <SiGmail className='text-red-600'/>{"    "}
                <span> abadahela@gmail.com</span>
              </div>
              <div className='flex items-center space-x-2'>
                <ImLocation2 className='text-red-500'/>{"    "}
                <span> Tunisia</span>
              </div>
            </div>
            <div className='flex space-x-4 text-lg ml-16'>
            <a href='https://www.linkedin.com/in/hela-abeda-b0b560120/' target="_blank" rel="noreferrer"><BsLinkedin/></a>
            <a href='https://github.com/helabeda' target="_blank" rel="noreferrer"><BsGithub/></a>
            </div>
          </div>
          <div className='relative'>

            <div className='absolute z-0 w-40 h-40 bg-yellow rounded-full -right-28 -top-28'></div>
            <div className='absolute z-0 w-40 h-40 bg-orange-500 rounded-full -left-28 -bottom-16'></div>

          <div className='relative z-10 bg-white rounded-xl shadow-lg p-8 text-slate-500 max-w-lg'>
            <form ref={form} onSubmit={sendEmail} className='flex flex-col space-y-4 '>
              <div className="grid md:grid-cols-2 sm:grid-cols-1 xs:grid-cols-1 grid-cols-1 gap-8 ">
                <div>
                  <label className='text-sm'>Your name</label>
                  <input type="text" name="user_name" required onChange={handleChange} value={name}
                  placeholder='Your Name' className='ring-1 ring-gray-300 w-full rounded-md px-4 py-2 mt-2 outline-none focus:ring-2 focus:ring-teal-300'/>
                </div>
                <div>
                  <label className='text-sm'>Your Email</label>
                  <input type="email" name="user_email" required onChange={handleChange} value={email}
                  placeholder='Your Email' className='ring-1 ring-gray-300 w-full rounded-md px-4 py-2 mt-2 outline-none focus:ring-2 focus:ring-teal-300'/>
                </div>
                <div>
                  <label className='text-sm'>Your Subject</label>
                  <input type="text" name="user_subject" onChange={handleChange} value={subject}
                  placeholder='Your Subject' className='ring-1 ring-gray-300 w-full rounded-md px-4 py-2 mt-2 outline-none focus:ring-2 focus:ring-teal-300'/>
                </div>
                <div>
                  <label className='text-sm'>Your Number</label>
                  <input type="tel" name="user_number" onChange={handleChange} value={phone}
                  placeholder='Your Phone Number' className='ring-1 ring-gray-300 w-full rounded-md px-4 py-2 mt-2 outline-none focus:ring-2 focus:ring-teal-300'/>
                </div>
              </div>
              <div>
                <label  className='text-sm'>Your Message</label>
                <textarea type="text" name="message" rows="4" required onChange={handleChange} value={message}
                placeholder='Write your message here' className='ring-1 ring-gray-300 w-full rounded-md px-4 py-2 mt-2 outline-none focus:ring-2 focus:ring-teal-300'>
                </textarea>
              </div>
              <button className='inline-block self-end bg-cyan-700 text-white font-bold rounded-lg
              px-6 py-2 uppercase text-sm' value="Send" > Send Message</button><ToastContainer />
            </form>
          </div>
          </div>
        </div>
      </div>
      </div>
    </div>
  )
}

export default Contact