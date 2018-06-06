import { Component, OnInit } from '@angular/core';
import ResultForm from '../../ResultForm';

@Component({
  selector: 'app-template-driven-form',
  templateUrl: './template-driven-form.component.html',
  styleUrls: ['./template-driven-form.component.css']
})
export class TemplateDrivenFormComponent implements OnInit {
  result:ResultForm;
  
  constructor() { }

  ngOnInit() {
  }

}

