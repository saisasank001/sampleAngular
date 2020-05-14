import { Injectable } from '@angular/core';
import { ValidationService } from 'src/app/validation.service';

@Injectable({
  providedIn: 'root'
})
export class AnnouncementsService {

  constructor(public validationService:ValidationService) { }
  announcementAdd(data){
    let validations={
      "announcement":["notEmpty"],"filename":["notEmpty"],"title":["notEmpty"],"sPriority":["notEmpty","singleCharacter"],
      "sStartDate":["notEmpty","vaildateYearFormat"],"sStartTime":["notEmpty","validateTime"],"sEndDate":["notEmpty","vaildateYearFormat"],"sEndTime":["notEmpty","validateTime"],
      "sIsAnnouncement":["notEmpty","singleCharacter"],"sIsBanner":["notEmpty","singleCharacter"],
      "sIsEmailSend":["notEmpty","singleCharacter"],"session_id":["notEmpty"]}
    return this.validationService.checkValidate(data,validations);
  }

  announcementEdit(data){
    let validations={
      "announcement_id":["notEmpty"],"announcement":["notEmpty"],"filename":["notEmpty"],"title":["notEmpty"],"sPriority":["notEmpty","singleCharacter"],
      "sStartDate":["notEmpty","vaildateYearFormat"],"sStartTime":["notEmpty","validateTime"],"sEndDate":["notEmpty","vaildateYearFormat"],"sEndTime":["notEmpty","validateTime"],
      "sIsAnnouncement":["notEmpty","singleCharacter"],"sIsBanner":["notEmpty","singleCharacter"],
      "sIsEmailSend":["notEmpty","singleCharacter"],"session_id":["notEmpty"]}
    return this.validationService.checkValidate(data,validations);
  }
}
