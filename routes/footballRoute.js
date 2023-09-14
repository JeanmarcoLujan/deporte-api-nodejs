const express = require('express');
const router = express.Router();
const footBallController = require('../controllers/footballController');


router.get('/campo', footBallController.getAllFoot);
router.get('/campo/:id', footBallController.getFootById);
router.put('/campo/:id', footBallController.updateFoot);
router.post('/campo', footBallController.createFoot);
router.delete('/campo/:id', footBallController.deleteFoot);

module.exports = router;
