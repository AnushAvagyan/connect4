const express = require('express');
const app = express();
const port = 3001;
const bodyParser = require('body-parser');

app.use(express.static('./client/dist'));
app.use(bodyParser());
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});


app.post('/gameOver', (req, res, next) => {
  console.log("request received");

  res.send('Game over. Please refresh the page to start a new game');

  res.end();

  next();
});



app.listen(port, () => console.log(`App listening on port ${port}!`))

