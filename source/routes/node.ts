import express, { Router } from 'express';
import nodeController from '../controllers/node';

const router = express.Router();

router.post('/create/node', nodeController.createNode);
router.get('/get/nodes', nodeController.getAllNode);

export = router;
