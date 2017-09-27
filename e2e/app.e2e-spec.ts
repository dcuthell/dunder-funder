import { DunderFunderPage } from './app.po';

describe('dunder-funder App', () => {
  let page: DunderFunderPage;

  beforeEach(() => {
    page = new DunderFunderPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
