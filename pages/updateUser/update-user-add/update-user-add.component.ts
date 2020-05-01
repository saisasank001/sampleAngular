import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update-user-add',
  templateUrl: './update-user-add.component.html',
  styleUrls: ['./update-user-add.component.css']
})
export class UpdateUserAddComponent implements OnInit {
  updateUserEmailForm:FormGroup;
  constructor(private formBuilder:FormBuilder, private router:Router) { }

  ngOnInit(): void {
    this.updateUserEmailForm = this.formBuilder.group({
      oldEmail: ['', [Validators.required]],
      newEmail: ['', [Validators.required]],
    
     
     
  });
  }


update(data)
{
console.log(data);
}

}
