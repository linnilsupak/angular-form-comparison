import { Component, OnInit } from '@angular/core';
import loginForm from '../../loginForm';

@Component({
  selector: 'app-model-driven-form',
  templateUrl: './model-driven-form.component.html',
  styleUrls: ['./model-driven-form.component.css']
})
export class ModelDrivenFormComponent implements OnInit {
  result:loginForm;

  constructor() { }

  ngOnInit() {
  }

}
