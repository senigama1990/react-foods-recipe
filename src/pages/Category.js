import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'
import {getFilterCategory} from '../api'
import Loader from '../components/Loader';
import MealsList from '../components/MealsList';

function Category() {

  const { name } = useParams()

  const [meals, setMeals]=useState([])
  
  useEffect(() => {
    getFilterCategory(name).then(data => {
      return setMeals(data.meals)
    })
  }, [name])
  
  return (
    <>
      {!meals.length ? <Loader /> : <MealsList meals={meals}/>}
    </>
  )
}

export default Category;
