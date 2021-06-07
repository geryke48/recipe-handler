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

  ngOnInit(): void {
    this.getRecipes();
  }

  private async getRecipes():Promise<void> {
    this.recipes = await this.recipeService.getRecipes();
  }

  async startAddRecipe():Promise<void> {
    const dialogRef = this.dialog.open(RecipeEditorComponent);
    await dialogRef.afterClosed().toPromise();
    this.getRecipes();
  }

  async startEditRecipe(recipe:Recipe):Promise<void> {
    const dialogRef = this.dialog.open(RecipeEditorComponent, {
      data: recipe,
    });
    await dialogRef.afterClosed().toPromise();
    this.getRecipes();
  }
}
