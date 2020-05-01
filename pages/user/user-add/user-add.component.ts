import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {  Router } from '@angular/router';


@Component({
  selector: 'app-user-add',
  templateUrl: './user-add.component.html',
  styleUrls: ['./user-add.component.css']
})
export class UserAddComponent implements OnInit {
  states:any=["AndhraPradesh","Telangana"];
  products:any=["formClosure/vacancy","product2"];
  addForm:FormGroup;
  constructor(private formBuilder:FormBuilder, private router:Router
       ) { }

  ngOnInit(): void {

    this.addForm = this.formBuilder.group({
      product: ['', [Validators.required]],
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      suffixName: ['', [Validators.required]],
      middleName: ['', [Validators.required]],
      dateOfBirth: ['', [Validators.required]],
      socialSecurityNumber: ['', [Validators.required]],
      houseNumber: ['', [Validators.required]],
      streetName: ['', [Validators.required]],
      apartmentNumber: ['', [Validators.required]],
      city: ['', [Validators.required]],
      state: ['', [Validators.required]],
      zip: ['', [Validators.required]],
     
  });
  }

}
