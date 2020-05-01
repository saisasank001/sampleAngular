import { Component, OnInit,ViewChild } from '@angular/core';
import {NgbModal, ModalDismissReasons, NgbDateStruct} from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpServiceService } from '../http-service.service';

@Component({
  selector: 'app-announcement-edit',
  templateUrl: './announcement-edit.component.html',
  styleUrls: ['./announcement-edit.component.scss']
})
export class AnnouncementEditComponent implements OnInit {

  announcementForm:FormGroup;
  editorConfig;
  fromDate:NgbDateStruct;
  editdata:any={
    Priority: "1",
    announcements: true,
    endTime: {hour: 14, minute: 6, second: 0},
    filename: "sample",
    fromDate: {year: 2020, month: 5, day: 1},
    message: "testing with urgent message",
    sendEmail: "1",
    startTime: {hour: 2, minute: 6, second: 0},
    title: "testing",
    toDate: {year: 2020, month: 5, day: 2},
    urgentMessage: true
  }
  constructor(private modalService: NgbModal, private formBuilder: FormBuilder,
    
    public httpService:HttpServiceService) { }
 

  ngOnInit() {
    this.announcementForm = this.formBuilder.group({
      title: ['',[Validators.required]],
      Priority: ['',[]],
      fromDate: ['',[]],
      toDate: ['',[]],
      startTime: ['',[]],
      endTime: ['',[]],
      announcements: [true],
      urgentMessage: [''],
      message: ['',[Validators.required]],
      filename: ['',[]],
      sendEmail: ['0',[]]
    }); 
    this.announcementForm.patchValue(this.editdata);
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

  onFileChange(event) {
  
  if (event.target.files.length > 0) {
    const file = event.target.files[0];
    const formData = new FormData();
    formData.append('file', file);

    this.httpService.uploadFileApi(formData,'Welcome/test3')
      .subscribe(res => {
        if(res.success)
        {
          this.announcementForm.patchValue({
            filename: res.success
          });
        }
       
      })

    }

  }

  onUrgentMessageChanged(){
    
    if(this.announcementForm.value.urgentMessage){
      ['Priority','fromDate','toDate','startTime','endTime'].forEach(item=>{
         this.announcementForm.get(item).setValidators([Validators.required]); // 5.Set Required Validator
         this.announcementForm.get(item).updateValueAndValidity();
      })
      
    }else{
      this.announcementForm.patchValue({announcements:true});
      ['Priority','fromDate','toDate','startTime','endTime'].forEach(item=>{
      this.announcementForm.get(item).clearValidators(); // 6. Clear All Validators
      this.announcementForm.get(item).updateValueAndValidity();
      })
      this.onAnnouncementChanged()
    }
  }

  onAnnouncementChanged(){
  
    if(this.announcementForm.value.announcements){
      ['sendEmail'].forEach(item=>{
        this.announcementForm.get(item).setValidators([Validators.required]); // 5.Set Required Validator
        this.announcementForm.get(item).updateValueAndValidity();
     })
    }else if(!this.announcementForm.value.urgentMessage && !this.announcementForm.value.announcements){
      this.announcementForm.patchValue({announcements:true});
      this.onAnnouncementChanged();
    }else{
      ['sendEmail'].forEach(item=>{
        this.announcementForm.get(item).clearValidators(); // 6. Clear All Validators
        this.announcementForm.get(item).updateValueAndValidity();
        })
    }
  }

  submit(){
    console.log(this.announcementForm.value);
   let json={ 
     "announcement_id": "21",
    "announcement": this.announcementForm.value.message,
    "filename": this.announcementForm.value.filename,
    "title": "Amritha Test Announcement",
    "Priority": this.announcementForm.value.Priority,
    "StartDate": this.announcementForm.value.fromTime,
    "StartTime": this.announcementForm.value.startTime,
    "EndDate": this.announcementForm.value.toTime,
    "EndTime": this.announcementForm.value.endTime,
    "IsAnnouncement": this.announcementForm.value.announcements?"1":"0",
    "IsBanner": this.announcementForm.value.urgentMessage?"1":"0",
    "IsEmailSend": this.announcementForm.value.sendEmail?"1":"0",
    
    }



  }
}
