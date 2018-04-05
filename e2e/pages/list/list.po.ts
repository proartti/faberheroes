import { browser, by, element } from 'protractor';

export class ListPageObject {
  navigateTo() {
    browser.get('');

    element(by.css('.bar-button-menutoggle'))
      .click()
      .then(() => {
        browser.driver.sleep(700); // wait for the animation
        let button = element.all(by.css('ion-menu button'));
        button.last().click();
      });
    // element(by.css('ion-menu button')).click();

    // wait bit for the data load from Marvel API
    browser.driver.sleep(1500);
  }

  getHeroesList() {
    return element(by.css('ion-list'));
  }

  getSearchBar() {
    return element(by.css('input.searchbar-input'));
  }

  getPaginationControls() {
    return element(by.css('ion-footer'));
  }
}
