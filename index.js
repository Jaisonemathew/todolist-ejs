const express =require("express");
const bodyParser=require("body-parser");
const app =express();
app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));

var items=[];


app.get("/",function(req,res)
{
var today=new Date();
var options = { weekday: 'long', day: 'numeric', month: 'long' };
var day= today.toLocaleDateString("en-US", options);
res.render('list',{kindofday:day,newlistitem:items});
});



app.post('/',function(req,res){
var item=req.body.newitem;
items.push(item);
res.redirect('/');
});

app.listen(process.env.PORT || 81, function(){
    console.log("Server is running on port 81.");
  });
  