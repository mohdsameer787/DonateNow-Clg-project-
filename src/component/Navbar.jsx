import reactLogo from '/src/assets/logo2.png'
import { Link } from "react-router-dom"
function Navbar() {
  return (
    <div className='className=" w-[100wh] shadow-xl border-2 bg-[#ffffff] text-gray-800  h-16 p-3 my-2 text-lg'>
       <div className='flex align-middle justify-between'>
        <img src={reactLogo} alt="logo" className=' h-8 mt-1' />
        <div className='flex gap-8'>
    <ul className="flex justify-center mt-1.5 gap-3"> 
        <li className='text-gray-700  '>
           <Link to='/'> Home</Link>
        </li>
        <li className='text-gray-700'>
        <Link to='/about'>About</Link>
        </li>
      
        </ul>
       <Link to="/signup"><button className='bg-[#d18c0c] text-center h-9 rounded-2xl w-20 hover:bg-[#e4a734] mt-0.5 text-[#edeff0]'>sign in </button></Link></div>
       </div>
        </div>
  )
}

export default Navbar