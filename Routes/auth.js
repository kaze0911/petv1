import express from "express"
import { GetLogin, GetEmailLogin, GetRegister, PostLogin, PostEmailLogin, PostRegister} from "../Controller/auth.js";
const Routes = express.Router();

Routes.route('/login').get(GetLogin).post(PostLogin);
Routes.route('/email_login').get(GetEmailLogin).post(PostEmailLogin);
Routes.route('/register').get(GetRegister).post(PostRegister);


export default Routes