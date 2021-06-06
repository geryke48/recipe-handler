import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NgForm } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { AddIngredient } from '../domain/addIngredient';

@Component({
  selector: 'app-ingredient-editor',
  templateUrl: './ingredient-editor.component.html',
  styleUrls: ['./ingredient-editor.component.scss']
})
export class IngredientEditorComponent implements OnInit {
  ingredientForm: FormGroup = this.fb.group({
    name: [''],
    unit_of_measure: [''],
  });

  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<AddIngredient>,
  ) { }

  ngOnInit(): void {
  }

  get name(): FormControl {
    return this.ingredientForm.get('name') as FormControl;
  }
  get unit_of_measure(): FormControl {
    return this.ingredientForm.get('unit_of_measure') as FormControl;
  }

  submit():void {
    if (this.ingredientForm.valid){
      console.log(this.ingredientForm.value);
      this.dialogRef.close();
    }
  }
}
