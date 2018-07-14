var app = require('express') ()
var path = require('path')
var moment = require('moment')

var port = 3000
app.get('/', function (req,rescd) {
    res.send(moment().format())
})

app.listen(port, function() {
    console.log('Opmen connection node.js on port :' + port)
})