import { Injectable } from '@angular/core';
import { ValidationService } from 'src/app/validation.service';
import { MasterListComponent } from 'src/app/master-list/master-list.component';

@Injectable({
  providedIn: 'root'
})
export class LifeProductsService {

  constructor(public validationService:ValidationService) { }

 																								

  		
  masterList(data){
    let validations={
      "session_id":["notEmpty"],
      "first_name":["checkCharacters"],
      "last_name":["checkCharacters"],
      "suffix_name":["checkCharacters"],
      "middle_name":["checkCharacters"],
      "dob":["vaildateYearFormat"],
      "ssn":[],
      "house_num":[],
      "street":[],
      "apt_num":[],
      "city":["checkCharacters"],
      "state":[],
      "zip":["checkNumbers"],
     
        
      };
      return this.validationService.checkValidate(data,validations);
    
  }				
  
  individualSearch(data){
    let validations={
      "session_id":["notEmpty"],
      "state":[],
      "street":[],
      "apt":[],
      "v_city_name":[],
      "zip":["checkNumbers"],
      "is_youthful":[],
      "lic_expired":[]
        
      };
      return this.validationService.checkValidate(data,validations);
    
  }		
  
  houeholdMemebers(data)
  {
    let validations={
      "session_id":["notEmpty"],
      "first_name":["checkCharacters"],
      "last_name":["checkCharacters"],
      "suffix_name":["checkCharacters"],
      "middle_name":["checkCharacters"],
      "dob":["vaildateYearFormat"],
      "ssn":[],
      "house_num":[],
      "street":[],
      "apt_num":[],
      "city":["isArray"],
      "state":[],
      "zip":["checkNumbers"]
     
        
      };
      return this.validationService.checkValidate(data,validations);
  }

  advancedLinking(data)
  {
    let validations={
      "session_id":["notEmpty"],
      "state":["isArray"],
      "lexid":[],
      "statement_type":[],
      "product":[],
      "statements_by":[],
      "from_statements":[],
      "to_statements":[],
      "max_statement_size":[],
      "identity_not_resolved":[],
        
      };
      return this.validationService.checkValidate(data,validations);
  }


  instantid(data)
  {
    let validations={
      "session_id":["notEmpty"],
      "state":["isArray"],
      "nas":[],
      "nap":[],
      "cvi":[],
      "riskcodes":[],
     
        
      };
      return this.validationService.checkValidate(data,validations);

  }

  lifeFir(data)
  {
    let validations={
      "session_id":["notEmpty"],
      "state":["isArray"],
      "bankrupt":[],
      "concealed_weapon_permit":[],
      "crim_offenses":[],
      "faa_aircrafts":[],
      "faa_certification":[],
      "felony_records":[],
      "hunt_fishing_permit":[],
      "liens_judgement":[],
      "prof_license":[],
      "prop_owned":[],
      "ucc_filings":[],
      "watercraft":[]
      };
      return this.validationService.checkValidate(data,validations);
  }

  
  lifeRatingPack(data)
  {
    let validations={
      "session_id":["notEmpty"],
      "state":["isArray"],
      "current_address_match":[],
      "hsitypes":[],
      "from_length_of_residency":[],
      "to_length_of_residency":[],
      "martialstatustypes":[],
      "from_email":[],
      "to_email":[],
      "from_phone":[],
      "to_phone":[],
   
      };
      return this.validationService.checkValidate(data,validations);
  }
	
}
