const connectToMongo = require('./db');
const express = require('express');
var cors = require('cors');

connectToMongo();
const hostname = '0.0.0.0'
const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

// Available Routes
app.use('/api/auth',require('./routes/auth'));
app.use('/api/notes',require('./routes/notes'));

app.get('/',(req,res) => {
    res.send('Hello Animesh!')
})



app.listen(port,hostname,() => {
    console.log (`eNoteBook listening at http://localhost:${port}`);
})
