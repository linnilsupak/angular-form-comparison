import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import Person from '../../person';

@Component({
  selector: 'app-template-driven-form',
  templateUrl: './template-driven-form.component.html',
  styleUrls: ['./template-driven-form.component.css']
})
export class TemplateDrivenFormComponent implements OnInit {
  result:Person;

  login: Person;


  constructor() {
    this.login = new Person();
    console.log('this.login',this.login)
  }

  ngOnInit() {
  }

  onSubmit() {
    this.result = this.login;
  }

}

