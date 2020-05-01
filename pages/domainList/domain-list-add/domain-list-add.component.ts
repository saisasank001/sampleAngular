import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-domain-list-add',
  templateUrl: './domain-list-add.component.html',
  styleUrls: ['./domain-list-add.component.css']
})
export class DomainListAddComponent implements OnInit {
  masterDomainForm:FormGroup;
  formData:any=[];
  constructor(private formBuilder:FormBuilder, private router:Router) { }

  ngOnInit(): void {
    this.masterDomainForm = this.formBuilder.group({
      domain: ['', [Validators.required]],
      notes: ['', [Validators.required]],
    
     
     
  });
  }


submit(data)
{
  this.formData.push(data);
}

cancel()
{
  console.log("cancel function")
}

}
