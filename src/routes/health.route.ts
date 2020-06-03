const router = require('express').Router();
import controller from '@/controller/health.controller';

router.get('/', controller.index);

export default router;
