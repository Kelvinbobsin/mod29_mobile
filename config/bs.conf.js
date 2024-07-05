require('dotenv').config()

const { generalConf } = require('./general.conf')

let capabilities = process.env.PLATFORM === 'android' ? [
      {
        "platformName": "Android",
        "appium:deviceName": "Samsung Galaxy S22 Ultra",
        "appium:platformVersion": "12.0",
        "appium:automationName": "UIAutomator2",
        "appium:app": "bs://481b8b7163a669e6c765e69edc3e29b71120e0fe"
    }
] : [
    {
        "platformName": "iOS",
        "appium:deviceName": "iPhone 15",
        "appium:platformVersion": "17",
        "appium:automationName": "XCUITest",
        "appium:app": "bs://f1abddedd1b87aa26b333736e1aa3ff8337ab8d9"
    }
 ]

let bsConf = {
    ...generalConf,
    ...capabilities,
    user: process.env.BS_USER,
    key: process.env.BS_KEY,
    services: ['browserstack']
}

module.exports = { bsConf }