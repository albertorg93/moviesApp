const paraNada = require('../utils/dbMongo')

const Product = require("../models/moviesMongodb");
const req = require('express/lib/request');
const res = require('express/lib/response');


const getProduct = async (req,res) => {
    if (req.params.id) {
        const product = await Product.find({id:req.params.id}); // Devuelve 1
        res.status(200).json(product); // Pinta datos en el pug
    } else {
        const allProducts = await Product({});
        res.status(200).json(allProducts); // Pinta datos en el pug
    }
}

const createProduct = async (req,res) => {
    console.log(req.body); // Objeto recibido de producto nuevo
    const newProduct = req.body; // {} nuevo producto a guardar
    // Líneas
    //para guardar 
    // en una BBDD SQL o MongoDB
    const response = await Product.save(newProduct)
 

    res.status(201).json({message: `Producto ${answer.title} guardado en el sistema con ID: ${answer.id}`});
}

// let data
// try{
    
//         const product=await Product.find({'id':req.params.id});
//         res.status(200).json(product);
//     }
//     catch(err){
//       res.status(400).json({message:err}) ; 
//     }


//const editProduct = ...
//const deleteProduct = ...

const product = {
    getProduct,
    createProduct,
    //editProduct,
    //deleteProduct
}
module.exports = product;