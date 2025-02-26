import { Link } from "react-router-dom"
import books from '/src/assets/book2.jpg'

function Donatecard2() {
  return (
    <>
    <div className="flex justify-center">
    <div className="w-[75vw] flex flex-col text-center border-gray-300 shadow-2xl bg-white rounded-lg  h-96 sm:w-96 m-8">
    <div className='bg-black relative rounded-lg h-[30vh]'>
    <img className='h-[30vh] w-[75vw] rounded-lg opacity-60 static ' src={books} alt="" />
       
      </div>
      <div className='flex flex-col mt-2 gap-5'>
      <p className='mt-3  text-gray-700'>Share the power of stories – donate books and inspire future minds</p> 

   <Link to="/donationform"><button type="submit" className= "  mt-4 w-44  p-2 rounded-md  text-white hover:bg-[#e4a734]  bg-[#d18c0c]">Donate now</button></Link>   
      </div>
      </div>
 </div>
 </>
  )
}

export default Donatecard2