const express = require('express');
const router = express.Router();

const locationFunc = require('../controllers/location');

router
  .post('/',   locationFunc.create)
  .get('/',    locationFunc.getAll)
  .get('/:id', locationFunc.getById)
  .put('/:id', locationFunc.updateLocation)
  .delete('/:id', locationFunc.deleteLocation);
module.exports = router;
