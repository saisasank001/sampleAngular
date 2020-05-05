import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-confidentiality-agreement',
  templateUrl: './confidentiality-agreement.component.html',
  styleUrls: ['./confidentiality-agreement.component.scss']
})
export class ConfidentialityAgreementComponent implements OnInit {

  constructor(private formBuilder:FormBuilder) { }
  confidentialityAgreementForm:FormGroup;
  ngOnInit() {
    this.confidentialityAgreementForm = this.formBuilder.group({
      fname: ['', []],
      lname: ['', []],
      company: ['', []],
      email: ['', []],
      phone: ['', []],
      extn: ['', []],
    
     
  });
  }

  getRecordsCount(data) {
    // this.loaderService.showLoader()
    // this.records = this.loaderService.showProductsLoader();
    let json = {
        // session_id: this.userService.getSessionId(),
     
        fname:data.fname,
        lname:data.lname,
        company:data.company,
        email:data.email,
        phone:data.phone,
        extn:data.extn
        

    };

    // this.httpService.postApi(json, 'Homemaster/test').subscribe(res => {
    //     console.log(res);
    //     this.loaderService.hideLoader()

    //     if (res) {
    //         try {
    //             if (!this.cqdqtApiExceptionService.checkApiException(res)) {
    //                 this.records = res['results'][0]['total_records'];

    //             } else{
    //                 this.records=0;
    //             }
    //         }catch(e){
    //             this.records=0;
    //         }

    //     }else{
    //         this.records=0;
    //         let modalId = this.utilService.generateModalId();
    //         this.dataService.changeMessage(JSON.stringify({
    //             type: 'modal',
    //             requestId: modalId,
    //             modalType: "error",
    //             buttonText: "Okay",
    //             message: "There is a fault in fetching records count, Please try again."
    //         }));
    //         this.dataService.currentMessage.subscribe((message: any) => {
    //             if (message != 'default message') {
    //                 message = JSON.parse(message);
    //                 if (message['type'] == 'return' && message['returnId'] == modalId) {
    //                     if(message['handler']=='ok'){
    //                         this.utilService.closeModal();
    //                     }
    //                     // if(message['handler']=='cancel'){}
    //                 }
    //             }
    //         })
    //     }
    // }, err => {
    //     // this.records=0;
    //     // this.loaderService.hideLoader();
    //     // this.utilService.showNetworkErrorModal();
    // });


}

clearAll(){
    this.confidentialityAgreementForm.reset();
    this.confidentialityAgreementForm.patchValue({
      
      
      fname:"",
      lname:"",
      company:"",
      email:"",
      phone:"",
      extn:""
       
      })
    this.getRecordsCount(this.confidentialityAgreementForm.value);
}

downloadRecords() {
    try {
        let data = this.confidentialityAgreementForm.value;
        let json = {
            // session_id: this.userService.getSessionId(),
           
            fname:data.fname,
            lname:data.lname,
            company:data.company,
            email:data.email,
            phone:data.phone,
            extn:data.extn
            // max_records: this.downloadLimit, // adding download limit
            // start_at: "",
        };
        console.log(data);
        // this.loaderService.showLoader();
        // this.httpService.postApi(json, 'Masterlist/test1').subscribe(res => {
        //     console.log(res)
        //     this.loaderService.hideLoader();
        //     if (!res.success){
        //         let modalId = this.utilService.generateModalId();
        //         this.dataService.changeMessage(JSON.stringify({
        //             type: 'modal',
        //             requestId: modalId,
        //             modalType: "error",
        //             buttonText: "Okay",
        //             message: "There is a fault in downloading records count, Please try again."
        //         }));
        //         this.dataService.currentMessage.subscribe((message: any) => {
        //             if (message != 'default message') {
        //                 message = JSON.parse(message);
        //                 if (message['type'] == 'return' && message['returnId'] == modalId) {
        //                     if(message['handler']=='ok'){}
        //                     // if(message['handler']=='cancel'){}
        //                 }
        //             }
        //         });
        //         return;
        //     }
        //     res = res.success;
        //     let result =res['results'];
        //     this.downloadedRecords = result;

        //     this.utilService.generateCSV(result);
        //     this.loaderService.hideLoader()
        //     this.tableDisplay = this.generateTableService.getTableDisplay(this.downloadedRecords);
        // },err=>{
        //     this.loaderService.hideLoader();
        //     this.utilService.showNetworkErrorModal()
        // });
    }catch(e){
        // let modalId = this.utilService.generateModalId();
        // this.dataService.changeMessage(JSON.stringify({
        //     type: 'modal',
        //     requestId: modalId,
        //     modalType: "error",
        //     buttonText: "Okay",
        //     message: "Something wrong with given inputs, Please try again."
        // }));
    }


}

Submit(data)
{
  console.log(data);
}


}
