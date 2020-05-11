import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-request-new-user',
  templateUrl: './request-new-user.component.html',
  styleUrls: ['./request-new-user.component.scss']
})
export class RequestNewUserComponent implements OnInit {
  users: any = [
    {
      "UserRequest":{
    "FirstName": "",
    "LastName": "",
    "Company": "",
    "EmailAddress": "",
    "WorkPhoneNumber": "",
    "Extn": "",
    "UserRequestStatusId":"1",
    "RequestedBy":this.getRequestedBy(),
    "RequestedByEmail":this.getRequestedByEmail(),
    "RequestedStatusId":this.getUserRequestStatusId()
  }
}

  ]
  constructor() { }

  ngOnInit() {
  }
  addUser() {
    this.users.push({"UserRequest":{
      "FirstName": "",
      "LastName": "",
      "Company": "",
      "EmailAddress": "",
      "WorkPhoneNumber": "",
      "Extn": "",
      "UserRequestStatusId":"1",
      "RequestedBy":this.getRequestedBy(),
      "RequestedByEmail":this.getRequestedByEmail(),
      "RequestedStatusId":this.getUserRequestStatusId()
    }});

    console.log(this.users)

  }

  deleteUser(index) {
    if (this.users.length > 1) {
      this.users.splice(index, 1);
    }
  }
  getRequestedBy(){
    return '';
  }
  getRequestedByEmail(){
    return '';
  }
  getUserRequestStatusId(){
    return '';
  }
    submit() {
    console.log(this.users)

  }
}
