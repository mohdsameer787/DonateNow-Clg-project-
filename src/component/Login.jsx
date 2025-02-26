import { Link } from "react-router-dom"
function Login() {
  return (
    <div className="flex align-middle h-[100vh]  bg-gray-100 justify-center">
    <div className=" flex flex-col align-middle justify-center border-1 rounded-lg bg-white shadow-xl sha w-[75vw] sm:w-[50vw]  lg:w-[33vw] mt-16 h-[60vh]">
        <h2 className="text-3xl mb-5 text-center">Login</h2>
           <form className="flex flex-col" action="">
           
            <input className="border-2 my-3 hover:transform-none border-gray-500 p-2 rounded-md mx-12 hover:outline-none hover:touch-none hover:border-[#d18c0c] " placeholder="email" type="email" />
            <input className="border-2 my-3 hover:transform-none border-gray-500 p-2 rounded-md mx-12 hover:outline-none hover:touch-none hover:border-[#d18c0c]" placeholder="password" type="password" />
          
            <button type="submit" className= " mt-4 mx-16 p-2 rounded-md text-white hover:bg-[#e4a734]  bg-[#d18c0c]">login</button>
           </form>
           <div className="flex gap-1 mt-2 justify-center">
           <p className="text-center text-gray-700 "> don`t have an account? </p> <Link to='/signup'><span className="text-[#d18c0c]"> Signup</span></Link> 
</div>
</div>
</div>
  )
}

export default Login