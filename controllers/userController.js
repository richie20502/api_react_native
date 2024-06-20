const User = require('../models/user');
const jwt = require('jsonwebtoken');
require('dotenv').config();

exports.register = async (req, res) => {
    try {
        const { username, email, password } = req.body;
        let user = new User({ username, email, password });
        user = await user.save();
        res.status(201).send(user);
    } catch (error) {
        res.status(400).send(error.message);
    }
};

exports.login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });
        if (!user) return res.status(400).send('Invalid email or password.');

        const validPassword = await user.comparePassword(password);
        if (!validPassword) return res.status(400).send('Invalid email or password.');

        const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });

        res.status(200).send({
            message: 'Login successful',
            user: {
                _id: user._id,
                username: user.username,
                email: user.email
            },
            token
        });
    } catch (error) {
        res.status(500).send('Internal Server Error');
    }
};

exports.listUsers = async (req, res) => {
    try {
        const users = await User.find({}, '_id username email');
        res.status(200).send(users);
    } catch (error) {
        res.status(500).send('Internal Server Error');
    }
};
