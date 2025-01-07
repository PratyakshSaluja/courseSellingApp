const express = require('express')

const router = express.Router();

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

router.get('/getAllCourses',(req,res)=>{
    
    res.json({
        message: "get courses endpoint"
    })
})

router.get('/getPurchasedCourse',(req,res)=>{
    
    res.json({
        message: "purchased courses endpoint"
    })
})

router.post('/purchaseCourse',(req,res)=>{
    res.json({
        message: "purchasing endpoint"
    })

})
module.exports = router;