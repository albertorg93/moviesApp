const mongoose = require('mongoose');

const objectSchema = {
    title: { 
        type: String, 
        required: true,
        unique: true
    },
    image:{
        type: String,
        validate: {
            validator: function(url){
                return url.indexOf('.jpg') != -1;
            }, 
            message: "Por favor, sólo imágenes JPG"
        }
    },
    year: { 
        type: String, 
        required: true 
    },
    director: { 
        type: String, 
        required: true 
    },
    genre: { 
        type: String, 
        required: true 
    },
    runtime: { 
        type: String, 
        required: true 
    },
    
};
// Crear el esquema
const productSchema = mongoose.Schema(objectSchema);
// Crear el modelo --> Colección
const Product = mongoose.model('Movies', productSchema);

module.exports = Product;
