const mongoose = require('mongoose');

const UserSchema =  new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Silahkan tambahkan sebuah Nama'],
        trim: true,
        maxlength: 32
    },
    email: {
        type: String,
        required: [true, 'Silahkan tambahkan sebuah E-mail'],
        trim: true,
        unique: true,
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Silahkan masukkan sebuah E-mail yang valid'
        ],
    },
    password: {
        type: String,
        required: [true, 'Silahkan tambahkan sebuah Password'],
        minlength: 6,
        maxlength: 32,
        match: [
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,32}$/,
            'Silahkan masukkan sebuah Password yang valid'
        ],
    },
    rule: {
        type: Number,
        default: 0,
    }
},{timestamps: true})

module.exports = mongoose.model('User', UserSchema)