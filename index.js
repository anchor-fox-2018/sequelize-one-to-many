const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 65534;

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());


const model = require('./models/index.js');
const Teacher = model.Teacher;
const Subject = model.Subject;

app.get('/', function(req, res) {
    res.render('index.ejs', {test: 'hi'});
})

//TEACHER PAGE
app.get('/teacher', function(req, res) {
    Teacher.findAll({
        include: [{
            model: Subject
        }]
    })
        .then(function(teacher) {
            // res.send(teacher)
            res.render('teacher.ejs', {teacher: teacher});
        })
        .catch(function(err) {
            res.send(err)
        })
})

// TEACHER DISPLAY
app.get('/teacherdisplay', function (req, res) {
    Teacher.findAll({
            include: [{
                model: Subject
            }]
        })
        .then(function (teacher) {
            // res.send(teacher)
            res.send(teacher);
        })
        .catch(function (err) {
            res.send(err)
        })
})

//SUBJECT PAGE
app.get('/subject', function (req, res) {
    Subject.findAll({
        include: [{
            model: Teacher
        }]
    })
        .then(function (subject) {
            res.render('subject.ejs', {subject: subject})
        })
        .catch(function (err) {
            res.send(err)
        })
})

//SUBJECT DISPLAY
app.get('/subjectdisplay', function (req, res) {
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