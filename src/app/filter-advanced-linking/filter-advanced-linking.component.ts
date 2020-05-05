import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-filter-advanced-linking',
  templateUrl: './filter-advanced-linking.component.html',
  styleUrls: ['./filter-advanced-linking.component.scss']
})
export class FilterAdvancedLinkingComponent implements OnInit {
  filterAdvancedLinkingForm:FormGroup
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.filterAdvancedLinkingForm = this.formBuilder.group({
      state: ['',[]],
      statement_type:['',[]],
      product:['',[]],
      statements_by:['',[]],
      from_statements:['',[]],
      to_statements:['',[]],
      max_statement_size:['',[]],
      identity_not_resolved:['',[]],
      lexid:['',[]],
    }); 
  }

  getRecordsCount(data) {
    // this.loaderService.showLoader()
    // this.records = this.loaderService.showProductsLoader();
    let json = {
        // session_id: this.userService.getSessionId(),
        state:data.state,
        statement_type:data.statement_type,
        product:data.product,
        statements_by:data.statements_by,
        from_statements:data.from_statements,
        to_statements:data.to_statements,
        max_statement_size:data.max_statement_size,
        identity_not_resolved:data.identity_not_resolved,
        lexid:data.lexid

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
    this.filterAdvancedLinkingForm.reset();
    this.filterAdvancedLinkingForm.patchValue({
      state:"",
      statement_type:"",
      product:"",
      statements_by:"",
      from_statements:"",
      to_statements:"",
      max_statement_size:"",
      identity_not_resolved:"",
      lexid:"" // example
      })
    this.getRecordsCount(this.filterAdvancedLinkingForm.value);
}

downloadRecords() {
    try {
        let data = this.filterAdvancedLinkingForm.value;
        let json = {
            // session_id: this.userService.getSessionId(),
            state:data.state,
            statement_type:data.statement_type,
            product:data.product,
            statements_by:data.statements_by,
            from_statements:data.from_statements,
            to_statements:data.to_statements,
            max_statement_size:data.max_statement_size,
            identity_not_resolved:data.identity_not_resolved,
            lexid:data.lexid
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
