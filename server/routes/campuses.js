const router = require('express').Router();
const models = require('../../db/models');
const Campuses = models.Campuses;
var Promise = require('bluebird');
module.exports = router;

//get all campuses
router.get('/', ((req, res, next) => {
  Campuses.findAll({})
    .then(campuses => {
      res.json(campuses);
    })
    .catch(next);
}));

//get campus by id
router.get('/:id', ((req, res, next) => {
  Campuses.findAll({
    where: {
      id: req.params.id
    }
  })
    .then(campuses => (
      res.json(campuses)
    ))
    .catch(next);
}));

//add new campus if it doesn't exist, otherwise update location
router.post('/', ((req, res, next) => {
  Campuses.findOrCreate({
    where: {
      name: req.body.name
    },
    defaults: {
      location: req.body.location
    }
  })
    .spread((campus, created) => {
      if (!created) {
        return campus.update({
          location: req.body.location
        })
          .then((updatedCampus) => {
            res.json(updatedCampus);
          });
      }
      else {
        res.json(campus);
      }
    })
    .catch(next);
}));

//update campus
router.put('/', ((req, res, next) => {
  return Campuses.findOne({
    where: {
      id: req.body.id
    }
  })
    .then(campusToUpdate => {
      campusToUpdate.update({
        location: req.body.location
      })
    })
    .catch(next);
}));

// delete campus
router.delete('/:id', ((req, res, next) => {
  return Campuses.destroy({
    where: {
      id: req.params.id
    }
  })
    .then((deletedCampus) => {
      res.json('campus deleted');
    })
    .catch(next);

}));

