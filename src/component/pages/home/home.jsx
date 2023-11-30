import React from 'react';
import Mealitem from '../../Mealitem';



const Meal = () => {
  return (
    <div className="main">
      <div className="heading">
        <h1>Welcome To The MealDB</h1>
        <h2>Search Your Meal </h2>
        <h4> Lorem ipsum dolor sit amet consectetur adipisicing elit.</h4>
      </div>
      <div className="searchBox">
        <input type="search" className="search-bar" placeholder="Enter Your Food Name">

        </input>
      </div>
      <div className="container">
        <Mealitem />

      </div>

    </div>
  )
}

export default Meal;