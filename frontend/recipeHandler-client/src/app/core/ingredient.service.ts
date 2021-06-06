import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AddIngredient } from '../domain/addIngredient';

@Injectable({
  providedIn: 'root'
})
export class IngredientService {
  private ingredients: AddIngredient[] = [{
    id: 0,
    name: 'Milk',
    unit_of_measure: 'litre',
  },{
    id: 1,
    name: 'MSG',
    unit_of_measure: 'g',
  }];

  constructor(
    private httpClient: HttpClient,
  ) { }

  async getIngredients(): Promise<AddIngredient[]> {
    return await this.httpClient.get('/api/ingredients').toPromise() as AddIngredient[];
  }
  /*getRecipe(id: number): Recipe {
    return this.recipes[0];
  }*/
  createIngredient(ingredient: AddIngredient): void {
    this.ingredients.push(ingredient);
  }
}
