import { Component, OnInit,ViewChild } from '@angular/core';
import {NgbModal, ModalDismissReasons, NgbDateStruct} from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpServiceService } from '../http-service.service';


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
recurringType:any = ["type1","type2"]
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

