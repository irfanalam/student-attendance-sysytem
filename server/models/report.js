'use strict';
module.exports = function(sequelize, DataTypes) {
  var report = sequelize.define('report', {
    report_subject: DataTypes.STRING,
    report_description:DataTypes.STRING,

  }, {
    ReportMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return report;
};