import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-instant-data-add',
  templateUrl: './instant-data-add.component.html',
  styleUrls: ['./instant-data-add.component.css']
})
export class InstantDataAddComponent implements OnInit {
  states:any=["AndhraPradesh","Telangana"];
  instantDataIdForm:FormGroup;
  constructor(private formBuilder:FormBuilder, private router:Router) { }

  ngOnInit(): void {
    this.instantDataIdForm = this.formBuilder.group({
      state: ['', [Validators.required]],
      nas: ['', [Validators.required]],
      nap: ['', [Validators.required]],
      cvi: ['', [Validators.required]],
      riskCode: ['', [Validators.required]],
     
    
     
  });
  }

}
