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
  coverage:any=[{
    coverageType:"",
    occurence:"",
    limit:"",
    individual:"",
    and:""
  }];
  constructor(private formBuilder:FormBuilder, private router:Router) { }

  ngOnInit(): void {

    this.currentCarrierPropertyForm = this.formBuilder.group({
      state: ['', []],
      amBest: ['', []],
      policyNumberFrom: ['', []],
      policyNumberTo: ['', []],
      activePolicy: ['', []],
      policyType: ['', []],
      inceptionDateFrom: ['', []],
      inceptionDateTo: ['', []],
      startDateFrom: ['', []],
      startDateTo: ['', []],
      endDateFrom: ['', []],
      endDateTo: ['', []],
      cancelDateFrom: ['', []],
      cancelDateTo: ['', []],
    
  });
  }
  addCoverage(){
    this.coverage.push({
      coverageType:"",
      occurence:"",
      limit:"",
      individual:"",
      and:""
    })
    console.log(this.coverage)
  }
  removeCoverage(index){
    if (this.coverage.length > 1) {
      this.coverage.splice(index, 1);
    }
  }
}
