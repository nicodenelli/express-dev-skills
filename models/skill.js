const skills = [
    {id: 125223, skill: "I'm Batman", done: true},
    {id: 127904, skill: 'JavaScript', done: false},
    {id: 139608, skill: 'CSS', done: true}
  ];
  
  module.exports = {
    getAll,
    getOne,
    create,
    deleteOne
  };

  function deleteOne(id) {
    // Find the index based on the id of the skill object
    const idx = skills.findIndex(skill => skill.id === parseInt(id));
    skills.splice(idx, 1);
    }

  function create(skill) {
    // Add the id
    skill.id = Date.now() % 1000000;
    // New skills wouldn't be done :)
    skill.done = false;
    skills.push(skill);
    }
  
  function getAll() {
    return skills;
  }
  
  function getOne(id) {
    return skills.find(skill => skill.id === parseInt(id));
  }