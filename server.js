const express = require('express');
const app = express();
const path = require('path');
const http = require('http');
var logger = require('morgan');
const cors = require('cors');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');


app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
  

// Serve only the static files form the dist directory
app.use(logger('dev'));
app.use(express.static(__dirname + '/dist/client'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

app.get('*',(req,res) => {
    res.sendFile(path.join(__dirname,'dist/client/index.html' ));
});

app.post('/#register', function (req, res) {
  console.log(res.body,  'succes')
  let mailOpts, smtpTrans;
  smtpTrans = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
      user: GMAIL_USER,
      pass: GMAIL_PASS
    }
  });
  mailOpts = {
    from: req.body.name + ' &lt;' + req.body.email + '&gt;',
    to: GMAIL_USER,
    subject: 'New message from contact form at tylerkrys.ca',
    text: `${req.body.name} (${req.body.email}) says: ${req.body.message}`
  };
  smtpTrans.sendMail(mailOpts, function (error, response) {
    if (error) {
      res.render('contact-failure');
    }
    else {
      res.render('contact-success');
    }
  });
});

const server = http.createServer(app);
// Start the app by listening on the default Heroku port
server.listen(process.env.PORT || 8080);