import { Component, OnInit, ViewChild } from '@angular/core';
import { NgbModal, ModalDismissReasons, NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpServiceService } from '../http-service.service';

@Component({
  selector: 'app-announcement-edit',
  templateUrl: './announcement-edit.component.html',
  styleUrls: ['./announcement-edit.component.scss']
})
export class AnnouncementEditComponent implements OnInit {

  announcementForm: FormGroup;
  editorConfig;
  fromDate: NgbDateStruct;
  editdata: any = {
    CreatedDate: "2020-05-09",
    EndDate: "2020-06-22",
    EndTime: "03:03:00",
    IsAnnouncement: "1",
    IsBanner: "1",
    IsEmailSend: "0",
    ModifiedDate: "",
    Priority: "1",
    StartDate: "2020-06-20",
    StartTime: "02:02:00",
    announcement: "ZmluYWwgd2l0aG91dCBlbWFpbCYjMTYwOw==",
    announcement_id: "4692",
    filename: "",
    title: "final without email "
  }
  constructor(private modalService: NgbModal, private formBuilder: FormBuilder,

    public httpService: HttpServiceService) { }


  ngOnInit() {
    //spliting fromdate
    let frmDate = this.editdata.StartDate;
    let str_array_fDate = frmDate.split('-');
    for (let i = 0; i < str_array_fDate.length; i++) {
      console.log(str_array_fDate[i]);
    }
    console.log({ year: Number(str_array_fDate[0]), month: Number(str_array_fDate[1]), day: Number(str_array_fDate[2]) })
    this.editdata.fromDate = { year: Number(str_array_fDate[0]), month: Number(str_array_fDate[1]), day: Number(str_array_fDate[2]) }
    //spliting Todate
    let toDate = this.editdata.EndDate;
    let str_array_tDate = toDate.split('-');
    for (let i = 0; i < str_array_tDate.length; i++) {
      console.log(str_array_tDate[i]);
    }
    console.log({ year: Number(str_array_tDate[0]), month: Number(str_array_tDate[1]), day: Number(str_array_tDate[2]) })
    this.editdata.toDate = { year: Number(str_array_tDate[0]), month: Number(str_array_tDate[1]), day: Number(str_array_tDate[2]) }
    //spliting startTime
    let stTime = this.editdata.StartTime;
    let str_array_strTime = stTime.split(':');
    for (let i = 0; i < str_array_strTime.length; i++) {
      console.log(str_array_strTime[i]);
    }
    console.log({ hour: Number(str_array_strTime[0]), minute: Number(str_array_strTime[1]), second: Number(str_array_strTime[2]) })
    this.editdata.startTime = { hour: Number(str_array_strTime[0]), minute: Number(str_array_strTime[1]), second: Number(str_array_strTime[2]) }
    //spliting endTime
    let endTime = this.editdata.EndTime;
    let str_array_endTime = endTime.split(':');
    for (let i = 0; i < str_array_endTime.length; i++) {
      console.log(str_array_endTime[i]);
    }
    console.log({ hour: Number(str_array_endTime[0]), minute: Number(str_array_endTime[1]), second: Number(str_array_endTime[2]) })
    this.editdata.endTime = { hour: Number(str_array_endTime[0]), minute: Number(str_array_endTime[1]), second: Number(str_array_endTime[2]) }

    if (this.editdata.IsAnnouncement == "1") {
      this.editdata['announcements'] = true
      console.log(this.editdata)
    }
    else {
      this.editdata['announcements'] = false
    }
    if (this.editdata.IsBanner == "1") {
      this.editdata['urgentMessage'] = true

    } else {
      this.editdata['urgentMessage'] = false
    }
    this.editdata['message'] = atob(this.editdata.announcement)
    this.editdata['sendEmail'] = this.editdata.IsEmailSend

    this.announcementForm = this.formBuilder.group({
      title: ['', [Validators.required]],
      Priority: ['', []],
      fromDate: ['', []],
      toDate: ['', []],
      startTime: ['', []],
      endTime: ['', []],
      announcements: [true],
      urgentMessage: [''],
      message: ['', [Validators.required]],
      filename: ['', []],
      sendEmail: ['0', []]
    });
  delete  this.editdata.CreatedDate
  delete  this.editdata.EndDate
  delete  this.editdata.EndTime
  delete  this.editdata.IsAnnouncement
  delete  this.editdata.IsBanner
  delete  this.editdata.ModifiedDate
  delete  this.editdata.StartDate
  delete  this.editdata.StartTime
  delete  this.editdata.announcement
  delete  this.editdata.announcement_id
  delete  this.editdata.IsEmailSend
    console.log("edit data",this.editdata)
    this.announcementForm.patchValue(this.editdata);
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

  onFileChange(event) {

    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      const formData = new FormData();
      formData.append('file', file);

      this.httpService.uploadFileApi(formData, 'Welcome/test3')
        .subscribe(res => {
          if (res.success) {
            this.announcementForm.patchValue({
              filename: res.success
            });
          }

        })

    }

  }

  onUrgentMessageChanged() {

    if (this.announcementForm.value.urgentMessage) {
      ['Priority', 'fromDate', 'toDate', 'startTime', 'endTime'].forEach(item => {
        this.announcementForm.get(item).setValidators([Validators.required]); // 5.Set Required Validator
        this.announcementForm.get(item).updateValueAndValidity();
      })

    } else {
      this.announcementForm.patchValue({ announcements: true });
      ['Priority', 'fromDate', 'toDate', 'startTime', 'endTime'].forEach(item => {
        this.announcementForm.get(item).clearValidators(); // 6. Clear All Validators
        this.announcementForm.get(item).updateValueAndValidity();
      })
      this.onAnnouncementChanged()
    }
  }

  onAnnouncementChanged() {

    if (this.announcementForm.value.announcements) {
      ['sendEmail'].forEach(item => {
        this.announcementForm.get(item).setValidators([Validators.required]); // 5.Set Required Validator
        this.announcementForm.get(item).updateValueAndValidity();
      })
    } else if (!this.announcementForm.value.urgentMessage && !this.announcementForm.value.announcements) {
      this.announcementForm.patchValue({ announcements: true });
      this.onAnnouncementChanged();
    } else {
      ['sendEmail'].forEach(item => {
        this.announcementForm.get(item).clearValidators(); // 6. Clear All Validators
        this.announcementForm.get(item).updateValueAndValidity();
      })
    }
  }

  submit() {
    console.log(this.announcementForm.value);
    let json = {
      "announcement_id": "21",
      "announcement": this.announcementForm.value.message,
      "filename": this.announcementForm.value.filename,
      "title": "Amritha Test Announcement",
      "Priority": this.announcementForm.value.Priority,
      "StartDate": this.announcementForm.value.fromTime,
      "StartTime": this.announcementForm.value.startTime,
      "EndDate": this.announcementForm.value.toTime,
      "EndTime": this.announcementForm.value.endTime,
      "IsAnnouncement": this.announcementForm.value.announcements ? "1" : "0",
      "IsBanner": this.announcementForm.value.urgentMessage ? "1" : "0",
      "IsEmailSend": this.announcementForm.value.sendEmail ? "1" : "0",

    }



  }
}
