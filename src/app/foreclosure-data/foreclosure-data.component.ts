import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-foreclosure-data',
  templateUrl: './foreclosure-data.component.html',
  styleUrls: ['./foreclosure-data.component.scss']
})
export class ForeclosureDataComponent implements OnInit {
  states:any=["AndhraPradesh","Telangana"];
  forceClosures:any =["all","asdfg","asdfgh"]
  forceClosureForm: FormGroup
  constructor(private formBuilder:FormBuilder) { }

  ngOnInit() {
    this.forceClosureForm = this.formBuilder.group({
      state: ['', []],
      foreclosure_code: ['', []],
      potential_vacant: ['', []],
      from_vacancy_duration: ['', []],
      to_vacancy_duration: ['', []],
  });
  }


  getRecordsCount(data) {
    // this.loaderService.showLoader()
    // this.records = this.loaderService.showProductsLoader();
    let json = {
        // session_id: this.userService.getSessionId(),
        state:data.state,
        foreclosure_code:data.foreclosure_code ,
        potential_vacant:data.potential_vacant ,
        from_vacancy_duration:data.from_vacancy_duration ,
        to_vacancy_duration:data.to_vacancy_duration 

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
    this.forceClosureForm.reset();
    this.forceClosureForm.patchValue({
      
        state:"",
        foreclosure_code:"",
        potential_vacant:"" ,
        from_vacancy_duration:"" ,
        to_vacancy_duration:""
      })
    this.getRecordsCount(this.forceClosureForm.value);
}

downloadRecords() {
    try {
        let data = this.forceClosureForm.value;
        let json = {
            // session_id: this.userService.getSessionId(),
            state:data.state,
            foreclosure_code:data.foreclosure_code ,
            potential_vacant:data.potential_vacant ,
            from_vacancy_duration:data.from_vacancy_duration ,
            to_vacancy_duration:data.to_vacancy_duration 
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



  
}
