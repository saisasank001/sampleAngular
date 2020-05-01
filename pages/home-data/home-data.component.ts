import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-home-data',
  templateUrl: './home-data.component.html',
  styleUrls: ['./home-data.component.css']
})
export class HomeDataComponent implements OnInit {
  states:any = ["Ap","telangana","adfaf"];
  homeDataForm: FormGroup
  constructor(private formBuilder:FormBuilder) { }

  ngOnInit() {
    this.homeDataForm = this.formBuilder.group({
      state: ['', [Validators.required]],
      statementsAlerts: ['', [Validators.required]],
      recordLevelStatements: ['', [Validators.required]],
      statementsBy: ['', [Validators.required]],
      statementsByLexIDFrom: ['', [Validators.required]],
      statementsByLexIDTo: ['', [Validators.required]],
      instantId: ['', [Validators.required]],
      maxSize: ['', [Validators.required]],
      indentityNotResolved: ['', [Validators.required]],
      lexId:['', [Validators.required]]
  });
  }

}
