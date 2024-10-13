// import DoctorSevice from "../services/DoctorSevice";
// let getTopDoctorHome = async (req, res) => {
//     let limit = req.query.ltmit;
//     if (!limit) limit = 10;
//     try {
//         let respone = await DoctorSevice.getTopDoctorHome(+limit);
//         return res.status(200).json(respone);
//     } catch (e) {
//         console.log(e);
//         return res.status(200).json({
//             errCode: -1,
//             message: 'Err from serve...'
//         })
//     }
// }
// module.exports = {
//     getTopDoctorHome: getTopDoctorHome
// }