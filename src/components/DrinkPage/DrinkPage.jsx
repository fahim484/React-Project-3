import React from 'react'
import DrinkHero from './DrinkHero'
import FindPlace from './FindPlace'
import Restaurants from '../common/RestaurantsCard'
import DrinkCarousel from './DrinkCarousel'

function DrinkPage() {
  return (
    <>
    <DrinkHero />
    <FindPlace />
    <Restaurants title="Popular Restaurants in Lagos" />
    <DrinkCarousel />
    <Restaurants title="Restaurants nearby" />
    </>
  )
}

export default DrinkPage