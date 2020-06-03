const router = require('express').Router();
import controller from '@/controller/home.controller';

router.get('/', controller.index);

export default router;
