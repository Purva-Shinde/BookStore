import React from 'react'
import { useDispatch } from 'react-redux';
import { openModal } from '../StoreComponent/SliceFolder/ModalSlice';
import Login from '../Components/Login'
 function Signup() {
    const dispatch = useDispatch()
  return (
    <div className='h-screen flex'>
    
      <div className="mx-auto my-auto bg-white rounded-lg shadow-lg w-1/3 p-6 relative">
        
        <h2 className="text-xl font-bold mb-4">Signup</h2>
        <div className="mb-4">
          <label>Name</label>
          <input className="w-80 py-2 px-1 border w-full rounded-md" placeholder="Enter Your Email" type="text" />
        </div>
        <div className="mb-4">
          <label>Email</label>
          <input className="w-80 py-2 px-1 border w-full rounded-md" placeholder="Enter Your Email" type="text" />
        </div>
        <div className="flex flex-col mb-4">
          <label>Password</label>
          <input className="w-80 py-2 px-1 border w-full rounded-md" placeholder="Enter Your Password" type="password" />
        </div>
        <button   className="bg-pink-500 text-white px-4 py-2 rounded hover:bg-pink-600">
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