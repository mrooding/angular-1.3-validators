var express = require('express');
var bodyParser = require('body-parser');

var app = express();
var router = express.Router();

app.use('/api', bodyParser.json());
app.use('/api', router);
app.listen(3000);

router.get('/hello/:name', function(req, res) {
  res.json({
    msg: 'hello ' + req.params.name
  });
});