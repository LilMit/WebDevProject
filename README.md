# WebDevProject

Project Description:https://docs.google.com/document/d/1nG20gUXoPMLd3oeOdEo81tp2yAaLN8p--nzzmAAAszA/edit?usp=sharing

## RESTful services listing the URL patterns used to interact with the data model:

#### RESTful services:

website/allrecipes
website/:recipeId
website/:userId/
website/:userId/allrecipes
website/:userId/savedrecipes
website/:userId/:recipeId
website/:userId/recipesbyuser
website/:userId/createRecipe
website/:userId/update/:recipeId
website/:userId/account

#### RecipeService:

anonymous users:

- getAllRecipes()
- getRecipeById()
- getRecipesBy rating, tag, ingredient, date, author, etc
- getRating(authorUser)

logged in users:

- getSavedRecipes(userId)
- likeRecipe(recipeId) (PUT method)
- saveRecipe(id) (PUT)
- rateRecipe(id) (PUT)
- rateRecipeAuthor(author)

recipe-author users:

- postRecipe(recipe)
- deleteRecipe(id)
- updateRecipe(id)

UserAdminService:

- deleteUser(userId)
- createUser(userId)
- updateUser(user)
- getAllUsers()
- getUser()

#### External Public APIs

- https://spoonacular.com/food-api/docs
- Get random recipies: https://api.spoonacular.com/recipes/random (Get request)
- Information about a specific recipie: https://api.spoonacular.com/recipes/{id}/information (Get request)
- Search Recipies: https://api.spoonacular.com/recipes/complexSearch (Get request with a few parameters in body)
