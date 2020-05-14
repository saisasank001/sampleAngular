import { Injectable } from '@angular/core';
import { ValidationService } from 'src/app/validation.service';

@Injectable({
  providedIn: 'root'
})
export class PersonalLineProductsService {

  constructor(public validationService:ValidationService) { }

																							
  masterList(data){
    let validations={
      "session_id":["notEmpty"],
      "state":["isArray"],
      "ncf":[],
      "rating_pack":[],
      "mvr":[],
      "cluea":[],
      "cluep":[],
      "add":[],
      "vehiclehistory":[],
      "vin":[],
      "cca":[],
      "ccp":[],
      "instant_id":[],
      "mvr_status":[],
      "mvr_entries_from":[],
      "mvr_entries_to":[],
      "cluea_claims_from":[],
      "cluea_claims_to":[],
      "cluea_claims_types_from":[],
      "cluea_claims_types_to":[],
      "cluep_claims_from":[],
      "cluep_claims_to":[],
      "cluep_claims_types_from":[],
      "cluep_claims_types_to":[],
      "add_subjects_from":[],
      "add_subjects_to":[],
      "total_vins_from":[],
      "total_vins_to":[],
      "cca_total_policies_from":[],
      "cca_total_policies_to":[],
      "ccp_total_policies_from":[],
      "ccp_total_policies_to":[],
      "auto_data":[],
      "vehiclebuild":[],
      "insurview":[],
      "ali":[],
      "state_opt_out":[],
     
     
      };
      return this.validationService.checkValidate(data,validations);
    
  }
  																							
  individualSearch(data){
    let validations={
      "session_id":["notEmpty"],
      "product":[],
      "vin":[],
      "fname":[],
      "lname":[],
      "sname":["notEmpty"],
      "mname":[],
      "dob":[],
      "ssn":[],
      "dln":[],
      "house_num":[],
      "street":[],
      "apt_num":[],
      "city":[],
      "state":[],
      "zip":[]
     
     
      };
      return this.validationService.checkValidate(data,validations);
    
  }

 																							
  advancedLinking(data){
    let validations={
      "session_id":["notEmpty"],
      "product":[],
      "lexid":[],
      "statement_type":[],
      "statements_by":[],
      "from_statements":[],
      "to_statements":[],
      "max_statement_size":[],
      "identity_not_resolved":[],
          "state":["isArray"]
    
     
     
      };
      return this.validationService.checkValidate(data,validations);
    
  }
																							
  add(data){
    let validations={
      "session_id":["notEmpty"],
      "street":[],
      "apt":[],
      "v_city_name":[],
      "zip":[],
      "is_youthful":[],
      "lic_expired":[],
               "state":["isArray"]
    
     
     
      };
      return this.validationService.checkValidate(data,validations);
    
  }
   																								
  autoRatingPack(data){
    let validations={
      "session_id":["notEmpty"],
      "current_address_match":[],
      "from_discovered_drivers":[],
      "to_discovered_drivers":[],
      "email":[],
      "from_driving_experience":[],
      "to_driving_experience":[],
      "state":["isArray"],
       "hsitypes":[],
      "from_length_of_residency":[],
      "to_length_of_residency":[],
      "martialstatustypes":[],
      "from_email":[],
      "to_email":[],
      "from_phone":[],
      "to_phone":[],
      "own_rent_indicator":[],
      "from_parking_capacity":[],
      "to_parking_capacity":[],
      "parking_types":[],
      "phone":[],
      "watercraft":[]
    
     
     
      };
      return this.validationService.checkValidate(data,validations);
    
  }
																							
  clueAuto(data){
    let validations={
      "session_id":["notEmpty"],
      "current_address_match":[],
      "from_discovered_drivers":[],
      "to_discovered_drivers":[],
      "email":[],
      "from_driving_experience":[],
      "to_driving_experience":[],
      "state":["isArray"],
       "hsitypes":[],
      "from_length_of_residency":[],
      "to_length_of_residency":[],
      "martialstatustypes":[],
      "from_email":[],
      "to_email":[],
      "from_phone":[],
      "to_phone":[],
      "own_rent_indicator":[],
      "from_parking_capacity":[],
      "to_parking_capacity":[],
      "parking_types":[],
      "phone":[],
      "watercraft":[]
     
      };
      return this.validationService.checkValidate(data,validations);
    
  }
 																							
  clueProperty(data){
    let validations={
      "session_id":["notEmpty"],
      "cat_ind":[],
      "policy_type":[],
      "min_no_claims":[],
      "max_no_claims":[],
      "min_no_claim_types":[],
      "max_no_claim_types":[],
               "state":["isArray"],
               "min_total_claim_amt":[],
      "max_total_claim_amt":[],
      "ambest_number":[],
      "claim_info_collection":[],
      
    
     
     
      };
      return this.validationService.checkValidate(data,validations);
    
  }
 
																							
  currentCarierAuto(data){
    let validations={
      "session_id":["notEmpty"],
      "model_year":[],
      "policy_type":[],
      "min_inception_date":[],
      "max_inception_date":[],
      "min_start_date":[],
      "max_start_date":[],
               "state":["isArray"],
               "min_end_date":[],
      "max_end_date":[],
      "min_cancel_date":[],
      "max_cancel_date":[],
      "active_policy":[],
      "ambest_number":[],
      "from_number_of_policies":[],
      "to_number_of_policies":[],
      "coverage_info_collection":[],
      "coverage_type":[],
      "individual":[],
      "occurrence":[],
      "combined_single_limit":[],
      "search_type":[],
    
     
     
      };
      return this.validationService.checkValidate(data,validations);
    
  }
 																							
