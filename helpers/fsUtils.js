// Reference: Student Mini-Project(Unit 11 - Activity 28)
const fs = require('fs');
const util = require('util')

const readFromFile = util.promisify(fs.readFile)