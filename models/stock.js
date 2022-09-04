import mongoose from 'mongoose';
const crypto = require ( 'crypto' )
import bcrypt from 'bcrypt';


const {Schema} = mongoose;



const stockSchema = new Schema({
    buyStockAdmin:[{
        broughtFrom: {
            type: ObjectId,
            ref: "Admin",
        },
        numberofStock: {
            type: Number,
        },
        broughtOn: {type:Date, default: Date.now},
    }],
    buyStockUser:[{
        broughtFrom: {
            type: ObjectId,
            ref: "User",
        },
        numberofStock: {
            type: Number,
        },
        broughtOn: {type:Date, default: Date.now},
    }],
    sellStock:[{
        soldFrom: {
            type: ObjectId,
            ref: "User",
        },
        soldTo: {
            type: ObjectId,
            ref: "User",
        },
        numberofStock: {
            type: Number,
        },
        soldOn: {type:Date, default: Date.now},
    }],

},
//passing as second argument
{ 
    collection:'stockOptions',
    timestamps:true,
}
);



export default mongoose.model('Stock', stockSchema);







