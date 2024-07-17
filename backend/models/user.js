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
    },
    birthDate:{
        type: Date,
        default: null,
    },
    phoneNumber:{
        type: String,
        default: null,
    },
    address:{
        type: String,
        default: null,
    },
    image: {
        type: String,
        default: 'https://th.bing.com/th/id/R.66767182832efccf14baa1ad847cfeb1?rik=e32qcq5puaXs4w&riu=http%3a%2f%2fwww.oddscreenprinting.com.au%2fwp-content%2fuploads%2fperson-dummy-200x200.jpg&ehk=Li93ll5f3UiBCaR7brSRqsuzTUzAjcPlqDXLr4Y1X4w%3d&risl=&pid=ImgRaw&r=0&sres=1&sresct=1',
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

module.exports = mongoose.model('User', UserSchema);