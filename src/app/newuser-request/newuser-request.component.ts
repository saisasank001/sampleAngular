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
  usersArray:any = [
    {
      domain:'test domain1',
      addedBy:'anusha',
      addedOn:'02-02-2020',
      unSubId:'123'
    },
    {
      domain:'test domain2',
      addedBy:'anusha',
      addedOn:'03-02-2020',
      unSubId:'456'
    }
  ]
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

    console.log(data['unSubId'])
  }
}
