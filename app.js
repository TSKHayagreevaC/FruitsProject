const mongoose = require('mongoose');
mongoose.connect("mongodb://localhost:27017/fruitsDB", { useNewUrlParser: true, useUnifiedTopology: true });

const fruitSchema = new mongoose.Schema ({
    name: { 
        type: String,
        required: [1, 'please check your data entry no data specified.']
    },
    rating: {
        type: Number,
        min: 1,
        max: 10
    },
    review: String
});

const Fruit = mongoose.model("Fruit", fruitSchema);

const fruit = new Fruit({
    rating: 10,
    review: "pretty solid as a fruit."
});

// fruit.save();

const studentSchema = new mongoose.Schema ({
    name: String,
    age: Number,
    hobby: String,
    favourateFruit: fruitSchema
});

const Student = mongoose.model("Students", studentSchema);

const mango = new Fruit({
    name: "Mango",
    rating: 10,
    review: "Very Sweet fruit."
});

mango.save();

        Student.updateOne({name: "Rajesh"}, 
            {favourateFruit: mango}, function(err){
                if (err) {
                    console.log(err);
                } else {
                    console.log("favourate fruit added succesfully.");
                }
            }
        );

// const student = new Student({
//     name: "Ramesh",
//     age: 12,
//     hobby: "Coding.",
//     favourateFruit: pineapple    
// });

// student.save();

// const kiwi = new Fruit({
//     name: "Kiwi",
//     rating: 10,
//     review: "Good fruit."
// });

// const orange = new Fruit({
//     name: "Orange",
//     rating: 6,
//     review: "Nice fruit."
// });

// const banana = new Fruit({
//     name: "Banana",
//     rating: 8,
//     review: "sweet fruit."
// });

// Fruit.insertMany([kiwi, orange, banana], function(err){
//     if (err) {
//         console.log(err);
//     } else {
//         console.log("Succefully saved all the fruits to fruitsDB");
//     }
// });

Fruit.find(function(err, fruits){
    if (err) {
        console.log(err);
    } else {

        mongoose.connection.close();

        fruits.forEach(function(fruit){
            console.log(fruit.name);
        });
    }
});

// Fruit.updateOne(
//     {_id: "5fd169b84673731bc4b8c904"},
//     {name: "Apple"},
//     function(err){
//         if (err) {
//             console.log(err);
//         } else {
//             console.log("Succesfully updated the document.");
//         }
//     }

// );

// Fruit.deleteOne({_id: "5fd17c7f53096f1f94e10bbc"},
//     function(err){
//         if (err) {
//             console.log(err);
//         } else {
//             console.log("Succesfully deleted the document.")
//         }
//     }
// );

// Student.deleteMany({name: "Rajesh"},
//     function(err){
//         if(err) {
//             console.log(err);
//         } else {
//             console.log("Succesfully deleted all the documents.");
//         }
//     }
// );


// const MongoClient  = require("mongodb").MongoClient;
// const assert = require('assert');
// const { connect } = require("http2");

// // Connection URl
// const url = 'mongodb://localhost:27017';

// // Database Name
// const dbName = 'fruitsDB';

// // Create a new MongoClient
// const client = new MongoClient(url,{ useUnifiedTopology: true});

// // Use connect method to connect to the Server
// client.connect(function(err){
//     assert.equal(null, err);
//     console.log("Connected successfully to server");

//     const db = client.db(dbName);

//     findDocuments(db, function() {
//         client.close();
//     });
// });

// const insertDocuments = function(db, callback) {
//     // Get the docment collection
//     const collection = db.collection('fruits');
//     // Insert some documents
//     collection.insertMany([
//         {
//             name : "Apple",
//             score: 8,
//             review: "Great fruit"
//         }, 
//         {
//             name : "Orrange",
//             score: 6,
//             review: "Kinda sour"
//         },
//         {
//             name : "Banana",
//             score: 9,
//             review: "Great stuff!"
//         }
//     ], function(err, result){
//         assert.equal(err, null);
//         assert.equal(3, result.result.n);
//         assert.equal(3, result.ops.length);
//         console.log("Inserted 3 documents into the collection");
//         callback(result);
//     });
// };

// const findDocuments = function(db, callback) {
//     // Get the documents collection
//     const collection = db.collection('fruits');
//     // Find some documents
//     collection.find({}).toArray(function(err, fruits){
//         assert.equal(err, null);
//         console.log("Found the following records");
//         console.log(fruits)
//         callback(fruits);
//     });
// }
