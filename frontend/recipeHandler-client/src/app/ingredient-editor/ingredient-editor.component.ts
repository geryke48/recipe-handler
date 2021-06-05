import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { AddIngredient } from '../domain/addIngredient';

@Component({
  selector: 'app-ingredient-editor',
  templateUrl: './ingredient-editor.component.html',
  styleUrls: ['./ingredient-editor.component.scss']
})
export class IngredientEditorComponent implements OnInit {
  ingredient: AddIngredient = {
    id: 0,
    name: '',
    unit_of_measure: '',
  };

  constructor(
    private dialogRef: MatDialogRef<AddIngredient>,
  ) { }

  ngOnInit(): void {
  }

  submit(form:NgForm):void {
    if (form.valid){
      console.log(this.ingredient);
      this.dialogRef.close();
    }
  }
}
