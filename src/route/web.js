import express from "express";
import homeController from "../controllers/homeController";
import userController from "../controllers/userController";
import doctorController from "../controllers/doctorController"
let router = express.Router();


let initwebRoutes = (app) => {
    router.get('/', homeController.getHomepage);
    router.get('/create', homeController.getCRUD);

    router.post('/post-crud', homeController.postCRUD);
    router.get('/edituser', homeController.DisplayGetCRUD);
    router.get('/edit-crud', homeController.geteditCRUD);
    router.post('/put-crud', homeController.putCRUD);
    router.get('/delete-crud', homeController.deleteCRUD);
    router.post('/api/login', userController.handleLogin);
    router.get('/api/get-all-user', userController.HandleGetAllUser);
    router.get('/api/top-doctor-home', userController.getTopDoctorHome)
    return app.use("/", router);
}
module.exports = initwebRoutes;

