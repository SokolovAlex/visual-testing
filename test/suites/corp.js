const cookiebannerButtonSelector = '*[data-at-selector="cookie-banner-btn"]';
const header = '*[data-at-selector="header"]';
const footer = '*[data-at-selector="footer"]';
const coutrySelectButton = '*[data-at-selector="coutry-select-button"]';
const featureTable = '*[data-at-selector="feature-table"]';
const buyblock = '[data-at-selector="feature-table"] [data-at-selector="buy-block"][data-at-bb-title="Kaspersky Anti-Virus"]';

const fixHeader = function(window) {
  window.document.querySelector('[data-at-selector="main-menu"]')
    .style.setProperty('position', 'relative', 'important');
};

gemini.suite('corp', (suite) => {
  suite.setUrl('/home-security');

  gemini.suite('home-security', (suite) => {
    suite
      .setCaptureElements('html')
      .capture('plain', (actions, find) => {
        actions.click(find(cookiebannerButtonSelector));
        actions.executeJS(fixHeader);
      });
  });

  gemini.suite('header', (suite) => {
    suite
      .setCaptureElements(header)
      .capture('plain');
  });

  gemini.suite('footer', (suite) => {
    suite
      .setCaptureElements(footer)
      .capture('plain', (actions) => actions.executeJS(fixHeader))
      .capture('opened', (actions, find) => {
        actions.click(find(coutrySelectButton));
        actions.wait(1000);
      });
  });

  gemini.suite('feature-table', (suite) => {
    suite
      .setCaptureElements(featureTable)
      .capture('plain', (actions) => actions.executeJS(fixHeader));
  });

  gemini.suite('buy-block', (suite) => {
    suite
      .setCaptureElements(buyblock)
      .capture('plain', (actions) => actions.executeJS(fixHeader));
  });
});


