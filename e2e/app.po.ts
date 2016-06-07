export class MyAngularProjectPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('my-angular-project-app h1')).getText();
  }
}
