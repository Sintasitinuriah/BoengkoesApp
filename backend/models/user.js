const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');


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


// ecrypting password before saving
UserSchema.pre('save', async function(next){
    if (!this.isModified('password')){
        next();
    } 
    this.password = await bcrypt.hash(this.password, 10);
});

// verify password
UserSchema.methods.comparePassword = async function(yourPassword){
    return await bcrypt.compare(yourPassword, this.password);
}

// get the token
UserSchema.methods.jwtGenerateToken = function(){
    return jwt.sign({id: this.id}, process.env.JWT_SECRET, {expiresIn: process.env.JWT_EXPIRE});
}

module.exports = mongoose.model('User', UserSchema)