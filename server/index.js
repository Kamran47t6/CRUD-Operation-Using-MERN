const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const UserModel = require('./models/Users');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB connection URI
const uri = "mongodb+srv://kamran121:123crud%23%23AA@cluster1.1u5dx.mongodb.net/<dbname>?retryWrites=true&w=majority&appName=Cluster1";

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("MongoDB Atlas connected successfully!"))
    .catch(err => console.error("MongoDB connection error:", err));

// Create user route
app.post("/createUser", (req, res) => {
    UserModel.create(req.body)
        .then((user) => res.json(user))  
        .catch(err => res.json(err));    
});


app.listen(3001, () => {
    console.log("Server is running on port 3001");
});
