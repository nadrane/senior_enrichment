'use strict';
var Sequelize = require('sequelize');
var db = require('../index.js');
const Students = require('./students');

const Campuses = db.define('campuses', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  location: {
    type: Sequelize.STRING,
    allowNull: false
  }
});

// Campuses.beforeDestroy((campus) => {
//   return Students.destroy({
//     where: {
//       campusId: campus.id
//     }
//     .then(students => {
//       console.log("students from deleted campus were purged")
//     })
//   })
// });

module.exports = Campuses;

