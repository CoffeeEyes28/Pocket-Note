const express = require('express');
const res = require('express/lib/response');
const path = require('path')
const uuid = require('uuid')
const api = require('./routes/index.js')

const PORT = process.env.PORT || 3001


const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use('/api', api);

app.use(express.static('public'));

// GET route for homepage
app.get('/', (req, res)=> 
res.sendFile(path.join(__dirname, './public/index.html'))
);

// GET route for notes page
app.get('/notes', (req,res) => 
res.sendFile(path.join(__dirname, './public/notes.html'))
);


// GET route to always redirect to home if route does not exist 
app.get('*', (req,res) =>
res.sendFile(path.join(__dirname, './public/index.html'))
);


app.listen(PORT, () => 
console.log(`Listening at http://localhost:${PORT}`)
);