//! reason to create this model is to handle all the structure of the reciepe folder and objects dealing with it in one place.

export class Recipe {
  //? we define properties of the class and their type here
  public name: string;
  public description: string;
  public imagePath: string; 

  //? constructor is used to instantiate the object using new keyword
  constructor(name: string, description: string, imagePath: string) {
    //* this.property of class = parameter in the constructor
    this.name = name;
    this.description = description;
    this.imagePath = imagePath;
  }
}
