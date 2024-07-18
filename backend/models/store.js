const mongoose = require('mongoose');
const { ObjectId } = mongoose.Schema;

const storeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Silahkan tambahkan nama toko'],
    trim: true,
    maxlength: 32,
  },
  phoneNumber: {
    type: String,
    trim: true,
  },
  owner: {
    type: ObjectId,
    ref: 'User', // Assuming you have a User model
    required: true,
  },
//   description: {
//     type: String,
//     required: [true, 'Silahkan tambahkan deskripsi toko'],
//     trim: true,
//   },
  district: {
    type: String,
  },
  city: {
    type: String,
  },
  province: {
    type: String,
  },
  addres:{
    type: String,
    trim: true,
    maxlength: 255,
  },
  facebook:{
    type: String,
    trim: true,
  },
  instagram:{
    type: String,
    trim: true,
  },
}, { timestamps: true });

module.exports = mongoose.model('Store', storeSchema);
