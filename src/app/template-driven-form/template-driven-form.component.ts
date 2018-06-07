import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import loginForm from '../../loginForm';

@Component({
  selector: 'app-template-driven-form',
  templateUrl: './template-driven-form.component.html',
  styleUrls: ['./template-driven-form.component.css']
})
export class TemplateDrivenFormComponent implements OnInit {
  result: loginForm;

  login: loginForm;


  constructor() {
    this.login = new loginForm();
    console.log('this.login',this.login)
  }

  ngOnInit() {
  }

  onSubmit() {
    this.result = this.login;
  }

}

