const express = require('express');
const router = express.Router();

const studentcontroller = require('../controller/studentcontroller');
const logger = require('../middleware/studentmiddleware');

router.get('/',logger,studentcontroller.getStudents);
router.post('/add', logger,studentcontroller.addStudent);
router.put('/update/:id', logger,studentcontroller.updateStudent);
router.delete('/delete/:id', logger,studentcontroller.deleteStudent);

module.exports = router;