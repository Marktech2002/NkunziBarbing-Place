
// AP = 761fb6304ea6dfb18b1f32cbc8b4f873
// secret key = b1733fc7f815da47333d9d7c22957a1c
const mailjet = require('node-mailjet').Client(
    process.env.MAIL_KEY ,
    process.env.MAIL_SECRET ,
    {
      url: 'api.mailjet.com', // Mailjet API URL
      version: 'v3.1', // API version
      perform_api_call: true // Automatically perform the API call
    }
  )  

const emailData = {
  Messages: [
    {
      From: {
        Email: 'maktech2002@outlook.com',
        Name: 'Me',
      },
      To: [
        {
          Email: 'maktee2002@gmail.com',
          Name: 'You',
        },
      ],
      Subject: 'My first Mailjet Email!',
      TextPart: 'Greetings from Mailjet!',
      HTMLPart:
        '<h3>Dear passenger 1, welcome to <a href="https://www.mailjet.com/">Mailjet</a>!</h3><br />May the delivery force be with you!',
    },
  ],
};

async function sendEmail() {
  try {
    const result = await mailjet.post('send', { version: 'v3.1' }).request(emailData);
    console.log(result.body);
  } catch (err) {
    console.log(err.statusCode);
  }
}

sendEmail();
