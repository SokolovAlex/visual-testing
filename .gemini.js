module.exports = {
  rootUrl: 'http://localhost:8000/',
  //rootUrl: 'https://www.kaspersky.fr/',
  gridUrl: 'http://127.0.0.1:4444/wd/hub',

  windowSize: "1150x768",
  screenshotsDir: 'screenshots',
  // screenshotMode: 'fullpage',
  //compositeImage: true,

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
      "html-reporter/gemini": {
        enabled: true,
        path: "gemini-reports",
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