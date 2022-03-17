import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { RecipebookComponent } from './recipebook/recipebook.component';
import { RecipeListComponent } from './recipebook/recipe-list/recipe-list.component';
import { RecipeDetailComponent } from './recipebook/recipe-detail/recipe-detail.component';
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';
import { ReciepeItemComponent } from './recipebook/recipe-list/reciepe-item/reciepe-item.component';
import { DropdownDirective } from './shared/dropdown.directive';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ShoppingListComponent,
    RecipebookComponent,
    RecipeListComponent,
    RecipeDetailComponent,
    ShoppingEditComponent,
    ReciepeItemComponent,
    DropdownDirective
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
