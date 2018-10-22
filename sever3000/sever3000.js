const express =require ("express")
const path = require ("path")
// const http = require("http")
const bodyParser = require("body-parser")
const info = require("./mock/info.json")
const app = express()

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

//设置静态目录
app.use(express.static(path.resolve(__dirname)))

//mock info
app.get("/indexinfo",(req,res)=>{
    res.json(info.FlyPigindexInfo)
})
app.get("/alltypeinfo",(req,res)=>{
    res.json(info.AllTypeInfo)
})
app.get("/gateticket",(req,res)=>{
    res.json(info.GateTicketInfo)
})
app.post("/add",(req,res)=>{
    res.header("Access-Control-Allow-Credentials", true)
    res.header("Access-Control-Allow-Origin", "*")
    res.header("Access-Control-Allow-Headers", "X-Requested-With")
    res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS")
    res.header("X-Powered-By", ' 3.2.1')
    res.header("Content-Type", "application/json;charset=utf-8")

    console.log(req.body)
    res.json({ok:true})
})

//设置首页
app.get("/",(req,res)=>{
    res.sendFile(path.resolve(__dirname,"index.html"))
})
//监听3000
app.listen(3000,()=>{
    console.log("server is ready on port 3000")
})