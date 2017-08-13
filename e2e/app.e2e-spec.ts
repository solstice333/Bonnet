import { BonnetPage } from './app.po';

describe('bonnet App', () => {
  let page: BonnetPage;

  beforeEach(() => {
    page = new BonnetPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
