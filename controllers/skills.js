// This is where we'll import our model to perform db logic
const Skill = require('../models/skill');
// model by convention is always singular and capitalized (Not just JS, like every language)

module.exports = {
	index,
	show,
	new: newSkill,
	create,
	delete: deleteSkill,
	edit, 
	update
	// shorthand for 
	// index: index
}

function update(req,res){
	// console.log(req.params, ' <- update form---------')
	// console.log(req.body, ' <- update form---------')
	// console.log(req.body.skill, ' <- update form---------')
	// console.log(req.body.learned, ' <- update form---------')
	// console.log(Skill.updateOne(req.params.id).skill)
	let isLearned = req.body.learned
	let newSkill = req.body.skill
	Skill.updateOne(req.params.id).skill = newSkill
	Skill.updateOne(req.params.id).learned = isLearned
	res.redirect('/skills')
}

function edit(req, res){
  console.log(req.params.id)
	res.render('skills/edit', {
		skill: Skill.getOne(req.params.id)	
	})
}

function deleteSkill(req, res){
	Skill.deleteOne(req.params.id)
	res.redirect('/skills')
}

function create(req, res){
	console.log(req.body, ' <- req.body, contents of the form')
	// respond with a redirect

	// Logic adding to the database using the model
	Skill.create(req.body)

	res.redirect('/skills'); // takes an url endpoint <- referring to a route
}


function index(req, res){

	res.render('skills/index', {
		skills: Skill.getAll()
	})
}

function show(req, res){
	console.log(req.params,  " < - req.params in show function")
	res.render('skills/show', {
		skillNum: req.params.id,
		skill: Skill.getOne(req.params.id)
	})
}


function newSkill(req, res){
	res.render('skills/new')
} 