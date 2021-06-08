const ImageUtil = require('../utils/ImageUtil');

const mongoose = require('mongoose'),
    Blog = mongoose.model('blog'),
    Upload = require('../model/UploadImageModel');

//lay tat ca blog co phan trang

// // exports.get_all_blogs = async (req, res) => {
// //     let perPage = 5; // số lượng sản phẩm xuất hiện trên 1 page
// //     let page = req.query.page;
// //     let totalPage;
// //     await Blog.find().then(result => totalPage = result)
// //     Blog
// //         .find() // find tất cả các data
// //         .populate(
// //             {
// //                 path: 'imageBlog',
// //                 populate: {
// //                     path: 'imageBlog',
// //                     model: 'image',
// //                     select: 'url'
// //                 },
// //                 select: 'url'
// //             },

// //         )
// //         .skip((perPage * page) - perPage) // Trong page đầu tiên sẽ bỏ qua giá trị là 0
// //         .limit(perPage)
// //         .exec((err, data) => {
// //             Blog.countDocuments((err, count) => { // đếm để tính có bao nhiêu trang
// //                 if (err) return next(err);
// //                 res.send({
// //                     data,
// //                     totalPage: totalPage?.length
// //                 }) // Trả về dữ liệu các sản phẩm theo định dạng như JSON, XML,...
// //             });
// //         });
// // }

// //lay blog theo danh muc co phan trang
// exports.get_category_blogs = async (req, res) => {
//     let perPage = 5; // số lượng sản phẩm xuất hiện trên 1 page
//     let page = req.query.page;
//     let categoryId = req.query.categoryId;
//     let totalPage;
//     await Blog.find({
//         categoryId: categoryId
//     }).then(result => totalPage = result)
//     Blog
//         .find({
//             categoryId: categoryId
//         }) // find tất cả các data
//         .populate(
//             {
//                 path: 'imageBlog',
//                 populate: {
//                     path: 'imageBlog',
//                     model: 'image',
//                     select: 'url'
//                 },
//                 select: 'url'
//             },

//         )
//         .skip((perPage * page) - perPage) // Trong page đầu tiên sẽ bỏ qua giá trị là 0
//         .limit(perPage)
//         .exec((err, data) => {
//             Blog.countDocuments((err, count) => { // đếm để tính có bao nhiêu trang
//                 if (err) return next(err);
//                 res.send({
//                     data,
//                     totalPage: totalPage?.length
//                 }) // Trả về dữ liệu các sản phẩm theo định dạng như JSON, XML,...
//             });
//         });
// }


// // exports.get_a_blog = (req, res) => {
// //     let id = req.params.blog_id;
// //     Blog.findById(id)
// //         .populate(
// //             {
// //                 path: 'imageBlog',
// //                 populate: {
// //                     path: 'imageBlog',
// //                     model: 'image',
// //                     select: 'url'
// //                 },
// //                 select: 'url'
// //             },

// //         ).then(data => {
// //             res.send(data)
// //         }).catch(error => {
// //             res.send(error)
// //         })
// // }

exports.search_blog = async (req, res) => {
    let perPage = 5; // số lượng sản phẩm xuất hiện trên 1 page
    let page = req.query.page;
    let regex = new RegExp(req.query.q, 'i');
    let totalPage;
    await Blog.find({ title: regex }).then(result => {
        totalPage = result
    }).catch(error => {
        console.log(error)
    })
    Blog
        .find({ title: regex }) // find tất cả các data
        .skip((perPage * page) - perPage) // Trong page đầu tiên sẽ bỏ qua giá trị là 0
        .limit(perPage)
        .exec((err, data) => {
            Blog.countDocuments((err, count) => { // đếm để tính có bao nhiêu trang
                if (err) return next(err);
                // res.send({
                //     data,
                //     totalPage: totalPage?.length
                // }) // Trả về dữ liệu các sản phẩm theo định dạng như JSON, XML,...
                // res.status(200).json(data)
                res.send({
                    data: data,
                    totalPage: totalPage?.length
                })
            });
        });
}


exports.add_a_blog = (req, res) => {
    Blog.create({
        title: req.body.title,
        categoryId: req.body.categoryId,
        content: req.body.content
    }).then(data => {
        res.send(data)
    }).catch(err => {
        res.send(err)
    })
}
exports.get_blog = async (req, res) => {
    let perPage = 5; // số lượng sản phẩm xuất hiện trên 1 page
    let page = req.query.page;
    let categoryId = req.query.categoryId;
    if (categoryId == 1) {
        let totalPage;
        console.log("all")
        await Blog.find().then(result => {
            totalPage = result
        }).catch(error => {
            console.log(error)
        })
        Blog
            .find() // find tất cả các data
            .skip((perPage * page) - perPage) // Trong page đầu tiên sẽ bỏ qua giá trị là 0
            .limit(perPage)
            .exec((err, data) => {
                Blog.countDocuments((err, count) => { // đếm để tính có bao nhiêu trang
                    if (err) return next(err);
                    // res.send({
                    //     data,
                    //     totalPage: totalPage?.length
                    // }) // Trả về dữ liệu các sản phẩm theo định dạng như JSON, XML,...
                    // res.status(200).json(data)
                    res.send({
                        data: data,
                        totalPage: totalPage?.length
                    })
                });
            });
    } else {
        console.log("detail")

        let totalPage;
        await Blog.find({ categoryId: categoryId }).then(result => {
            totalPage = result
        }).catch(error => {
            console.log(error)
        })
        Blog
            .find({ categoryId: categoryId }) // find tất cả các data
            .skip((perPage * page) - perPage) // Trong page đầu tiên sẽ bỏ qua giá trị là 0
            .limit(perPage)
            .exec((err, data) => {
                Blog.countDocuments((err, count) => { // đếm để tính có bao nhiêu trang
                    if (err) return next(err);
                    // res.send({
                    //     data,
                    //     totalPage: totalPage?.length
                    // }) // Trả về dữ liệu các sản phẩm theo định dạng như JSON, XML,...
                    // res.status(200).json(data)
                    res.send({
                        data: data,
                        totalPage: totalPage?.length
                    })
                });
            });
    }

}
exports.update_blog = (req, res) => {
    Blog.findByIdAndUpdate(req.params.blog_id, {
        title: req.body.title,
        categoryId: req.body.categoryId,
        content: req.body.content
    }).exec().then(data => {
        res.send(data)
    }).catch(err => {
        res.send(err)
    })
}
exports.delete_blog = (req, res) => {
    Blog.findByIdAndDelete(req.params.blog_id).then(data => {
        res.send(data)
    }).catch(err => {
        res.send(err)
    })
}
exports.get_a_blog = (req, res) => {
    Blog.findById(req.params.blog_id).then(data => {
        res.send(data)
    }).catch(err => {
        res.send(err)
    })
}

