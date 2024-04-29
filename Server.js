//server.js
const express  = require("express")
const mongoose = require("mongoose")
const cors  = require("cors")
const multer = require('multer');
const customerroutes = require("./routes/customerroutes");
const carcontroller = require("./controllers/cars");

const dblink = "mongodb://localhost:27017/Projectdb"
mongoose.connect(dblink).then(()=>{
    console.log("hurry db connected")
}).catch((e)=>{
    console.log(e.message)
});

const storage = multer.memoryStorage();
const uplode = multer({storage:storage});


const app = express()
app.use(express.json())
app.use(cors())


app.post('/insertcar',uplode.single('image'),carcontroller.insertcar);
app.get('/viewcar',carcontroller.viewcar);

app.use("",customerroutes);

const port  = 2005
app.listen(port,()=>{
    console.log(`server is running at port num ${port}`)
})