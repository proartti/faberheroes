import { browser, element, by } from 'protractor';

describe('Faber Heros', () => {
  beforeEach(() => {
    browser.get('');
  });

  it('should have {nav}', () => {
    element(by.css('ion-navbar'))
      .isPresent()
      .then(present => expect(present).toEqual(true));
  });

  it('should show Logo', () => {
    element(by.css('.welcomeBox img'))
      .isPresent()
      .then(present => expect(present).toEqual(true));
  });

  it('should show home page title', () => {
    element(by.css('.welcomeBox p strong'))
      .getText()
      .then(txt => expect(txt).toEqual('Welcome to Faber Heroes App.'));
  });

  it('has a menu button that displays the logo', () => {
    element(by.css('.bar-button-menutoggle'))
      .click()
      .then(() => {
        browser.driver.sleep(700); // wait for the animation
        element
          .all(by.css('.logoMenu img'))
          .first()
          .getAttribute('alt')
          .then(att => expect(att).toEqual('Faber Heroes'));
      });
  });
});
