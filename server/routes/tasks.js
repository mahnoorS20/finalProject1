let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

//connect with task model

let Task = require('../models/tasks');
let taskController = require('../controller/task')

/* READ Operation */

router.get('/',taskController.displaygym);

/* ADD Operation */
router.get('/add',taskController.displayAddPage);
/* Post route for processing*/
router.post('/add',taskController.processAddPage);
/* EDIT Operation */
router.get('/edit/:id',taskController.displayEditPage);
/*Post route for displaying*/
router.post('/edit/:id',taskController.processEditPage);
/* DELETE Operation */
router.get('/delete/:id',taskController.performDelete);

module.exports = router;