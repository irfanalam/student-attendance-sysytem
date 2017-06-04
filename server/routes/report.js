const express = require('express');
const router = express.Router();

const reportFunc = require('../controllers/class');

router
  .post('/',   reportFunc.create)
  .get('/',    reportFunc.getAll)
  .get('/:id', reportFunc.getById)
  .put('/:id', reportFunc.updateReport)
  
module.exports = router;
