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

  async createIngredient(ingredient: AddIngredient): Promise<AddIngredient> {
    return await this.httpClient.post('/api/ingredients', ingredient).toPromise() as AddIngredient;
  }

  async editIngredient(ingredientToEdit: AddIngredient, value: AddIngredient):Promise<AddIngredient> {
    return await this.httpClient.put(`api/ingredients/${ingredientToEdit.id}`, value).toPromise() as AddIngredient;
  }
}
