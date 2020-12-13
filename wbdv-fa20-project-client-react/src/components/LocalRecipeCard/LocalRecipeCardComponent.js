import React from 'react';
import './LocalRecipeCard.module.css';
import {Link} from 'react-router-dom';

const LocalRecipeCardComponent = (recipe) => {

    const reduceTitle = (title) => {
        if (title.length > 15) {
            return `${title.substring(0, 13)}..`;
        }
        return title;
    }

    return (
        <div className="card mr-1 ml-1">
            <img className="card-img-top" src={recipe.imageUrl} alt="Recipe Image"/>
            <div className="card-body">
                <Link to={{ pathname: `/recipe/${recipe._id}`}} className="link custom-link">
                    <h5 className="card-title"><strong>{reduceTitle(recipe.title)}</strong></h5>
                </Link>
            </div>
            <div className="card-footer pl-2 pr-0">
               <small className="text-muted">Posted By { recipe.userId && recipe.userId.username }</small>
            </div>
        </div>
    );
};

export default LocalRecipeCardComponent;
