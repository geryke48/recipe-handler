import { Component, Inject, OnInit, Optional } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NgForm } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AddIngredient } from '../domain/addIngredient';
import { IngredientService } from '../core/ingredient.service';

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
    private ingredientService: IngredientService,
    @Optional() public dialogRef: MatDialogRef<AddIngredient>,
    @Inject(MAT_DIALOG_DATA) @Optional() private ingredientToEdit?: AddIngredient,
  ) { }

  ngOnInit(): void {
    if (this.ingredientToEdit){
      this.ingredientForm.reset({
        name: this.ingredientToEdit.name,
        unit_of_measure: this.ingredientToEdit.unit_of_measure,
      })
    }
  }

  get name(): FormControl {
    return this.ingredientForm.get('name') as FormControl;
  }
  get unit_of_measure(): FormControl {
    return this.ingredientForm.get('unit_of_measure') as FormControl;
  }

  async submit():Promise<void> {
    this.ingredientForm.markAllAsTouched();
    if (this.ingredientForm.valid){
      if (this.ingredientToEdit){
        await this.ingredientService.editIngredient(this.ingredientToEdit, this.ingredientForm.value);
      } else {
        await this.ingredientService.createIngredient(this.ingredientForm.value);
      }
      this.dialogRef.close();
    }
    window.location.reload();
  }
  
  cancel():void {
    this.dialogRef?.close();
  }
}
