var express = require("express")

function add(req, res) {
    console.log('A:' + String(req.query.A))
    console.log('B:' + String(req.query.B))
    res.send(200).json({
        ans: Number(req.A) + Number(req.B)
    });
}

function sub(a, b) {
    return Number(a) - Number(b);
}

function mul(a, b) {
    return Number(a) * Number(b);
}

function div(a, b) {
    return Number(a) / Number(b);
}

function main() {

    var app = express();
    const port = 8082;
  
    // Routes
    app.get('/Add/{A}/{B}', add);
    app.get('/Sub/{A}/{B}', sub);
    app.get('/Mul/{A}/{B}', mul);
    app.get('/Div/{A}/{B}', div);

    app.listen(port, () => console.log('Server is listening on port: ' + port));
  }
  
  main()