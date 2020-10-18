const express = require('express');
const { db } = require('./db/db.json');
const fs = require('fs');
const path = require('path');
const PORT = process.env.PORT || 3001;
const app = express();
// const apiRoutes = require('./routes/apiRoutes');
// const htmlRoutes = require('./routes/htmlRoutes');


app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './public/index.html'));
});

app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, './public/notes.html'));
});


// parse incoming string or array data
app.use(express.urlencoded({ extended: true }));
// parse incoming JSON data
app.use(express.json());
//app.use('/api', apiRoutes);
//app.use('/', htmlRoutes);
app.use(express.static('public'));


 app.listen(PORT, () => {
        console.log(`API server now on port ${PORT}!`);
      });