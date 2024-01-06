let express = require('express')
let router = express.Router()
let mongo = require('mongodb')
let dbClient = mongo.MongoClient
let dbUrl = 'mongodb://127.0.0.1:27017'
let dbName = 'Foodie'

dbClient.connect(dbUrl,(err,connection)=>{
    if(err){
        console.log("Cannot connect to database...");
    }
    else{
        dbConnection = connection.db(dbName);
        console.log("Database connected...");
    }
})

router.get('/fooditems',(req,res)=>{
    dbConnection.collection('food').find({}).toArray((err,data)=>{
        if(err){
            console.log("Cannot fetch food items...");
        }
        else{
            res.send(data);
        }
    })
})

router.get('/dietchart',(req,res)=>{
    dbConnection.collection('dietchart').find({}).toArray((err,data)=>{
        if(err){
            console.log("Cannot fetch chart items...");
        }
        else{
            res.send(data);
        }
    })
})

router.post('/addtochart',(req,res)=>{
    dbConnection.collection('dietchart').find({sno:req.body.sno}).toArray((err,data)=>{
        if(err){
            console.log("Cannot add to chart...");
        }
        else{
            if(data.length == 0){
                dbConnection.collection('dietchart').insertOne({
                    ...req.body,
                    quantity:1
                })
                res.send("Item inserted to chart...")
            }
            else{
                dbConnection.collection('dietchart').updateOne({sno:req.body.sno},{$inc:{quantity:+1}})
                res.send("Updated quantity...")
            }
        }
    })
})

module.exports = router