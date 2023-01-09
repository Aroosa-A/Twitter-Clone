import mongoose from 'mongoose';




const chitterPostSchema = new mongoose.Schema(
    {
        firstName: {
            type: String,
            required: true
        },
        secondName: {
            type: String,
            required: true
        },
        userName: {
            type: String,
            required: true
        },
        postBody: {
            type: String,
            required: true
        },
        postDate: {
            type: Date,
            default: Date.now,
            required: true
        },
        picturePath: String
    }
);


const ChitterPost = new mongoose.model('Chitterpost', chitterPostSchema);


export default ChitterPost;