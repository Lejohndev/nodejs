import express from "express";
import bodyParser from "body-parser";
import viewEngine from "./config/viewEngine";
import initwebRoutes from './route/web';
require('dotenv').config();
let app = express();

//config app
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))

viewEngine(app);
initwebRoutes(app);
let port = process.env.PORT || 6969;
//port ===undfined => port =6969;
app.listen(port, () => {
    console.log("backend Nodejs is runing on the port : " + port)

})