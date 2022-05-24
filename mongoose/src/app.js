const mongoose = require("mongoose");

//class10
// ~~~~~~~~~

//connection creation and creating a new db if not present
mongoose.connect("mongodb://localhost:27017/akshaychavhan", { useNewUrlParser: true })
    .then(() => console.log("Connection successful..."))
    .catch((err) => console.log(err));


//class11 - defining schema
// ~~~~~~~~~

// A mongoose schema defines the structure of the 
// document , default values , validators ,etc..

const playlistSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    ctype: String,
    video: Number,
    author: String,
    active: Boolean,
    date: {
        type: Date,
        default: Date.now
    }
})

// A Mongoose model is a wrapper on the Mongoose Schema. 
// a Mongoose model provides an interface to the database for creating ,
// querying ,updating , deleting records ,etc


//creating collections
// const Playlist = new mongoose.model("COLLECTION_NAME")
const Playlist = new mongoose.model("Playlist", playlistSchema);


//class12 -create and insert document using expressJs and using mongoose 
// ~~~~~~~~~

//create document or insert

// const createDocument = async() =>{
//     try{
//         const reactPlaylist = new Playlist({
//             name : "NodeJs",
//             ctype : "Back-End" ,
//             video : 50 ,
//             author : "Akshay Chavhan",
//             active : true
//         });
//         const result = await reactPlaylist.save();
//         console.log(result);
//     }catch(err){
//         console.log(err);
//     }
// }

// createDocument();



//class13 :- insert multiple documents using mongoose
// ~~~~~~~~~



const createDocument = async () => {
    try {
        const jsPlaylist = new Playlist({
            name: "Js",
            ctype: "Front-End",
            video: 50,
            author: "Akshay Chavhan",
            active: true
        });

        const mongoPlaylist = new Playlist({
            name: "MongoDB",
            ctype: "Database",
            video: 10,
            author: "Akshay Chavhan",
            active: true
        });

        const mongoosePlaylist = new Playlist({
            name: "Mongoose",
            ctype: "Database",
            video: 5,
            author: "Akshay Chavhan",
            active: true
        });


        const result = await Playlist.insertMany([jsPlaylist, mongoosePlaylist, mongoPlaylist]);
        console.log(result);

    } catch (err) {
        console.log(err);
    }
}

//createDocument();             UNCOMMENT FOR ABOVE FUNCTION


//class14 :- READ DOCUMENTS
// ~~~~~~~~~


// to read all the documents

// const getDocument = async() =>{
//    const result = await Playlist.find();
//    console.log(result);
// }
// getDocument();


// to read documents having query ctype:"Front-End"

// const getDocument = async() =>{
//    const result = await Playlist.find({ctype: "Front-End"});
//    console.log(result);
// }
// getDocument();



// to read documents having query ctype:"Front-End" show only ctype

// const getDocument = async() =>{
//     try{
//         const result = await Playlist.find({ctype: "Front-End"})
//         .select({name : 1}).limit(1);
//         console.log(result);
//     }catch(err){
//         console.log(err);
//     }
// }

// getDocument();




// CLASS15:-MongoDBcomparison and query operator using Mongoose
// ~~~~~~~~~
// notes:- https://www.mongodb.com/docs/manual/reference/operator/query/

// const getDocument = async() =>{
//     try{
//         const result = await Playlist
//         .find({video: {$gt : 50}})  //for greater than
//         //.find({video: {$gte : 50}})     //for greater than equals to
//         //.find({video: {$lt : 50}})  //for less than you can not use limit method
//         //.find({ctype: {$in : ["Front-End"] }})     //for ctype equals to Front-End
//         .select({name : 1}) 
//         // .limit(1);
//         console.log(result);
//     }catch(err){
//         console.log(err);
//     }
// }

// getDocument();





// CLASS16:-Logical query operator using Mongoose
// ~~~~~~~~~
// Notes:- https://www.mongodb.com/docs/manual/reference/operator/query-logical/

// const getDocument = async () => {
//     try {
//         const result = await Playlist

