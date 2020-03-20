import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-update-user-email',
  templateUrl: './update-user-email.component.html',
  styleUrls: ['./update-user-email.component.scss']
})
export class UpdateUserEmailComponent implements OnInit {
  updateUserEmailForm: FormGroup
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.updateUserEmailForm = this.formBuilder.group({
      oldEmail: ['',[Validators.required,Validators.pattern(
        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    )]],
      newEmail: ['',[Validators.required,Validators.pattern(
        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    )]]
});
  }
update(data){
  console.log(data)
}
}
