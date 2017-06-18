import { SollicitiatiebeheerPage } from './app.po';

describe('sollicitiatiebeheer App', () => {
  let page: SollicitiatiebeheerPage;

  beforeEach(() => {
    page = new SollicitiatiebeheerPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
