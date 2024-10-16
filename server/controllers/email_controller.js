const { Resend } = require('resend');

const testEmail = async (req, res) => {
    const resend = new Resend('re_fAe8mA5C_MdR3PbMNFe2pLqax2htPBQC4');

    resend.emails.send({
      from: 'jacobgoodwillie@gmail.com',
      to: 'jacobgoodwillie@gmail.com',
      subject: 'Test Mail',
      html: '<p>This is just a <strong>test email</strong>. Do not reply.</p>'
    });
    console.log("working");
}


module.exports = {
    testEmail,
}