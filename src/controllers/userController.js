const { validationResult } = require('express-validator');

const User = require('../models/User.js');

getAllUsers = async (req, res) => {
    try {
        const Users = await User.find();
        res.status(200).json({ok:true, Users});
    } catch (error) {
        res.status(500).json({ok:false, error: 'Error interno del servidor.' });
    }
};

createUser = async (req, res) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ok: false, errors: errors.array() });
        }

        const { name, discount_brand } = req.body;
        const newUser = await User.create({ name, discount_brand });
        res.status(201).json({ok:true, newUser});
    } catch (error) {
        res.status(400).json({ok:false, error: 'Error al crear el usuario.' });
    }
};


module.exports = { getAllUsers, createUser};