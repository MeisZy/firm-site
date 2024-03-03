//const express = require("express");
//const { MongoClient } = require("mongodb");
//const cors = require("cors");
//
//const app = express();
//app.use(cors());
//app.use(express.json());
//
//const uri = "mongodb+srv://zyrusnw:VYbyRR9RO22Bnzhq@firmcluster.kezgkxb.mongodb.net/?retryWrites=true&w=majority";
//const databaseName = "establishments";
//let database;
//
//app.listen(27017, () => {
//    MongoClient.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
//        .then((client) => {
//            database = client.db(databaseName);
//            console.log("MongoDB Connection Successful");
//        })
//        .catch((error) => {
//            console.error("MongoDB Connection Error:", error);
//        });
//});
//
//app.get('/api/establishments', (request, response) => {
//    database.collection("items_col").find({}).toArray()
//        .then((result) => {
//            response.json(result);
//        })
//        .catch((error) => {
//            console.error("Error fetching data:", error);
//            response.status(500).json({ error: "Internal Server Error" });
//        });
//});
//
//module.exports = app; // Export the Express app