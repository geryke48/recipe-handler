import { Component, OnInit } from '@angular/core';
import { AddIngredient } from '../domain/addIngredient'

@Component({
  selector: 'app-add-ingredient',
  templateUrl: './add-ingredient.component.html',
  styleUrls: ['./add-ingredient.component.scss']
})
export class AddIngredientComponent implements OnInit {
  displayedColumns = ['id','name', 'unit_of_measure'];

  ingredients: AddIngredient[] = [{
    id: 0,
    name: 'Milk',
    unit_of_measure: 'litre',
  },{
    id: 1,
    name: 'MSG',
    unit_of_measure: 'g',
  }];

  constructor() { }

  ngOnInit(): void {
  }

}
