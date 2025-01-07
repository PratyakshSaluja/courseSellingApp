const express  = require('express');
const routes = require('./routes/userRoutes')
const app = express();

app.use(express.json());
app.set("view engine","ejs")
app.set("views", __dirname + '/views');
app.use('/user',routes)
app.listen(3000,(err)=>{
    console.log('server started on port 3000');
})