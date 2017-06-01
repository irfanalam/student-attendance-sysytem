const express = require('express');
const router = express.Router();

const parentFunc = require('../controllers/parent');

router
  .post('/',   parentFunc.create)
  .get('/',    parentFunc.getAllParents)
  .get('/:id', parentFunc.getById)
  .put('/:id', parentFunc.updateParent)
  .delete('/:id', parentFunc.deleteParent);

module.exports = router;
