const newRouter = require('./news')
const siteRouter = require('./site')
const courseRouter = require('./courses')


function routene(app) {
    app.use('/news', newRouter)
    app.use('/course', courseRouter)

    app.use('/', siteRouter)

}

module.exports = routene