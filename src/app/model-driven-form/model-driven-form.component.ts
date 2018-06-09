import { Component, OnInit } from '@angular/core';
import LoginForm from '../../LoginForm';
import { FormGroup, FormControl} from '@angular/forms'

@Component({
  selector: 'app-model-driven-form',
  templateUrl: './model-driven-form.component.html',
  styleUrls: ['./model-driven-form.component.css']
})
export class ModelDrivenFormComponent implements OnInit {
  result:LoginForm;
  loginForm: FormGroup;

  constructor() {
    this.loginForm = new FormGroup({
      userName: new FormControl(),
      password: new FormControl()
    })
   }

  ngOnInit() {
  }

}
