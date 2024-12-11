import React from 'react'
import DrinkHero from './DrinkHero'
import FindPlace from './FindPlace'
import Restaurants from '../common/RestaurantsCard'
import DrinkCarousel from './DrinkCarousel'
import Map from './Map'

function DrinkPage() {
  return (
    <>
    <DrinkHero />
    <FindPlace />
    <Restaurants title="Popular Restaurants in Lagos" />
    <DrinkCarousel />
    <Restaurants title="Restaurants nearby" />
    <Map />
    </>
  )
}

export default DrinkPage