require("dotenv").config();
const fs = require("fs");
const path = require("path");
const router = require("express").Router();

router.get('/:id', function(req, res){
  const PATH_TO_UPLOADS=path.resolve(`${__dirname}/../uploads/${req.params.id}`);
  if (!fs.existsSync(PATH_TO_UPLOADS)) {
    return res.send('Image not found', 404);
  }

  res.sendFile(pah.join(PATH_TO_UPLOADS, req.params.id));
});

module.exports = router;