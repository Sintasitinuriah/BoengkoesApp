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
    required: [true, 'Silahkan tambahkan nomor HP'],
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
    required: [true, 'Silahkan tambahkan kecamatan'],
    trim: true,
  },
  city: {
    type: String,
    required: [true, 'Silahkan tambahkan kota atau kabupaten'],
    trim: true,
  },
  province: {
    type: String,
    required: [true, 'Silahkan tambahkan provinsi'],
    trim: true,
  },
  addres:{
    type: String,
    required: [true, 'Silahkan tambahkan alamat toko'],
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
