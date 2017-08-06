import { DigisayTaskPage } from './app.po';

describe('digisay-task App', () => {
  let page: DigisayTaskPage;

  beforeEach(() => {
    page = new DigisayTaskPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
