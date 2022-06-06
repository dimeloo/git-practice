/* Classes

class Circle {
  constructor() {
    this.width = 10
    this.height = 10
  }
}

const circle1 = new Circle
const circle2 = new Circle

console.log(circle1)
console.log(circle2)


class Book{
    constructor(paramTitle, paramYear, paramPage){
        this.title = paramTitle
        this.year = paramYear
        this.page = paramPage
    }
}

const bookOne = new Book('Moby', 1999, 50)
const book2 = new Book('Worm', 2009, 100)

console.log(bookOne)
console.log(book2)
*/

/******** Inheritance */

class Animal {
    static numberOfAnimal = 1

    constructor(propCute, propName) { // database, holds data
    this.animalCute = propCute
    this.animalName = propName

  }
  isSleeping(){
      return 'Zzzz yes it is'
  }
  isEating(){
      return 'nom nom nom'
  }
}

class Fish extends Animal {
  constructor(animalCute, animalName, propSkinType) { // database, holds data
    super(animalCute, animalName)
    this.skinType = propSkinType
  }
  isSwimming(){
    return 'splish splash'
}
}

const cat = new Animal('Yes', 'Coco the Cat')
// const dog = new Dog('Yes', 'Winston', 'Furry')
const fish = new Fish('Yes', 'Wanda', 'Scales')

console.log(cat)
console.log(cat.isSleeping())
console.log(cat.isEating())
console.log(fish)
console.log(fish.isSleeping())
console.log(fish.isEating())