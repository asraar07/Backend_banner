// server.js
const express = require('express');
const cors = require('cors');
const bannerRoutes = require('./routes/bannerroutes');
const path = require('path');
const db = require('./config/db')

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.get("/",(req,res)=>{
  res.send("Server is running")
  })

// Routes

app.use('/api', bannerRoutes);

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);

});
