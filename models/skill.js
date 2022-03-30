const skills = [
    {id: 123, skill: 'HTML', learned: true},
    {id: 456, skill: 'CSS', learned: true},
    {id: 789, skill: 'Javascript', learned: true},
    {id:234, skill:'Express', learned: false},
    {id:567, skill:'Node', learned: true},
    {id:890, skill:'C++', learned: false}
  ];
  
  module.exports = {
    getAll,
    getOne,
    create
  };
  
  function getAll() {
    return skills;
  }

  function getOne(id) {
    // Use the Array.prototype.find iterator method
    return skills.find(skill => skill.id === parseInt(id));
    }
  
    function create(skill) {
    // Add the id
    skill.id = Date.now() % 1000000;
    // New skills wouldn't be done :)
    skill.learned = false;
    skills.push(skill);
    }