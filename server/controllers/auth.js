const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt-nodejs');
const validator = require('validator');

// Models
const models = require('../models');
const Admins = models.admins;
const Parents = models.parents;
const Students = models.students;
const Teachers = models.teachers;

module.exports = {

  loginAdminUser: (req, res, next) => {
    const { username, password } = req.body;
    const validateResult = validateLoginFormBody(req.body); // { username, password }
    if (!validateResult.success) {
      return res.status(400).json({
        success: false,
        message: validateResult.message,
        errors: validateResult.errors,
      }).end();
    }

    Admins.findOne({ where: { username: username } })
      .then((admin) => {
        if (!admin) {
          return res.status(400).json({ success: false, message: 'Authentication Failed, Username doesn\'t exist' }).end();
        } else {
          if (!bcrypt.compareSync(password, admin.password)) {
            return res.status(400).json({ success: false, message: 'Authentication Failed, Wrong Password' }).end();
          } else {
            const payload = { admin };
            const token   = jwt.sign(payload, req.app.get('superSecret'), { expiresIn: '72h' });
            return res.status(200).json({ success: true, message: 'Enjout Your Token', token }).end();
          }
        }
      })
      .catch((error) => {
        // console.log(error);
        return res.status(500).json({ success: false, message: 'Internal Server Error' }).end();
      });
  },

  loginParentUser: (req, res, next) => {
    const { username, password } = req.body;
    const validateResult = validateLoginFormBody(req.body); // { username, password }
    if (!validateResult.success) {
      return res.status(400).json({
        success: false,
        message: validateResult.message,
        errors: validateResult.errors,
      }).end();
    }

    Parents.findOne({ where: { username: username } })
      .then((parent) => {
        if (!parent) {
          return res.status(400).json({ success: false, message: 'Authentication Failed, Username doesn\'t exist' }).end();
        } else {
          if (!bcrypt.compareSync(password, parent.password)) {
            return res.status(400).json({ success: false, message: 'Authentication Failed, Wrond Password' }).end();
          } else {
            const payload = { parent };
            const token   = jwt.sign(payload, req.app.get('superSecret'), { expiresIn: '72h' });
            return res.status(200).json({ success: true, message: 'Enjout Your Token', token }).end();
          }
        }
      })
      .catch((error) => {
        // console.log(error);
        return res.status(500).json({ success: false, message: 'Internal Server Error' }).end();
      });
  },

  loginStudentUser: (req, res, next) => {
    const { username, password } = req.body;
    const validateResult = validateLoginFormBody(req.body); // { username, password }
    if (!validateResult.success) {
      return res.status(400).json({
        success: false,
        message: validateResult.message,
        errors: validateResult.errors,
      }).end();
    }

    Students.findOne({ where: { username: username } })
      .then((student) => {
        if (!student) {
          return res.status(400).json({ success: false, message: 'Authentication Failed, Username doesn\'t exist' }).end();
        } else {
          if (!bcrypt.compareSync(password, student.password)) {
            return res.status(400).json({ success: false, message: 'Authentication Failed, Wrond Password' }).end();
          } else {
            const payload = { student };
            const token   = jwt.sign(payload, req.app.get('superSecret'), { expiresIn: '72h' });
            return res.status(200).json({ success: true, message: 'Enjout Your Token', token }).end();
          }
        }
      })
      .catch((error) => {
        // console.log(error);
        return res.status(500).json({ success: false, message: 'Internal Server Error' }).end();
      });
  },

  loginTeacherUser: (req, res, next) => {
    const { username, password } = req.body;
    const validateResult = validateLoginFormBody(req.body); // { username, password }
    if (!validateResult.success) {
      return res.status(400).json({
        success: false,
        message: validateResult.message,
        errors: validateResult.errors,
      }).end();
    }

    Teachers.findOne({ where: { username: username } })
      .then((teacher) => {
        if (!teacher) {
          return res.status(400).json({ success: false, message: 'Authentication Failed, Username doesn\'t exist' }).end();
        } else {
          if (!bcrypt.compareSync(password, teacher.password)) {
            return res.status(400).json({ success: false, message: 'Authentication Failed, Wrond Password' }).end();
          } else {
            const payload = { teacher };
            const token   = jwt.sign(payload, req.app.get('superSecret'), { expiresIn: '72h' });
            return res.status(200).json({ success: true, message: 'Enjout Your Token', token }).end();
          }
        }
      })
      .catch((error) => {
        // console.log(error);
        return res.status(500).json({ success: false, message: 'Internal Server Error' }).end();
      });
  },


  getProfile: (req, res) => {
    return res.status(200).json({
       success: true,
      teacher: {
      id:1,
      name:"teacher 1"
    }
  });
     
    //  console.log(req.query.query);
    // if (req.query.query ) {
    //       var authorization = req.query.query,
    //           decoded;
    //       console.log(authorization, req.app.get('superSecret'));
    //       jwt.verify(authorization, req.app.get('superSecret'), function(err, decoded) {     
    //           if (err) {
    //             return res.json({ success: false, message: 'Failed to authenticate token.' });    
    //           } else {
    //             // if everything is good, save to request for use in other routes
    //             req.decoded = decoded;    
    //             next();
    //             var userId = decoded;
    //             //Fetch the user by id 
    //             Teachers.findOne({ where: { id: userId } })
    //           .then((teacher) => {
    //               return res.sendStatus(200).json({teacher: teacher});
    //           });
    //           }
    //         });
    //       // try {
    //       //     decoded = jwt.verify(authorization, req.app.get('superSecret'));
    //       // } catch (e) {
    //       //     return res.status(401).send('unauthorized');
    //       // }
          
    //   }
    //   return res.sendStatus(500);
  }
};

function validateLoginFormBody(payload) {
  const errors = {};
  let isFormValid = true;
  let message = '';

  if (!payload || typeof payload.username !== 'string' || payload.username.trim().length === 0) {
    isFormValid = false;
    errors.username = 'Please provide your username';
  }

  if (!payload || typeof payload.password !== 'string' || payload.password.trim().length === 0) {
    isFormValid = false;
    errors.password = 'Please provide your password';
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