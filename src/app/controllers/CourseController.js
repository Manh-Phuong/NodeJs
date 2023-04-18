const Course = require('../models/Course')
const { multilMo } = require('../../util/mongoose')

class CourseController {
    show(req, res) {
        Course.find({})
            .then(course => {
                //course = course.map(course => course.toObject())

                res.render('home', { course: multilMo(course) })
            })
            .catch(err => {
                res.status(400).json({ error: err.message })
            })



        //res.send('SHOW SITE!!!!!!')
        //res.render('home')
    }
    create(req, res) {
        res.render('courses/create')
    }

    store(req, res) {
       const course = new Course(req.body)
       course.save()
            .then(() => res.redirect('/'))
            .catch( err => {
                
            })
    }
}

module.exports = new CourseController