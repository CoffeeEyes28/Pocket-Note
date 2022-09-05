const notes = require('express').Router()
const fs = require('fs');
const path = require('path');


notes.get('/', (req,res) =>
res.sendFile(path.join(__dirname, '../db/db.json'))
);





module.exports = notes;