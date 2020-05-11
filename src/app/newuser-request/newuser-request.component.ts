import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-newuser-request',
  templateUrl: './newuser-request.component.html',
  styleUrls: ['./newuser-request.component.scss']
})
export class NewuserRequestComponent implements OnInit {
  unsubscribeUserForm : FormGroup;
  usersArray:any = [{"unsubscription_id":1082,"Domain":"-","EmailAddress":"b@b.com","AddedBy":"User","DateAdded":"2020-03-03T14:37:13"}]
  constructor(private formBuilder:FormBuilder, private router:Router) { }
  ngOnInit(): void {
    this.unsubscribeUserForm = this.formBuilder.group({
      email: ['', [Validators.required]],
      addedBy: ['test', [Validators.required]]
  });
  }
  submit(data){
    console.log(data)
  }
  delete(data){

    console.log(data['unsubscription_id'])
  }
}
