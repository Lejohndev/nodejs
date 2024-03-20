
import db from '../models/index';
import CRUDservices from '../services/CRUDservices';
let getHomepage = async (req, res) => {
    try {
        let data = await db.Users.findAll();
        return res.render('homepage.ejs', {
            data: JSON.stringify(data)
        });



    } catch (e) {
        console.log(e)
    }

}
let getAboutPage = (req, res) => {
    return res.render('test/aboutme.ejs');
}
let getCRUD = (req, res) => {
    return res.render('test/crud.ejs');
}
let postCRUD = async (req, res) => {
    let message = await CRUDservices.createNewUser(req.body);
    console.log(message)
    return res.send('post crud from sever');
}
module.exports = {
    getHomepage: getHomepage,
    getAboutPage: getAboutPage,
    getCRUD: getCRUD,
    postCRUD: postCRUD,
}