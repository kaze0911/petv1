import express from 'express';
import { GetService, GetActivity, GetPhoto, GetSpa, GetVet } from '../Controller/service.js';
import { PostSpa  } from '../Controller/service.js';
import { GetNew_spa } from '../Controller/service.js';
import { GetId_spa } from '../Controller/service.js';

const Routes = express.Router();

Routes.route('/').get(GetService);
Routes.route('/activity').get(GetActivity);
Routes.route('/photo').get(GetPhoto);
Routes.route('/spa').get(GetSpa).post(PostSpa);
Routes.route('/vet').get(GetVet);

Routes.route('/new_spa').get(GetNew_spa);

Routes.route('/spa/:id').get(GetId_spa);

export default Routes;