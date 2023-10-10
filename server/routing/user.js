const {Router} = require('express');
const {handleSingnupPage, handleHomePage, handleLoginPage, handleUsers, upload} = require("../controller/user")

  



const router = Router();

router.get('/', handleHomePage);
router.post('/signup',upload,handleSingnupPage);
router.post('/login', handleLoginPage);
router.get('/users', handleUsers)
module.exports = router;