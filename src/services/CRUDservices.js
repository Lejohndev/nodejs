import bcrypt from 'bcryptjs';
import db from '../models/index';


const salt = bcrypt.genSaltSync(10);

let createNewUser = async (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            let hashPasswordFromBcypt = await hashUserPassword(data.password)
            await db.Users.create({
                email: data.email,
                password: hashPasswordFromBcypt,
                firstName: data.firstName,
                lastName: data.lastName,
                address: data.address,
                phonenumber: data.phonenumber,
                gender: data.gender === '1' ? true : false,
                RoleId: data.RoleId
            })

            resolve('ok create a new user succeed!')

        } catch (e) {
            reject(e);
        }
    })
}
let hashUserPassword = (password) => {
    return new Promise(async (resolve, reject) => {
        try {
            let hashPassword = await bcrypt.hashSync(password, salt);
            resolve(hashPassword);
        } catch (e) {
            reject(e);
        }


    })
}
let getAllUsers = () => {
    return new Promise(async (resolve, reject) => {
        try {
            let users = await db.Users.findAll({
                raw: true
            });
            resolve(users);

        } catch (e) {
            reject(e);
        }

    })
}
let getUserInfoByID = (userId) => {
    return new Promise(async (resolve, reject) => {
        try {
            let user = await db.Users.findOne({
                where: { id: userId },
                raw: true
            })
            if (user) {
                resolve(user)

            } else {
                resolve({})
            }
        } catch (e) {
            reject(e);
        }

    })
}
let updateUserData = (data) => {

    return new Promise(async (resolve, reject) => {
        try {
            let users = await db.Users.findOne({
                where: { id: data.id }
            })
            if (users) {
                users.firstName = data.firstName;
                users.lastName = data.lastName;
                users.address = data.address;

                await users.save()
                let allUser = await db.Users.findAll();
                resolve(allUser);
            } else {
                resolve();
            }

        } catch (e) {
            console.log(e)
        }
    })
}
let deleteUserbyId = (userId) => {
    return new Promise(async (resolve, reject) => {
        try {
            let user = await db.Users.findOne({
                where: { id: userId }
            })
            if (user) {
                await user.destroy();
            }
            resolve();
        } catch (e) {
            reject(e);
        }
    })

}
module.exports = {
    createNewUser: createNewUser,
    getAllUsers: getAllUsers,
    getUserInfoByID: getUserInfoByID,
    updateUserData: updateUserData,
    deleteUserbyId: deleteUserbyId
}