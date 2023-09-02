import express from "express"
import { GetUsers} from "../Controller/account.js";
const Routes = express.Router();

Routes.route('/user').get(GetUsers);

export default Routes