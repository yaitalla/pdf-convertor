const fs = require('fs');
const path = require('path');
const pdf = require('html-pdf');
const cors = require('cors');
const template = require('./pdfTemplate');
const cv = require('./newcv')

let name;

const isEmpty = (obj) => {
    for(var key in obj) {
        if(obj.hasOwnProperty(key))
            return false;
    }
    return true;
}

const upload = (req, res) => {
  if (isEmpty(req.files)) {
    return res.status(200).json({
      message: 'no file'
    });
  } else {
    const srcName = Object.getOwnPropertyNames(req.files)[0];
    fs.writeFile(__dirname+'/../uploadedFiles/'+req.files[srcName].name,
                  req.files[srcName].data, (err) => {
      if (err) {
        console.log(err)
        return res.status(500).json({
          message: err
        });
      }
      return res.status(200).json({
        success: true,
        message: "File uploaded successfully"
      });
    });
  }
};

const getFiles = (req, res) => {
  fs.readdir(__dirname+'/../uploadedFiles', (err, files) => {
    if (err) {
      return res.status(500).json({
        message: err
      });
    }
    if (isEmpty(files)) {
      console.log('folder is empty');
    } else {
      console.log(files)
      return res.status(200).json(({
        succes: true,
        message: files
      }));
    }
  });
}

const alamanoPdf = (req, res) => {
  name = req.body.name
  console.log('pdf creation...: ', req.body.name+'_CV.pdf')
  pdf.create(cv(req.body), {}).toFile(req.body.name+'_CV.pdf', (err) => {
    if (err) {
      console.log('YASLOG', err);
    }
    console.log('...pdf created successfuly')
  })
}

const fetchPDF = (req, res) => {
  console.log(req.body, 'ici')
  res.sendFile(`${__dirname}/${name}.pdf`)
}


const download = (req, res) => {
 // console.log(req.headers)
  return res.download(path.resolve('./uploadedFiles/whisCover.png'), (err) => {
    if (err){console.log('ddl error',err)}
    else {console.log('download ok')}
    res.end()
  })
}

module.exports = {
  upload,
  download,
  getFiles,
  alamanoPdf,
  fetchPDF
}
