import { browser, element, by } from 'protractor';
import { ListPageObject } from './list.po';

describe('Login page', () => {
  let page: ListPageObject;

  beforeEach(() => {
    page = new ListPageObject();
  });

  it('should render heroes list', () => {
    page.navigateTo();

    expect(page.getHeroesList()).toBeDefined();
  });

  it('should render searchbar', () => {
    page.navigateTo();

    expect(page.getSearchBar()).toBeDefined();
  });

  it('should render pagination', () => {
    page.navigateTo();

    expect(page.getSearchBar()).toBeDefined();
  });
});
