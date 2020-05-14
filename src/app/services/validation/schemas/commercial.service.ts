import { Injectable } from '@angular/core';
import { ValidationService } from 'src/app/validation.service';

@Injectable({
  providedIn: 'root'
})
export class CommercialService {

  constructor(public validationService:ValidationService) { }
																							
  masterList(data){
    let validations={
      "session_id":["notEmpty"],
      "state":["isArray"],
      "bus_in_claims":[],
      "small_bus_claims":[],
      "comml_auto_claims":[],
      "worker_comp_claims":[],
      "comml_credit_dnb":[],
      "comml_credit_experian":[],
      "mvr":[],
      "cdpf":[],
      "state_opt_out":[]
     
     
      };
      return this.validationService.checkValidate(data,validations);
    
  }
																							
  businessSearch(data)
  {
    let validations={
      "session_id":["notEmpty"],
      "state":[],
      "business_name":[],
      "business_lname":[],
      "business_fname":[],
      "business_address":[],
      "product":[],
      "city":[],
      "clue_commercial":[],
      "zip_code":["checkNumbers"],
      
     
     
      };
      return this.validationService.checkValidate(data,validations);
  }

 
  clueCommercial(data)
  {
    let validations={
      "session_id":["notEmpty"],
      "state":["IsArray"],
      "clue_comml_bus_ins_claims":[],
      "clue_comml_small_bus_claims":[],
      "clue_comml_comml_auto_claims":[],
      "clue_comml_workers_comp_claim":[],
      "claims_discovery_auto_property":[],
      "min_claim_date":[],
      "max_claim_date":[],
      "fault_indicator":[],
      "catastrophe":[],
      "total_incurred_from":[],
      "total_incurred_to":[],
      "ambest_number":[],
      
     
     
      };
      return this.validationService.checkValidate(data,validations);
  }
  																							
  clueEnhanced(data)
  {
    let validations={
      "session_id":["notEmpty"],
      "state":["IsArray"],
      "ambest_number":[],
      "from_no_of_claims":[],
      "to_no_of_claims":[],
      "min_claim_date":[],
      "max_claim_date":[],
      "vehicle_operator":[],
     
      
     
     
      };
      return this.validationService.checkValidate(data,validations);
  }
 																								
  clueDiscoveryProperty(data)
  {
    let validations={
      "session_id":["notEmpty"],
      "state":["IsArray"],
      "ambest_number":[],
      "from_no_of_claims":[],
      "to_no_of_claims":[],
      "from_claim_date":[],
      "to_claim_date":[]
   
     
      };
      return this.validationService.checkValidate(data,validations);
  }

 																							
  commercialCredit(data)
  {
    let validations={
      "session_id":["notEmpty"],
      "state":["IsArray"],
      "vendor":[],
      "no_bank_ruptcies":[],
      "no_liens":[],
      "no_open_liens":[],
      "no_judgments":[],
      "no_open_judgments":[],
      "no_open_suits":[],
      "no_ucc_filings":[],
      "no_open_closed_coll":[],
      "no_open_coll":[]
   
     
      };
      return this.validationService.checkValidate(data,validations);
  }
}
