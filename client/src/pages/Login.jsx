import React, {useState} from 'react'
import {Link, useNavigate} from 'react-router-dom'
import axios from 'axios'
function Login() {
  const navigate = useNavigate()
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
 console.log(error)
  const handleLoginPage = (e) =>{
    e.preventDefault();
    axios.post("http://localhost:9000/login", {email, password})
    .then(res => {
      if(res.data.message === "success"){
        navigate("/")
      }else{
       
        setError("password not matched")
      }
      
    })
    .catch(err => console.log("Error from client side", err));
    
  }
  return (
    <>
       <div className='flex justify-center items-center bg-yellow-500 w-full h-[100vh]'>
            <div className='w-[500px] h-[300px] mt-10 bg-white/30 backdrop-blur-2xl rounded-2xl'>
                <div className='w-full mt-2 flex justify-center'>
                    <h1 className='text-4xl text-white font-bold'>SignUp</h1>
                   
                </div>
                <div className='flex w-full'>
                    <form onSubmit={handleLoginPage} className='w-full m-8'>
                        
                       
                        <label htmlFor='email' className='text-lg font-bold text-gray-700'>Email</label>
                        <input type='email' placeholder='Ex. johndoe@gmail.com...' id='email' 
                        onChange={(e) => setEmail(e.target.value)}
                        className='w-full h-10 rounded-lg px-6 outline-none border-none text-bold mt-1 '
                        />
                        
                        <label htmlFor='password' className='text-lg font-bold text-gray-700'>Password</label>
                        <input type='password' placeholder='Ex. John Doe...' id='firstName' 
                        onChange={(e) => setPassword(e.target.value)}
                        className='w-full h-10 rounded-lg px-6 outline-none border-none text-bold mt-1 '
                        />
                       
                        
                      <div className='flex items-center gap-2 mt-2'>
                        <button type='submit' 
                        className='bg-white text-black px-6 py-3 font-extrabold rounded-lg mt-2 outline-none
                        bornder-none hover:scale-105 hover:bg-slate-900 hover:text-white duration-300 ease-linear'
                        >Login</button>
                        <h3 className='font-semibold'>If you are a new User 
                      <Link to="/signup">  <span className='underline font-bold text-blue-900 px-2 cursor-pointer'>Signup</span></Link></h3></div>
                    </form>

                </div>
                <div>

                </div>
                 
            </div>
    </div>
    </>
  )
}

export default Login