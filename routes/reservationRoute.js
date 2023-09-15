const express = require('express');
const router = express.Router();
const reservationController = require('../controllers/reservationController');


router.get('/reservation', reservationController.getAllReservation);
router.get('/reservation/:id', reservationController.getReservationById);
router.put('/reservation/:id', reservationController.updateReservation);
router.post('/reservation', reservationController.createReservation);
router.delete('/reservation/:id', reservationController.deleteReservation);

module.exports = router;
