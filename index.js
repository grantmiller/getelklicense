var express = require('express');
var https = require('https');
var app = express();


app.get('/', function (req, res) {
  res.send('hello');

var data = {
  'assignee': "new co",
  'app_id': "849743531a7a758b1289f61866664ac5",
  'channel_id': "d6300a4b6d6f734354fbd38d8af8ec0d",
  'expiration_date': "2015-06-30"
};

var options = {
  host: 'api.staging.replicated.com',
  port: 443,
  path: '/vendor/v1/license',
  method: 'POST',
  headers: {
    "Authorization": "ODk3ZWZiODctMGY4Yy00ZWU4LTliZTktNzRkZGM1OWRlMGZm"
  },
  contentType: 'application/json; charset=utf-8',
  data: data
};

var req = https.request(options, function(res) {
  console.log('STATUS: ' + res.statusCode);
  console.log('HEADERS: ' + JSON.stringify(res.headers));
  res.setEncoding('utf8');
  res.on('data', function (chunk) {
    console.log('BODY: ' + chunk);
  });
});

// write data to request body
req.write('data\n');
req.write('data\n');
req.end();
});

var port = process.env.PORT || 5000;

var server = app.listen(port, function () {

  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);

});
