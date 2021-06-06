import { Component, OnInit } from '@angular/core';
import { AddIngredient } from '../domain/addIngredient';
import { MatDialog } from '@angular/material/dialog';
import { IngredientEditorComponent } from '../ingredient-editor/ingredient-editor.component';
import { IngredientService } from '../ingredient.service';

@Component({
  selector: 'app-add-ingredient',
  templateUrl: './add-ingredient.component.html',
  styleUrls: ['./add-ingredient.component.scss']
})
export class AddIngredientComponent implements OnInit {
  displayedColumns = ['id','name', 'unit_of_measure', 'edit'];

  ingredients!: AddIngredient[];

  constructor(
    private dialog: MatDialog,
    private ingredientService: IngredientService,
  ) { }

  ngOnInit(): void {
    this.ingredients = this.ingredientService.getIngredients();
  }

  startAddIngredient():void {
    this.dialog.open(IngredientEditorComponent);
  }
  
}
