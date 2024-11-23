const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: { type: String, required: true },
    price: { type: Number, required: true },
    image: { type: String }
}, { collection: 'Products' }); // Specify collection name

mongoose.connection.on('connected', () => {
    console.log(`Connected to MongoDB database: ${mongoose.connection.name}`);
  });  

module.exports = mongoose.model('Products', productSchema);
