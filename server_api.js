const express = require("express");
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

let storage = [];

app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));

app.get('/guide', function (req,res){
    res.send(storage);
});


app.get('/guide/:id', function (req,res) => {
    const id = req.params.id;
    const item = storage[id];
    if (item===null || id>=storage.length) {
        res.sendStatus(404);
    } else res.send(storage[id]);

});

app.post('/guide',(req,res) => {
    const obj = storage.push(req.body)-1;
    res.send(obj.toString());
});

app.put('/guide/:id',(req,res) => {
    const id = req.params.id;
    storage[id] = req.body;
    res.send(id.toString());
});

app.delete('/guide/:id', (req,res) => {
    const id = req.params.id;
    storage[id] = null;
    res.send(id.toString());
});

app.listen(8080, function() {
    console.log('Сервер запущен');
});