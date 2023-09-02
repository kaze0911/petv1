import express from "express"
import { GetIndex } from '../Controller/index.js';
const Routes = express.Router();

Routes.route('/').get(GetIndex);

export default Routes