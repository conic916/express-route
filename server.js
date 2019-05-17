var express = require('express');
var bodyParser = require('body-parser');
var fs = require('fs');
var stringifyFile;
var app = express();


app.use(bodyParser.json());

app.get('/getNote', function (req, res) {
    fs.readFile('./test.json', 'utf8', function (err, data) {
        if (err) throw err;
        stringifyFile = data
        res.send(data);
        console.log('Read file');
    });
});

app.post('/updateNote/:note', function (req, res) {
    fs.readFile('./test.json', 'utf8', function (err, data) {
        stringifyFile = data + req.params.note;
        fs.writeFile('./test.json', stringifyFile, function (err) {
            if (err) throw err;
            stringifyFile = req.params.note;
            res.send(stringifyFile);
            console.log('File updated');
        });
    });
});

app.listen(3000);












// var express = require('express'); // deklarowanie zmiennej i przechowywanie w niej pakietu express
// var app = express(); // przypisujemy do zmiennej app aplikacje 

// //aplikacja express :
// //rejestruje 1 routing, poprzez get ( wysylanie zadania ) po wejsciu na strone glowna
// // na zdarzenie wywolywana jest funkcja , ktora wysyla odpowiedz 'hello world'
// app.get('/:id', function(req, res) {
//     console.log('Otrzymałem żądanie GET do strony głównej');
//     res.send('Identyfikator, który został dopisany to ' + req.params.id);
// });


// // inicjacja na nasluchiwanie zdarzen : 
// app.listen(3000);




// app.post('/', function (req, res) {
//     console.log('Otrzymałem żądanie POST do strony głównej');
//     res.send('Hello POST!');
// });

// app.delete('/del_user', function (req, res) {
//     console.log('Otrzymałem żądanie DELETE do strony /del_user');
//     res.send('Hello DELETE!');
// });

// app.get('/list_user', function (req, res) {
//     console.log('Otrzymałem żądanie GET do strony /list_user');
//     res.send('Strona z listą użytkowników!');
// });

// app.get('/ab*cd', function(req, res) {
//     console.log('Otrzymałem żądanie GET do strony /ab*cd');
//     res.send('Wzór pasuje');
// });

// app.use(function (req, res, next) {
//     res.status(404).send('Wybacz, nie mogliśmy odnaleźć tego, czego żądasz!')
// });