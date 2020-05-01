import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-user-add',
  templateUrl: './new-user-add.component.html',
  styleUrls: ['./new-user-add.component.css']
})
export class NewUserAddComponent implements OnInit {
  currentStatuses:any=["status1","status2"];
  newUseraddForm:FormGroup;
  constructor(private formBuilder:FormBuilder, private router:Router) { }

  ngOnInit(): void {
    
    this.newUseraddForm = this.formBuilder.group({
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      CompanyName: ['', [Validators.required]],
      email: ['', [Validators.required]],
      workPhoneNumber: ['', [Validators.required]],
      currentStatus: ['', [Validators.required]],
      fromDate: ['', [Validators.required]],
      toDate: ['', [Validators.required]],
      requestedBy: ['', [Validators.required]],
      requestedByEmail: ['', [Validators.required]],
     
     
  });
  }


submit(data)
{
  console.log(data);
}

}
