import { NgModule } from '@angular/core';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  imports: [
    MatButtonToggleModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
  ],
  declarations: [],
  exports: [
    MatButtonToggleModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
  ]
})
export class MaterialModule { }
