const mongoose = require("mongoose");

//class10
//connection creation and creating a new db if not present
mongoose.connect("mongodb://localhost:27017/akshaychavhan" ,{useNewUrlParser: true})
.then( () => console.log("Connection successful..."))
.catch((err) => console.log(err));


//class11 - defining schema
// A mongoose schema defines the structure of the 
// document , default values , validators ,etc..

const playlistSchema = new mongoose.Schema({
    name : {
        type: String,
        required : true
    } ,
    ctype : String ,
    video : Number ,
    author : String,
    active : Boolean,
    date : {
        type:Date,
        default: Date.now
    }
})

// A Mongoose model is a wrapper on the Mongoose Schema. 
// a Mongoose model provides an interface to the database for creating ,
// querying ,updating , deleting records ,etc


//creating collections
// const Playlist = new mongoose.model("COLLECTION_NAME")
const Playlist = new mongoose.model( "Playlist" , playlistSchema );


//class12 -create and insert document using expressJs and using mongoose 
//create document or insert

const createDocument = async() =>{
    try{
        const reactPlaylist = new Playlist({
            name : "NodeJs",
            ctype : "Back-End" ,
            video : 50 ,
            author : "Akshay Chavhan",
            active : true
        });
        const result = await reactPlaylist.save();
        console.log(result);
    }catch(err){
        console.log(err);
    }
}

createDocument();





