import { AppPage } from './app.po';
import { browser } from 'protractor';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should redirect to /model', () =>{
    page.navigateTo();
    expect(browser.getCurrentUrl()).toEqual('http://localhost:4200/model');
  });

  it('click template driven form button, should redirect to /template', () =>{
    page.getTemplateDrivenButton().click();
    expect(browser.getCurrentUrl()).toEqual('http://localhost:4200/template');
  });

  it('click model driven form button, should redirect to /model', () => {
    page.getModelDrivenButton().click();
    expect(browser.getCurrentUrl()).toEqual('http://localhost:4200/model');
  });
});
