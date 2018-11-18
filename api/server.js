var express = require('express');
var app = express();

var mysql = require('mysql'); 
var bodyParser  = require('body-parser');


app.use(bodyParser.urlencoded({
    extended: true
}));

/**bodyParser.json(options)
 * Parses the text as JSON and exposes the resulting object on req.body.
 */
app.use(bodyParser.json());

// code for mysql 
var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  database: "vehDb"
});

// con.connect(function(err) {
//   if (err) throw err;
//   console.log("Connected..."); 
// });



// handle APi
// app.post('/api/vehicle',function(req,res)
// {
// 	console.log("in /vehicle api");
// 	var data = req.body;
// 	var sql = "Insert into rvehicles VALUES ('"+data.rno+"','"+data.vno+"','"+data.wheels+"','"+data.vtype+"','"+data.rtono+"','"+data.oname+"','"+data.email+"','"+data.phone+"','"+data.ownadd+"','"+data.regdate+"')";
// 	console.log(sql)
// 	con.query(sql, function (err, result) {
// 	if (err) throw err;
// 	console.log("data inserted", result);
//     res.json(result)

//   	});

// });

// app.post('/api/regNo',function(req,res)
// {
// 	var data = req.body;
// 	console.log("data", data.regNo);
// 	var sql = "SELECT * FROM rvehicles WHERE vno = '"+data.regNo+"'";

// 	console.log(sql)
// 	con.query(sql, function (err, result) {
// 	if (err) throw err;
// 	console.log("data fectched", result);
//     res.json(result)
//   	});
// });

// app.post('/api/vehicle/update',function(req,res)
// {
// 	console.log("in /vehicle/update api");
// 	var data = req.body;
// 	var sql = "UPDATE rvehicles SET oname = '"+data.oname+"' , email = '"+data.email+"' , phone = '"+data.phone+"' , ownadd = '"+data.ownadd+"'  WHERE vno = '"+data.vno+"'";
// 	console.log(data,sql)
// 	con.query(sql, function (err, result) {
// 	if (err) throw err;
// 	console.log("data inserted", result);
//     res.json(result)

//   	});

// });


// app.post('/api/stolen',function(req,res)
// {
// 	var data = req.body;
// 	console.log("data", data);
// 	res.json(data);
// });

// app.post('/api/vehicleStatus',function(req,res)
// {
// 	var data = req.body;
// 	console.log("data", data);
// 	res.json(data);
// });

// app.get('/api/vehList',function(req,res)
// {
// 	console.log('request for /api/vehList');
//  	var sql = "SELECT * FROM rvehicles";
// 	con.query(sql, function (err, result) {
// 	if (err) throw err;
//     res.json(result)
//   	});
// });

app.use(express.static('../app'));
app.listen(8080);
console.log("server running on port 8080");	