var express = require('express');
var router = express.Router();

/* GET home page. */

router.post('/start_python',

        function(req, res, next) {
          var PythonShell = require('python-shell');
          var arg1=req.body.arg1;
          var arg2=req.body.arg2;
          var options = {
            mode: 'json',
            pythonPath: '/usr/bin/python',
            pythonOptions: ['-u'],
            scriptPath: '/opt/01work/Nodes/myapp',
            args: [arg1, arg2]
          };

          PythonShell.run('compute_input.py', options, function (err, results) {

          if (err) throw err;
          // results is an array consisting of messages collected during execution
            console.log('results: %j', results);

          //res.json(results);
          //res.render('test_json',{ info : JSON.stringify(results)});



          console.log(results[0]);


          res.render('exploit',{ info : results});

      });



});



module.exports = router;
