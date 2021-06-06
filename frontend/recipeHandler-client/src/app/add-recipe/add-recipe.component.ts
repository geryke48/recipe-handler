import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Recipe } from '../domain/recipe';
import { RecipeEditorComponent } from '../recipe-editor/recipe-editor.component';

@Component({
  selector: 'app-add-recipe',
  templateUrl: './add-recipe.component.html',
  styleUrls: ['./add-recipe.component.scss']
})
export class AddRecipeComponent implements OnInit {

  recipes: Recipe[] = [{
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
    private dialog: MatDialog,
  ) { }

  ngOnInit(): void {
  }

  startAddIngredient():void {
    this.dialog.open(RecipeEditorComponent);
  }
}
