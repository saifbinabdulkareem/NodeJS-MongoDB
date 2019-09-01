const express = require("express");
const router = express.Router();


router.use('./users', require('./users'));
router.use('./posts', require('./posts'));

// router.get("/getData", (req,res)=> {
//     res.send({name: 'Saif'})
// })

// router.use('/auth', require('./login.js'))

module.exports = router;