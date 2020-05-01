import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-vin-sights',
  templateUrl: './vin-sights.component.html',
  styleUrls: ['./vin-sights.component.css']
})
export class VinSightsComponent implements OnInit {

  vinSightsForm: FormGroup
  states:any = ["Ap","telangana","adfaf"];
    constructor(private formBuilder:FormBuilder) { }
  
    ngOnInit() {
      this.vinSightsForm = this.formBuilder.group({
        state: ['', [Validators.required]],
        registeredOwnersFrom: ['', [Validators.required]],
        registeredOwnersTo: ['', [Validators.required]],
        titledOwnersTo: ['', [Validators.required]],
        titledOwnersFrom: ['', [Validators.required]],
        lienHoldersFrom: ['', [Validators.required]],
        lienHoldersTo: ['', [Validators.required]],
        lessorsFrom: ['', [Validators.required]],
        lessorsTo: ['', [Validators.required]],
        brandedTitle: ['', [Validators.required]],
        licenseState: ['', [Validators.required]],
        licensePlate: ['', [Validators.required]]
      });
    }
  

}
