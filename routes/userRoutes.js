const express = require('express')

const userRouter = express.Router();

router.post('/signup',(req,res)=>{

    res.json({
        message: "signup endpoint"
    })
})

router.post('/login',(req,res)=>{
    
    res.json({
        message: "login endpoint"
    })
})


module.exports = userRouter;