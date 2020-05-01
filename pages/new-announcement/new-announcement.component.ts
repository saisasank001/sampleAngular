import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-new-announcement',
  templateUrl: './new-announcement.component.html',
  styleUrls: ['./new-announcement.component.css']
})
export class NewAnnouncementComponent implements OnInit {
  priority:any=["high","low","medium"]
  announcementForm: FormGroup
  constructor(private formBuilder:FormBuilder) { }

  ngOnInit() {
    this.announcementForm = this.formBuilder.group({
      title: ['', [Validators.required]],
      priority: ['', [Validators.required]],
      fromDate: ['', [Validators.required]],
      toDate: ['', [Validators.required]],
      startTime: ['', [Validators.required]],
      endTime: ['', [Validators.required]],
      announcements: ['', [Validators.required]],
      urgentMessage: ['', [Validators.required]],
      file: ['', [Validators.required]],
      sendEmail: ['', [Validators.required]]
  });
  }
  cancel(){
    console.log("cancelled")
  }

  // changeListener($event): void {

  //   try {
      
  //     this.imageCompress.uploadFile().then(({image, orientation}) => {
  //       let mimeType = image.split(';')[0].split('/')[1];
  //       if(mimeType!='jpeg' && mimeType!='png' && mimeType!='jpg'){
  //         this.alertService.presentAlert('Error','Please upload only images','okay');
  //         return;
  //       }else{
  //         this.loaderService.showLoader('Uploading....').then(()=>{
  //           if(this.imageCompress.byteCount(image) /(1024)>500){
  //             this.imageCompress.compressFile(image, orientation, 75, 50).then(
  //               result => {
  //                 console.log(result);
                  
  //                 console.warn('Size in bytes is now:', this.imageCompress.byteCount(result));
  //                 this.uploadImage(result);
  //               }
  //             );
  //           }else{
  //             this.uploadImage(image);
  //           }
  //         })
          
  //       }
       
        
  //     });
    
  //    // this.readThis($event.target);
  //   }
  //   catch (e) {
  //     this.alertService.presentAlert('Error','System accepts only jpg/jpeg/png formats','okay')
  //   }

  // }

  // uploadImage(result){
    
  //   this.httpService.postApi({ baseUrl: result, "category": this.beneficiary['beneficiaryId']+"_", "subCategory": this.arrayType+"_" }, 'Upload/img_upload').subscribe((res) => {

  //     if (res) {
  //       this.logo = res.success;
  //       this.image=this.httpService.imageUrl+res.success;
  //       console.log(this.logo)
  //       console.log(res.success)
  //       this.upload('',this.logo);
  //       this.loaderService.hideLoader();
  //     } else {
  //       			this.alertService.presentAlert('Error','Couldnot upload image retry','okay')
  //     }
  //   }, err => {
  //     this.alertService.presentAlert('Error','System accepts only jpg/jpeg/png formats','okay')
  //   });
  // }
  // readThis(inputValue: any): void {
  //   var file: File = inputValue.files[0];
  //   var myReader: FileReader = new FileReader();

  //   myReader.onloadend = (e) => {
  //     this.image = myReader.result;
  //     // this.categoryAddForm.patchValue({photo:myReader.result});
  //     console.log(this.beneficiary['beneficiaryId'])
  //     this.httpService.postApi({ baseUrl: myReader.result, "category": this.beneficiary['beneficiaryId']+"_", "subCategory": this.arrayType+"_" }, 'Upload/img_upload').subscribe((res) => {

  //       if (res) {
  //         this.logo = res.success;

  //       } else {
  //         //			this.modal.showModal({'success': false, 'message': res.error});
  //       }
  //     }, err => {

  //       //	  this.modal.showModal({'success': false, 'message': err});
  //     });
  //   }
  //   myReader.readAsDataURL(file);
  // }

  submit(data){
    console.log(data)
  }
}
