import { Component, OnInit,ViewChild } from '@angular/core';
import {NgbModal, ModalDismissReasons, NgbDateStruct} from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpServiceService } from '../http-service.service';
import { ValidationService } from '../validation.service';
import { UserService } from '../user.service';


@Component({
  selector: 'app-event-add',
  templateUrl: './event-add.component.html',
  styleUrls: ['./event-add.component.scss']
})
export class EventAddComponent implements OnInit {

  eventForm:FormGroup;
  editorConfig;
  fromDate:NgbDateStruct;
  recurring:any = ["yes","no"]
recurringType:any = ["type1","type2","monthly"]
  constructor(private modalService: NgbModal, private formBuilder: FormBuilder,
    
    public httpService:HttpServiceService, public validation:ValidationService , public userService:UserService) { }

  ngOnInit() {
    this.eventForm = this.formBuilder.group({
      Customer: ['',[Validators.required]],
      TYPE: ['',[Validators.required]],
      Start_date: ['',[]],
      End_date: ['',[]],
      Start_time: ['',[]],
      End_time: ['',[]],
      Description: ['',[Validators.required]],
      Notes:['',[Validators.required]],
      Reported_By:['',[Validators.required]],
      RecurringType:['',[Validators.required]],
      Is_Recurring:['',[Validators.required]],
      Scope:['',[Validators.required]],
    }); 

    // console.log(this.validation.isAlphabet('Anusha'))
    // console.log(this.validation.isNumeric('3456'))
    // console.log(this.validation.isAlfaNumeric('123456werty'))
    // console.log(this.validation.isEmail('wreweret@gmail.com'))
    // console.log(this.validation.maxLength('anusha',6))
    // console.log(this.validation.compare('anu',3))
    // console.log(this.validation.checkIsArray(["anu"]))
    // console.log(this.validation.dateValidate('2020-02-02','YYYY-MM-DD'))

  //   let validations={Customer:["notEmpty" ],TYPE:["notEmpty"],Start_date:["notEmpty",""],End_date:["notEmpty"],
  // Start_time:["notEmpty"],End_time:["notEmpty"],Description:["notEmpty"],Notes:["notEmpty"],Reported_By:["notEmpty"]
  // ,RecurringType:["notEmpty"],Is_Recurring:["notEmpty"],Scope:["notEmpty"]}
  //   console.log(this.validation.checkValidate('anusha',validations))


      this.editorConfig={
      editable: true,
      spellcheck: true,
      height: 'auto',
      minHeight: '100',
      maxHeight: 'auto',
      width: 'auto',
      minWidth: '0',
      translate: 'yes',
      enableToolbar: true,
      showToolbar: true,
      placeholder: 'Enter text here...',
      defaultParagraphSeparator: '',
      defaultFontName: '',
      defaultFontSize: '',
     

    uploadUrl: 'v1/image',
    uploadWithCredentials: false,
    sanitize: true,
    toolbarPosition: 'top',
    toolbarHiddenButtons: [
      ['insertImage'],
      ['insertHorizontalRule'],
      ['insertVideo']
    ]
    }
  }
  checkDate(){
    if(this.eventForm.value.Is_Recurring == '1'){
      if(this.eventForm.value.End_date){
        console.log("end date exisitng")
      }
      else{
        this.eventForm.patchValue({End_date:this.eventForm.value.Start_date})
        console.log(this.eventForm.value.End_date)
      }
    }
  }


submit(data){

  console.log(data)
  if(data.End_date ==''){
    data.End_date = data.Start_date
  }

  if(data['Scope']== 'public' && this.userService.checkAdmin()){
    data['Is_Active']= '1'
  }
  else if(data['Scope']== 'public' && (this.userService.checkAdmin()== false)){
    data['Is_Active']= '0'
  }
  else if(data['Scope']== 'private'){
    data['Is_Active'] = '1'
  }
}
}

