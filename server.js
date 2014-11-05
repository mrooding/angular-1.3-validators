var express = require('express');
var bodyParser = require('body-parser');

var app = express();
var router = express.Router();

app.use('/api', bodyParser.json());
app.use('/api', router);
app.listen(3000);

router.get('/validate/:age', function(req, res) {
  console.log(req.params);
  res.json(req.params.age > 17);
});