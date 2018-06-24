import { Component, OnInit } from '@angular/core';
import Person from '../../person';
import { FormGroup, FormControl, Validators} from '@angular/forms'

@Component({
  selector: 'app-model-driven-form',
  templateUrl: './model-driven-form.component.html',
  styleUrls: ['./model-driven-form.component.css']
})
export class ModelDrivenFormComponent implements OnInit {
  result:Person;
  loginForm: FormGroup;
  userName: FormControl;
  password: FormControl;

  constructor() {
    this.userName = new FormControl('',[Validators.required]);
    this.password = new FormControl('',[Validators.required,Validators.minLength(6)]);
   }

  ngOnInit() {
    this.loginForm = new FormGroup({
      userName: this.userName,
      password: this.password
    })
  }

}
