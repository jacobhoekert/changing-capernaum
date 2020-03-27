const nodemailer = require('nodemailer');
const smtpTransport = require('nodemailer-smtp-transport');
const cors = require('cors')({origin: true});
const creds = require('../../email.config');

export default async (req, res) => {
  cors(req, res, () => {  
    let transporter = nodemailer.createTransport(smtpTransport({
      service: 'gmail',
      secure: true,
      auth: {
          user: 'jshoekert@gmail.com',
          pass: creds.password
      }
    }));

    let mail = {};

    if (req.body.suggestion) {
      let {name, email, suggestion} = req.body;
      let content = `name: ${name} \n email: ${email} \n suggestion: ${suggestion}`

      mail = {
        from: `${name} <${email}>`,
        to: 'jshoekert@gmail.com',
        subject: `Changing Capernaum Business Suggestion From ${name} <${email}>`,
        text: content
      }
    } else {
      let {firstName, lastName, email, message} = req.body;
      let content = `name: ${firstName} ${lastName} \n email: ${email} \n message: ${message}`
  
      mail = {
        from: `${firstName} ${lastName} <${email}>`,
        to: 'jshoekert@gmail.com',
        subject: `Changing Capernaum Message From ${firstName} ${lastName} <${email}>`,
        text: content
      }
    }

    return transporter.sendMail(mail, (err, info) => {
      if(err){
        return res.send(err.toString());
      }
      return res.send('Email sent');
    });
  });    
};