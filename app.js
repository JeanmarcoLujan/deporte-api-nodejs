const express = require('express');
const mongoose = require('mongoose');
const userRoutes = require('./routes/userRoute');
const footballRoutes = require('./routes/footballRoute');
const cors = require('cors');
const bodyParser = require('body-parser');
const dotenv = require("dotenv");

dotenv.config();


const app = express();
const port = 3001;

// MongoDB connection
mongoose.connect(process.env.URL_MONGODB, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Middleware
app.use(bodyParser.json({ limit: '10mb' }));
app.use(express.json());
app.use(cors());

// Routes
app.use('/api', userRoutes);
app.use('/api', footballRoutes);

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});