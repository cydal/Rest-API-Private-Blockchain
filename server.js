
const Blockchain = require('./simpleChain');

const express = require('express');
const app = express();
const port = 8000;

const bodyParser = require('body-parser');
app.use(bodyParser.json());


app.listen(port, () => {
    console.log('App listening on port ' + port);
});


//Mock blockchain data
let mockChain = {
    '0': { "height": 0, 'time': '6.30pm', 'hash': 3001020}, 
    '1': { "height": 1, 'time': '6.40pm', 'hash': 3001234}
};



let blockchain = new Blockchain();


app.get('/block/:height', (req, res) => {

   res.send(mockChain[req.params.height]);
    
    //res.send(req.url);
    //res.send(JSON.stringify(mockChain[0]));
});


app.post('/block', (req, res) => {

    const length = mockChain.length;
    mockChain[length] = req.body.body;

    const response = mockChain[length];

    res.send(response);
});

