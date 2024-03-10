let getHomepage = (req, res) => {
    return res.render('homepag.ejs');
}
let getAboutPage = (req, res) => {
    return res.render('test/aboutme.ejs');
}
module.exports = {
    getHomepage: getHomepage,
    getAboutPage: getAboutPage
}