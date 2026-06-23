const getHomepage = (req, rss) => {
    res.send('Hello World! & nodemon')
}

const getABC = (req, res) => {
    res.send('check ABC')
}

const getHoiVanh = (req, res) => {
    res.render('sample.ejs')
}

module.exports = {
    getHomepage, getABC, getHoiVanh
}