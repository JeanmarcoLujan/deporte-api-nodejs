
const {Reservation } = require("../models/basedatos"); 

// Get all reservations
exports.getAllReservation = async (req, res) => {
  try {
    const reservations = await Reservation.find();
    res.json(reservations);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Create a new reservation
exports.createReservation = async (req, res) => {
  try {
    const { user,  footballField, reservationStartDate, reservationEndDate, reservationStatus, reservationCliente, totalReservationFee   } = req.body;
    const reservation = new Reservation({ user,  footballField, reservationStartDate, reservationEndDate, reservationStatus, reservationCliente, totalReservationFee });
    const newReservation = await reservation.save();
    res.status(201).json(newReservation);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.deleteReservation = async (req, res) => {
  try {
    const deleteReservation = await Reservation.findByIdAndDelete(req.params.id);
    if (!deleteReservation) {
      return res.status(404).json({ message: "Reservation not found" });
    }
    res.json({ message: "Reservation deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.getReservationById = async (req, res) => {
  try {
    const reservation = await Reservation.findById(req.params.id);
    if (!reservation) {
      return res.status(404).json({ message: "Campo not found" });
    }
    res.json(reservation);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.updateReservation = async (req, res) => {
  try {
    const {
        user,  footballField, reservationStartDate, reservationEndDate, reservationStatus, reservationCliente, totalReservationFee
    } = req.body;
    const updatedReservation= await Reservation.findByIdAndUpdate(
      req.params.id,
      {
        user,  footballField, reservationStartDate, reservationEndDate, reservationStatus, reservationCliente, totalReservationFee
      },
      { new: true }
    );
    if (!updatedReservation) {
      return res.status(404).json({ message: "Reservation not found" });
    }
    res.json(updatedReservation);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
