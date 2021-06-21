const ImageUtil = require('../utils/ImageUtil');

const mongoose = require('mongoose'),
    CategoryBlog = mongoose.model('categoryBlog'),
    Blog = mongoose.model('blog');
exports.get_all_blogs = (req, res) => {
    CategoryBlog.find({})
        .then(ctgblog => {
            res.send(ctgblog)
        })
        .catch(err => {
            res.send(err)
        })
}
exports.add_blog = (req, res) => {
    CategoryBlog.create({
        name: req.body.name
    })
        .then(ctgblog => {
            res.send(ctgblog)
        })
        .catch(err => {
            res.send(err)
        })
}
exports.update_blog = (req, res) => {
    CategoryBlog.findByIdAndUpdate(req.params.categoryblog_id, {
        name: req.body
    })
        .then(ctgblog => {
            res.send(ctgblog)
        })
        .catch(err => {
            res.send(err)
        })
}
exports.delete_blog = (req, res) => {
    let id = req.params.categoryblog_id;
    CategoryBlog.findById(id).then(result => {
        Blog.find({ categoryId: result._id }).then(
            listBlog => {
                listBlog.map(blog => {
                    blog.remove()
                })
            }
        )
        result.remove()
        res.send(result)
    }).catch(error => {
        res.send(error)
        console.log(error)
    })
}

exports.get_a_category = (req, res) => {
    CategoryBlog.findById(req.params.categoryblog_id).then(data => {
        res.send(data)
    }).catch(error => {
        res.send(error)
    })
}