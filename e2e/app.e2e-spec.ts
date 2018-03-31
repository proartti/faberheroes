import { browser, element, by } from 'protractor';

describe('Faber Heros', () => {

  beforeEach(() => {
    browser.get('');
  });

  it('should have {nav}', () => {
    element(by.css('ion-navbar')).isPresent().then(present => expect(present).toEqual(true));
  });

  it('should show home page title', () => {
    element(by.css('h3')).getText().then(txt => expect(txt).toEqual('Faber Heros'));
  });

});
