import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { openModal } from '../StoreComponent/SliceFolder/ModalSlice';
import Login from '../Components/Login';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; 
 function Signup() {
 const [userData,setUserData]=useState({
  fullname:'',
  password:'',
  email:''
 })

 const handleOnChange=(e)=>{
  const {name,value}=e.target;
  setUserData({
    ...userData,
    [name]:value,
  });
 };
 
    const handleSignup =async()=>{
      const { fullname, email, password } = userData;

     if (!fullname || !email || !password) {
      toast.error('Please fill out all fields');
      return;
    }
    try {
      const response = await axios.post("http://localhost:8001/user/signup",userData);
console.log("response",response);
toast.success(response.data.message);
localStorage.setItem("Users",JSON.stringify(response.data.user));
setUserData({
  fullname:'',
  password:'',
  email:''
});
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message);
      setUserData({
        fullname:'',
        password:'',
        email:''
      });
    }

    }
    const dispatch = useDispatch();

  return (
    <div className='h-screen flex'>
      <ToastContainer />
      <div className="mx-auto my-auto bg-white rounded-lg shadow-lg w-1/3 p-6 relative">
        
        <h2 className="text-xl font-bold mb-4">Signup</h2>
        <div className="mb-4">
          <label>Name</label>
          <input className="w-80 py-2 px-1 border w-full rounded-md"
           placeholder="Enter Your Email"
            type="text"
            name='fullname'
            value={userData.fullname}
            onChange={handleOnChange}
                         />
        </div>
        <div className="mb-4">
          <label>Email</label>
          <input 
          className="w-80 py-2 px-1 border w-full rounded-md" 
          placeholder="Enter Your Email"
           type="text"
           name='email'
           value={userData.email}
           onChange={handleOnChange}
            />
        </div>
        <div className="flex flex-col mb-4">
          <label>Password</label>
          <input className="w-80 py-2 px-1 border w-full rounded-md" 
          placeholder="Enter Your Password" 
          type="password"
          name='password'
          value={userData.password}
          onChange={handleOnChange}
           />
        </div>
        <button onClick={handleSignup}  className="bg-pink-500 text-white px-4 py-2 rounded hover:bg-pink-600">
          Signup
        </button>
        <p>
            Have Account?
            <button
            onClick={() => dispatch(openModal())} 
            className>Login</button>
        </p>
      </div>
 <Login/>
    </div>
  )
}

export default Signup