const express = require('express');
const studentController = require('../controllers/studentController');

const router = express.Router();

//API get student
router.get('/', studentController.getStudents);
//API get student by id
router.get('/:id', studentController.getStudentById);
//API get fillter student
router.get('/filter', studentController.filterStudent);

module.exports = router;