import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-home-inspection',
  templateUrl: './home-inspection.component.html',
  styleUrls: ['./home-inspection.component.css']
})
export class HomeInspectionComponent implements OnInit {
  states:any = ["Ap","telangana","adfaf"];

  
  homeInspectionForm: FormGroup
  constructor(private formBuilder:FormBuilder) { }

  ngOnInit() {
    this.homeInspectionForm = this.formBuilder.group({
      state: ['', [Validators.required]],
      homeInspectionIndexFrom: ['', [Validators.required]],
      homeInspectionIndexTo: ['', [Validators.required]],
      policyCoverageValue: ['', [Validators.required]],
      yearBuiltFrom: ['', [Validators.required]],
      yearBuiltTo: ['', [Validators.required]],
      indicators: ['', [Validators.required]],
      addressVacancyIndicator: ['', [Validators.required]],
      ageOfHouse:['', [Validators.required]]
  });
  }
}
