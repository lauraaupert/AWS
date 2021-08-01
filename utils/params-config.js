const { v4: uuidv4 } = require('uuid');
const params = fileName => {
    const myFile = fileName.originalname.split('.');
    const fileType = myFile[myFile.length - 1];
  
    const imageParams = {
      Bucket: "user-images-fb10d4d8-4bb4-490a-9e46-7336ba8290af",
      Key: `${uuidv4()}.${fileType}`,
      Body: fileName.buffer
    };
  
    return imageParams;
  };

  module.exports = params;