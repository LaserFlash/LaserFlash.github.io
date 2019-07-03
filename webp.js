var outputFolder = "./src/assets/images/webp" // Output folder    

const imagemin = require('imagemin');
const imageminWebp = require('imagemin-webp');

imagemin(['./src/assets/images/*.{jpg,png}'], outputFolder, {
  use: [
    imageminWebp({
      quality: 50
    })
  ]
}).then(() => {
  console.log('Images optimized');
});
