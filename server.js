// server.js
const express = require('express');
const cors = require('cors');
const bannerRoutes = require('./routes/bannerroutes');

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

app.listen(4000, () => {
  console.log("Server running on port 4000");

});
