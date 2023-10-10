const User = require('../modules/user')
const mongoose = require('mongoose')
const multer  = require('multer')


const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './uploads')
    },
    filename: function (req, file, cb) {
      
      cb(null, file.fieldname + '-' + Date.now() + "_" + file.originalname);
    }
  })
  
 const upload = multer({ storage}).single('avatarImg');


function handleHomePage(req, res, next){
    res.send("hello from server home page")
    next()
}
function handleSingnupPage(req, res, next) {
       const  {fullName, email, phoneNo, password} = req.body;
       const avatarImg = req.file ? req.file.filename : null;

       console.log(req.file ? req.file.filename : 'No file uploaded');
       
       console.log(req.file.filename)
        User.create({fullName, email, phoneNo, password, avatarImg})
        .then(result=>res.json(result))
        .catch(err=> console.log(err, "error from server side"));
        
    }

async function handleLoginPage(req, res, next){
    const {email, password} = req.body;
    await User.find({email}).then(results => {
        if(results.length > 0){
            const user = results[0];
            if(user.password === password){
                console.log("password matched")
                res.status(200).json({message: "success"})
            }else{
                console.log("Password doesn't matched")
                res.status(404).json({message: "notMatched"})
            }
        }else{
            console.log("try")
            res.status(500).json({message: "NotUser"})
        }
    });
   
}
    
const handleUsers = (req, res, next)=>{
    User.find()
    .then((result)=> res.json(result))
}
module.exports ={handleSingnupPage, handleHomePage, handleLoginPage, handleUsers, upload}