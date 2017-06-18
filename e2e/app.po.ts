import { browser, by, element } from 'protractor';

export class SollicitiatiebeheerPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('app-root h1')).getText();
  }
}
