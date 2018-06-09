import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import LoginForm from '../../LoginForm';

@Component({
  selector: 'app-template-driven-form',
  templateUrl: './template-driven-form.component.html',
  styleUrls: ['./template-driven-form.component.css']
})
export class TemplateDrivenFormComponent implements OnInit {
  result:LoginForm;

  login: LoginForm;


  constructor() {
    this.login = new LoginForm();
    console.log('this.login',this.login)
  }

  ngOnInit() {
  }

  onSubmit() {
    this.result = this.login;
  }

}

