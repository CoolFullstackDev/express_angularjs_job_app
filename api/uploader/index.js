var db = require('../config/db');
var express = require('express');
var router = express.Router();
var multer = require('multer');
var path = require('path');

var storage = multer.diskStorage({ //multers disk storage settings
    destination: function (req, file, cb) {
        cb(null, './content/img/task_imgs')
    },
    filename: function (req, file, cb) {
        var datetimestamp = Date.now();
        cb(null, file.fieldname + '-' + datetimestamp + '.' + file.originalname.split('.')[file.originalname.split('.').length -1])
    }
    });
var upload = multer({ //multer settings
        storage: storage
    }).single('file');

router.post('/upload', function(req, res) {
    /*if(req.userProfile == 'profile'){
        res.json("dataaaaa "+req.file);
    }*/
    upload(req,res,function(err){
         if(err){
                res.json({error_code:1,err_desc:err});
                 return;
            }
        res.status(200).json(req.file);
        })
    });

router.get('/file/:name', function (req, res, next) {
  var options = {
    root:  './content/img/task_imgs',
    dotfiles: 'deny',
    headers: {
        'x-timestamp': Date.now(),
        'x-sent': true
    }
  };

  var fileName = req.params.name;
  res.sendFile(fileName, options, function (err) {
    if (err) {
      next(err);
    } else {
      console.log('Sent:', fileName);
    }
  });

});

module.exports = router;