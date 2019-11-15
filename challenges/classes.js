// 1. Copy and paste your prototype in here and refactor into class syntax.

// function CuboidMaker(attrs) {
//     this.length = attrs.length;
//     this.width = attrs.width;
//     this.height = attrs.height;
//   }

// CuboidMaker.prototype.volume = function() {
//     return this.length * this.width * this.height;
// }

// CuboidMaker.prototype.surfaceArea = function() {
//     return  2 * (this.length * this.width + this.length * this.height + this.width * this.height)
// }

// const newCuboidMaker = new CuboidMaker({
//     length: 4,
//     width: 5,
//     height: 5
//   });


class CuboidMakerTwo {
    constructor(attrs) {
        this.length = attrs.length;
        this.width = attrs.width;
        this.height = attrs.height;
    }
    volume() {
        return this.length * this.width * this.height;
    }

    surfaceArea() {
        return  2 * (this.length * this.width + this.length * this.height + this.width * this.height); 
    }
}

const newCuboidMakerTwo = new CuboidMakerTwo({
    length: 4,
    width: 5,
    height: 5
  });

// Test your volume and surfaceArea methods by uncommenting the logs below:
console.log(newCuboidMakerTwo.volume()); // 100
console.log(newCuboidMakerTwo.surfaceArea()); // 130

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.

// class CubeMaker extends CuboidMaker {
//     constructor() {
//     super()
// }
// }