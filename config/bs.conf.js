//import { generalConf } from './general.conf.js'
require('dotenv').config()

const { generalConf } = require('./general.conf')

   let bsConf = {
    user: process.env.BROWSERSTACK_USERNAME || 'kelvinbobsin_eMaNzO',
    key: process.env.BROWSERSTACK_ACCESS_KEY || 'oUpTxKqE4fopusNszkUk',
    hostname: 'hub.browserstack.com',
    capabilities: process.env.PLATFORM === "android" ? [
        {
            "platformName": "Android",
            "appium:deviceName": "Samsung Galaxy S22 Ultra",
            "appium:platformVersion": "12.0",
            "appium:automationName": "UIAutomator2",
            "appium:app": "bs://16e5ac45b17489a7834cff7c956428f192fa2936"
        }
    ] : [
        {
            "platformName": "iOS",
            "appium:deviceName": "iPhone 15",
            "appium:platformVersion": "17",
            "appium:automationName": "XCUITest",
            "appium:app": "bs://0e4c1704da2ffcc46441765acc0964f39de949ef"
        }
    ],
    commonCapabilities: {
        'bstack:options': {
            projectName: "BrowserStack EBAC",
            buildName: 'browserstack build',
            sessionName: `Test ${process.env.PLATFORM}`
            // debug: true,
            // networkLogs: true
        }
    },
    ...generalConf
}
module.exports = { bsConf }