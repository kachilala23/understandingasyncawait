const fs = require("fs");
const superagent = require("superagent");
const axios = require("axios");

fs.readFile(`${__dirname}/dog.txt`, (err, data) => {
    console.log(`The dog breed ${data}`);

    superagent
    .get(`https://dog.ceo/api/breed/${data}/images/random`)
    .then(res => {
        console.log(res.body.message);
        
        fs.writeFile('dog-img.txt', res.body.message, err => {
            if(err) return console.log(err.message);
            console.log('Random dog image saved to file');
        });
    }).catch(err => {
        console.log(err.message);
    })
});


