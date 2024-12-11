import React from 'react'
import DrinkHero from './DrinkHero'
import FindPlace from './FindPlace'
import Restaurants from '../common/RestaurantsCard'

function DrinkPage() {
  return (
    <>
    <DrinkHero />
    <FindPlace />
    <Restaurants title="Popular Restaurants in Lagos" />
    </>
  )
}

export default DrinkPage