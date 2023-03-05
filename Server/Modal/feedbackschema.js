const mongoose = require('mongoose');
const feedbackSchema = new mongoose.Schema({
    userid: {
        type: Object,
        required: true
    },
    uname: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type: Number,
        required: true
    },
    message: {
        type: String,
        required: true
    }
});


// method for save message 
// feedbackSchema.methods.saveMessages = async function (message) {
//     try {
//         this.messages.concat({ message: message });
//         await this.save();
//         return true;
//     } catch (err) {
//         return false
//     }
// }

const Feedback = mongoose.model('feedback', feedbackSchema);
module.exports = Feedback;