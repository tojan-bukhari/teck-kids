var express = require('express');
var morgan = require('morgan')
var cors = require('cors')
var app = express();
// const path = require('path');

//the Routes
const authRoutes  = require('./routes/auth');
const courseRoute = require('./routes/courseRoute');
const userRoute   =require('./routes/userRoute')
const payments    = require('./routes/payments');
const teacherRoute=require('./routes/teacherRoute');
const materialsRouter = require('./routes/materials');

require('dotenv').config();

//middleware
app.use(cors())
app.use(express.json()); 
app.use(morgan('dev'));

const mongoose = require('mongoose');
const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true ,useFindAndModify:false}
);

const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
});

// Routes
app.use('/api',authRoutes);
app.use('/course',courseRoute);
app.use('/user',userRoute);
app.use('/payments',payments)
app.use('/teacher',teacherRoute);
app.use('/materials', materialsRouter);


//port with whatever the port will be given by heruko
const port = process.env.PORT || 8000;
app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});

