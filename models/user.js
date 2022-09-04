import mongoose from 'mongoose';
const crypto = require ( 'crypto' )
import bcrypt from 'bcrypt';


const {Schema} = mongoose;


//no sql to collect data from frontend
const userSchema = new Schema({

    password:
    { 
        type: String,
         required: true,
         min:6,
         max:64,
    },
    username:{
        type: String,
        unique: true,
        required: true,
    },email:{
        type: String,
        unique: true,
        required: true,
    },balance:{
        type: Number,
    }
},
//passing as second argument
{ 
    collection:'userAuth',
    timestamps:true,
}
);



export default mongoose.model('User', userSchema);







