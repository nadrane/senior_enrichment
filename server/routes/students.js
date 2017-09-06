const router = require('express').Router();
module.exports = router;
const models = require('../../db/models');
const Students = models.Students;

//get all students
router.get('/', ((req, res, next) => {
  Students.findAll({})
    .then(students => {
      res.json(students);
    })
    .catch(next);
}));

//get student by id
router.get('/:id', ((req, res, next) => {
  Students.findAll({
    where: {
      id: req.params.id
    }
  })
    .then(student => (
      res.json(student)
    ))
    .catch(next);
}));

//add new student if it doesn't exist, otherwise update location
router.post('/', ((req, res, next) => {
  Students.create(req.body)
  .then(student => {
    res.json(student);
  })
    .catch(next);
}));


//update student
router.put('/', ((req, res, next) => {
  Students.findOne({
    where: {
      id: req.body.id
    }
  })
    .then(studentToUpdate => {
      studentToUpdate.update(  // return me!
        req.body
      )
    })
    .then(() => {
      res.json("updated")
    })
    .catch(next);
  }))

//update student campus
// This route is just for updating the campus association of the student
// A more RESTful url might be PUT /students/:id/campus
// Notice that it's super confusing that we have two PUT urls, one that takes an ID and one that doesn't
// but which are otherwise identical
router.put('/:id', ((req, res, next) => {
  Students.findOne({
    where: {
      id: req.params.id
    }
  })
    .then(studentToUpdate => {
      // Let's use the Sequelize magic methods instead
      // Also, don't forget to return your promise, otherwise we send back
      // "updated" before the update ever happens
      // return studentToUpdate.setCampus(req.body.campusId);
      studentToUpdate.update(
        {campusId: req.body.campusId}
      )
    })
    .then(() => {
      // Return the updated student
      res.json("updated")
    })
    .catch(next)
}))

// delete student
router.delete('/:id', ((req, res, next) => {
  Students.destroy({
    where: {
      id: req.params.id
    }
  })
    .then(() => {
      res.json("student deleted")
    })
    .catch(next);
}))
