'use strict';
const { request } = require('express');
const { resolve } = require('path');

var Cloudinary = require('./ModelCloudinary'),
    mongoose = require('mongoose'),
    Image = mongoose.model('image');

var self = module.exports = {
    uploadSingleFile: (request) =>{
        return new Promise((resolve,reject) => {
            Cloudinary.uploadSingle({
                file: request.file.path,
                path: request.path
            })
            .then((result) => {
                Image.create({
                    imageName: result.name,
                    url: result.url,
                    imageId: result.id
                })
                .then((image) => {
                    resolve(image)
                })
                .catch(err => {
                    reject(err)
                })
            })
            .catch(error => {
                reject(error)
            })
        })
    },
    uploadMultipleFile: (request) => {
        return new Promise((resolve, reject) => {
            console.log(request);
            let resPromise = request.file.map(file => new Promise((resolve, reject) => {
                Cloudinary.uploadMultiple({
                    file: file.path,
                    path: request.path
                }).then((result) => {
                    Image.create({
                        imageName: result.name,
                        url: result.url,
                        imageId: result.id,
                    }).then((image) => {
                        resolve(image)
                    }).catch((err) => {
                        reject(err)
                    })
                }).catch((error) => {
                    reject(error)
                })
            }))
            Promise.all(resPromise)
                .then(async (arrImg) => {
                    resolve(arrImg)
                }).catch((error) => {
                    reject(error)
                })
        })
    }
}