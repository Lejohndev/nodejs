// import { where } from "sequelize";
// import db from "../models/index";
// import { Router } from "express";
// let getTopDoctorHome = (limitInput) => {
//     return new Promise(async (resolve, reject) => {
//         try {
//             let users = await db.Users.finAll({
//                 limit: limitInput,
//                 where: { Router: 'R2' },
//                 order: [['createAt', 'DESC']],
//                 attributes: {
//                     exclude: ['password']
//                 },
//                 include: [
//                     { model: db.Allcode, as: 'positionData', attrubutes: ['valueEn', 'valueVi'] },
//                     { model: db.Allcode, as: 'genderData', attrubutes: ['valueEn', 'valueVi'] },
//                 ],
//                 raw: true,
//                 mest: true
//             })
//             resolve({
//                 errCode: 0,
//                 data: users
//             })
//         } catch (e) {
//             reject(e);
//         }

//     })
// }
// module.exports = {
//     getTopDoctorHome: getTopDoctorHome
// }