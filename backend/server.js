// Import necessary modules
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const multer = require('multer');
const path = require('path');
const fs = require('fs');
require('dotenv').config();

// Initialize express app
const app = express();
// Define the port from environment variables or use 5000 as default
const PORT = process.env.PORT || 5000;

// Middleware to handle CORS and JSON requests
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('Connected to MongoDB'))
.catch(err => console.error('Could not connect to MongoDB', err));

// Ensure uploads directory exists, if not create it
const uploadsDir = path.join(__dirname, 'uploads');
if (!fs.existsSync(uploadsDir)){
    fs.mkdirSync(uploadsDir);
}

// Configure Multer for file uploads
const storage = multer.diskStorage({
  // Set destination for uploaded files
  destination: (req, file, cb) => {
    cb(null, uploadsDir);
  },
  // Define filename for uploaded files
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  }
});

// Initialize Multer with the defined storage configuration
const upload = multer({ storage: storage });

// Serve static files from the uploads directory
app.use('/uploads', express.static(uploadsDir));

// Define Property Schema for MongoDB
const propertySchema = new mongoose.Schema({
  title: String,
  description: String,
  price: Number,
  image: String,
  contact: String,
  type: String,
});

// Create Property model from the schema
const Property = mongoose.model('Property', propertySchema);

// Define API routes

// GET route to fetch all properties
app.get('/api/properties', async (req, res) => {
  try {
    const properties = await Property.find();
    res.json(properties);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// POST route to add a new property
app.post('/api/properties', upload.single('image'), async (req, res) => {
  try {
    const { title, description, price, contact, type } = req.body;
    const image = req.file ? `/uploads/${req.file.filename}` : '';

    const newProperty = new Property({
      title,
      description,
      price,
      image,
      contact,
      type,
    });

    const savedProperty = await newProperty.save();
    res.status(201).json(savedProperty);
  } catch (error) {
    console.error('Error saving property:', error);
    res.status(500).json({ message: error.message });
  }
});

// Update existing property
app.put('/api/properties/:id', upload.single('image'), async (req, res) => {
    try {
      const { title, description, price, contact, type } = req.body;
      const image = req.file ? `/uploads/${req.file.filename}` : '';
  
      const updatedProperty = {
        title,
        description,
        price,
        image,
        contact,
        type,
      };
  
      const result = await Property.findByIdAndUpdate(req.params.id, updatedProperty, { new: true });
      res.json(result);
    } catch (error) {
      console.error('Error updating property:', error);
      res.status(500).json({ message: error.message });
    }
  });
  
  // Delete a property
  app.delete('/api/properties/:id', async (req, res) => {
    try {
      const result = await Property.findByIdAndDelete(req.params.id);
      res.json(result);
    } catch (error) {
      console.error('Error deleting property:', error);
      res.status(500).json({ message: error.message });
    }
  });
  

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

// Start the server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
