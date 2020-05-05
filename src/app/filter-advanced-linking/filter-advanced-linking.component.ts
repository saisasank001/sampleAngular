import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-filter-advanced-linking',
  templateUrl: './filter-advanced-linking.component.html',
  styleUrls: ['./filter-advanced-linking.component.scss']
})
export class FilterAdvancedLinkingComponent implements OnInit {
  filterAdvancedLinkingForm:FormGroup
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.filterAdvancedLinkingForm = this.formBuilder.group({
      state: ['',[Validators.required]],
      statement_type:['',[Validators.required]],
      product:['',[Validators.required]],
      statements_by:['',[Validators.required]],
      from_statements:['',[Validators.required]],
      to_statements:['',[Validators.required]],
      max_statement_size:['',[Validators.required]],
      identity_not_resolved:['',[Validators.required]],
      lexid:['',[Validators.required]],
    }); 
  }

}
