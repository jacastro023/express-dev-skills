const express = require('express');
const router = express.Router();
const skillsController = require('../controllers/skills');

router.get('/', skillsController.index); // 
// localhost:3000/todos/12345
// :id is called params
router.get('/new', skillsController.new);
//todos/:id
router.get('/:id', skillsController.show);
//.index is the function we exported from the controllers/todos
router.post('/', skillsController.create);

module.exports = router;
