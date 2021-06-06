import { Injectable } from '@angular/core';
import { AddIngredient } from './domain/addIngredient';

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

  constructor() { }

  getIngredients(): AddIngredient[] {
    return this.ingredients;
  }
  /*getRecipe(id: number): Recipe {
    return this.recipes[0];
  }*/
  createIngredient(ingredient: AddIngredient): void {
    this.ingredients.push(ingredient);
  }
}
