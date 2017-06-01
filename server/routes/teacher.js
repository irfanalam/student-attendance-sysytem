const express = require('express');
const router  = express.Router();

const tchrFunc = require('../controllers/teacher');

router
    .post('/', tchrFunc.create)
    .get('/', tchrFunc.getAll)
    .get('/:id', tchrFunc.getById)
    .get('/:id/class', tchrFunc.getClassesByTeacherId)
    .put('/:id', tchrFunc.updateTeacher)
    .delete('/:id', tchrFunc.deleteTeacher);

module.exports = router;