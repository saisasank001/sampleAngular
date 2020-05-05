import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-criteria',
  templateUrl: './criteria.component.html',
  styleUrls: ['./criteria.component.scss']
})
export class CriteriaComponent implements OnInit {

  criteriaForm:FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.criteriaForm = this.formBuilder.group({
      state: ['',[Validators.required]],
      dataSource:['',[Validators.required]],
      areaFrom:['',[Validators.required]],
      areaTo:['',[Validators.required]],
      storiesFrom:['',[Validators.required]],
      storiesTo:['',[Validators.required]],
      bedroomsMin:['',[Validators.required]],
      bedroomsMax:['',[Validators.required]],
      bathsMin:['',[Validators.required]],
      bathsMax:['',[Validators.required]],
      fireplaceMin:['',[Validators.required]],
      fireplaceMax:['',[Validators.required]],
      pool:['',[Validators.required]],
      ac:['',[Validators.required]],
      yearBuiltMin:['',[Validators.required]],
      yearBuiltMax:['',[Validators.required]],

    }); 

  }

}
