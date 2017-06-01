const express = require('express');
const router = express.Router();

const stdFunc = require('../controllers/student');

router
  .post('/',   stdFunc.create)
  .get('/',    stdFunc.getAll)
  .get('/class/:id', stdFunc.getStudentsByClassId)
  .get('/:id', stdFunc.getById)
  .put('/:id', stdFunc.updateStudent)
  .delete('/:id', stdFunc.deleteStudent);

module.exports = router;
