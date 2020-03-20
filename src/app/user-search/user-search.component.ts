import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-search',
  templateUrl: './user-search.component.html',
  styleUrls: ['./user-search.component.scss']
})
export class UserSearchComponent implements OnInit {
  userSearchForm:FormGroup

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
        this.userSearchForm = this.formBuilder.group({
          firstName: ['',[Validators.required]],
          lastName: ['',[Validators.required]],
          companyName: ['',[Validators.required]],
          email: ['',[Validators.required]],
          fromDate: ['',[Validators.required]],
          phoneNumber: ['',[Validators.required]],
          currentStatus: ['all',[Validators.required]],
          formDate: ['',[Validators.required]],
          toDate: ['',[Validators.required]],
          requestedBy:['',[Validators.required]],
          requestedEmail:['',[Validators.required]]
  });
  }
}
