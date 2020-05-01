import { Component, OnInit,ViewChild } from '@angular/core';
import {NgbModal, ModalDismissReasons, NgbDateStruct} from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpServiceService } from '../http-service.service';

@Component({
  selector: 'app-event-edit',
  templateUrl: './event-edit.component.html',
  styleUrls: ['./event-edit.component.scss']
})
export class EventEditComponent implements OnInit {

  eventForm:FormGroup;
  editorConfig;
  fromDate:NgbDateStruct;
  recurring:any = ["yes","no"]
recurringType:any = ["type1","type2"]

editData:any={
  customer: "qw",
endTime: {hour: 14, minute: 20, second: 0},
eventType: "qwer",
fromDate: {year: 2020, month: 5, day: 1},
isRecurring: "yes",
message: "message",
notes: "qwer",
recurringType: "type1",
requestedBy: "qwe",
startTime: {hour: 2, minute: 2, second: 0},
toDate: {year: 2020, month: 5, day: 2}
}
  constructor(private modalService: NgbModal, private formBuilder: FormBuilder,
    
    public httpService:HttpServiceService) { }

  ngOnInit() {
    this.eventForm = this.formBuilder.group({
      customer: ['',[Validators.required]],
      eventType: ['',[Validators.required]],
      fromDate: ['',[]],
      toDate: ['',[]],
      startTime: ['',[]],
      endTime: ['',[]],
      message: ['',[Validators.required]],
      notes:['',[Validators.required]],
      requestedBy:['',[Validators.required]],
      recurringType:['',[Validators.required]],
      isRecurring:['',[Validators.required]]
    }); 
    this.eventForm.patchValue(this.editData);

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
submit(data){
  console.log(data)
}
}


