import { TemplateDrivenFormPage } from './template-driven-form.po'
import { protractor } from 'protractor/built/ptor';

describe('Template Driven Form Page', () => {
    let page: TemplateDrivenFormPage;

    beforeEach(() => {
        page = new TemplateDrivenFormPage();
        page.navigateTo();
        // page.getTextBoxUserName().sendKeys(protractor.Key.DELETE);
        // page.getTextBoxPassword().sendKeys(protractor.Key.DELETE);
    });

    it('if user name field blank, error text should show',()=>{
        page.getTextBoxUserName().sendKeys('test');
        page.getTextBoxUserName().sendKeys(protractor.Key.DELETE);
        expect(page.getErrorTextUserNameRequired()).toBeDefined();
    });

    it('if password field blank, error text should show',()=>{
        page.getTextBoxPassword().sendKeys('test123');
        page.getTextBoxPassword().sendKeys(protractor.Key.DELETE);
        expect(page.getErrorTextPasswordRequired()).toBeDefined();
    });

    it('if password field length less than 6, error text should show',()=>{
        page.getTextBoxPassword().sendKeys('test');
        expect(page.getErrorTextPasswordMinLength()).toBeDefined();
    });

    it('if user name field invalid, login button can be click but the result should not show.',()=>{
        // page.getTextBoxUserName().sendKeys('test');
        // page.getTextBoxUserName().sendKeys(protractor.Key.DELETE);
        page.getTextBoxPassword().sendKeys('test123');
        page.getButtonLogin().click();
        // expect(page.getSuccessTitle()).toBeUndefined();
        expect(page.isResultContentPresent()).toBeFalsy();
    });
    
    it('if password field invalid, login button can be click but the result should not show.',()=>{
        page.getTextBoxUserName().sendKeys('test');
        page.getTextBoxPassword().sendKeys('test');
        page.getButtonLogin().click();
        // expect(page.getSuccessTitle()).toBeUndefined();
        expect(page.isResultContentPresent()).toBeFalsy();
    });

    it('if both user name and password valid, login button can be click and the result should show.',()=>{
        page.getTextBoxUserName().sendKeys('test');
        page.getTextBoxPassword().sendKeys('test123');
        page.getButtonLogin().click();
        // expect(page.getSuccessTitle()).toBeTruthy();
        expect(page.getResultContent()).toBeDefined();
    });

});