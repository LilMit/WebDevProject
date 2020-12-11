import React from 'react';
import RecipeCardComponent from '../RecipeCard/RecipeCardComponent';
import style from './RecipeGridComponent.module.css';

const RecipeGridComponent = ({recipes = []}) => {
    return (
        <div className={`card-columns ml-2 mr-2 ${style.card_columns}`}>
            {recipes.map(recipe => (
                <div className="mt-2 mb-2">
                    <RecipeCardComponent
                        {...recipe}/>
                </div>
            ))}
        </div>
    );
}

export default RecipeGridComponent;
