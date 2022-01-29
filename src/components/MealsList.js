import React from 'react';
import MealItem from './MealItem'

function MealsList({ meals }) {
  return (
    <div className='list'>
      {meals.map(meal => {
        return <MealItem key={meal.idMeal } {...meal}/>
      })}
    </div>
  )
}

export default MealsList;
