const {Router} = require('express');
const {handleSingnupPage, handleHomePage, handleLoginPage} = require("../controller/user")





const router = Router();

router.get('/', handleHomePage);
router.post('/signup', handleSingnupPage);
router.post('/login', handleLoginPage);

module.exports = router;