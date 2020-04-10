import { Component, OnInit,ViewChild } from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpServiceService } from '../http-service.service';

@Component({
  selector: 'app-announcement-add',
  templateUrl: './announcement-add.component.html',
  styleUrls: ['./announcement-add.component.scss']
})
export class AnnouncementAddComponent implements OnInit {

  announcementForm:FormGroup;
  editorConfig;
  constructor(private modalService: NgbModal, private formBuilder: FormBuilder,
    public httpService:HttpServiceService) { }
 

  ngOnInit() {
    this.announcementForm = this.formBuilder.group({
      title: ['',[Validators.required]],
      priority: ['',[Validators.required]],
      fromDate: ['',[Validators.required]],
      toDate: ['',[Validators.required]],
      startTime: ['',[Validators.required]],
      endTime: ['',[Validators.required]],
      announcement: [''],
      urgentMessage: [''],
      message: ['',[Validators.required]],
      attachment: ['',[]],
      sendMail: ['',[]]
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

}
