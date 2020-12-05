import React from 'react';


const RecipeContent = ({recipe}) => {

    const getFormattedDate = (date) => {
        const todayTime = new Date(date);
        const month = todayTime.getMonth() + 1;
        const day = todayTime.getDate();
        const year = todayTime.getFullYear();
        return `${month}/${day}/${year}`;
    }

    return (
        <div className="container">
            <h1>recipe.title</h1>
            <div className="row">
                <div className="col">
                    <img className="card-img-top" src={recipe.image} alt="Recipe Image"/>
                </div>
                <div className="col">
                    <ul>
                        <li><i className"far fa-clock"></i>Time to prepare: {recipe.readyInMinutes}</li>
                        <li><i className="fas fa-utensils"></i>Serves: {recipe.servings}</li>
                        <li>Original Posting: <a className="nav-link" href={recipe.sourceUrl}>{recipe.title}</a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="row">
                <div className = "col">
            //TODO create ingredients component, render as unordered list
            {recipe.ingredients}
                </div>
                <div className = "col">
                    {recipe.instructions}
                </div>
            </div>
        </div>
    );
}

export default RecipeContent;
