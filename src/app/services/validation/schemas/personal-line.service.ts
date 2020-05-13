import { Injectable } from '@angular/core';
import { ValidationService } from 'src/app/validation.service';
import { IndividualSearchComponent } from 'src/app/individual-search/individual-search.component';

@Injectable({
  providedIn: 'root'
})
export class PersonalLineService {

  constructor(public validationService:ValidationService) { }


  masterList(data){
    let validations={
      session_id:["notEmpty"],
      state:[],
      rating_pack:[],
      mvr:[],
      cluea:[],
      add:["notEmpty"],
      vehiclehistory:[],
      vin:[],
      cca:[],
      ccp:[],
      instant_id:[],
      mvr_status:[],
      mvr_entries_from:[],
      mvr_entries_to:[],
      cluea_claims_from:[],
      cluea_claims_to:[],
      cluea_claims_types_from:[],
      cluea_claims_types_to:[],
      cluep_claims_from:[],
      cluep_claims_to:[],
      cluep_claims_types_from:[],
      cluep_claims_types_to:[],
      add_subjects_from:[],
      add_subjects_to:[],
      total_vins_from:[],
      total_vins_to:[],
      cca_total_policies_from:[],
      cca_total_policies_to:[],
      ccp_total_policies_from:[],
      ccp_total_policies_to:[],
      saq:[],
      auto_data:[],
      vehiclebuild:[],
      insurview:[],
      ali:[],
      state_opt_out:[],
     
      };
      return this.validationService.checkValidate(data,validations);
    
  }
 
  
  individualSearch(data)
  {
    let validations={
      session_id:["notEmpty"],
      product:[],
      vin:[],
      fname:[],
      lname:[],
      sname:["notEmpty"],
      mname:[],
      dob:[],
      ssn:[],
      dln:[],
      house_num:[],
      street:[],
      apt_num:[],
      city:[],
      state:[],
      zip:[],
     
      };
      return this.validationService.checkValidate(data,validations);
  }
}
