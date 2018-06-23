import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ModelDrivenFormComponent } from './model-driven-form/model-driven-form.component';
import { TemplateDrivenFormComponent } from './template-driven-form/template-driven-form.component';

export const routes: Routes = [
  {path: 'model', component: ModelDrivenFormComponent},
  {path: 'template', component: TemplateDrivenFormComponent},
  {path: '', redirectTo: '/model', pathMatch: 'full' }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [ 
    RouterModule 
  ]
})    
export class AppRoutingModule { }
