import { Component, OnInit, ViewChild } from '@angular/core';
import { NgbModal, ModalDismissReasons, NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpServiceService } from '../http-service.service';

@Component({
  selector: 'app-event-edit',
  templateUrl: './event-edit.component.html',
  styleUrls: ['./event-edit.component.scss']
})
export class EventEditComponent implements OnInit {

  eventForm: FormGroup;
  editorConfig;
  fromDate: NgbDateStruct;
  recurringType: any = ["type1", "type2","monthly"]

  editData: any = {
    Customer: "swe4",
    Date_Created: "11/19/2019 16:34:58",
    Description: "ZmluYWwgd2l0aG91dCBlbWFpbCYjMTYwOw==",
    End_date: "06/17/2020",
    End_time: "16:33:00",
    Is_Active: 1,
    Is_Recurring: 1,
    Notes: "notes4",
    RecurringType: "monthly",
    Reported_By: "Swetha Patoor",
    Reported_By_Email: "swetha.patoor@lexisnexis.com",
    Scope: "private",
    Start_time: "16:26:00",
    TYPE: "test4",
    id: 141,
    Start_date: "11/20/2019"
  }
  constructor(private modalService: NgbModal, private formBuilder: FormBuilder,

    public httpService: HttpServiceService) { }

  ngOnInit() {
    let frmDate = this.editData.Start_date;
    let str_array_fDate = frmDate.split('/');

    this.editData.Start_date = { year: Number(str_array_fDate[2]), month: Number(str_array_fDate[0]), day: Number(str_array_fDate[1]) }
   
    //spliting Todate
    let toDate = this.editData.End_date;
    let str_array_tDate = toDate.split('/');
 
    this.editData.End_date = { year: Number(str_array_tDate[2]), month: Number(str_array_tDate[0]), day: Number(str_array_tDate[1]) }
    
    //spliting startTime
    let stTime = this.editData.Start_time;
    let str_array_strTime = stTime.split(':');

     this.editData.Start_time = { hour: Number(str_array_strTime[0]), minute: Number(str_array_strTime[1]), second: Number(str_array_strTime[2]) }
    
    //spliting endTime
    let endTime = this.editData.End_time;
    let str_array_endTime = endTime.split(':');

    this.editData.End_time = { hour: Number(str_array_endTime[0]), minute: Number(str_array_endTime[1]), second: Number(str_array_endTime[2]) }
   
    this.editData.Description = atob(this.editData.Description)

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
    console.log(this.editData)
    this.eventForm.patchValue(this.editData);

    this.editorConfig = {
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
  submit(data) {
    console.log(data)
  }
}


