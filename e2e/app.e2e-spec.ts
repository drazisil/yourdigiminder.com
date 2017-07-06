import { MyNewappPage } from './app.po';

describe('my-newapp App', () => {
  let page: MyNewappPage;

  beforeEach(() => {
    page = new MyNewappPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
