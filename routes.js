import express from 'express';
import { getDataHandler, getOneDataHandler } from './controller/dataController.js';

const router = express.Router();
//Signup and login
router.get('/getData', getDataHandler);
router.post('/getOneData', getOneDataHandler);

export {router as routes};