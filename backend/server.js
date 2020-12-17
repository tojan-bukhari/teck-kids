var express = require('express');
var morgan = require('morgan')
var cors = require('cors')
var app = express();

require('dotenv').config();

app.use(cors())
app.use(express.json()); 

const mongoose = require('mongoose');
const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true }
);

const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
});

//port with what ever the port will be given by heruko
const port = process.env.PORT || 8000;
app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});

//test222
// hello its tojan