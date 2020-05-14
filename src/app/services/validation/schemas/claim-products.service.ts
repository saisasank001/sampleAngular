import { Injectable } from '@angular/core';
import { ValidationService } from 'src/app/validation.service';

@Injectable({
  providedIn: 'root'
})
export class ClaimProductsService {

  constructor(public validationService:ValidationService) { }
 																							
  claimProducts(data){
    let validations={
      "session_id":["notEmpty"],
      "state":["isArray"],
      "ncf_status":[],
      "liensjudgements":[],
      "mvr_status":[],
      "mvr_majors":["notEmpty"],
      "lrc_1_1_attract1_score_from":[],
      "lrc_1_1_attract1_score_to":[],
      "lrc_2_0_attract1_score_from":[],
      "lrc_2_0_attract1_score_to":[],
      "lrc_1_1_attract1_exclusion_code":[],
      "lrc_2_0_attract1_exclusion_code":[]
     
     
      };
      return this.validationService.checkValidate(data,validations);
    
  }
}
