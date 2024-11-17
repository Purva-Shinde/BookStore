import React, { useState }  from 'react'
import Modal from 'react-modal';
import { closeModal } from '../StoreComponent/SliceFolder/ModalSlice';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; 
import axios from 'axios';
function Login() {
  const [loginDetails,setLoginDetails]=useState({
    email:"",
    password:""
  })
     const isOpen = useSelector((state) => state.modal.isModalOpen);
     console.log("isOpen",isOpen)
    const dispatch = useDispatch();


    const handleOnchange =(field,value)=>{
       setLoginDetails((prevDetails) => ({
        ...prevDetails,
        [field]: value,
      }));
        }
    console.log("loginDetails");

     // Handle login on button click
  const handleLogin = async() => {
    console.log("Login details: " ,loginDetails);

    // Example validation
    if (!loginDetails.email || !loginDetails.password) {
      toast.error("Please enter both email and password");
      return;
    }
try {
  const response = await axios.post("http://localhost:8001/user/login",loginDetails);
  if(response){
    toast.success(response.data.message);
  }
  
} catch (error) {
  toast.error(error.response.data.message);
}
 

 
     dispatch(closeModal());
  };
 
  return (
    <div>
     <ToastContainer />
  <Modal
      isOpen={isOpen}
      onRequestClose={() => dispatch(closeModal())}
      className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50"
      overlayClassName="fixed inset-0"
      contentLabel="Login Modal"
    >
      <div className="bg-white rounded-lg shadow-lg w-1/3 p-6 relative">
        <Link  
        to="/" 
        onClick={() => dispatch(closeModal())}
        className="absolute top-2 right-2 text-gray-600">
          &times;
        </Link>
        <h2 className="text-xl font-bold mb-4">Login</h2>
        <div className="mb-4">
          <label>Email</label>
          <input className="w-80 py-2 px-1 border w-full rounded-md"
           placeholder="Enter Your Email" 
           onChange={(e) => handleOnchange("email" ,e.target.value)} 
            value={loginDetails.email}
           type="text" />
        </div>
        <div className="flex flex-col mb-4">
          <label>Password</label>
          <input 
          className="w-80 py-2 px-1 border w-full rounded-md" 
          placeholder="Enter Your Password"
          onChange={(e) => handleOnchange("password" ,e.target.value)} 
value={loginDetails.password}
           type="text" />
        </div>
        <button   
        onClick={handleLogin}
        className="bg-pink-500 text-white px-4 py-2 rounded hover:bg-pink-600">
          Login
        </button>
        <p>
           Not Have Account?
            <Link
            to="/Signup"
            onClick={() => dispatch(closeModal())}
            className>Signup</Link>
        </p>
      </div>
    </Modal>
    </div>
  )
}

export default Login


 