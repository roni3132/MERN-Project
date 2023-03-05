const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const userSchema = new mongoose.Schema({
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
    profession: {
        type: String,
        required: true
    },
    pass: {
        type: String,
        required: true
    },
    cpass: {
        type: String,
        required: true
    },
    tokens:
        [
            {
                token: {
                    type: String,
                    required: true
                }

            }
        ]
});


// moddleware for password hassing
userSchema.pre('save', async function (next) {
    if (this.isModified('pass')) {
        this.pass = await bcrypt.hash(this.pass, 12);
        this.cpass = await bcrypt.hash(this.cpass, 12);
    }
    next();
});

// method for gernerate jwt token
userSchema.methods.getJWTtoken = async function () {
    try {
        let token = jwt.sign({ _id: this._id }, process.env.PRIVATE_KEY);
        this.tokens = this.tokens.concat({ token: token });
        await this.save();
        return token;

    } catch (err) {
        // config.env
        console.log(err);
    }
}
const User = mongoose.model('users', userSchema);
module.exports = User;