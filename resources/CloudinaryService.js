const cloudinary = require('cloudinary').v2;
const Env = use('Env');

cloudinary.config({
  cloud_name: Env.get('CLOUDINARY_CLOUD_NAME', CLOUDINARY_CLOUD_NAME),
  api_key: Env.get('CLOUDINARY_API_KEY', CLOUDINARY_API_KEY),
  api_secret: Env.get('CLOUDINARY_API_SECRET', CLOUDINARY_API_SECRET)
});

module.exports = cloudinary;
