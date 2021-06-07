import { Component, Inject, OnInit, Optional } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Recipe } from '../domain/recipe';
import { RecipeService } from '../core/recipe.service';

@Component({
  selector: 'app-recipe-editor',
  templateUrl: './recipe-editor.component.html',
  styleUrls: ['./recipe-editor.component.scss']
})
export class RecipeEditorComponent implements OnInit {
  recipeForm: FormGroup = this.fb.group({
    name: [''],
    description: ['', [Validators.required, Validators.maxLength(50)]],
    guide: [''],
  });

  constructor(
    private fb: FormBuilder,
    private recipeService: RecipeService,
    @Optional() public dialogRef?: MatDialogRef<Recipe>,
    @Inject(MAT_DIALOG_DATA) @Optional() private recipeToEdit?: Recipe,
  ) {}

  ngOnInit(): void {
    if (this.recipeToEdit){
      this.recipeForm.reset({
        name: this.recipeToEdit.name,
        description: this.recipeToEdit.description,
        guide: this.recipeToEdit.guide,
      })
    }
  }

  get name(): FormControl {
    return this.recipeForm.get('name') as FormControl;
  }
  get description(): FormControl {
    return this.recipeForm.get('description') as FormControl;
  }
  get guide(): FormControl {
    return this.recipeForm.get('guide') as FormControl;
  }
  get value(): FormControl {
    return this.recipeForm.get('value') as FormControl;
  }
  get ingredients(): FormControl {
    return this.recipeForm.get('ingredients') as FormControl;
  }

  async submit():Promise<void> {
    this.recipeForm.markAllAsTouched();
    if (this.recipeForm.valid){
      if (this.recipeToEdit){
        await this.recipeService.editRecipe(this.recipeToEdit, this.recipeForm.value);
      } else {
        await this.recipeService.createRecipe(this.recipeForm.value);
      }
      this.dialogRef?.close();
    }
  }

  cancel():void {
    this.dialogRef?.close();
  }
}
