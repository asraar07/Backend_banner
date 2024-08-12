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

const PORT = process.env.PORT || 4000; // Fallback to 4000 if PORT is not set
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
