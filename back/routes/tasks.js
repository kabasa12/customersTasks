const express = require('express');
const router = express.Router();

const tasksController = require('../controllers/tasks');

router.get('/tasks', tasksController.getTasks);
router.post('/tasks',tasksController.addTask)


module.exports = router;