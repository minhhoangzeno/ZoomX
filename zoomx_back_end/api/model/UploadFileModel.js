'use strict';
const { request } = require('express');
const { resolve } = require('path');

var Cloudinary = require('./ModelCloudinary'),
    mongoose = require('mongoose'),
    File = mongoose.model('file')

var self = module.exports = {
    uploadSingleFile: (request) => {
        return new Promise((resolve, reject) => {
            Cloudinary.uploadSingle({
                file: request.file.path,
                path: request.path
            })
                .then((result) => {
                    File.create({
                        fileUrl: result.url,
                        fileId: result.id
                    })
                        .then((file) => {
                            resolve(file)
                        })
                        .catch(err => {
                            reject(err)
                        })
                })
                .catch(error => {
                    reject(error)
                })
        })
    }

}