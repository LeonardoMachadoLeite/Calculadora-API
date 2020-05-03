var express = require("express")
const cors = require('cors');


function add(req, res) {
    console.log("POST Add")
    const { A, B } = req.body
    console.log('A:' + String(A))
    console.log('B:' + String(B))
    res.json({
        "ans": (Number(A) + Number(B))
    }).send(200);
}

function sub(req, res) {
    const { A, B } = req.body
    console.log('A:' + String(A))
    console.log('B:' + String(B))
    res.json({
        "ans": (Number(A) - Number(B))
    }).send(200);
}

function mul(req, res) {
    const { A, B } = req.body
    console.log('A:' + String(A))
    console.log('B:' + String(B))
    res.json({
        "ans": (Number(A) * Number(B))
    }).send(200);
}

function div(req, res) {
    const { A, B } = req.body
    console.log('A:' + String(A))
    console.log('B:' + String(B))
    res.json({
        "ans": (Number(A) / Number(B))
    }).send(200);
}

function main() {

    var app = express();
    const port = 8082;
    app.use(cors);
  
    // Routes
    app.post('/Add', add);
    app.post('/Sub', sub);
    app.post('/Mul', mul);
    app.post('/Div', div);

    app.listen(port, () => console.log('Server is listening on port: ' + port));
  }
  
  main()