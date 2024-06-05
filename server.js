const express = require('./node_modules/express');
const bodyParser= require('body-parser')
const path=require('path')

const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// app.get('/',(req,res)=>{
//     res.sendFile('G:/project/JS/test-db/public/index.html');
// });

app.post('/save',(req,res)=>{
    const fname=req.body.fname;
    const lname=req.body.lname;
    res.render('welcome',{fname, lname})
});
app.listen(3000,()=>{
    console.log("server running at 3000")
});
