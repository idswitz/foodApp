import React from "react";
const Mealitem =()=>{
    return(
        <>
        <div className="card">
            <img src="https://www.themealdb.com/images/media/meals/0206h11699013358.jpg"></img>
            <div className="info">
            <h2>Food</h2>
            <p> Put the flour, eggs, milk, 1 tsbp oil and a pitch of salt into a bowl, then whist the butter for about 20mins for solid foerm </p>
            </div>
            <div className="recipe">
                <h2>Ingrediants</h2>
                <img src="https://www.themealdb.com/images/media/meals/0206h11699013358.jpg"></img>
                <a href="www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata">By Name</a>
            </div>


        </div>

        
        </>
    )
}

export default Mealitem;