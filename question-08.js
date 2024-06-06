const students = [
  { name: "Alice", grade: 90 },
  { name: "Bob", grade: 70 },
  { name: "Charlie", grade: 85 },
];


const grades = students.filter(students => students.grade >80);

const getHighGrades = grades.map(student => student.name);

console.log(getHighGrades);