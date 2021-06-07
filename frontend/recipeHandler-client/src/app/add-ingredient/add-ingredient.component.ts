import { Component, OnInit, ValueSansProvider } from '@angular/core';
import { AddIngredient } from '../domain/addIngredient';
import { MatDialog } from '@angular/material/dialog';
import { IngredientEditorComponent } from '../ingredient-editor/ingredient-editor.component';
import { IngredientService } from '../core/ingredient.service';

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

  ngOnInit():void {
    this.getIngredients();
  }

  private async getIngredients():Promise<void> {
    this.ingredients = await this.ingredientService.getIngredients();
  }

  async startAddIngredient():Promise<void> {
    const dialogRef = this.dialog.open(IngredientEditorComponent);
    await dialogRef.afterClosed().toPromise();
    this.getIngredients();
  }

  async startEditIngredient(ingredient:AddIngredient):Promise<void> {
    const dialogRef = this.dialog.open(IngredientEditorComponent, {
      data: ingredient,
    });
    await dialogRef.afterClosed().toPromise();
    this.getIngredients();
  }
}
