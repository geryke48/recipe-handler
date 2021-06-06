import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Recipe } from '../domain/recipe';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  private recipes: Recipe[] = [{
    id: 0,
    name: 'kacsa',
    description: 'finom',
    guide: 'csak csináld',
    value: [10]
  },{
    id: 1,
    name: 'kukorica',
    description: 'nagyon finom',
    guide: 'csak csináld',
    value: [10]
  }]
  constructor(
    private httpClient: HttpClient,
  ) { }

  async getRecipes(): Promise<Recipe[]> {
    return await this.httpClient.get('/api/recipes').toPromise() as Recipe[];
  }

  createRecipes(recipe: Recipe): void {
    this.recipes.push(recipe);
  }
}
