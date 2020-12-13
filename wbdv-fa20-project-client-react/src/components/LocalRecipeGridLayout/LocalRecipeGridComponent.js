import React from 'react';
import LocalRecipeCardComponent from '../LocalRecipeCard/LocalRecipeCardComponent';
import style from './LocalRecipeGridComponent.module.css';

const LocalRecipeGridComponent = ({recipes = []}) => {
    return (
        <div className={`card-columns ml-2 mr-2 ${style.card_columns}`}>
            {recipes.map(recipe => (
                <div className="mt-2 mb-2">
                    <LocalRecipeCardComponent
                        {...recipe}/>
                </div>
            ))}
        </div>
    );
}

export default LocalRecipeGridComponent;
