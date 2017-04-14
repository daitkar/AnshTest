/**
 * Created by ng-graphic on 14-04-2017.
 */
var express = require('express');

var app = express();


app.use(express.static(__dirname + '/app'));

app.listen(3000);
console.log("server runing on 3000");