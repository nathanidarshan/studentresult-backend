var express = require('express');
var router = express.Router();
var student = require('../controller/stdcontroller');
var staf = require('../controller/staffcontroller');
var result = require('../controller/resultcontroller');

/* GET home page. */
// student ====================================================================
router.post('/std/add',student.studentadd);
router.get('/std/view',student.studentview);
router.post('/std/update/:id',student.stdupdate);
router.get('/std/delete/:id',student.stddelete);
// student login / logout=================================================================
router.post('/std/login',student.stdlogin);
router.get('/std/logout',student.stdlogout);

router.get('/std/std_view',student.std_view)

// staff ======================================================================
router.post('/staff/add',staf.staffadd);
router.get('/staff/view',staf.staffview);
router.post('/staff/update/:id',staf.staffupdate);
router.get('/staff/delete/:id',staf.staffdelete);
// staff login / logout ======================================================================
router.post('/staff/login',staf.stafflogin);
router.get('/staff/logout',staf.stafflogout);

// result ======================================================================
router.post('/result/add',result.rsultcreate);
router.get('/result/view',result.resultview);
router.get('/singleresult/view/:id',result.singleresultview);
router.post('/result/update/:id',result.resulupdate);
router.get('/result/delete/:id',result.resuldelete);


module.exports = router;