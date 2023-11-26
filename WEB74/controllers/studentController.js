const students = [
  { id: 1, name: 'Wendy', age: 20 },
  { id: 2, name: 'Sehun', age: 28 },
  { id: 3, name: 'Irene', age: 29 },
];

exports.getStudents = (req, res) => {
  const { page = 1, limit = 10 } = req.query;
  const startIndex = (page - 1) * limit;
  const endlIndex = page * limit;
  const results = students.slice(startIndex, endlIndex);

  results.json(results);
};

exports.getStudentById = (req, res) => {
  const { id } = req.params;
  const student = students.find((student) => student.id === parseFloat(id));

  if (!student) {
    return res.status(404).json({ message: 'Student not found' });
  }

  response.json(student);
};

exports.filterStudent = (req, res) => {
  const { age, name } = req.query;
  let filteredStudents = students;

  if (age) {
    filteredStudents = filteredStudents.filter((student) => student.age === parseInt(age));
  }

  if (name) {
    filteredStudents = filteredStudents.filter((student) => student.name.toLowerCase().includes(name.toLowerCase()));
  }

  res.json(filteredStudents);
};

