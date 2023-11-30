// const fs = require("fs");

// students = fs.readFileSync("students.json");
// console.log("student", JSON.parse(students));

// function createStudent() {
//   const students = JSON.parse(fs.readFileSync("students.json"));
//   console.log(students)
//   const student = {
//     id: Math.random() * 1000,
//     name: "Student" + Math.random().toString(36).substring(2, 7),
//     age: Math.random() * 100,
//     gender: Math.random() > 0.5 ? "male" : "female",
//   };
//   const results = [...students, { ...student }];
//   fs.writeFileSync("students.json", JSON.stringify(results));
// }

// function main() {

//   createStudent();
// }
// main()


const express = require('express');
const studentRoutes = require('./routes/studentRoutes');

const app = express();

// sử đụng các routes của sinh viên
app.use('/students', studentRoutes);

// khởi chạy
app.listen(3000, () => {
  console.log('Server started on port 3000');
});