  currentCarierProperty(data){
    let validations={
      "session_id":["notEmpty"],
    
      "policy_type":[],
      "min_inception_date":[],
      "max_inception_date":[],
      "min_start_date":[],
      "max_start_date":[],
               "state":["isArray"],
               "min_end_date":[],
      "max_end_date":[],
      "min_cancel_date":[],
      "max_cancel_date":[],
      "active_policy":[],
      "ambest_number":[],
      "from_number_of_policies":[],
      "to_number_of_policies":[],
      "coverage_info_collection":[],
    
      };
      return this.validationService.checkValidate(data,validations);
    
  }

 																							
  instantId(data){
    let validations={
      "session_id":["notEmpty"],
    
      "nas":[],
      "nap":[],
      "cvi":[],
      "riskcodes":[],
       "state":["isArray"],
         
      };
      return this.validationService.checkValidate(data,validations);
    
  }
 
 
 																							
  mvr(data){
    let validations={
      "session_id":["notEmpty"],
          "amplified":[],
      "min_date_of_birth":[],
      "max_date_of_birth":[],
      "mvr_status":[],
       "state":["isArray"],
       "min_issue_date":[],
       "max_issue_date":[],
       "min_expire_date":[],
       "max_expire_date":[],
       "dl_status":[],
       "no_of_violations":[],
       "violation_type":[],
       "min_violation_date":[],
       "max_violation_date":[],
       "min_conviction_date":[],
       "max_conviction_date":[],
       "violation_description":[],
       "svc_codes":[],
       "type_mvr":[],
       "svc_code_1":[],
       "svc_code_2":[],
       "svc_code_3":[],
       "svc_code_4":[],
       "svc_code_5":[],
       "svc_code_6":[],
       "svc_code_7":[],
       "svc_code_8":[],
       "svc_code_9":[],
       "svc_code_10":[]
         
      };
      return this.validationService.checkValidate(data,validations);
    
  }
 																							
  ncf(data){
    let validations={
      "session_id":["notEmpty"],
    
      "lnjudgements":[],
      "lnliens":[],
      "ncf_trended":[],
      "ncf_enhanced":[],
       "state":["isArray"],
       "bankruptcies":[],
       "refinance":[],
       "foreclosures":[],
       "trades":[],
       "revolving":[],
       "publicrecords":[],
       "repossession":[],
       "collection":[],
       "attract_type":[],
       "attract_info_collection":[],
         
      };
      return this.validationService.checkValidate(data,validations);
    
  }
																								
  vehicleBuild(data){
    let validations={
      "session_id":["notEmpty"],
          "vin":[],
      "vehicle_year":[],
      "standard_availability":[],
      "optional_availability":[],
       "state":["isArray"],
       "unknown_availability":[],
       "notavailable_availability":[],
       "standard_equipped":[],
       "optional_equipped":[],
       "unknown_equipped":[],
       "notavailable_equipped":[],
     
         
      };
      return this.validationService.checkValidate(data,validations);
    
  }
 
																							


  vehicleHistory(data){
    let validations={
      "session_id":["notEmpty"],
          "vin":[],
      "from_vehicle_modeled":[],
      "to_vehicle_modeled":[],
      "from_vehicle_blended":[],
       "state":["isArray"],
       "to_vehicle_blended":[],
       "from_vehicle_current_owner":[],
       "to_vehicle_current_owner":[],
       "from_vehicle_current_owner_annual_mileage_2":[],
       "to_vehicle_current_owner_annual_mileage_2":[],
       "from_vehicle_current_owner_annual_mileage_3":[],
       "to_vehicle_current_owner_annual_mileage_3":[],
       "from_last_odometer":[],
       "to_last_odometer":[],
       "from_last_odometer_date":[],
       "to_last_odometer_date":[],
       "from_purchase_date":[],
       "to_purchase_date":[],
       "from_no_of_prior_owners":[],
       "to_no_of_prior_owners":[],
       "state_last_registered":[],
       "recall":[],
       "connected_car_indicator":[],
       "certified_pre_owned":[],
       "total_loss_salvage":[],
       "severe_accident":[],
       "major_damage_incident":[],
       "minor_damage_incident":[],
       "incident_severity_unknown":[],
       "taxi_use":[],
       "rental_use":[],
       "commercial_use":[],
       "policy_government_use":[],
       "branded_title":[],
       "odometer_issues":[],
       "grey_market":[]
     
         
      };
      return this.validationService.checkValidate(data,validations);
    
  }
																							

  vin(data){
    let validations={
      "session_id":["notEmpty"],
          "make":[],
      "vehicle_year":[],
      "model":[],
      "date_flag":[],
       "state":["isArray"],
       "min_issue_date":[],
       "max_issue_date":[]
       
     
         
      };
      return this.validationService.checkValidate(data,validations);
    
  }
}
