import { Component, OnInit } from '@angular/core';
import { AddIngredient } from '../domain/addIngredient';
import { MatDialog } from '@angular/material/dialog';
import { IngredientEditorComponent } from '../ingredient-editor/ingredient-editor.component';

@Component({
  selector: 'app-add-ingredient',
  templateUrl: './add-ingredient.component.html',
  styleUrls: ['./add-ingredient.component.scss']
})
export class AddIngredientComponent implements OnInit {
  displayedColumns = ['id','name', 'unit_of_measure', 'edit'];

  ingredients: AddIngredient[] = [{
    id: 0,
    name: 'Milk',
    unit_of_measure: 'litre',
  },{
    id: 1,
    name: 'MSG',
    unit_of_measure: 'g',
  }];

  constructor(
    private dialog: MatDialog,
  ) { }

  ngOnInit(): void {
  }

  startAddIngredient():void {
    this.dialog.open(IngredientEditorComponent);
  }
}
