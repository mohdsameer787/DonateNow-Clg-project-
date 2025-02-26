import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './component/Home';
import About  from './component/About';  
import './App.css'
import Signup from './component/Signup';
import Navbar from './component/Navbar';
import Donationform from './component/Donationform';
import Login from './component/Login';
const router = createBrowserRouter([
  {
    path:"/",
    element:<div className='h-[100vh]' >
      <Navbar className="fixed"></Navbar>
      <Home className="relative"/>
    </div>

  },
  {
    path:"/about",
    element:<div className='h-[100vh]'>
    <Navbar></Navbar>
    <About></About>
  </div>
    
  },
  {
    path:"/signup",
    element:
    <Signup></Signup>
  },

  {
    path:"/donationform",
    element:
    <Donationform></Donationform>
  },
  {
  path:"/login",
  element:
 <Login/>
},


]);

function App() {
  
  return (
    <>
    
    <div className=' h-[100vh]' >
     
      <RouterProvider router={router}/> 
    </div>
 
  </>
  )
}

export default App
