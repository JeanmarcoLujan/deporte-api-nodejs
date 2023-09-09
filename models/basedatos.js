const mongoose = require('mongoose');

// Definir un esquema de usuario
const userSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    email: String,
    password: String,
    phone: String,
    address: String
    // Otros campos relevantes del usuario
  });
  
  // Definir un modelo de usuario
  const User = mongoose.model("User", userSchema);
  
  // Definir un esquema de cancha de fútbol
  const footballFieldSchema = new mongoose.Schema({
    fieldName: String,
    fieldDescription: String
    // Otros campos relevantes de la cancha de fútbol
  });
  
  // Definir un modelo de cancha de fútbol
  const FootballField = mongoose.model('FootballField', footballFieldSchema);
  
  // Definir un esquema de reserva
  const reservationSchema = new mongoose.Schema({
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
    footballField: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'FootballField',
    },
    reservationStartDate: Date,
    reservationEndDate: Date,
    reservationStatus: String,
    reservationCliente: String,
    totalReservationFee: Number
    // Otros campos relevantes de la reserva
  });
  
  // Definir un modelo de reserva
  const Reservation = mongoose.model('Reservation', reservationSchema);
  
  module.exports = {
    User,
    FootballField,
    Reservation,
  };