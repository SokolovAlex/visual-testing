module.exports = {
  rootUrl: 'http://localhost:8000/',
  // rootUrl: 'https://www.kaspersky.fr/',
  // rootUrl: 'https://my.kaspersky.com/',
  gridUrl: 'http://127.0.0.1:4444/wd/hub',

  windowSize: "1150x968",
  screenshotsDir: 'screenshots',
  compositeImage: true,

  browsers: {
    chrome: {
      desiredCapabilities: {
        browserName: 'chrome'
      }
    }
  },

  system: {
    parallelLimit: 3,
    plugins: {
      // issue https://github.com/gemini-testing/html-reporter/issues/27
      "html-reporter/gemini": {
        enabled: true,
        defaultView: "all",
      }
    },
    // coverage: {
    //   enabled: true,
    //   exclude: [
    //     'node_modules/todomvc-common/base.css',
    //     'null'
    //   ]
    // }
  }
};