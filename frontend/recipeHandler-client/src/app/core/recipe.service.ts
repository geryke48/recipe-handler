import { HttpClient } from '@angular/common/http';
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

  async createRecipes(recipe: Recipe):Promise<Recipe> {
    return await this.httpClient.post('/api/recipes', recipe).toPromise() as Recipe;
  }
}
