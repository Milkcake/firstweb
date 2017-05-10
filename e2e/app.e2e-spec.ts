import { FirstwebPage } from './app.po';

describe('firstweb App', () => {
  let page: FirstwebPage;

  beforeEach(() => {
    page = new FirstwebPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
