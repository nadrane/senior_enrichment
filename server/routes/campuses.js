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

//add new campus
router.post('/', ((req, res, next) => {
  Campuses.create(req.body)
    .then((campus) => {
      res.json(campus);
    })
    .catch(next);
}));

//update campus

//It would be more RESTful to accept the id in the uri. like this
//router.put('/:id', ((req, res, next) => {
router.put('/', ((req, res, next) => {
  return Campuses.findOne({
    where: {
      id: req.body.id
    }
  })
    .then(campusToUpdate => {
      return campusToUpdate.update({  //Make sure to return your promise!
        location: req.body.location
      });
    })
    .then(updatedCampus => res.json(updatedCampus))
    //And make sure that you send back the updated campus
    .catch(next);
}));

// delete campus
router.delete('/:id', ((req, res, next) => {
  return Campuses.destroy({
    where: {
      id: req.params.id
    }
  })
    .then(() => {
      res.json('campus deleted');
    })
    .catch(next);

}));

