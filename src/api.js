import {API_URL} from './config'

async function getMealById(mealId) {
  const response = await fetch(API_URL + 'lookup.php?i=' + mealId)
  return await response.json()
}

async function getAllCategories() {
  const response = await fetch(API_URL + 'categories.php')
  return await response.json()
}

async function getFilterCategory(categoryName) {
  const response = await fetch(API_URL + 'filter.php?c=' + categoryName)
  return await response.json()
}


export {getMealById, getAllCategories, getFilterCategory}