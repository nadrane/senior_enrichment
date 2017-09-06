'use strict';
var Sequelize = require('sequelize');
var db = require('../index.js');

const Students = db.define('students', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  email: {
    type: Sequelize.STRING,
    isEmail: true,
    isUnique: true,
    allowNull: false
  },

  //This field will automatically be added by the association! No need to include it
  campusId: {
    type: Sequelize.INTEGER,
    allowNull: false
  }
});

module.exports = Students;
