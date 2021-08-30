// // store data in local storage

// localStorage.setItem("name", "mario");
// localStorage.setItem("age", 50);
// // get data from local storage
// let name = localStorage.getItem("name");
// let age = localStorage.getItem("age");
// console.log(name, age);

// localStorage.age = "40";
// age = localStorage.getItem("age");
// console.log(age);

// // deleting data from local storage
// // localStorage.removeItem("name");
// // localStorage.removeItem("age");
// localStorage.clear();
// name = localStorage.getItem("name");
// age = localStorage.getItem("age");
// console.log(name, age);

// storing complex data in local storage like an array
// converting the data into a string

const todos = [
  { text: "play mariokart", author: "shaun" },
  { text: "buy some milk", author: "mario" },
  { text: "buy some bread", author: "luigi" },
];

// console.log(JSON.stringify(todos));
localStorage.setItem("todos", JSON.stringify(todos));

const stored = localStorage.getItem("todos");
console.log(JSON.parse(stored));
