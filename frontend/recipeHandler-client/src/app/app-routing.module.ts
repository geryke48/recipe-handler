import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddIngredientComponent } from './add-ingredient/add-ingredient.component';
import { AddRecipeComponent } from './add-recipe/add-recipe.component';
import { MenuComponent } from './menu/menu.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './core/auth.guard';

const routes: Routes = [{
  path: 'addRecipe',
  component: AddRecipeComponent,
  canActivate: [AuthGuard],
},{
  path: 'addIngerdient',
  component: AddIngredientComponent,
  //canActivate: [AuthGuard],
},{
  path: 'login',
  component: LoginComponent,
},{
  path: '**',
  redirectTo: '/addRecipe',
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
