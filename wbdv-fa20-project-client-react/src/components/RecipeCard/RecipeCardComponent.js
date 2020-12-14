import React from 'react';
import './RecipeCard.module.css';
import {Link} from 'react-router-dom';

const RecipeCardComponent = (recipe) => {

    const reduceTitle = (title) => {
        if (title && title.length > 15) {
            return `${title.substring(0, 13)}..`;
        }
        return title;
    }

    const data = recipe._id || recipe.id;

    return (
        <div className="card mr-1 ml-1">
            <img className="card-img-top" src={recipe.image || recipe.imageUrl} alt="Recipe Image"/>
            <div className="card-body">
                <Link to={`/recipe/${data}`} className="link custom-link">
                    <h5 className="card-title"><strong>{reduceTitle(recipe.title)}</strong></h5>
                </Link>
            </div>
            <div className="card-footer pl-2 pr-0">
               <small className="text-muted">Posted By {recipe.userId ? (recipe.userId.username || 'spoonacular') : 'spoonacular'}</small>
            </div>
        </div>
    );
};

export default RecipeCardComponent;
