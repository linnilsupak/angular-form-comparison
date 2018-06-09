import { Component, OnInit } from '@angular/core';
import LoginForm from '../../LoginForm';

@Component({
  selector: 'app-template-driven-form',
  templateUrl: './template-driven-form.component.html',
  styleUrls: ['./template-driven-form.component.css']
})
export class TemplateDrivenFormComponent implements OnInit {
  result:LoginForm;

  
  constructor() { }

  ngOnInit() {
  }

}