//             .find({
//                 $and: [{ ctype: "Back-End" },           //and operator
//                 { author: "Akshay Chavhan" }]            //and operator

//$or :[ {ctype:"Back-End"},                  //or operator
//{author :"Akshay Chavhan"}]                 //or operator


//$nor :[ {ctype:"Back-End"},                  //return doc.nor operator failed to match both
//{author :"Akshay Chavhan"}]                  //return doc.nor operator failed to match both


//$not :[ {ctype:"Back-End"},                  //return doc.nor operator failed to match both
//{author :"Akshay Chavhan"}]                  //return doc.nor operator failed to match both



//         })                        
//         .select({ name: 1 })
//         console.log(result);
//     } catch (err) {
//         console.log(err);
//     }
// }

// getDocument();



// CLASS17:-Sorting and count query method using mongoose
// ~~~~~~~~~

// counting total number of document for the query
// const getDocument = async () => {
//     try {
//         const result = await Playlist
//             .find({
//                 $and: [{ ctype: "Back-End" },        
//                 { author: "Akshay Chavhan" }]                             
//             })                        
//             .select({ name: 1 })
//             .countDocuments()
//             console.log(result);
//         } catch (err) {
//             console.log(err);
//         }
//     }

//     getDocument();




// Sorting total number of document for the query

// const getDocument = async () => {
//     try {
//         const result = await Playlist
//             .find({ author: "Akshay Chavhan" })
//             .select({ name: 1 })            // 1 for ASCENDING ORDER
//             .sort({ name: -1 })              // -1 for DESCENDING ORDER
//         console.log(result);
//     } catch (err) {
//         console.log(err);
//     }
// }

// getDocument();






// CLASS18:-MongoDB updates the document using mongoose in ExpressJs App
// ~~~~~~~~~

// const updateDocument = async (id) => {
    //     try {
//         const result = await Playlist.findByIdAndUpdate({ _id: id }, {
//             $set: {
//                 name: "Javascript"
//             }
//         });
//         console.log(result);
//     } catch (error) {
//         console.log(error);
//     }
// }

// updateDocument("628bcee7317a3ace43a18163");






// CLASS19:- MongoDB delete document using Mongoose in expressJS
// ~~~~~~~~~

// const deleteDocument = async (id) => {
//         try {
//         // const result = await Playlist.deleteOne({ _id: id });       //deleteOne
//         // const result = await Playlist.deleteMany({ _id: id });       //deleteMany
//         const result = await Playlist.findByIdAndDelete({ _id: id });   //findByIdAndDelete
//         console.log(result);
//     } catch (error) {
//         console.log(error);
//     }
// }

// deleteDocument("628bcee7317a3ace43a18164");





// CLASS19:- MongoDB Build-in validation using Mongoose in expressJS
// ~~~~~~~~~

// Mongoose Validation :- https://mongoosejs.com/docs/validation.html

const playlistSchemas = new mongoose.Schema({
    name: {
        type: String,
        required: true, 
        unique: true,
        lowercase: true,
        trim:true,
        // minlength:min[2 , "minimum2 letters"],
        // maxlength:30 ,                     
    },
    ctype: {
        type: String ,
        required : true ,
        lowercase: true,
        enum :["front-end","back-end","database"]
    },
    video: {
        type : Number},
    author: String,
    active: Boolean,
    date: {
        type: Date,
        default: Date.now
    }
})

const createrDocument = async () => {
    try {
        const jsPlaylist = new Playlist({
            name: "Js",
            ctype: "Front-End",
            video: 50,
            author: "Akshay Chavhan",
            active: true
        });

        const mongoPlaylist = new Playlist({
            name: "MongoDB",
            ctype: "Database",
            video: 10,
            author: "Akshay Chavhan",
            active: true
        });

        const mongoosePlaylist = new Playlist({
            name: "Mongoose",
            ctype: "Database",
            video: 5,
            author: "Akshay Chavhan",
            active: true
        });


        const result = await Playlist.insertMany([jsPlaylist, mongoosePlaylist, mongoPlaylist]);
        console.log(result);

    } catch (err) {
        console.log(err);
    }
}

createrDocument();




