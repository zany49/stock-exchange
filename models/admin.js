import mongoose from 'mongoose';
const crypto = require ( 'crypto' )
import bcrypt from 'bcrypt';


const {Schema} = mongoose;



const adminSchema = new Schema({
    postStocks:[{
        text:String,
        stocks: {
            type: ObjectId,
        },
        numberofStock: {
            type: Number,
        },
        price: {type:Number},
        postedOn: {type:Date, default: Date.now},
    }],
},
//passing as second argument
{ 
    collection:'adminPost',
    timestamps:true,
}
);



export default mongoose.model('Admin', adminSchema);







