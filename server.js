const express = require('express');
const mongoose = require('mongoose');
const path = require("path");
const bodyParser = require('body-parser');
// const db = require('./models');
mongoose.Promise = global.Promise;

const PORT = process.env.PORT || 8080;
const app = express();


app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));


// mongoose.connect('mongodb://localhost/tinyimprovementsdb', { useNewUrlParser: true });

var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/tinyimprovementsdb"
mongoose.connect(MONGODB_URI)

require('./routes/api-routes')(app);
// require('./routes/html-routes')(app);


app.listen(PORT, function() {
  console.log(`App running on port ${PORT}`);
});