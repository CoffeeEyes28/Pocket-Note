const notes = require('express').Router()
const path = require('path');
const {readFromFile} =require('../helpers/fsUtils')
const {v4: uuidv4} = require ('uuid')



// GET route for all notes
notes.get('/', (req,res) =>{
readFromFile('./db/db.json').then((data)=> res.json(JSON.parse(data)))
});



notes.post('/', (req,res) => {

const {title, text} = req.body


if(req.body){
    const newNote = {
        title,
        text,
        id: uuidv4()
    };




}


})





module.exports = notes;