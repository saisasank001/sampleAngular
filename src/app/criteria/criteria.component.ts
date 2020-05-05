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
      data_source:['',[Validators.required]],
      from_living_area_sf:['',[Validators.required]],
      to_living_area_sf:['',[Validators.required]],
      from_number_of_stories:['',[Validators.required]],
      to_number_of_stories:['',[Validators.required]],
      from_number_of_bedrooms:['',[Validators.required]],
      to_number_of_bedrooms:['',[Validators.required]],
      from_number_of_baths:['',[Validators.required]],
      to_number_of_baths:['',[Validators.required]],
      from_number_of_fireplaces:['',[Validators.required]],
      to_number_of_fireplaces:['',[Validators.required]],
      pool_type:['',[Validators.required]],
      air_condition:['',[Validators.required]],
      from_year_built:['',[Validators.required]],
      to_year_built:['',[Validators.required]],

    }); 

  }

}
