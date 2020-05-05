import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {  Router } from '@angular/router';


@Component({
  selector: 'app-filter-individual-search',
  templateUrl: './filter-individual-search.component.html',
  styleUrls: ['./filter-individual-search.component.scss']
})
export class FilterIndividualSearchComponent implements OnInit {
  states:any=["AndhraPradesh","Telangana"];
  products:any=["formClosure/vacancy","product2"];
  individualSearchForm:FormGroup
  constructor(private formBuilder:FormBuilder, private router:Router) { }

  ngOnInit() {

    this.individualSearchForm = this.formBuilder.group({
      product: ['', [Validators.required]],
      fname: ['', [Validators.required]],
      lname: ['', [Validators.required]],
      sname: ['', [Validators.required]],
      mname: ['', [Validators.required]],
      dob: ['', [Validators.required]],
      ssn: ['', [Validators.required]],
      dln: ['',[Validators.required]],
      house_num: ['', [Validators.required]],
      street: ['', [Validators.required]],
      apt_num: ['', [Validators.required]],
      city: ['', [Validators.required]],
      state: ['', [Validators.required]],
      zip: ['', [Validators.required]],
     
  });
  }

}
