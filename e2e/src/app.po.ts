import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get('/');
  }
  
  getModelDrivenButton() {
    return element(by.cssContainingText('mat-button-toggle','Model Driven Form'));
  }
  getTemplateDrivenButton() {
    return element(by.cssContainingText('mat-button-toggle','Template Driven Form'));
  }

}