// // exports.update_blog = async (req, res) => {
// //     let id = req.params.blog_id;
// //     let fileBlogs = req.files.filter(item => item.fieldname == 'imageBlog');
// //     await Blog.findById(id).then(blog => {
// //         blog.imageBlog?.map(item => {
// //             ImageUtil.deleteSingleFile(item)
// //         })
// //     })
// //     let uploadBlog = new Promise((resolve, reject) => {
// //         Upload.uploadMultipleFile({
// //             file: fileBlogs,
// //             path: 'ZoomX/Blog'
// //         }).then(result => {
// //             let idPj = [];
// //             result.map(item => {
// //                 idPj.push(item._id)
// //             })
// //             resolve({
// //                 imageBlog: idPj
// //             })
// //         }).catch(err => {
// //             resolve({
// //                 imageBlog: null
// //             })
// //         })
// //     })
// //     uploadBlog.then(result => {
// //         Blog.findByIdAndUpdate(id, {
// //             title: req.body.title,
// //             date: req.body.date,
// //             imageBlog: result?.imageBlog,
// //             contentStart: req.body.contentStart,
// //             contentMain: req.body.contentMain,
// //             contentBegin: req.body.contentBegin,
// //             categoryId: req.body.categoryId
// //         }).then(data => {
// //             res.send(data)
// //         }).catch(error => {
// //             res.send(error)
// //         })
// //     })
// // }

// exports.delete_blog = (req, res) => {
//     let id = req.params.blog_id;
//     Blog.findById(id).then(blog => {
//         blog.imageBlog?.map(item => {
//             ImageUtil.deleteSingleFile(item).then(() => {
//                 blog.remove()
//                 res.send(blog)
//             }).catch(error => {
//                 res.send(error)
//                 console.log(error)
//             })
//         })
//     })
// }

// exports.get_demo_search = async (req, res) => {
//     let page = req.query.page;
//     let q = req.query.q;
//     let categoryId = req.query.categoryId;
//     let perPage = 5; // số lượng sản phẩm xuất hiện trên 1 page
//     let regex = new RegExp(q, 'i');
//     let totalPage;
//     if (categoryId == 1) {
//         await Blog.find({ title: regex }).then(result => {
//             totalPage = result
//         }).catch(error => {
//             console.log(error)
//         })
//         Blog
//             .find({
//                 title: regex
//             }) // find tất cả các data
//             .populate(
//                 {
//                     path: 'imageBlog',
//                     populate: {
//                         path: 'imageBlog',
//                         model: 'image',
//                         select: 'url'
//                     },
//                     select: 'url'
//                 },

//             )
//             .skip((perPage * page) - perPage) // Trong page đầu tiên sẽ bỏ qua giá trị là 0
//             .limit(perPage)
//             .exec((err, data) => {
//                 Blog.countDocuments((err, count) => { // đếm để tính có bao nhiêu trang
//                     if (err) return next(err);
//                     // res.send({
//                     //     data,
//                     //     totalPage: totalPage?.length
//                     // }) // Trả về dữ liệu các sản phẩm theo định dạng như JSON, XML,...
//                     // res.status(200).json(data)
//                     res.send({
//                         data: data,
//                         totalPage: totalPage?.length
//                     })
//                 });
//             });
//     } else {
//         await Blog.find({ title: regex, categoryId: categoryId }).then(result => {
//             totalPage = result
//         }).catch(error => {
//             console.log(error)
//         })
//         Blog
//             .find({
//                 title: regex,
//                 categoryId: categoryId
//             }) // find tất cả các data
//             .populate(
//                 {
//                     path: 'imageBlog',
//                     populate: {
//                         path: 'imageBlog',
//                         model: 'image',
//                         select: 'url'
//                     },
//                     select: 'url'
//                 },

//             )
//             .skip((perPage * page) - perPage) // Trong page đầu tiên sẽ bỏ qua giá trị là 0
//             .limit(perPage)
//             .exec((err, data) => {
//                 Blog.countDocuments((err, count) => { // đếm để tính có bao nhiêu trang
//                     if (err) return next(err);
//                     // res.send({
//                     //     data,
//                     //     totalPage: totalPage?.length
//                     // }) // Trả về dữ liệu các sản phẩm theo định dạng như JSON, XML,...
//                     // res.status(200).json(data)
//                     res.send({
//                         data: data,
//                         totalPage: totalPage?.length
//                     })
//                 });
//             });
//     }

// }
