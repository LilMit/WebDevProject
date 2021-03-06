import React, {useState} from 'react';
import RecipeService from '../../services/RecipeService';
import {useHistory, useParams} from 'react-router-dom';
import { connect } from 'react-redux';
import NavigationComponent from '../Navigation/NavigationComponent';

const CreateRecipeComponent = ({userId}) => {

    const initialState = {
        title: '',
        imageUrl: '',
        ingredients: '',
        instructions: '',
        servings: '',
        readyInMinutes: '',
        isServingInt: 'd-none',
        isServingIntDiv: '',
        isTotalTime: 'd-none',
        isTotalTimeDiv: '',
    };

    const [recipe, setRecipe] = useState(initialState);

    const createRecipe = (event) => {
        event.preventDefault();
        const finalRecipe = {
            title: recipe.title,
            ingredients: recipe.ingredients,
            instructions: recipe.instructions,
            servings: recipe.servings,
            readyInMinutes: recipe.readyInMinutes,
            imageUrl: recipe.imageUrl,
        };
        RecipeService.addRecipeDetails(userId, finalRecipe).then((data) => {
            if(data && !data.error) {
                history.push(`/ownedRecipes/${params.userId}`);
            } else {
                alert('Something Went wrong try again');
            }
        }).catch(() => {
            alert('Something Went wrong try again');
        });
    }

    const history = useHistory();
    const params = useParams();

    const cancel = (event) => {
        event.preventDefault();
        setRecipe({
            ...initialState,
        });
        history.push(`/ownedRecipes/${params.userId}`);
    }

    const changeTitle = (event) => {
        event.preventDefault();
        console.log('Hey4');
        setRecipe({
            ...recipe,
            title: event.target.value,
        });
    }

    const changeImageUrl = (event) => {
        event.preventDefault();
        console.log('Hey5');
        setRecipe({
            ...recipe,
            imageUrl: event.target.value,
        });
    }

    const changeIngredients = (event) => {
        event.preventDefault();
        console.log('Hey3');
        setRecipe({
            ...recipe,
            ingredients: event.target.value,
        });
    }

    const changeInstructions = (event) => {
        event.preventDefault();
        console.log('Hey6');
        setRecipe({
            ...recipe,
            instructions: event.target.value,
        });
    }

    const changeServings = (event) => {
        event.preventDefault();
        console.log('Hey2');
        if (!isNaN(event.target.value)) {
            setRecipe({
                ...recipe,
                servings: parseInt(event.target.value) || '',
                isServingInt: 'd-none',
                isServingIntDiv: '',
            });
        } else {
            setRecipe({
                ...recipe,
                servings: event.target.value,
                isServingInt: 'd-block',
                isServingIntDiv: 'is-invalid',
            });
        }
    }

    const changeTotalTime = (event) => {
        event.preventDefault();
        console.log('Hey1');
        console.log(isNaN(event.target.value));
        if (!isNaN(event.target.value)) {
            setRecipe({
                ...recipe,
                readyInMinutes: parseInt(event.target.value) || '',
                isTotalTime: 'd-none',
                isTotalTimeDiv: ''
            });
        } else {
            setRecipe({
                ...recipe,
                readyInMinutes: event.target.value,
                isTotalTime: 'd-block',
                isTotalTimeDiv: 'is-invalid'
            });
        }
    }

    return (
        <>
            <NavigationComponent />
            <div className="container mt-2">
                <div className="form-group row">
                    <div className="col-sm-2 col-form-label">
                        <span>Image title</span>
                    </div>
                    <div className="col-sm-10">
                        <input
                            type="text"
                            className="form-control"
                            id="title"
                            placeholder="Enter Recipe Title"
                            value={recipe.title}
                            onChange={(event) => changeTitle(event)}/>
                    </div>
                </div>
                <div className="form-group row">
                    <div className="col-sm-2 col-form-label">
                        <span>Image Url</span>
                    </div>
                    <div className="col-sm-10">
                        <input
                            type="text"
                            className="form-control"
                            id="imageUrl"
                            placeholder="http://www.example.com"
                            value={recipe.imageUrl}
                            onChange={(event) => changeImageUrl(event)}/>
                    </div>
                </div>
                <div className="form-group row">
                    <div className="col-sm-2 col-form-label">
                        <span>Ingredients</span>
                    </div>
                    <div className="col-sm-10">
                        <textarea
                            className="form-control"
                            id="ingredients"
                            placeholder="Ingredient seperated by new line."
                            rows="3"
                            value={recipe.ingredients}
                            onChange={(event) => changeIngredients(event)}/>
                    </div>
                </div>
                <div className="form-group row">
                    <div className="col-sm-2 col-form-label">
                        <span>Instructions</span>
                    </div>
                    <div className="col-sm-10">
                        <textarea
                            className="form-control"
                            id="Instructions"
                            placeholder="Steps seperated by newline."
                            rows="3"
                            value={recipe.instructions}
                            onChange={(event) => changeInstructions(event)}/>
                    </div>
                </div>
                <div className="form-group row">
                    <div className="col-sm-2 col-form-label">
                        <span>Servings</span>
                    </div>
                    <div className="col-sm-10">
                        <input
                            type="text"
                            className={`form-control ${recipe.isServingIntDiv}`}
                            id="servings"
                            placeholder="Number of Servings"
                            value={recipe.servings}
                            onChange={(event) => changeServings(event)}/>
                        <div className={`invalid-feedback ${recipe.isServingInt}`}>
                            Serving should always be a number.
                        </div>
                    </div>
                </div>
                <div className="form-group row">
                    <div className="col-sm-2 col-form-label">
                        <span>TotalTime</span>
                    </div>
                    <div className="col-sm-10">
                        <input
                            type="text"
                            className={`form-control ${recipe.isTotalTimeDiv}`}
                            id="readyInMinutes"
                            placeholder="Time in minutes."
                            value={recipe.readyInMinutes}
                            onChange={(event) => changeTotalTime(event)}/>
                        <div className={`invalid-feedback ${recipe.isTotalTime}`}>
                            Total time should always be a number.
                        </div>
                    </div>
                </div>
                <div className="row form-group">
                    <button type="submit" className="btn btn-success col-sm m-1" onClick={(event) => createRecipe(event)}>Create</button>
                    <button type="submit" className="btn btn-danger col-sm m-1" onClick={(event) => cancel(event)}>Cancel
                    </button>
                </div>
            </div>
        </>
    );
}

const mapStateToProps = (state) => ({
    userId: state.userReducer._id,
});

export default connect(mapStateToProps)(CreateRecipeComponent);
