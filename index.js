const express = require('express');
const app = express();
const port = 3000;

const model = require('./models/index.js');
const Teacher = model.Teacher;
const Subject = model.Subject;

app.get('/', function(req, res) {
    res.send(`hello!`);
})

//TEACHER DISPLAY
app.get('/teacher', function(req, res) {
    Teacher.findAll({
        include: [{
            model: Subject
        }]
    })
        .then(function(teacher) {
            res.send(teacher)
        })
        .catch(function(err) {
            res.send(err)
        })
})

//SUBJECT DISPLAY
app.get('/subject', function (req, res) {
    Subject.findAll({
        include: [{
            model: Teacher
        }]
    })
        .then(function (subject) {
            res.send(subject)
        })
        .catch(function (err) {
            res.send(err)
        })
})



app.listen(port, function() {
    console.log(`the app is running: ${port}`)
})