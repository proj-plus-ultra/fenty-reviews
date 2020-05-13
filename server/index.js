const express = require('express');
const app = express();
const bodyParser = require('body-parser');;
const morgan = require('morgan');
const path = require('path');
const port = 5050;
const dbHelpers = require('../db/dbHelpers');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(morgan('dev'));

app.use(express.static(path.join(__dirname, '../client/dist')));

//fisher-yates shuffle algoritm
function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;
  
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
  
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
  
      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
  
    return array;
}

app.get('/reviews/users', (req, res) => {
    dbHelpers.getUsers((err, result) => {
        if (err) {
            res.status(400).send(err);
        } else {
            res.status(200).json(result)
        }
    })
});
app.get('/reviews', (req, res) => {
    dbHelpers.getReviews((err, result) => {
        if (err) {
            res.status(400).send(err);
        } else {
            //shuffle results pulled from db
                //send a random amount between 5-50
            shuffle(result);
            res.status(200).json(result.slice(0, Math.floor((Math.random() * 50) + 5)))
        }
    })
});

app.listen(port, () => console.log(`LISTENING ON http://127.0.0.1:${port}`));
