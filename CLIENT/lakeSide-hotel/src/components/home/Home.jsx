import MainHeader from '../layout/MainHeader' 
import HotelService from '../common/HotelService'
import Parallax from '../common/Parallax'
import RoomCarousel from '../common/RoomCarousel'

const Home = () => {
  return (
    <section>
        <MainHeader/>
        <div className='container'>
          <RoomCarousel/>
          <Parallax/>
          <RoomCarousel/>
          <HotelService/>
          <Parallax/>
          <RoomCarousel/>
        </div>
    </section>
  )
}

export default Home