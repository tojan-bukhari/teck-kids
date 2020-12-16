var express = require('express');
var morgan = require('morgan')
var cors = require('cors')
var app = express();


app.use(cors())
app.use(express.json()); 

//port with what ever the port will be given by heruko
const port = process.env.PORT || 8000
app.listen(port, () => console.log(`Server is running on port ${port}`));
