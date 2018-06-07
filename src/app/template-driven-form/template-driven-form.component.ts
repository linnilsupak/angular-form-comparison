import { Component, OnInit } from '@angular/core';
import loginForm from '../../loginForm';

@Component({
  selector: 'app-template-driven-form',
  templateUrl: './template-driven-form.component.html',
  styleUrls: ['./template-driven-form.component.css']
})
export class TemplateDrivenFormComponent implements OnInit {
  result:loginForm;

  
  constructor() { }

  ngOnInit() {
  }

}

