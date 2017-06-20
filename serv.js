var exp=require("express")
var app=exp();
app.use("/libs",exp.static(__dirname+"/bower_components"))
app.use(exp.static(__dirname+"/public"))
app.listen(3000,()=>console.log("ready"));
