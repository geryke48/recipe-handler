import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Recipe } from '../domain/recipe';
import { RecipeEditorComponent } from '../recipe-editor/recipe-editor.component';
import { RecipeService } from '../core/recipe.service';

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

  async ngOnInit(): Promise<void> {
    this.recipes = await this.recipeService.getRecipes();
  }

  startAddIngredient():void {
    this.dialog.open(RecipeEditorComponent);
  }
}
