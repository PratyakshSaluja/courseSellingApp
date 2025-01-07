const express  = require('express');
const userRoutes = require('./routes/userRoutes')
const adminRoutes = require('./routes/adminRoutes')
const courseRoutes = require('./routes/courseRoutes')


const app = express();

app.use(express.json());
app.set("view engine","ejs")
app.set("views", __dirname + '/views');
app.use('/api/v1/user',userRoutes)
app.use('/api/v1/admin',adminRoutes)
app.use('/api/v1/course',courseRoutes)


app.listen(3000,(err)=>{
    console.log('server started on port 3000');
})