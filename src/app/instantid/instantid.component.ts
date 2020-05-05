import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-instantid',
  templateUrl: './instantid.component.html',
  styleUrls: ['./instantid.component.scss']
})
export class InstantidComponent implements OnInit {
  states:any=["AndhraPradesh","Telangana"];
  instantDataIdForm:FormGroup;
  constructor(private formBuilder:FormBuilder, private router:Router) { }

  ngOnInit() {
    this.instantDataIdForm = this.formBuilder.group({
      state: ['', [Validators.required]],
      nas: ['', [Validators.required]],
      nap: ['', [Validators.required]],
      cvi: ['', [Validators.required]],
      riskCodes: ['', [Validators.required]],
     
    
     
  });
  }

}
