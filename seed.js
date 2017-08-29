const Models = require('./db/models');
const Campuses = Models.Campuses;
const Students = Models.Students;
const db = require('./db/');

const campuses = [
    { name: 'Mars', location: 'Chicago'},
    { name: 'Tera', location: 'Memphis'},
    { name: 'Titan', location: 'Boston'},
    { name: 'Luna', location: 'Milwaukee'}
];

const id = () => Math.round(Math.random() * (campuses.length - 1)) + 1;

const students = [
    { campusId: id(), name: 'Steve Aksamit', email: 'steve@gmail.com'},
    { campusId: id(), name: 'Eric Peterson', email: 'eric@gmail.com'},
    { campusId: id(), name: 'Wendy Guilfoyle', email: 'wendy@gmail.com'},
    { campusId: id(), name: 'Sanjiv Peters', email: 'sanjeev@yahoo.com'},
    { campusId: id(), name: 'Sam Tomleson', email: 'sam@gmail.com'},
    { campusId: id(), name: 'Katie Macabe', email: 'katie@gmail.com'},
    { campusId: id(), name: 'Tom Jordan', email: 'tom@gmail.com'},
    { campusId: id(), name: 'Kevin Smith', email: 'kevin@yahoo.com'},
    { campusId: id(), name: 'Janice Piermont', email: 'janice@gmail.com'},
    { campusId: id(), name: 'Jenny Foreman', email: 'jenny@gmail.com'},
    { campusId: id(), name: 'Chris Evans', email: 'chris@gmail.com'},
    { campusId: id(), name: 'Nancy Salb', email: 'nancy@yahoo.com'},
    { campusId: id(), name: 'Dave Nelson', email: 'dave@msn.com'},
    { campusId: id(), name: 'Bruce Jones', email: 'bruce@gmail.com'},
    { campusId: id(), name: 'Marty Brady ', email: 'marty@gmail.com'},
    { campusId: id(), name: 'Amanda Anderson', email: 'amanda@yahoo.com'},
    { campusId: id(), name: 'Greg Tolan', email: 'greg@gmail.com'},
    { campusId: id(), name: 'Dennis Payonk', email: 'dennis@gmail.com'},
    { campusId: id(), name: 'Anne Colley', email: 'anne@gmail.com'},
    { campusId: id(), name: 'Kelly Michaels', email: 'kelly@yahoo.com'},
    { campusId: id(), name: 'Ben Timmers', email: 'ben@msn.com'},
    { campusId: id(), name: 'Mike Roberts', email: 'mike@gmail.com'},
    { campusId: id(), name: 'Sara Wade', email: 'sara@gmail.com'},
    { campusId: id(), name: 'Jake Byerly', email: 'jake@yahoo.com'}
];

const seedData = () =>
Promise.all(campuses.map(campus =>
  Campuses.create(campus))
)
.then(() =>
Promise.all(students.map(student =>
  Students.create(student))
));

const runSeed = () => {
console.log('Starting DB Seed...');
db.sync({ force: true })
  .then(() => {
    console.log('DB Seeding Complete!!!');
    return seedData();
  })
  .catch(err => {
    console.log('Seed error', err);
  })
  .then(() => {
    db.close();
    return null;
  });
};

runSeed();
