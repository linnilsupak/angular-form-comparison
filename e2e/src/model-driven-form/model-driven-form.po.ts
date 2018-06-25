import { browser, by, element } from 'protractor';

export class ModelDrivenFormPage {
    navigateTo() {
        return browser.get('/model');
    }
    // getTitle() {
    //     return element(by.tagName('h2'))
    // }
    getTextBoxUserName() {
        return element(by.css('[placeholder="User Name"]'));
    }
    getErrorTextUserNameRequired() {
        return element(by.cssContainingText('mat-error','Username is required.'));
    }
    getTextBoxPassword() {
        return element(by.css('[placeholder="Password"]'));
    }
    getErrorTextPasswordRequired() {
        return element(by.cssContainingText('mat-error','Password is required.'));
    }
    getErrorTextPasswordMinLength() {
        return element(by.cssContainingText('mat-error','Password must be 6 characters long or longer.'));
    }
    getButtonLogin() {
        return element(by.cssContainingText('button[type="submit"]', 'Login'));
    }
    getSuccessTitle(){
        return element(by.cssContainingText('h1','Login Success'));
    }
    getResultContent(){
        return element(by.css('pre'));
    }
    isResultContentPresent(){
        return element(by.css('pre')).isPresent();
    }
}