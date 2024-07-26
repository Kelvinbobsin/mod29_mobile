const { join } = require('path')

const allure = require('allure-commandline')

const video = require('wdio-video-reporter');



exports.config = {

    // hostname: 'localhost',

    // port: 4723,

    path: '/wd/hub',

    user: "lojaebac_gBJk0x",

    key: "dQfHqx13fxpsVg1Ns1Yc",



    // services: ['appium'],

    services: ['browserstack'],

    specs: [

        './test/specs/**/*.spec.js'

    ],

    suites: {

        products: [

            './test/specs/products.spec.js'

        ]

    },

    framework: 'mocha',

    capabilities: [

        {

            "bstack:options": {

                "userName": "lojaebac_gBJk0x",

                "accessKey": "dQfHqx13fxpsVg1Ns1Yc",

                "projectName": "Meu primeiro projeto Appium iOS BS",

                "buildName": "EBAC Test",

                "sessionName": "ebac_test",

                "device": "iPhone 12 Pro",

                "osVersion": "14",

                "debug": true

            },

            "app": "bs://c373eea6d87b8b0da7ea7c0d59a8006275c8d12d"

        }

    ],

    waitforTimeout: 20000,

    mochaOpts: {

        timeout: 300000

    },

    reporters: ['spec',

        ['allure', {

            outputDir: 'allure-results',

            disableWebdriverStepsReporting: true,

            disableWebdriverScreenshotsReporting: true,

        }],

        [video, {

            saveAllVideos: true,    // If true, also saves videos for successful test cases

            videoSlowdownMultiplier: 50, // Higher to get slower videos, lower for faster videos [Value 1-100]

        }]

    ],

    onComplete: function () {

        const reportError = new Error('Could not generate Allure report')

        const generation = allure(['generate', 'allure-results', '--clean'])

        return new Promise((resolve, reject) => {

            const generationTimeout = setTimeout(

                () => reject(reportError),

                5000)



            generation.on('exit', function (exitCode) {

                clearTimeout(generationTimeout)



                if (exitCode !== 0) {

                    return reject(reportError)

                }



                console.log('Allure report successfully generated')

                resolve()

            })

        })

    },

    afterStep: function (test, scenario, { error, duration, passed }) {

        if (error) {

            driver.takeScreenshot()

        }

    }

}