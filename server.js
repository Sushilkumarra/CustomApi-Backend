require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const userRoutes = require('./routes/userRoutes');

const app = express();
app.use(cors());
app.use(express.json()); // to parse JSON body

app.use(cors({
  origin: ["https://custom-api-frontend.vercel.app", "http://localhost:5173"]
}));

// connect MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));

// Routes
app.use('/api/users', userRoutes);

app.get("/", (req, res) => {
  res.send("Backend is running successfully 🚀");
});


// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
