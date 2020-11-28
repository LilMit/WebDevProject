import React from 'react';
import courselogo from '../../images/coursegridimage.webp';
import './RecipeCard.module.css';
import { Link } from 'react-router-dom';
const IMAGEURL = "https://spoonacular.com/recipeImages/"

const RecipeCardComponent = ({id, title, imageUrl, imageType}) => {

    const reduceTitle = (title) => {
        if(title.length > 15) {
            return `${title.substring(0, 13)}..`;
        }
        return title;
    }

    const getFormattedDate = (date) => {
        const todayTime = new Date(date);
        const month = todayTime .getMonth() + 1;
        const day = todayTime .getDate();
        const year = todayTime .getFullYear();
        return `${month}/${day}/${year}`;
    }

    return(
        <div className="card mr-1 ml-1">
            {/* <img className="card-img-top" src={`${IMAGEURL}${id}-${SIZE}.${TYPE}`} alt="Recipe Image" /> */}
            <img className="card-img-top" src={imageUrl} alt="Recipe Image" />
            <div className="card-body">
                <Link to={`/recipe/${id}`} className="link custom-link"> 
                    <h5 className="card-title"><strong>{reduceTitle(title)}</strong></h5>
                </Link>
                {/*<p className="card-text">*/}
                {/*    {description}*/}
                {/*</p>*/}
            </div>
            {/*<div className="card-footer pl-2 pr-0">*/}
            {/*    <small className="text-muted d-block">Modified {getFormattedDate(updatedAt)}</small>*/}
            {/*    <small className="text-muted">Posted By {ownedBy}</small>*/}
            {/*</div>*/}
        </div>
    );
};

export default RecipeCardComponent;
