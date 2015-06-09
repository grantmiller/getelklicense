var express = require('express');
var https = require('https');
var app = express();


app.get('/', function (req, res) {
  res.send('hello');

var data = {
  'assignee': "new co",
  'app_id': "d274a2217a1e02199ab00bc11241c6cd",
  'channel_id': "6cee53a5baa006cf3b70bdbcbc5f126d",
  'expiration_date': "2015-06-30"
};

var options = {
  host: 'api.staging.replicated.com',
  port: 443,
  path: '/vendor/v1/license',
  method: 'POST',
  headers: {
    "Authorization": "wme1dDbDTNSRHcdjsISGew"
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
req.write(JSON.stringify(data));
req.end();
});

var port = process.env.PORT || 5000;

var server = app.listen(port, function () {

  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);

});
