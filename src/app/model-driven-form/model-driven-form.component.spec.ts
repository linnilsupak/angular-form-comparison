import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModelDrivenFormComponent } from './model-driven-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../materia.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('ModelDrivenFormComponent', () => {
  let component: ModelDrivenFormComponent;
  let fixture: ComponentFixture<ModelDrivenFormComponent>;
  let userName;
  let password;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ReactiveFormsModule, MaterialModule,BrowserAnimationsModule],
      declarations: [ModelDrivenFormComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModelDrivenFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    component.ngOnInit();

    userName = component.loginForm.controls['userName'];
    password = component.loginForm.controls['password'];
  });

  afterEach(()=>{
    fixture.destroy();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('form invalid when empty', () => {
    expect(component.loginForm.valid).toBeFalsy();
  });

  it('form valid when input is valid', () => {
    userName.setValue('linnil');
    password.setValue('test12');
    expect(component.loginForm.valid).toBeTruthy();
  })

  it('userName field must be invalid when empty', () => {
    expect(userName.valid).toBeFalsy();
  });

  it('userName field must return required error when empty', () => {
    let errors = {};
    errors = userName.errors || {};
    expect(errors['required']).toBeTruthy();
  });

  it('password field must be invalid when empty', () => {
    expect(password.valid).toBeFalsy();
  })

  it('password field must return required error when empty', () => {
    let errors = {};
    errors = password.errors || {};
    expect(errors['required']).toBeTruthy();
  });

  it('password field must returned min error when it lesser than 6', () => {
    let errors = {};
    password.setValue('12345');
    errors = password.errors || {};
    expect(errors['minlength']).toBeTruthy();
  });

  it('onsubmit if form invalid, it should do nothing', ()=>{
    component.onSubmit();
    expect(component.result).toBeFalsy();
  });
  
  it('onsubmit if form valid, it should do nothing', ()=>{
    userName.setValue('linnil');
    password.setValue('test12');
    component.onSubmit();
    expect(component.result).toBeTruthy();
  });
});
