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
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('form valid when input is valid', () => {
    let person: Person;
    userNameEl.nativeElement.value = "linnil";
    passwordEl.nativeElement.value = "test12";

    expect(formEl.nativeElement.invalid).toBeFalsy;
  });

  it('userName field must be invalid when empty', () => {
    expect(formEl.nativeElement.userName.valid).toBeFalsy;
  });

  it('userName field must return required error when empty', () => {
    let errors = {};
    errors = formEl.nativeElement.userName.errors || {};
    expect(errors['required']).toBeTruthy;
  });

  it('password field must be invalid when empty', () => {
    expect(formEl.nativeElement.password.valid).toBeFalsy;
  })

  it('password field must return required error when empty', () => {
    let errors = {};
    errors = formEl.nativeElement.password.errors || {};
    expect(errors['required']).toBeTruthy;
  });

  it('password field must returned min error when it lesser than 6', () => {
    let errors = {};
    formEl.nativeElement.password.value = 'tests';
    errors = formEl.nativeElement.password.error || {};
    console.log(formEl.nativeElement.password.error)
    expect(errors['minlength']).toBeTruthy;
  });
  // it('form invalid when empty', () => {
  //   expect(component.loginForm.valid).toBeFalsy;
  // });
});
