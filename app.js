const express = require('express');
var bodyParser = require('body-parser');
const app = express();



app.use(bodyParser.urlencoded({ extended: true }));

app.get('', (req, res) => {
    res.sendFile(__dirname+'/index.html')
    
});

app.post('/', (req, res) => {
    const n1 = parseInt(req.body.num1);
    const n2 = parseInt(req.body.num2);
    const sum = n1 + n2;
    res.send(sum.toString());
});

app.listen(8080, (resp) => {
    console.log("server startet on port 4000")
})

module.exports = app;