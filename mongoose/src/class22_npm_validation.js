const mongoose = require("mongoose");
const validator = require("validator");


mongoose.connect("mongodb://localhost:27017/akshaychavhan", { useNewUrlParser: true })
    .then(() => console.log("Connection successful..."))
    .catch((err) => console.log(err));


const playlistSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique : true ,
        lowercase : true , 
        trim : true ,
        minlength : 2,
        maxlength: 30,
    },
    ctype: {
        type:String,
        required: true,
        lowercase : true ,
        enum : ["frontend","backend","database"] 
    },
    video: {
        type :Number ,
        validate(value){        //user defined validation
            if(value < 0){
                throw new Error("videos count should not negetive.");
            }
        }
    },
    author: String,
    email:{
        type : String ,
        required : true ,
        unique: true ,
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error("Email is invalid");
            }
        }
    } ,
    active: Boolean,
    date: {
        type: Date,
        default: Date.now
    }
})

const Playlist = new mongoose.model("Playlist", playlistSchema);


const createrDocument = async () => {
    try {
        const mongoosePlaylist = new Playlist({
            name: "c prog",
            ctype: "backend",
            video: 15,
            author: "Akshay Chavhan",
            email : "akshay.cd@gmail.com",
            active: true
        });

        const result = await Playlist.insertMany([mongoosePlaylist]);
        console.log(result);

    } catch (err) {
        console.log(err);
    }
}

createrDocument();




