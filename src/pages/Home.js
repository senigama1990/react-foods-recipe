import React, { useState, useEffect } from 'react';
import { getAllCategories } from '../api'
import CategoryList from '../components/CategoryList';
import Loader from '../components/Loader'

function Home() {

  const [catalog, setCatalog] = useState([])

  useEffect(() => {
    getAllCategories().then(data => {
      setCatalog(data.categories)
    })
  }, [])

  return (
    <>
      {!catalog.length ? (
        <Loader />
      ) : (
          <CategoryList catalog={catalog }/>
      )}
    </>
  )
}

export default Home;
