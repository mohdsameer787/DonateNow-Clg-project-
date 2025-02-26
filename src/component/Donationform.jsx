
function Donationform() {
  return (
   
 <div className="flex align-bottom h-[100vh]    bg-gray-100 justify-center">
        <div className="border-1 overflow-scroll rounded-lg bg-white shadow-xl  w-[85vw] sm:w-[50vw]  lg:w-[33vw] mt-12 h-[90vh] lg:overflow-hidden">
            <h2 className="text-3xl mt-9 text-center">Donation Form</h2>
               <form className="flex flex-col" action="">
                <label className="ml-12  mt-5 text-gray-600" >Book Title </label>
                <input className="border-2 mb-3 mt-2 hover:transform-none border-gray-500 text-gray-700 p-2 rounded-md mx-12 hover:outline-none hover:touch-none  hover:border-[#d18c0c] "    placeholder="enter book title" type="text" required />
                <label className="ml-12  mt-3 text-gray-600" >Author Name</label>
                <input  className="border-2 my-3 hover:transform-none border-gray-500 p-2  text-gray-700 rounded-md mx-12 hover:outline-none hover:touch-none hover:border-[#d18c0c] " placeholder="enter name" type="email" required />
                <label className="ml-12   mt-3 text-gray-600" >Publication Year</label>
                <input className="border-2 my-3 hover:transform-none border-gray-500 p-2 text-gray-400 rounded-md mx-12 hover:outline-none hover:touch-none hover:border-[#d18c0c]" placeholder="publishing year" type="date" required/>
                <label className="ml-12  mt-3 text-gray-600" >Upload image</label>
                <input type="file" className="border-2 my-3 hover:transform-none border-gray-500 p-2  text-gray-400 rounded-md mx-12 hover:outline-none hover:touch-none hover:border-[#d18c0c] " required />
                <label className="ml-12 mt-3 text-gray-600" >Condtion</label>
                <input className="border-2 my-3  hover:transform-none border-gray-500 p-2  text-gray-400 rounded-md mx-12 hover:outline-none hover:touch-none  hover:border-[#d18c0c] " placeholder="bad/good/super" type="text" required />
              
                <button type="submit" className= " mt-4 mx-16 p-2 rounded-md text-white hover:bg-[#e4a734]  bg-[#d18c0c]">Donate</button>
               </form>
               <div className="flex gap-1 mt-2 justify-center">
 
</div>
    </div>
    </div>

  )
}

export default Donationform