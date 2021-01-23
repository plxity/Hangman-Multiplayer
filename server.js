const express = require('express');
const cors = require('cors');
const app = express();
const mongoose = require('mongoose');
const connectDB = require('./config/db');

///////////////// Connect to Database (MongoDB) ///////////////
connectDB();
app.use(express.json());

//////////////////////// API Definiation /////////////////////

app.use('/api/user', require('./Routes/Api/userAPI'));

// Serve static assets in production
if (process.env.NODE_ENV === 'production') {
  // Set static folder
  app.use(express.static('client/build'));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
