require("dotenv").config();
const fs = require("fs");
const path = require("path");
const router = require("express").Router();

router.get('/image/:id', function(req, res){
  const PATH_TO_THUMBNAIL=path.resolve(`${__dirname}/../thumbnails/${req.params.id}`);
  if (!fs.existsSync(PATH_TO_THUMBNAIL)) {
    return res.send('Image not found', 404);
  }
  
  res.sendFile(pah.join(PATH_TO_THUMBNAIL, req.params.id));
});