import mongoose from 'mongoose';



const chitterUsersSchema = new mongoose.Schema(
    {
        firstName: {
            type: String,
            required: true
        },
        secondName: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true
        },
        userName: {
            type: String,
            required: true
        },
        password: {
            type: String,
            required: true
        }
    }
);


const ChitterUser = new mongoose.model('Chitteruser', chitterUsersSchema);

export default ChitterUser;