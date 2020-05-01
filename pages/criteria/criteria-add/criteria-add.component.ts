import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-criteria-add',
  templateUrl: './criteria-add.component.html',
  styleUrls: ['./criteria-add.component.css']
})
export class CriteriaAddComponent implements OnInit {
  states:any=["AndhraPradesh","Telangana"];
  propertyDataForm: FormGroup;
  constructor(private formBuilder:FormBuilder, private router:Router) { }

  ngOnInit(): void {
    this.propertyDataForm = this.formBuilder.group({
      state: ['', [Validators.required]],
      dataSource: ['', [Validators.required]],
      areaFrom: ['', [Validators.required]],
      areaTo: ['', [Validators.required]],
      storiesFrom: ['', [Validators.required]],
      storiesTo: ['', [Validators.required]],
      bedroomsMin: ['', [Validators.required]],
      bedroomsMax: ['', [Validators.required]],
      bathsMin: ['', [Validators.required]],
      bathsMax: ['', [Validators.required]],
      fireplaceMin: ['', [Validators.required]],
      fireplaceMax: ['', [Validators.required]],
      pool: ['', [Validators.required]],
      ac: ['', [Validators.required]],
      yearBuiltMin: ['', [Validators.required]],
      yearBuiltMax: ['', [Validators.required]],
     
  });
  }

}
