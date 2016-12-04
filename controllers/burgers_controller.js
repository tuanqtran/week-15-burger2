// Inside the burgers_controller.js file, import the following:

// Express
// burger.js
var express = require('express'),
	router = express.Router(),
	models = require('../models');

// Create the router for the app, and export the router at the end of your file.
router.get('/', function(req, res){
	res.redirect('/burgers');
});

router.get('/burgers', function(req, res){
	models.Burgers.findAll()
	.then(function(result){
		var burgerResults = {burgers: result};
		// console.log(burgerResults);
		return res.render('index', burgerResults);
	});
});

router.post('/burgers/create', function(req, res){
	// console.log(req.body.name);
	models.Burgers.create({
		burger_name: req.body.name
	})
	.then(function(){
		res.redirect('/burgers');
	});
});

router.put('/burgers/update/:id', function(req, res){
	models.Burgers.update({
		devoured: req.body.devoured
	},{
		where:{
			id: req.params.id
		}
	})
	.then(function(result){
		res.redirect('/burgers');
	});
});

router.delete('/burgers/delete/:id', function(req, res){
	models.Burgers.destroy({
		where:{
			id: req.params.id
		}
	})
	.then(function(result){
		res.redirect('/burgers');
	});	
})

module.exports = router;