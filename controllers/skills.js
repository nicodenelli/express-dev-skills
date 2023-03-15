const SkillModel = require('../models/skill')

module.exports = {
    index,
    show,
    new: newSkill,
    create,
    delete: deleteSkill

}

function deleteSkill(req, res){
	// tell the model to delete the todo of the id 
	// req.params.id represents the id coming from 
	// the form on the client
	SkillModel.deleteOne(req.params.id);
	res.redirect('/skills')
}

function create(req, res){
	console.log(req.body, ' <- req.body, which is the contents of the form')
	// give the model the contents of the form to put into the database (we have fake database right now)
	SkillModel.create(req.body)
	// respond with a redirct, 
	// so we tell the client a page to make a request too, its our choice
	// in this case lets redirect the client back to the skill's index page, where we are listing 
	// all the skills
	// res.redirect doesn't accept a view, it accepts a path of a route
	res.redirect('/skills')
}

function newSkill(req, res){


    res.render('skills/new') 
 }

function show(req, res){
    console.log(req.params.id, " <- req.params.id")

    res.render('skills/show', {
        skill: SkillModel.getOne(req.params.id)
    });
}

function index(req, res, next) {
    res.render('skills/index.ejs', {
        skills: SkillModel.getAll()
     });
  }