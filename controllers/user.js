const User = require("../models/user");

exports.read = (req, res) => {
    const userId = req.params.id;
    User.findById(userId).exec((err, user) => {
        if(err || !user){
            return res.status(400).json({
                error: "User not found"
            });
        }

        user.hashed_password = undefined;
        user.salt = undefined;
        res.json(user);
    })
}

exports.update = (req, res) => {
    const {name, pasword} = req.body;

    User.findOne({_id: req.user._id}, (err, user) => {
        if(err || !user){
            return res.status(400).json({
                error: "User not found"
            })
        }
        if(!name){
            return res.status(400).json({
                error: "Name is required"
            })
        }else{
            user.name = name;
        }
        if(password){
            if(password.length < 4){
                return res.status(400).json({
                    error: "Password must be longer than 4 characters"
                });
            } else{
                user.password = password;
            }
        }

        user.save((err, updatedUser) => {
            if(err){
                console.log("USER UPDATE ERROR!!!", err);
                return res.status(400).json({
                    error: "User update failed"
                });
            }

            updatedUser.hashed_password = undefined
            updatedUser.salt = undefined
            res.json(updatedUser);
        })

    })
}