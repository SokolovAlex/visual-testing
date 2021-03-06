const cookiebannerButtonSelector = '[data-at-select="cookieNotificationAccceptButton"]';
const languageSelectorModal = '[data-at-selector="languageSelectorModal"]';
const signUpDialogModal = '[data-at-selector="signUpDialogModal"]';
const signUpBtn = '.js-signup-button';
const selectCountry = '.js-select-lang';

gemini.suite('mykaspersky-welcome', (suite) => {
  suite
    .setUrl('/')
    .before((actions, find) => {
      actions.click(find(cookiebannerButtonSelector));
      actions.executeJS(function (window) {
        window.document.querySelector('.i-can-fly')
          .style.setProperty('position', 'relative', 'important');
        window.document.querySelector('.i-can-fly .w-welcomeMenu')
          .style.setProperty('position', 'relative', 'important');
      });
    })
  
  gemini.suite('page', (suite) => {
    suite
      .setCaptureElements('html')
      .capture('plain', (actions) => {
        // actions.executeJS(function (window) {
        //   window.document.querySelector('.js-show-kpmdownload')
        //     .style.setProperty('margin-left', '30px', 'important');
        // });
      })
  });

  gemini.suite('selectCountry', (suite) => {
    suite
      .setCaptureElements(languageSelectorModal)
      .capture('plain', (actions, find) => {
        actions.click(find(selectCountry));
        actions.wait(1000);
      })
  });

  gemini.suite('registration', (suite) => {
    suite
      .setCaptureElements(signUpDialogModal)
      .capture('plain', (actions, find) => {
        
        actions.click(find(signUpBtn));
        actions.wait(1000);
      })
  });
});
