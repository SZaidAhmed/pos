const User = require("../models/userModel");
const bcrypt = require("bcryptjs")

exports.signup = async (req, res) => {
    try {
        var { password, ...modifiedUser } = req.body;
        const { userName } = req.body;
        const name = await User.findOne({ userName });
        if (name) {
            return res.status(200).json({
                error: "userName already exists please try another...!"
            })
        }
        const user = await User.create(modifiedUser);
        res.status(200).json({
            status: "success",
            user
        })
    } catch (error) {
        return res.status(200).json({
            error,
        })
    }
}

exports.signin = async (req, res) => {
    try {
        var { userName, password } = req.body;
        if (!userName || !password) {
            return res.status(200).json({
                error: "Please enter email and password...!"
            })
        }
        var user = await User.findOne({ userName });
        var passwordVerified = await bcrypt.compare(password, user.password);
        if (!user || !passwordVerified) {
            return res.status(200).json({
                error: "Invalid username or password...!"
            })
        }
        var { password, ...modifiedUser } = user.toObject();
        res.status(200).json({
            status: "success",
            data: {
                user: modifiedUser
            }
        })
    } catch (error) {
        return res.status(200).json({
            error: error.message
        })
    }
}