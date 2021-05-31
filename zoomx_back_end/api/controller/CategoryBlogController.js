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
        name: req.body
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
    CategoryBlog.findByIdAndDelete(req.params.categoryblog_id)
        .then(categoryblog => {
            Blog.find({
                typeBlog: req.params.blog_id
            }).then(result => {
                result.map(rs => {
                    Blog.findByIdAndUpdate(rs._id, { typeBlog: null })
                    .then(blog => {
                        res.send(blog)
                    })
                    .catch(err => {
                        res.send(err)
                    })
                })
            })
        })
        .catch(error => {
            res.send(error)
        })
}