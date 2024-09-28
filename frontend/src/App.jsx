import { Provider } from 'react-redux';
import store from './StoreComponent/Store';
 import Home from './Components/Home/Home'
  import { Route, Routes } from "react-router-dom"
import Courses from './Components/Courses/Courses'
import Signup from './Components/Signup';
 const App=() =>{
  return (
     <div>
          <Provider store={store}>

     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/course' element={<Courses/>}/>
      <Route path='/Signup' element={<Signup/>}/>
    </Routes>
    </Provider>

    </div>
 
  )
}

export default App