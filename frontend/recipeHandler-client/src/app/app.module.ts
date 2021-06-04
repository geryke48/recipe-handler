import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MenuComponent } from './menu/menu.component';
import { MatListModule}  from '@angular/material/list';
import { AddRecipeComponent } from './add-recipe/add-recipe.component';
import { AddIngredientComponent } from './add-ingredient/add-ingredient.component';
import { MatTableModule } from '@angular/material/table';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    AddRecipeComponent,
    AddIngredientComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
    MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
