const router = require('express').Router();
import controller from '@/controller/user.controller';

router.get('/', controller.index);

export default router;
