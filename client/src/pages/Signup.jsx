import React, { useState } from 'react'
import {Link, useNavigate} from 'react-router-dom'
import axios from 'axios'
function Signup() {
  const navigate = useNavigate()
  const [fullName, setFullName] = useState("");
  const [email , setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phoneNo, setPhoneNo] = useState("");
  const [avatarImg, setAvatarImg] = useState("");

  const handleSubmit = (e) =>{
    e.preventDefault();
    axios.post("http://localhost:9000/signup", {fullName, email, password, phoneNo, avatarImg})
    .then(res => console.log(res))
    .catch(err=> console.log("error from client side ", err));

    navigate("/login")
  }
  return (
    <>
    <div className='flex justify-center items-center bg-yellow-500 w-full h-[100vh]'>
            <div className='w-[500px] h-[500px] mt-10 bg-white/30 backdrop-blur-2xl rounded-2xl'>
                <div className='w-full mt-2 flex justify-center'>
                    <h1 className='text-4xl text-white font-bold'>SignUp</h1>
                </div>
                <div className='flex w-full'>
                    <form onSubmit={handleSubmit} className='w-full m-8' >
                        <label htmlFor='fullName' className='text-lg font-bold text-gray-700'>Full Name</label>
                        <input type='text' placeholder='Ex. John...' id='fullName' 
                        onChange={(e) => setFullName(e.target.value)}
                        className='w-full h-10 rounded-lg px-6 outline-none border-none text-bold mt-1 '
                        />
                       
                        <label htmlFor='email' className='text-lg font-bold text-gray-700'>Email</label>
                        <input type='email' placeholder='Ex. johndoe@gmail.com...' id='email' 
                        onChange={(e) => setEmail(e.target.value)}
                        className='w-full h-10 rounded-lg px-6 outline-none border-none text-bold mt-1 '
                        />
                        <label htmlFor='phoneNo' className='text-lg font-bold text-gray-700'>Mobile No</label>
                        <input type='number' placeholder='Ex. John Doe...' id='phoneNo' 
                        onChange={(e) => setPhoneNo(e.target.value)}
                        className='w-full h-10 rounded-lg px-6 outline-none border-none text-bold mt-1 '
                        />
                        <label htmlFor='password' className='text-lg font-bold text-gray-700'>Password</label>
                        <input type='password' placeholder='Ex. John Doe...' id='firstName' 
                        onChange={(e) => setPassword(e.target.value)}
                        className='w-full h-10 rounded-lg px-6 outline-none border-none text-bold mt-1 '
                        />
                       
                         <label htmlFor='avatar' className='text-lg font-bold text-center text-gray-700'>Avatar</label>
                        <input type='file' placeholder='Ex. John Doe...' id='firstName' 
                        onChange={(e) => setAvatarImg(e.target.value)}
                        name='file'
                        className="relative m-0 block w-full min-w-0 flex-auto rounded border border-solid border-neutral-300 bg-clip-padding px-3 py-[0.32rem] text-base font-normal text-neutral-700 transition duration-300 ease-in-out file:-mx-3 file:-my-[0.32rem] file:overflow-hidden file:rounded-none file:border-0 file:border-solid file:border-inherit file:bg-neutral-100 file:px-3 file:py-[0.32rem] file:text-neutral-700 file:transition file:duration-150 file:ease-in-out file:[border-inline-end-width:1px] file:[margin-inline-end:0.75rem] hover:file:bg-neutral-200 focus:border-primary focus:text-neutral-700 focus:shadow-te-primary focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:file:bg-neutral-700 dark:file:text-neutral-100 dark:focus:border-primary"
                       
                        />
                      <div className='flex items-center gap-2'>
                        <button type='submit' 
                        className='bg-white text-black px-6 py-3 font-extrabold rounded-lg mt-2 outline-none
                        bornder-none hover:scale-105 hover:bg-slate-900 hover:text-white duration-300 ease-linear'
                        >SignUp</button>
                        <h3 className='font-semibold'>If you already registerd 
                       <Link to="/login"> <span className='underline font-bold text-blue-900 px-2 cursor-pointer'>LogIn</span></Link></h3></div>
                    </form>

                </div>
                <div>

                </div>
                 
            </div>
    </div>
    </>
  )
}

export default Signup