const User = require('../models/User');
const bcrypt = require('bcryptjs')

//login api
const login = async(req, res) => {
    try {
        //get email and password from request body
        const{email, password} = req.body || {};

        //check if email and password are provided
        if (typeof email !== 'string' || typeof password !== 'string'
            || !email.trim() || !password)
            {
                return res.status(400).json({
                    error: 'Email and password are required'
                });
            } 
        
        //find user by email
        const user = await User.findOne({
            email: email.trim().toLowerCase()
        });

        //check if user exists and password matches
        if (!user || !(await bcrypt.compare(password, user.password)))
        {
            return res.status(401).json({
                error: 'Invalid email or password'
            });
        }

        //successful login
        return res.status(200).json({
            message: 'Login successful',
            user:{
                id: user._id,
                name: user.name,
                email: user.email
            }
        });
  
    } catch (error)
    {
        console.error('Login error:', error);

        return res.status(500).json({
            error: 'Internal server error'
        });
    }
};
module.exports = {login};