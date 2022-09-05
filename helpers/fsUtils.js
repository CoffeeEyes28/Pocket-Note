// Reference: Student Mini-Project(Unit 11 - Activity 28)
const fs = require('fs');
const util = require('util')

// Promise version of fs.readFile
const readFromFile = util.promisify(fs.readFile)


// writes passed through data to passed through file
const writeToFile = (destination, content) =>
fs.writeFile(destination, JSON.stringify(content, null, 3), (err) => 
err ? console.log(err) : console.info(`\nData written to ${destination}`)
);

// reads specicifed file and writes passed through data as well
const readAndAppend = (content, file) => {
    fs.readFile(file, 'utf8', (err, data) => {
        if(err){
            console.log(err)
        }else{
            const parsedData = JSON.parse(data);
            parsedData.push(content);
            writeToFile(file,parsedData)
        }
    })
}



module.exports = {readFromFile, writeToFile, readAndAppend}