const mongoose = require('mongoose'),
    User = mongoose.model('user'),
    bcrypt = require('bcrypt')
    ;

exports.get_user = (req, res) => {
    User.find().then(data => {
        res.send(data)
    }).catch(err => {
        res.send(err)
    })
}

exports.add_user = (req, res) => {
    User.create({
        username: req.body.username,
        password: req.body.password,
        isAdmin: req.body.isAdmin
    }).then(() => {
        res.redirect('http://localhost:3000/admin')
    }).catch(err => {
        res.send(err)
    })
}

exports.login_user = (req, res) => {
    const { username, password } = req.body;
    User.findOne({ username: username }, (error, user) => {
        if (user) {
            bcrypt.compare(password, user.password, (error, same) => {
                if (same) {
                    req.session.userId = user._id;
                    res.redirect('http://localhost:3000/admin')
                } else {
                    res.redirect('http://localhost:3000/login')
                }
            })
        } else {
            res.redirect('http://localhost:3000/login')
        }
    })
}

exports.update_user = (req,res) => {
    const id = req.params.user_id;

}