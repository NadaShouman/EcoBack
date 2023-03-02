const cloudinary = require('cloudinary');
const { Promise } = require('mongoose');
cloudinary.config({
    cloud_name:'dalk6iico',
    api_key:'354216316393478',
    api_secret:'2t1XZOb7vimbi0D9hAgb5u8pbpw'
});

exports.uploads = (file) =>{
    return new Promise( resolve =>{
        cloudinary.uploader.upload(file,(result)=>{
            resolve({url:result.url,id:result.public_id})
        },{resource_type : "auto"})
    })
}
