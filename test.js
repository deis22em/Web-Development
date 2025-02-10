// class Rectangle {
//   constructor(width, height) {
//     this.width = width;
//     this.height = height;
//   }

//   getArea() {
//     return this.width * this.height;
//   }

//   static isSquare(rectangle) {
//     return rectangle.width === rectangle.height;
//   }
// }

// const rect = new Rectangle(100, 300);
// console.log("Area of rectangle:", rect.getArea());
// console.log("Is rectangle a square?", Rectangle.isSquare(rect));

// const square = new Rectangle(10, 10);
// console.log("Area of rectangle:", square.getArea());
// console.log("Is rectangle a square?", Rectangle.isSquare(square));

const fruits = ["apple", "banana", "apple", "cherry", "banana", "apple"];

const fruitCount = fruits.reduce((count, fruit) => {
  count[fruit] = (count[fruit] || 0) + 1;
  return count;
}, {});

console.log(fruitCount);

// 1p2  Assignment 6

const users = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
  { id: 3, name: "Charlie" },
];

const userName = users.map((user) => user.name);

console.log(userName);
