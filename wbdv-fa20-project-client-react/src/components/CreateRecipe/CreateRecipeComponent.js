import React, { useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { RecipeService } from "../../services/RecipeService";

const CreateRecipeComponent = () => {

    const initialState = {
        title: '',
        url: '',
        ingredients: '',
        instructions: '',
        servings: '',
        totalTime: '',
        isServingInt: 'd-none',
        isServingIntDiv: '',
        isTotalTime: 'd-none',
        isTotalTimeDiv: '',
    };

    const [recipe, setRecipe] = useState(initialState);

    const createRecipe = (event) => {
        event.preventDefault();
        // RecipeService.createRecipe()
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
            url: event.target.value,
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
        if(!isNaN(event.target.value)) {
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
        if(!isNaN(event.target.value)) {
            setRecipe({
                ...recipe,
                totalTime: parseInt(event.target.value) || '',
                isTotalTime: 'd-none',
                isTotalTimeDiv: ''
            });
        } else {
            setRecipe({
                ...recipe,
                totalTime: event.target.value,
                isTotalTime: 'd-block',
                isTotalTimeDiv: 'is-invalid'
            });
        }
    }

    return (
        <div className="container">
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
                        onChange={(event) => changeTitle(event)} />
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
                        id="url" 
                        placeholder="http://www.example.com" 
                        value={recipe.url} 
                        onChange={(event) => changeImageUrl(event)} />
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
                        placeholder="Ingredient name : quantity" 
                        rows="3" 
                        value={recipe.ingredients} 
                        onChange={(event) => changeIngredients(event)} />
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
                        id="totalTime" 
                        placeholder="Time in minutes." 
                        value={recipe.totalTime} 
                        onChange={(event) => changeTotalTime(event)}/>
                    <div className={`invalid-feedback ${recipe.isTotalTime}`}>
                        Total time should always be a number.
                    </div>
                </div>
            </div>
            <div className="row form-group">
                <button type="submit" className="btn btn-success col-sm m-1">Create</button>
                <button type="submit" className="btn btn-danger col-sm m-1" onClick={(event) => cancel(event)}>Cancel</button>
            </div>
        </div>
    );
}

export default CreateRecipeComponent;