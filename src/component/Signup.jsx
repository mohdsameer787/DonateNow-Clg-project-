import { Link } from "react-router-dom"
function Signup() {


  const handleSubmit = (event) => {
    

    event.preventDefault();
  };
  return (
    <div className="flex align-bottom h-[100vh]  bg-gray-100 justify-center">
        <div className="border-1 rounded-lg bg-white shadow-xl sha w-[75vw] sm:w-[50vw]  lg:w-[33vw] mt-16 h-[70vh]">
            <h2 className="text-3xl mt-5 text-center">Sign up</h2>
               <form onSubmit={handleSubmit} className="flex flex-col" >
                <input className="border-2 mb-3 mt-7 hover:transform-none border-gray-500 text-gray-700 p-2 rounded-md mx-12 hover:outline-none hover:touch-none  hover:border-[#d18c0c] "    placeholder="Name" type="text" />
                <input className="border-2 my-3 hover:transform-none border-gray-500 p-2 rounded-md mx-12 hover:outline-none hover:touch-none hover:border-[#d18c0c] " placeholder="email" type="email" />
                <input className="border-2 my-3 hover:transform-none border-gray-500 p-2 rounded-md mx-12 hover:outline-none hover:touch-none hover:border-[#d18c0c]" placeholder="password" type="password" />
                <input className="border-2 my-3 hover:transform-none border-gray-500 p-2 rounded-md mx-12 hover:outline-none hover:touch-none  hover:border-[#d18c0c] " placeholder="address" type="text" />
                <button type="submit" className= " mt-4 mx-16 p-2 rounded-md text-white hover:bg-[#e4a734]  bg-[#d18c0c]">Sing Up</button>
               </form>
               <div className="flex gap-1 mt-2 justify-center">
               <p className="text-center text-gray-700 ">Already have an account? </p> <Link to='/login'><span className="text-[#d18c0c]"> Login</span></Link> 
</div>
    </div>
    </div>
    
  )
}

export default Signup