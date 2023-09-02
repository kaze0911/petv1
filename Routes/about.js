import express from "express"
import {GetAbout} from "../Controller/about.js";
const Routes = express.Router();

Routes.route('/').get(GetAbout);



export default Routes