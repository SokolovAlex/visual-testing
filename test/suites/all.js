const cookiebannerButtonSelector = '[at-selector="cookie-banner-btn"]';

gemini.suite('plain pages', () => {
  gemini.suite('home-security', (suite) => {
    suite
      .setUrl('/home-security')
      .setCaptureElements('html')
      .capture('plain', (actions, find) => {
        actions.click(find(cookiebannerButtonSelector));
      });
  });
});
