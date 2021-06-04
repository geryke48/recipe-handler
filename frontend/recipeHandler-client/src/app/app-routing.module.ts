import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddIngredientComponent } from './add-ingredient/add-ingredient.component';
import { AddRecipeComponent } from './add-recipe/add-recipe.component';
import { MenuComponent } from './menu/menu.component';

const routes: Routes = [{
  path: 'addRecipe',
  component: AddRecipeComponent,
},{
  path: 'addIngerdient',
  component: AddIngredientComponent,
},{
  path: '**',
  redirectTo: '/addRecipe',
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
