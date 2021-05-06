const express = require('express');
const path = require('path');
const nodemailer = require('nodemailer')

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, '../client/build')));

app.get('/send-email', (req, res) => {
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: 'toddgered89@gmail.com',
          pass: 'GreenWedding$12'
        }
      });
      
      const mailOptions = {
        from: 'toddgered89@gmail.com',
        to: 'perkinszebediah@gmail.com',
        subject: req.query.subject,
        text: req.query.text
      };
      
      transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log(error);
        } else {
          console.log('Email sent: ' + info.response);
        }
      });
    res.send("Email sent!");
});

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/build/index.html'));
});

app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`);
});
