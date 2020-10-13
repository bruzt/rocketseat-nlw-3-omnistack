import { Router } from 'express';
import multer from 'multer';

import multerConfig from './config/upload';

import orphanages from './controllers/orphanages';

const router = Router();
const upload = multer(multerConfig);

router.get('/orphanages', orphanages.list);
router.get('/orphanages/:id', orphanages.show);
router.post('/orphanages', upload.array('images'), orphanages.store);

export default router;
