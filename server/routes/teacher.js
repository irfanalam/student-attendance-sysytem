const express = require('express');
const router  = express.Router();

const tchrFunc = require('../controllers/teacher');

router
    .post('/', tchrFunc.create)
    .get('/', tchrFunc.getAll)
    .get('/:id', tchrFunc.getById)
    .put('/:id', tchrFunc.updateTeacher)
    .delete('/:id', tchrFunc.deleteTeacher);

module.exports = router;