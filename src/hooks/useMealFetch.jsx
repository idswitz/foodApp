import React, {useState, useEffect} from "react";

const Meals =() =>{
    const[meals, setMeals] = useState ([]);


    const vvv={
        width: "200px",

    }
    useEffect(() =>{
        fetch('https://www.themealdb.com/api/json/v1/1/search.php?f=b')
        .then(response => response.json())
        .then(data => setMeals(data.meals))
        .catch(error => console.log(error));

    },[]);


    return(

        



        <div>

<div className="main">
      <div className="heading">
        <h1>Welcome To The MealDB</h1>
        <h2>Search Your Meal by First Letter </h2>
      </div>
      <div className="searchBox">
        <input type="search" className="search-bar" placeholder="Enter Your Food Name">

        </input>
      </div>
      

    </div>



            {meals.map(meal =>(
                <div key={meal.idMeal}>
                <h3 >{meal.strMeal}</h3>
                < img style={vvv} src=  {meal.strMealThumb}
                alt={meal.strMeal} />
                </div>
                
            ))}
        </div>
    )
}

export default Meals;