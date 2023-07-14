const mongoose = require('mongoose');
const mongoURI = "mongodb://127.0.0.1:27017";

const connectToMongo = async()=>{
    mongoose.connect(mongoURI, await console.log("Connected to mongo Successful"));
        
}

module.exports = connectToMongo;

