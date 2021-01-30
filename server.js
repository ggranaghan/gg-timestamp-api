// server.js
// where your node app starts

// init project
var express = require('express');
var app = express();

// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC 
var cors = require('cors');
app.use(cors({ optionsSuccessStatus: 200 }));  // some legacy browsers choke on 204

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});


// your first API endpoint... 
app.get("/api/hello", function (req, res) {
  res.json({ greeting: 'hello API' });
});

// This one's dones
app.get("/api/timestamp", function (req, res) {
  let time = new Date();
  let timeStamp = time.toUTCString();
  res.json({
    unix: Date.now(),
    utc: timeStamp
  });
});

//This one needs work... it works if you enter a unix time but not a date string
app.get("/api/timestamp/:date", (req, res) => {
  let inputDate = req.params.date
  if (isNaN(new Date(inputDate))) {
    let regex = /[\D]/;
    if (regex.test(inputDate)) {
      res.json({
        error: "Invalid Date",
      });
    } else {
    res.json({
      unix: parseInt(inputDate),
      utc: new Date(parseInt(inputDate)).toUTCString(),
    });
  }
  } else {
    let tempTime = Date.parse(inputDate)
    res.json({
      unix: new Date(inputDate).getTime().toString(),
      utc: new Date(tempTime).toUTCString(),
    });
  }
});



// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
