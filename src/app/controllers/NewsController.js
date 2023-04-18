class NewsController {
    index(req, res) {
        res.render('news')
    }
    show(req, res) {
        res.send('SHOW DETAIL!!!!!!')
    }
}

module.exports = new NewsController