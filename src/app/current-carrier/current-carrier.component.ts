import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-current-carrier',
  templateUrl: './current-carrier.component.html',
  styleUrls: ['./current-carrier.component.scss']
})
export class CurrentCarrierComponent implements OnInit {
  states:any=["AndhraPradesh","Telangana"];
  policytypes:any=["policy1","policy2"];
  coverageTypes:any=["coverage type1","coverage  Type2"]
  currentCarrierPropertyForm: FormGroup;
  
  constructor(private formBuilder:FormBuilder, private router:Router) { }

  ngOnInit(): void {

    this.currentCarrierPropertyForm = this.formBuilder.group({
      state: ['', [Validators.required]],
      amBest: ['', [Validators.required]],
      policyNumberFrom: ['', [Validators.required]],
      policyNumberTo: ['', [Validators.required]],
      activePolicy: ['', [Validators.required]],
      policyType: ['', [Validators.required]],
      inceptionDateFrom: ['', [Validators.required]],
      inceptionDateTo: ['', [Validators.required]],
      startDateFrom: ['', [Validators.required]],
      startDateTo: ['', [Validators.required]],
      endDateFrom: ['', [Validators.required]],
      endDateTo: ['', [Validators.required]],
      cancelDateFrom: ['', [Validators.required]],
      cancelDateTo: ['', [Validators.required]],
      coverageType: ['', [Validators.required]],
      occurence: ['', [Validators.required]],
      limit: ['', [Validators.required]],
      individual: ['', [Validators.required]],
     
  });
  }

}
