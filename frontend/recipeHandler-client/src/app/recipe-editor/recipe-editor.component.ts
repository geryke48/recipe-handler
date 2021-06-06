import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { Recipe } from '../domain/recipe';

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
  ) {}

  ngOnInit(): void {
  }

  submit():void {
    if (this.recipeForm.valid){
      console.log(this.recipeForm.value);
    }
  }
}
