const { Router } = require('express');
const { isAuth } = require('../../auth/auth.service');
const controller = require('./user.controller');
const router = new Router();

router.get('/', isAuth , controller.index );
router.post('/', isAuth , controller.create )
router.get('/:id', isAuth , controller.show )
router.delete('/:id', isAuth , controller.destroy )
router.get('/segura', isAuth ,  (req, res) => res.send('Example segura!'))
router.get('/test', (req, res) => res.send('Example Home page!'))

module.exports = router;