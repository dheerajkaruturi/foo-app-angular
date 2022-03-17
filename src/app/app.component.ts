import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  //? lets set the id by default to a component
  loadedFeature: string = 'recipe';

  onNavigate(navigateID: string) {
    this.loadedFeature = navigateID;
  }
}
