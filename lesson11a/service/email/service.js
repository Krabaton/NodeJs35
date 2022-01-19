import Mailgen from 'mailgen'

class EmailService {
  constructor(env, sender) {
    this.sender = sender
    switch (env) {
      case 'development':
        this.link = 'https://581d-185-19-6-62.ngrok.io'
        break
      case 'test':
        this.link = 'http://localhost:5000'
        break
      case 'production':
        this.link = 'https://api-35.herokuapp.com'
        break
      default:
        this.link = 'http://localhost:3000'
    }
  }

  createEmailTemplate(username, verifyToken) {
    const mailGenerator = new Mailgen({
      theme: 'default',
      product: {
        name: 'Group 35',
        link: this.link,
      },
    })

    const email = {
      body: {
        name: username,
        intro: "Welcome! We're very excited to have you on board.",
        action: {
          instructions: 'To get started with our API, please click here:',
          button: {
            color: '#22BC66', // Optional action button color
            text: 'Confirm your account',
            link: `${this.link}/api/users/verify/${verifyToken}`,
          },
        },
        outro: 'Нужна помощь, напишите нам, но лучше пришлите денег.',
      },
    }
    return mailGenerator.generate(email)
  }

  async sendVerifyEmail(email, username, verifyToken) {
    const emailBody = this.createEmailTemplate(username, verifyToken)
    const msg = {
      to: email,
      subject: 'Verify email',
      html: emailBody,
    }
    try {
      const result = await this.sender.send(msg)
      console.log(result)
      return true
    } catch (error) {
      console.error(error.message)
      return false
    }
  }
}

export default EmailService
