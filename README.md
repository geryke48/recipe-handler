# Recipe-Handler

A website to track recipes.

## Fucntional requirements

- The user can create his/her own recipe and modify it
- The user can add ingredients

## Non-functional requirements

- User friendly interface
- login authentication

##ER Diagram

![Image of ERD](https://github.com/geryke48/recipe-handler/blob/main/ER.png)

## Endpoints

- GET /recipes - Lists all the recipes
- GET /recipes/:id - Lists a recipe by ID
- POST /recipes - Creates a recipe
- PUT /recipes/:id - Updates/Edits a recipe by ID
- DELETE /recipes/:id - Deletes a recipe by ID
- GET /ingredients - Lists all the ingredients
- GET /ingredients/:id - Lists an ingredient by ID
- POST /ingredients - Creates an ingredient
- PUT /ingredients/:id - Updates/Edits an ingredient by ID
- DELETE /ingredients/:id - Deletes a ingredient by ID
- POST /register - Registers a new User
- POST /login - Logs into an existing account