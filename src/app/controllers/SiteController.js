const Course = require('../models/Course')
const { multilMo } = require('../../util/mongoose')

class SiteController {
    show(req, res) {
        Course.find({})
            .then(course => {
                //course = course.map(course => course.toObject())
                
                res.render('home', { course: multilMo(course)})
            })
            .catch(err => {
                res.status(400).json({ error: err.message})
            })
        


        //res.send('SHOW SITE!!!!!!')
        //res.render('home')
    }
    search(req, res) {
        res.render('search')
    }
}

module.exports = new SiteController