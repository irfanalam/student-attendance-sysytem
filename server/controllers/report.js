const validator = require('validator');

const models = require('../models');
const Report = models.report;

module.exports = {

  create: function (req, res, next) {
    const validateResult = validateClassBody(req.body);
    if (!validateResult.success) {
      return res.status(400).json({
        success: false,
        message: validateResult.message,
        errors: validateResult.errors
      }).end();
    }

    Report.create(req.body)
    .then((data) => {
      if (!data) {
        res.status(400).send({ 
          success: false, message: 'Report was failed to send.' 
        });
      } else if (data) {
        return res.status(200).json({ 
          success: true, message: 'Succesfully sent report', report: data 
        }).end();
      }
    })
    .catch((err) => {
        return res.status(500).json({ success: false, message: "Internal Server Error" }).end();
    });

  },

  getAll: function (req, res, next) {
    Report.findAll({})
    .then((report) => {
        if(classes === null) {
            return res.status(400).json({ success: false, message: "No Report(s) Exist" }).end();
        }
        return res.status(200).json({ success: true, report }).end();
    });
  },

  getById: function (req, res, next) {
    var id = req.params.id;
    if (!id) {
        return res.status(400).json({ success: false, message: "Parameter is missing" }).end();
    }

    Report.findOne({
        where: { id : id }
    })
    .then((classes) => {
        if(classes === null) {
            return res.status(400).json({ success: false, message: "No Report Found" }).end();
        }
        return res.status(200).json({ success: true, report }).end();
    })
    .catch(function(err) {
        console.log(err);
        return res.status(500).json({ success: false, message: "Internal Server Error" }).end();
    })
  },
  
  deleteReport: function(req, res, next){
    var id = req.params.id;
    if (!id) {
        return res.status(400).json({ success: false, message: "Parameter is missing" }).end();
    }

    Report.destroy({
        where: { id : id }
    })
    .then(function() {
        return res.status(200).send({"msg": "Succesfully deleted report."}).end();
    })
    .catch(function(err) {
        console.log(err);
        return res.status(500).send({"msg" : "Internal Server Error. Please try again later."}).end();
          })
  }, // end of delete

//   updateClass: function (req, res, next) {
//     const validateResult = validateClassBody(req.body);
//     if (!validateResult.success) {
//       return res.status(400).json({
//         success: false,
//         message: validateResult.message,
//         errors: validateResult.errors
//       }).end();
//     }

//     let myClass = req.body;
//     let id = req.params.id;

//     Classes.update(myClass, { where: { id: id } })
//     .then((data) => {
//         return Classes.findOne({ where: { id : id } });
//     })
//     .then((data) => {
//         return res.status(200).json({ 
//             success: true, message: 'Succesfully updated class', class: data 
//         }).end();
//     })
//     .catch((error) => {
//         console.log(err);
//         return res.status(500).json({ success: false, message: "Internal Server Error" }).end();
//     })
//   },

};

function validatReportBody(payload) {
  const errors = {};
  let isFormValid = true;
  let message = '';

  if (!payload || typeof payload.report_subject !== 'number' || payload.report_subject.trim().length === 0) {
    isFormValid = false;
    errors.class_no = 'Please provide subject';
  }
  if (!payload || typeof payload.report_description !== 'string' || payload.report_description.trim().length === 0) {
    isFormValid = false;
    errors.class_assign = 'Please provide description';
  }

  if (!isFormValid) {
    message = 'Check the form for errors';
  }

  return {
    success: isFormValid,
    message,
    errors
  }
}