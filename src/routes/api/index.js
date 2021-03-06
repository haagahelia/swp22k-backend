import express from 'express';

import task from './task.js';
import report from './report.js';
import signature from './signature.js';
import country from './country.js';
import orderType from './orderType.js';


// Notice how at the moment there is extra word added to the route URL,
// /task, /report or /signature
// That is just to keep these three files and their URLs independent
// no matter what the other team does. Only added for work isolation.

const routes = express.Router();
routes.use('/task', task);
routes.use('/report', report);
routes.use('/signature', signature);
routes.use('/country',country)
routes.use('/type',orderType)

export default routes;