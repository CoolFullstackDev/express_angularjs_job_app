var db = require('../config/db');
var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');

router.get("/all", function(req,res){ 
     var finalResult = {
		skills: [],
		education: [],
		certifications: []
    };

	db.query('SELECT DISTINCT id,tag FROM skills', function(err, results, fields) {
		if (!err){
			finalResult.skills = results;
		}
		else{
			res.json({"Error" : true, "Message" : "Error executing MySQL query"});
		} 
	}); 

	db.query('SELECT DISTINCT id,tag FROM education ORDER BY tag', function(err, results, fields) {
		if (!err){
			finalResult.education = results;
		}
		else{
			res.json({"Error" : true, "Message" : "Error executing MySQL query"});
		} 
	}); 

	db.query('SELECT DISTINCT id,tag FROM certifications ORDER BY tag', function(err, results, fields) {
		if (!err){
				finalResult.certifications = results;
		}
		else{
			res.json({"Error" : true, "Message" : "Error executing MySQL query"});
		} 	
		res.status(200).json(finalResult);
	});
});

router.get("/skill", function(req,res){ 
	db.query('SELECT DISTINCT id,tag FROM skills', function(err, results, fields) {
		if (!err){
			res.status(200).json(results);
		}
		else{
			res.json({"Error" : true, "Message" : "Error executing MySQL query"});
		} 
	}); 
});

router.get("/education", function(req,res){ 
	db.query('SELECT DISTINCT id,tag FROM education', function(err, results, fields) {
		if (!err){
			res.status(200).json(results);
		}
		else{
			res.json({"Error" : true, "Message" : "Error executing MySQL query"});
		} 
	}); 
});

router.get("/certification", function(req,res){ 
	db.query('SELECT DISTINCT id,tag FROM certification', function(err, results, fields) {
		if (!err){
			res.status(200).json(results);
		}
		else{
			res.json({"Error" : true, "Message" : "Error executing MySQL query"});
		} 
	}); 
});

module.exports = router;