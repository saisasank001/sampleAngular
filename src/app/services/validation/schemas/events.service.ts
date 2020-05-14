import { Injectable } from '@angular/core';
import { ValidationService } from 'src/app/validation.service';

@Injectable({
  providedIn: 'root'
})
export class EventsService {

  constructor(public validationService:ValidationService) { }

  eventAdd(data){
    let validations={
      "Customer":["notEmpty"],
      "Type":["notEmpty"],
      "Start_date":["notEmpty","vaildateYearFormat"],"End_date":["notEmpty","vaildateYearFormat"],
      "Start_time":["notEmpty","validateTime "],"End_time":["notEmpty","validateTime "],
      "Description":["notEmpty"],"Notes":["notEmpty"],"Reported_By":["notEmpty"],
      "RecurringType":["notEmpty"],"Is_Recurring":["notEmpty","singleCharacter"],
      "Scope":["notEmpty","singleCharacter"],"Is_Active":["notEmpty","singleCharacter"]};
      return this.validationService.checkValidate(data,validations);
    
  }
}
