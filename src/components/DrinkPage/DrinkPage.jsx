import DrinkHero from './DrinkHero'
import FindPlace from './FindPlace'
import Restaurants from '../common/RestaurantsCard'
// import DrinkCarousel from './DrinkCarousel'
import Map from './Map'

function DrinkPage() {
  return (
    <>
    <DrinkHero />
    <FindPlace />
    <Restaurants api="/data.json" title="Popular Restaurants in Lagos" />
    {/* <DrinkCarousel data={CarouselData} tags={TagData} /> */}
    <Restaurants api="/data.json" title="Restaurants nearby" />
    <Map />
    </>
  )
}

export default DrinkPage