const { validationResult } = require('express-validator');

const Product = require('../models/Product.js');
const User = require('../models/User.js');




getAllProductsWithStock = async (req, res) => {
    try {
        const Products = await Product.find({ stock: { $gt: 0 } });
        res.status(200).json({ok: true,products: Products});
    } catch (error) {
        res.status(500).json({ok: false, error: 'Error interno del servidor.' });
    }
};

getSpecialPriceAndBrand = async (req, res) => {
    try{
        const nombreproducto = req.params.nombre_producto;
        const userid = req.params.user_id;
        

        const product = await Product.findOne({ slug: nombreproducto });

        if (product) {
            const { brand, price, special_price, stock } = product;
            const {discount_brand} = await User.findById( userid );

            if(stock <= 0){
                res.status(200).json({ok: true, error: 'Producto sin stock.' });
            }

            
            if(discount_brand.find((ibrand)=> brand==ibrand)){
                res.status(200).json({ok: true, price: special_price, brand });
            }else{
                res.status(200).json({ok: true, price, brand });
            }
          
        } else {
            res.status(404).json({ok: true, error: 'Producto no encontrado.' });
        }

    }catch(error){
        res.status(500).json({ok: false, error: 'Error interno del servidor.' });
    }
};

createProduct = async (req, res) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ok: false, errors: errors.array() });
        }

        const { stock, price, special_price, brand, slug } = req.body; 
        const newProduct = await Product.create({ stock, price, special_price, brand, slug }); 
        res.status(201).json(newProduct);
    } catch (error) {
        res.status(400).json({ error: 'Error al crear el producto.' });
    }
};




module.exports = { getAllProductsWithStock, getSpecialPriceAndBrand, createProduct};