import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-home-master',
  templateUrl: './home-master.component.html',
  styleUrls: ['./home-master.component.css']
})
export class HomeMasterComponent implements OnInit {
homeMasterForm: FormGroup
states:any = ["Ap","telangana","adfaf"];
  constructor(private formBuilder:FormBuilder) { }

  ngOnInit() {
    this.homeMasterForm = this.formBuilder.group({
      state: ['', [Validators.required]],
      advancedLinking: ['', [Validators.required]],
      currentCarrier: ['', [Validators.required]],
      fireAndDisasterResponse: ['', [Validators.required]],
      foreClosure: ['', [Validators.required]],
      hhMembers: ['', [Validators.required]],
      instantId: ['', [Validators.required]],
      insurViewAttributes: ['', [Validators.required]],
      propertyData: ['', [Validators.required]],
      stateOptOut:['', [Validators.required]],
      vacancy: ['', [Validators.required]]
  });
  }

}
