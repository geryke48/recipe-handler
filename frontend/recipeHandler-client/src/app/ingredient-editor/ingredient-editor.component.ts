import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NgForm } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { AddIngredient } from '../domain/addIngredient';
import { IngredientService } from '../core/ingredient.service';

@Component({
  selector: 'app-ingredient-editor',
  templateUrl: './ingredient-editor.component.html',
  styleUrls: ['./ingredient-editor.component.scss']
})
export class IngredientEditorComponent implements OnInit {
  ingredientForm: FormGroup = this.fb.group({
    id: 3,
    name: [''],
    unit_of_measure: [''],
  });

  constructor(
    private fb: FormBuilder,
    private ingredientService: IngredientService,
    private dialogRef: MatDialogRef<AddIngredient>,
  ) { }

  ngOnInit(): void {}

  get name(): FormControl {
    return this.ingredientForm.get('name') as FormControl;
  }
  get unit_of_measure(): FormControl {
    return this.ingredientForm.get('unit_of_measure') as FormControl;
  }

  submit():void {
    if (this.ingredientForm.valid){
      this.ingredientService.createIngredient(this.ingredientForm.value);
      this.dialogRef.close();
      window.location.reload();
    }
  }
}
