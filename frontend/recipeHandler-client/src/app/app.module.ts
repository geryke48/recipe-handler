import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MenuComponent } from './menu/menu.component';
import { MatListModule}  from '@angular/material/list';
import { AddRecipeComponent } from './add-recipe/add-recipe.component';
import { AddIngredientComponent } from './add-ingredient/add-ingredient.component';
import { MatTableModule } from '@angular/material/table';
import { IngredientEditorComponent } from './ingredient-editor/ingredient-editor.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDialogModule } from '@angular/material/dialog';
import { MatExpansionModule } from '@angular/material/expansion';
import { RecipeEditorComponent } from './recipe-editor/recipe-editor.component';
import { ErrorsPipe } from './core/errors.pipe';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    AddRecipeComponent,
    AddIngredientComponent,
    IngredientEditorComponent,
    RecipeEditorComponent,
    ErrorsPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatDialogModule,
    MatExpansionModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
