import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-unsubscribe-emails-add',
  templateUrl: './unsubscribe-emails-add.component.html',
  styleUrls: ['./unsubscribe-emails-add.component.css']
})
export class UnsubscribeEmailsAddComponent implements OnInit {
  unsubscribeEmailForm : FormGroup;
  constructor(private formBuilder:FormBuilder, private router:Router) { }

  ngOnInit(): void {
    this.unsubscribeEmailForm = this.formBuilder.group({
      emailAddress: ['', [Validators.required]],
     
     
     
  });
  }

  submit(data)
  {
    console.log(data);
  }

}
