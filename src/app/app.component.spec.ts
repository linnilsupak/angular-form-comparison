import { TestBed, async, tick, fakeAsync } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { Location } from '@angular/common'
import { ModelDrivenFormComponent } from './model-driven-form/model-driven-form.component';
import { TemplateDrivenFormComponent } from './template-driven-form/template-driven-form.component';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { routes } from './app-routing.module';
import { MaterialModule } from './materia.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { resolve } from 'url';

describe('AppComponent', () => {
  let location: Location;
  let router: Router;
  let fixture;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        MaterialModule,
        FormsModule,
        ReactiveFormsModule,
        RouterTestingModule.withRoutes(routes),
      ],
      declarations: [
        AppComponent,
        ModelDrivenFormComponent,
        TemplateDrivenFormComponent
      ],
    });

    router = TestBed.get(Router);
    location = TestBed.get(Location);

    fixture = TestBed.createComponent(AppComponent);
    router.initialNavigation();
  }));

  
  afterEach(()=>{
    fixture.destroy();
  });
  
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it('fakeAsync works', fakeAsync(() => {
    let promise = new Promise((resolve) => {
      setTimeout(resolve, 10);
    });
    let done =false;
    promise.then(()=> done = true );
    tick(50);
    expect(done).toBeTruthy();
  }));

  it('navigate to "" redirects you to "/model"', fakeAsync(() => {
    router.navigate(['']);
    tick();
    expect(location.path()).toEqual('/model');
  }));
  it('if navigate to "template" take you to "/template"', fakeAsync(() => {
    router.navigate(['template']);
    tick();
    expect(location.path()).toEqual('/template');
  }));
  it('if navigate to "model" take you to "/model"', fakeAsync(() => {
    router.navigate(['model']);
    tick();
    expect(location.path()).toEqual('/model');
  }));
});
