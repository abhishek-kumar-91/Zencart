const express = require("express");
const cors = require('cors');
const userRouter = require('./routing/user');
const connectDatabase = require('./connect')
const User = require("./modules/user")






//database connection
connectDatabase('mongodb://127.0.0.1:27017/zencart')
.then(()=>console.log("database connected...."))
.catch((err)=>console.log(err));

//connect server
const app = express();
const PORT = 9000;


//middileware
app.use(express.json())
app.use(cors());


//routing
app.use("/", userRouter)




//port listen
app.listen(PORT, ()=>{
    console.log(`server has been started..PORT...${PORT}`);
})