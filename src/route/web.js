import express from "express";
import homeController from "../controllers/homeController";
let router = express.Router();

let initwebRoutes = (app) => {
    router.get('/', homeController.getHomepage);
    router.get('/about', homeController.getAboutPage);
    router.get('/crud', homeController.getCRUD);

    router.post('/post-crud', homeController.postCRUD);
    router.get('/get-crud', homeController.DisplayGetCRUD);
    router.get('/edit-crud', homeController.geteditCRUD);
    router.post('/put-crud', homeController.putCRUD);
    return app.use("/", router);
}
module.exports = initwebRoutes;

