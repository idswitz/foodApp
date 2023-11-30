import React from "react";

function MealCard(){
    const mealStyle ={
        backgroundColor: 'rgb(61, 3, 3)',
        color: 'orange',
        padding: '10px',

    }

    return(
        <div style={mealStyle}>
            <h2>Meal by First Letter</h2>
        </div>


    );

}

export default MealCard;