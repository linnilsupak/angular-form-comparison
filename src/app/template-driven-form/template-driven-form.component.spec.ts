import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateDrivenFormComponent } from './template-driven-form.component';
import { MaterialModule } from '../materia.module';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import Person from '../../person';


describe('TemplateDrivenFormComponent', () => {
  let component: TemplateDrivenFormComponent;
  let fixture: ComponentFixture<TemplateDrivenFormComponent>;
  let submitEl: DebugElement;
  let formEl: DebugElement;
  let userNameEl: DebugElement;
  let passwordEl: DebugElement;
  let erroruserNameEl: DebugElement;
  let errorpasswordRequiredEl: DebugElement;
  let errorpasswordMinLengthEl: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MaterialModule, FormsModule, BrowserAnimationsModule],
      declarations: [TemplateDrivenFormComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplateDrivenFormComponent);
    component = fixture.componentInstance;
    formEl = fixture.debugElement.query(By.css('form'));
    submitEl = fixture.debugElement.query(By.css('button'))
    userNameEl = fixture.debugElement.query(By.css('input[type=text]'));
    passwordEl = fixture.debugElement.query(By.css('input[type=password]'));
    // erroruserNameEl = fixture.debugElement.query(By.css('mat-error[name="errorUserNameRequired"]'));
    // errorpasswordRequiredEl = fixture.debugElement.query(By.css('input[type=password] + mat-error'));
    // errorpasswordMinLengthEl = fixture.debugElement.query(By.css('input[type=password] + mat-error + mat-error'));
    fixture.detectChanges();
  });

  afterEach(()=>{
    fixture.destroy();
  });
  
  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('form valid when input is valid', () => {
    let person: Person;
    userNameEl.nativeElement.value = "linnil";
    passwordEl.nativeElement.value = "test12";

    expect(formEl.nativeElement.invalid).toBeFalsy();
  });

  it('userName field must be invalid when empty', () => {
    expect(formEl.nativeElement.userName.valid).toBeFalsy();
  });

  // it('userName field must return required error when empty', () => {
  //   // let errors = {};
  //   // errors = formEl.nativeElement.userName.errors || {};
  //   expect(erroruserNameEl).toBeTruthy();
  // });

  it('password field must be invalid when empty', () => {
    expect(formEl.nativeElement.password.valid).toBeFalsy();
  })

  // it('password field must return required error when empty', () => {
  //   let errors = {};
  //   errors = formEl.nativeElement.password.errors || {};
  //   expect(errors['required']).toBeTruthy();
  // });

  // it('password field must returned min error when it lesser than 6', () => {
  //   let errors = {};
  //   formEl.nativeElement.password.value = 'tests';
  //   errors = formEl.nativeElement.password.error || {};
  //   console.log(formEl.nativeElement.password.error)
  //   expect(errors['minlength']).toBeTruthy();
  // });
  
  it('onsubmit if form invalid, login button disabled', async(()=>{
    fixture.detectChanges();
    fixture.whenStable().then(()=>{
      passwordEl.nativeElement.value = "test";
      passwordEl.nativeElement.dispatchEvent(new Event('input'));
      fixture.detectChanges();
      expect(submitEl.nativeElement.disabled).toBeTruthy();
    })
  }));
  
  it('onsubmit if form valid, login button enabled', async(()=>{
    fixture.detectChanges();
    fixture.whenStable().then(()=>{
      userNameEl.nativeElement.value = "linnil";
      userNameEl.nativeElement.dispatchEvent(new Event('input'));
      passwordEl.nativeElement.value = "1234567";
      passwordEl.nativeElement.dispatchEvent(new Event('input'));
      fixture.detectChanges();
      expect(submitEl.nativeElement.disabled).toBeFalsy();
    });
  }));
  
  it('on submit must create result', ()=>{
    userNameEl.nativeElement.value = "linnil";
    passwordEl.nativeElement.value = "test12";
    component.onSubmit();
    expect(component.result).toBeTruthy();
  });
});
