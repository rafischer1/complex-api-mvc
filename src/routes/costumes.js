var express = require('express');
var router = express.Router();

const ctrl = require('../controllers/costumes')

router.get('/', ctrl.getAll)
router.get('/:user_id', ctrl.getCostumeById)
router.post('/', ctrl.create)
router.patch('/:id', ctrl.updateOne)
router.delete('/:id', ctrl.deleteCostume)


module.exports = router;
