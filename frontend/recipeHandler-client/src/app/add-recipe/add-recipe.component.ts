import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Recipe } from '../domain/recipe';
import { RecipeEditorComponent } from '../recipe-editor/recipe-editor.component';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-add-recipe',
  templateUrl: './add-recipe.component.html',
  styleUrls: ['./add-recipe.component.scss']
})
export class AddRecipeComponent implements OnInit {

  recipes!: Recipe[];

  constructor(
    private dialog: MatDialog,
    private recipeService: RecipeService,
  ) { }

  ngOnInit(): void {
    this.recipes = this.recipeService.getRecipes();
  }

  startAddIngredient():void {
    this.dialog.open(RecipeEditorComponent);
  }
}
