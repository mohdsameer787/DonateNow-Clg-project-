import ImageSlider from "./ImageSlider"
import Donatecard from "./Donatecard"
import Slogan from "./Slogan"
import Donatecard2 from "./Donatecard2"
function Home() {
  return (
    <div >        
       <ImageSlider/>
       <Slogan/>
       <div className=" flex flex-row  flex-wrap justify-center">
       <Donatecard></Donatecard>
       <Donatecard2></Donatecard2></div>
       </div>
  )
}

export default Home