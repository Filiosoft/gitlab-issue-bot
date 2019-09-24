require('dotenv').config()

module.exports = {
  port: process.env.PORT || 3000,
  baseUrl: process.env.BASE_URL || 'http://localhost:3000',
  dbUri: process.env.MONGODB_URI || 'mongodb://localhost:27017/glib',
  slack: {
    verificationToken: process.env.SLACK_VERIFICATION_TOKEN,
    token: process.env.SLACK_TOKEN,
    clientId: process.env.SLACK_CLIENT_ID,
    clientSecret: process.env.SLACK_CLIENT_SECRET
  }
}