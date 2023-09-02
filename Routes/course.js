import express from "express"
import { GetBooking, GetCourse,  PostBooking,  GetDetails, PostDetails,} from '../Controller/course.js';
import { GetNew, PostNewLesson, GetId} from "../Controller/course.js";
const Routes = express.Router();

Routes.route('/').get(GetCourse).post(PostNewLesson);
Routes.route('/new').get(GetNew);
Routes.route('/:id').get(GetId);


Routes.route('/book').get(GetBooking).post(PostBooking);
Routes.route('/details').get(GetDetails).post(PostDetails);


export default Routes