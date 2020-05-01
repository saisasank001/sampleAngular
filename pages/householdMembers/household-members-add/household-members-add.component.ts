import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-household-members-add',
  templateUrl: './household-members-add.component.html',
  styleUrls: ['./household-members-add.component.css']
})
export class HouseholdMembersAddComponent implements OnInit {
  states:any=["AndhraPradesh","Telangana"];
  householdMembersForm:FormGroup;
  constructor(private formBuilder:FormBuilder, private router:Router) { }

  ngOnInit(): void {
    this.householdMembersForm = this.formBuilder.group({
      state: ['', [Validators.required]],
      youthfulDriver: ['', [Validators.required]],
      expiredLicense: ['', [Validators.required]],
      streetName: ['', [Validators.required]],
      apartmentName: ['', [Validators.required]],
      city: ['', [Validators.required]],
      zip: ['', [Validators.required]],
    
     
  });

  }

}
