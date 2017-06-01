const express = require('express');
const router = express.Router();

const classFunc = require('../controllers/class');

router
  .post('/',   classFunc.create)
  .get('/',    classFunc.getAll)
  .get('/:id', classFunc.getById)
  .put('/:id', classFunc.updateClass)
  .delete('/:id', classFunc.deleteClass);
  
module.exports = router;
