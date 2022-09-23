const express = require('express');
const cookieParser = require('cookie-parser')
let app = express();
const config = require("./config.js");
app.use(cookieParser('fake'));
app.use(express.json());
app.use(express.urlencoded({ extended: true })) ;
app.use((req,res,next)=>{
    res.header("Access-Control-Allow-Origin",config.site);
    res.header("Access-Control-Allow-Headers","Content-Type, x-requested-with");
    res.header("Access-Allowed-Methods","POST,GET,OPTIONS")
    res.header('Access-Control-Allow-Credentials',true);
    next()
})
app.get('/login',function(req,res){
    const user=req.signedCookies["fakeUser"];
    if(user?.name)
    {
        res.cookie("fakeUser",user,{maxAge:config.cookieAge,signed:true})
        res.status(200).send(JSON.stringify({
            msg:"ok",
            user:user,
        }));
        return;
    }
    res.status(403).send(JSON.stringify({
        msg:"cookie expired"
    }))
})
app.post('/login',function(req,res){
    const user = req.body;
    if(!user.id||!user.name)
    {
        res.status(400).send(JSON.stringify({
            msg:"unknown user format"
        }))
        return;
    }
    console.log(user);
    res.cookie("fakeUser",user,{maxAge:config.cookieAge,signed:true})
    res.status(200).send(JSON.stringify({
        msg:"ok"
    }))
})
app.get('/hello',function(req,res){
    res.send(JSON.stringify({
        msg:config.helloMsg
    }))
})
app.get('/credit',function (req,res){
    const user=req.signedCookies["fakeUser"];
    if(!user?.name)
    {
        console.log("error!")
        res.status(403).send(JSON.stringify(
            {
                msg:"please login first"
            }
        ))
        return;
    }
    res.send(JSON.stringify(
        {
            msg:"ok",
            user:user,
            data:config.lessons.map((lesson)=>{
                return {
                    name:lesson,
                    credit:config.credits[Math.floor(Math.random()*config.credits.length)]
                }
            })
        }
    ))
})
var server = app.listen(config.port, function () {
 
    var host = server.address().address
    var port = server.address().port
   
    console.log("您的随机绩点访问地址为 http://%s:%s", host, port)
   
  })