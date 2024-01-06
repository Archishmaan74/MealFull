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
    console.log("display food API getting hit...");
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
    console.log("display itmes in chart API getting hit...");
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
    console.log("Add API getting hit...");
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

router.post('/delete',(req,res)=>{
    console.log("Delete API getting hit...");
    dbConnection.collection('dietchart').find({sno:req.body.sno}).toArray((err,data)=>{
        if(err){
            console.log("Cannot delete item...");
        }
        else{
            if(data[0].quantity==1){
                dbConnection.collection('dietchart').deleteOne({sno:req.body.sno})
                res.send("Item deleted from chart...")
            }
            else{
                dbConnection.collection('dietchart').updateOne({sno:req.body.sno},{$inc:{quantity:-1}})
                res.send("Quantity decreased...")
            }
        }
    })
})

module.exports = router