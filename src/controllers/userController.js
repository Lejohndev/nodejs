import userServices from "../services/userServices";
let handleLogin = async (req, res) => {
    let email = req.body.email;
    let password = req.body.password;
    if (!email || !password) {
        return res.status(500).json({
            errCode: 1,
            message: 'missing inputs parameter!'
        })
    }
    let userData = await userServices.handleUserLogin(email, password);

    return res.status(200).json({
        errCode: userData.errCode,
        message: userData.errMessage,
        user: userData.user ? userData.user : {}
    })

}
let HandleGetAllUser = async (req, res) => {
    let id = req.query.id;
    let users = await userServices.GetAllUser(id);
    console.log(users);
    return res.status(200).json({
        errCode: 0,
        errMessage: 'OK',
        users
    })
}
module.exports = {
    handleLogin: handleLogin,
    HandleGetAllUser: HandleGetAllUser
}