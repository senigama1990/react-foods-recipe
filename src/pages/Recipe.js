import React, { useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom'
import { getMealById } from '../api'
import Loader from '../components/Loader'


function Recipe() {
  const [recipe, setRecipe] = useState([])
  const { id } = useParams()
  const { goBack } = useHistory()

  useEffect(() => {
    getMealById(id).then(data => setRecipe(data.meals[0]))
  }, [])

  return (
    <>
      <button className='btn' onClick={goBack}>Go Back</button>
      {!recipe.idMeal ? <Loader /> : (
        <div className="recipe">
          <img src={recipe.strMealThumb} alt={recipe.strMeal} />
          <h1>{recipe.strMeal}</h1>
          <h4>{recipe.strCategory}</h4>
          <h6>{recipe.strArea ? recipe.strArea : 'not given'}</h6>
          <p>{recipe.strInstructions}</p>

          <table className="centered">
            <thead>
              <tr>
                <th>Ingridients</th>
                <th>Measure</th>
              </tr>
            </thead>
            <tbody>
              {Object.keys(recipe).map((key) => {
                if (key.includes('Ingredient') && recipe[key]) {
                  return (
                    <tr>
                      <td>
                        {recipe[key]}
                      </td>
                      <td>
                        {recipe[`strMeasure${key.slice(13)}`]}
                      </td>
                    </tr>
                  )
                }
              })}
            </tbody>
          </table>

          {recipe.strYoutube ? (
            <div className="row">
              <h5>Video</h5>
              <iframe title={id} width="560" height="315" src={`https://www.youtube.com/embed/${recipe.strYoutube.slice(-11)}`} allowFullScreen/>
            </div>
          ) : null}
        </div>
      )}
    </>
  )
}

export default Recipe;
