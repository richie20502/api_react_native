const Product = require('../models/product');

exports.createProduct = async (req, res) => {
    try {
        const { name, description, price, category } = req.body;
        const product = new Product({ name, description, price, category });
        await product.save();
        res.status(201).send(product);
    } catch (error) {
        res.status(400).send({ error: error.message });
    }
};

exports.listProducts = async (req, res) => {
    try {
        const products = await Product.find();
        res.status(200).send(products);
    } catch (error) {
        res.status(500).send({ error: error.message });
    }
};
