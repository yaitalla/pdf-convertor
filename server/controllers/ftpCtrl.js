const fs = require('fs');
const path = require('path');
const PDFDocument = require('pdfkit');
// const webshot = require('webshot');
const wkhtmltopdf = require('wkhtmltopdf');
const pdf = require('html-pdf');
const doc = new PDFDocument();
doc.pipe(fs.createWriteStream('output.pdf'));

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

const htmlToPdf = (req, res) => {
  var html = fs.readFileSync('./uploadedFiles/index.html', 'utf8');
  var options = { format: 'Letter' };

  pdf.create(html, options).toFile('./fromHTML.pdf', function(err, res) {
    if (err) return console.log(err);
    console.log(res); // { filename: '/app/businesscard.pdf' }
  });
  return res.status(200).json(({
    succes: true,
    message: 'html converted'
  }));

  // webshot('https://yaitalla.github.io/Resume', 'yaitalla.png', (err) => {
  //   if (!err) {
  //     return res.status(200).json(({
  //       succes: true,
  //       message: 'screenshot taken'
  //     }));
  //   }
  // });
}
const alamanoPdf = (req, res) => {
  doc.pipe(fs.createWriteStream('output.pdf'));
  doc.fontSize(25)
    .text(req.body.text, 100, 100);

  // Add an image, constrain it to a given size, and center it vertically and horizontally
  doc.image('uploadedFiles/whisCover.png', {
    fit: [250, 300],
    align: 'center',
    valign: 'center'
  });

  // Add another page
  doc.addPage()
    .fontSize(25)
    .text('Here is some vector graphics...', 100, 100);

  // Draw a triangle
  doc.save()
    .moveTo(100, 150)
    .lineTo(100, 250)
    .lineTo(200, 250)
    .fill("#FF3300");

  // Apply some transforms and render an SVG path with the 'even-odd' fill rule
  // doc.scale(0.6)
  //   .translate(470, -380)
  //   .path('M 250,75 L 323,301 131,161 369,161 177,301 z')
  //   .fill('red', 'even-odd')
  //   .restore();

  // Add some text with annotations
  // doc.addPage()
  //   .fillColor("blue")
  //   .text('Here is a link!', 100, 100)
  //   .underline(100, 100, 160, 27, {color: "#0000FF"})
  //   .link(100, 100, 160, 27, 'http://google.com/');

  // Finalize PDF file
  doc.end();
  return res.status(200).json(({
        succes: true,
        message: 'pdf created'
      }));
}

const urlToPdf = (req, res) => {
    wkhtmltopdf('https://yaitalla.github.io/Resume/')
  .pipe(fs.createWriteStream('fromURL.pdf'));
  return res.status(200).json(({
          succes: true,
          message: 'url converted'
        }));
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
  htmlToPdf,
  urlToPdf,
  alamanoPdf
}
