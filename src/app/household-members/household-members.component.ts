import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-household-members',
  templateUrl: './household-members.component.html',
  styleUrls: ['./household-members.component.scss']
})
export class HouseholdMembersComponent implements OnInit {
  states:any=["AndhraPradesh","Telangana"];
  householdMembersForm:FormGroup;
  constructor(private formBuilder:FormBuilder, private router:Router) { }

  ngOnInit() {

    this.householdMembersForm = this.formBuilder.group({
      state: ['', [Validators.required]],
      is_youthful: ['', [Validators.required]],
      lic_expired: ['', [Validators.required]],
      street: ['', [Validators.required]],
      apt: ['', [Validators.required]],
      city: ['', [Validators.required]],
      zip: ['', [Validators.required]],
    
     
  });
  }

}
