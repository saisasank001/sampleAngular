import { Injectable } from '@angular/core';
import { ValidationService } from 'src/app/validation.service';

@Injectable({
  providedIn: 'root'
})
export class HomeProductsService {

  constructor(public validationService:ValidationService) { }
  masterList(data){
    let validations={
      session_id:["notEmpty"],state:["notEmpty"],ali:["notEmpty"],current:["notEmpty"],
      fire:["notEmpty"],force:["notEmpty"],household:["notEmpty"],instantid:["notEmpty"],
      insureview:["notEmpty"],property:["notEmpty"],opt:["notEmpty"],vacancy:["notEmpty"]
    }
  }
}
