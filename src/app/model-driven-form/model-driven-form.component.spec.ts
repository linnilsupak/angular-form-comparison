import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModelDrivenFormComponent } from './model-driven-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

describe('ModelDrivenFormComponent', () => {
  let component: ModelDrivenFormComponent;
  let fixture: ComponentFixture<ModelDrivenFormComponent>;
  let email;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule, ReactiveFormsModule],
      declarations: [ModelDrivenFormComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModelDrivenFormComponent);
    component = fixture.componentInstance;
    // fixture.detectChanges();
    component.ngOnInit();

    email = component.loginForm.controls['email'];
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('form invalid when empty', () => {
    expect(component.loginForm.valid).toBeFalsy;
  });

  it('email field must be invalid when empty', () => {
    expect(email.valid).toBeFalsy;
  });

  it('email field must return required error when empty', () => {
    let errors = {};
    errors = email.errors || {};
    expect(errors['required']).toBeTruthy;
  });





});
