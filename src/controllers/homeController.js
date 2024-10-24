
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
let DisplayGetCRUD = async (req, res) => {
    let data = await CRUDservices.getAllUsers();
    return res.render('DisplayGetCRUD.ejs', {
        dataTable: data
    });
}
let geteditCRUD = async (req, res) => {
    let userId = req.query.id;
    if (userId) {
        let userData = await CRUDservices.getUserInfoByID(userId);
        //check 


        //let userData
        return res.render('test/editCRUD.ejs', {
            user: userData
        });
    } else {
        return res.send('user not found!!')
    }
}
let putCRUD = async (req, res) => {
    let data = req.body;
    let allUser = await CRUDservices.updateUserData(data);
    return res.render('DisplayGetCRUD.ejs', {
        dataTable: allUser
    });

}

let deleteCRUD = async (req, res) => {
    let id = req.query.id;
    if (id) {
        await CRUDservices.deleteUserbyId(id);
        return res.send('delete the user succeed!')
    } else {
        return res.send('User not found');
    }

}
module.exports = {
    getHomepage: getHomepage,
    getAboutPage: getAboutPage,
    getCRUD: getCRUD,
    postCRUD: postCRUD,
    DisplayGetCRUD: DisplayGetCRUD,
    geteditCRUD: geteditCRUD,
    putCRUD: putCRUD,
    deleteCRUD: deleteCRUD
}