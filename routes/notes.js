const notes = require('express').Router()
const fs = require('fs');
const util = require('util')
const path = require('path');

const readFromFile = util.promisify(fs.readFile)

// GET route for all notes
notes.get('/', (req,res) =>{
readFromFile('./db/db.json').then((data)=> res.json(JSON.parse(data)))
});





module.exports = notes;