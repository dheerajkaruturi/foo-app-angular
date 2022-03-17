import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe } from '../recipebook.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit {
  @Output() recipeSelected = new EventEmitter<Recipe>();

  //? when ever we create a new instance using new reciepe that creates an object inside the array.
  recipes: Recipe[] = [
    new Recipe(
      'A test Recipe',
      'This is a test',
      'https://media.istockphoto.com/photos/tandoori-chicken-lollipop-picture-id1213426697'
    ),
    new Recipe(
      'Chicken 65',
      'Some test description',
      'https://2.bp.blogspot.com/-krThyr2AOHg/VZbFVhbld_I/AAAAAAADIrA/TTF0VRXznOA/s1600/1..JPG'
    ),
  ];
  constructor() {}

  ngOnInit(): void {} 

  onRecipeSelected(recipe: Recipe) {
    this.recipeSelected.emit(recipe);
  }
}
