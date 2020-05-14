import { Injectable } from '@angular/core';
import { ValidationService } from 'src/app/validation.service';

@Injectable({
  providedIn: 'root'
})
export class HomeProductsService {

  constructor(public validationService:ValidationService) { }
																							
  masterList(data){
    let validations={
      "session_id":["notEmpty"],"state":["notEmpty"],"ali":["notEmpty"],"current":["notEmpty"],
      "fire":["notEmpty"],"force":["notEmpty"],"household":["notEmpty"],"instantid":["notEmpty"],
      "insureview":["notEmpty"],"property":["notEmpty"],"opt":["notEmpty"],"vacancy":["notEmpty"]
    };
    return this.validationService.checkValidate(data,validations);
  }
 																						
  homeIndividualSearch(data)
  {
    let validations={
      "session_id":["notEmpty"],
      "product":["notEmpty"],
      "foreclosure":["checkCharacters"],
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
      "zip":["checkNumbers"],
      "dln":[]
    };
    return this.validationService.checkValidate(data,validations);
  }

 
  
  aliHome(data)
  {
    let validations={
      "session_id":["notEmpty"],
      "lexid":[],
      "statements_by":[],
      "from_statements":[],
      "to_statements":[],
      "max_statement_size":[],
      "identity_not_resolved":[],
      "statement_type":[],
      "product":[],
           "state":[],
     
    };
    return this.validationService.checkValidate(data,validations);
  }
  																								
  homeCcproperty(data)
  {
    let validations={
      "session_id":["notEmpty"],
      "policy_type":["notEmpty"],
      "min_inception_date":[],
      "max_inception_date":[],
      "min_start_date":[],
      "max_start_date":[],
      "min_end_date":[],
      "max_end_date":[],
      "min_cancel_date":[],
           "state":[],
           "max_cancel_date":[],
           "active_policy":[],
           "coverage_info_collection":[],
           "CTDQTCoverageObject":[],
           "individual":[],
           "occurrence":[],
           "combined_single_limit":[],
           "ambest_number":[],
           "from_number_of_policies":[],
           "to_number_of_policies":[]
     
    };
    return this.validationService.checkValidate(data,validations);
  }
 																						
  fireAndDisaster(data)
  {
    let validations={
      "session_id":["notEmpty"],
           "score":[],
           "state":["isArray"],
     
    };
    return this.validationService.checkValidate(data,validations);
  }
																							
  foreClosure(data)
  {
    let validations={
      "session_id":["notEmpty"],
      "foreclosure_code":[],
      "potential_vacant":[],
      "from_vacancy_duration":[],
      "to_vacancy_duration":[],
      "state":["isArray"],
     
    };
    return this.validationService.checkValidate(data,validations);
  }
																						
  homeInspection(data)
  {
    let validations={
      "session_id":["notEmpty"],
      "to_hii":[],
      "coverage_a":[],
      "from_year_built":[],
      "to_year_built":[],
      "state":["isArray"],
      "HI01":[],
      "HI02":[],
      "HI03":[],
      "HI05":[],
      "HI06":[],
      "HI07":[],
      "BP02":[],
      "BP10":[],
      "BP11":[],
      "addressvacancy_indicator":[],
      "age_from_year_built":[],
      "age_to_year_built":[],
      "airconditioning_indicator":[],
      "forclosure_indicator":[],
      "pool_indicator":[],
      "sewer_materials":[],
      "sales_from_year_built":[],
      "sales_to_year_built":[],
     
     
    };
    return this.validationService.checkValidate(data,validations);
  }
																						
  householdMembers(data)
  {
    let validations={
      "session_id":["notEmpty"],
      "state":["isArray"],
      "street":[],
      "apt":[],
      "v_city_name":[],
      "zip":[],
      "is_youthful":[],
      "lic_expired":[]
     
     
     
    };
    return this.validationService.checkValidate(data,validations);
  }
 																						
  homeInstantId(data)
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
 
																					
  propertyData(data)
  {
    let validations={
      "session_id":["notEmpty"],
      "state":["isArray"],
      "data_source":[],
      "from_living_area_sf":[],
      "to_living_area_sf":[],
      "from_number_of_stories":[],
      "to_number_of_stories":[],
      "from_number_of_bedrooms":[],
      "to_number_of_bedrooms":[],
      "from_number_of_baths":[],
      "to_number_of_baths":[],
      "from_number_of_fireplaces":[],
      "to_number_of_fireplaces":[],
      "pool_type":[],
      "air_condition":[],
      "from_year_built":[],
      "to_year_built":[],
  
    };
    return this.validationService.checkValidate(data,validations);
  }
}
