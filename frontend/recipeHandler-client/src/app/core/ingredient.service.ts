import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AddIngredient } from '../domain/addIngredient';

@Injectable({
  providedIn: 'root'
})
export class IngredientService {
  constructor(
    private httpClient: HttpClient,
  ) { }

  async getIngredients(): Promise<AddIngredient[]> {
    return await this.httpClient.get('/api/ingredients').toPromise() as AddIngredient[];
  }
  /*getRecipe(id: number): Recipe {
    return this.recipes[0];
  }*/
  async createIngredient(ingredient: AddIngredient): Promise<AddIngredient> {
    return await this.httpClient.post('/api/ingredients', ingredient).toPromise() as AddIngredient;
  }
}
