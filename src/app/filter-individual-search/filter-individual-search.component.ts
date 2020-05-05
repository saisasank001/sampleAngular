import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {  Router } from '@angular/router';


@Component({
  selector: 'app-filter-individual-search',
  templateUrl: './filter-individual-search.component.html',
  styleUrls: ['./filter-individual-search.component.scss']
})
export class FilterIndividualSearchComponent implements OnInit {
  states:any=["AndhraPradesh","Telangana"];
  products:any=["formClosure/vacancy","product2"];
  individualSearchForm:FormGroup
  constructor(private formBuilder:FormBuilder, private router:Router) { }

  ngOnInit() {

    this.individualSearchForm = this.formBuilder.group({
      product: ['', [Validators.required]],
      fname: ['', [Validators.required]],
      lname: ['', [Validators.required]],
      sname: ['', [Validators.required]],
      mname: ['', [Validators.required]],
      dob: ['', [Validators.required]],
      ssn: ['', [Validators.required]],
      dln: ['',[Validators.required]],
      house_num: ['', [Validators.required]],
      street: ['', [Validators.required]],
      apt_num: ['', [Validators.required]],
      city: ['', [Validators.required]],
      state: ['', [Validators.required]],
      zip: ['', [Validators.required]],
     
  });
  }


  getRecordsCount(data) {
    // this.loaderService.showLoader()
    // this.records = this.loaderService.showProductsLoader();
    let json = {
        // session_id: this.userService.getSessionId(),
       
        product: data.product,
        fname: data.fname,
        lname: data.lname,
        sname:data.sname,
        mname: data.mname,
        dob: data.dob,
        ssn:data.ssn,
        dln: data.dln,
        house_num: data.house_num,
        street:data.street,
        apt_num: data.apt_num,
        city: data.city,
        state: data.state,
        zip: data.zip

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
    this.individualSearchForm.reset();
    this.individualSearchForm.patchValue({
      product: "",
      fname:"",
      lname: "",
      sname:"",
      mname: "",
      dob:"",
      ssn:"",
      dln: "",
      house_num: "",
      street:"",
      apt_num: "",
      city: "",
      state:"",
      zip:""
      })
    this.getRecordsCount(this.individualSearchForm.value);
}

downloadRecords() {
    try {
        let data = this.individualSearchForm.value;
        let json = {
            // session_id: this.userService.getSessionId(),
            product: data.product,
        fname: data.fname,
        lname: data.lname,
        sname:data.sname,
        mname: data.mname,
        dob: data.dob,
        ssn:data.ssn,
        dln: data.dln,
        house_num: data.house_num,
        street:data.street,
        apt_num: data.apt_num,
        city: data.city,
        state: data.state,
        zip: data.zip
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
