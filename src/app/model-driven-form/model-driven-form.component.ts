import { Component, OnInit } from '@angular/core';
import ResultForm from '../../ResultForm';

@Component({
  selector: 'app-model-driven-form',
  templateUrl: './model-driven-form.component.html',
  styleUrls: ['./model-driven-form.component.css']
})
export class ModelDrivenFormComponent implements OnInit {
  result:ResultForm;

  constructor() { }

  ngOnInit() {
  }

}
