import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
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
    private dialogRef: MatDialogRef<Recipe>,
  ) {}

  ngOnInit(): void {}

  get name(): FormControl {
    return this.recipeForm.get('name') as FormControl;
  }
  get description(): FormControl {
    return this.recipeForm.get('description') as FormControl;
  }
  get guide(): FormControl {
    return this.recipeForm.get('guide') as FormControl;
  }

  submit():void {
    if (this.recipeForm.valid){
      this.recipeService.createRecipes(this.recipeForm.value);
      this.dialogRef.close();
    }
  }
}
