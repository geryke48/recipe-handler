import { HttpClient } from '@angular/common/http';
import { RecurseVisitor } from '@angular/compiler/src/i18n/i18n_ast';
import { Injectable } from '@angular/core';
import { Recipe } from '../domain/recipe';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  constructor(
    private httpClient: HttpClient,
  ) { }

  async getRecipes(): Promise<Recipe[]> {
    return await this.httpClient.get('/api/recipes').toPromise() as Recipe[];
  }

  async createRecipe(recipe: Recipe):Promise<Recipe> {
    return await this.httpClient.post('/api/recipes', recipe).toPromise() as Recipe;
  }

  async editRecipe(recipeToEdit: Recipe, value: Recipe):Promise<Recipe> {
    return await this.httpClient.put(`/api/recipes/${recipeToEdit.id}`, value).toPromise() as Recipe;
  }
}
