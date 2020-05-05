import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-home-inspection',
  templateUrl: './home-inspection.component.html',
  styleUrls: ['./home-inspection.component.scss']
})
export class HomeInspectionComponent implements OnInit {
  states:any = ["Andhra Pradesh","Telangana"];
  sewerMaterials:any=["material1","material2"];
  
  homeInspectionForm: FormGroup
  constructor(private formBuilder:FormBuilder) { }

  ngOnInit() {
    this.homeInspectionForm = this.formBuilder.group({
      state: ['', []],
      homeInspectionIndexFrom: ['', []],
      homeInspectionIndexTo: ['', []],
      policyCoverageValue: ['', []],
      yearBuiltFrom: ['', []],
      yearBuiltTo: ['', []],
      indicators1: ['', []],
      indicators2: ['', []],
      indicators3: ['', []],
      indicators4: ['', []],
      indicators5: ['', []],
      indicators6: ['', []],
      indicators7: ['', []],
      indicators8: ['', []],
      indicators9: ['', []],
      indicators10: ['', []],
      addressVacancyIndicator: ['', []],
      attributes:['', []],
      ageOfHouseFrom:['', []],
      ageOfHouseTo:['', []],
      airConditioningIndicator:['', []],
      forclosureIndicator:['', []],
      sewerMaterial:['', []],
      poolIndicator:['', []],
      from_sales:['', []],
      to_sales:['', []],
  });
  }

  getRecordsCount(data) {
    // this.loaderService.showLoader()
    // this.records = this.loaderService.showProductsLoader();
    let json = {
        // session_id: this.userService.getSessionId(),
        state:data.state,
        homeInspectionIndexFrom: data.homeInspectionIndexFrom,
        homeInspectionIndexTo:data.homeInspectionIndexTo,
        policyCoverageValue:data.policyCoverageValue,
        yearBuiltFrom:data.yearBuiltFrom,
        yearBuiltTo:data.yearBuiltTo,
        indicators1:data.indicators1,
        indicators2:data.indicators2,
        indicators3:data.indicators3,
        indicators4:data.indicators4,
        indicators5:data.indicators5,
        indicators6:data.indicators6,
        indicators7:data.indicators7,
        indicators8:data.indicators8,
        indicators9:data.indicators9,
        indicators10:data.indicators10,
        addressVacancyIndicator:data.addressVacancyIndicator,
        attributes:data.attributes,
        ageOfHouseFrom:data.ageOfHouseFrom,
        ageOfHouseTo:data.ageOfHouseTo,
        airConditioningIndicator:data.airConditioningIndicator,
        forclosureIndicator:data.forclosureIndicator,
        sewerMaterial:data.sewerMaterial,
        poolIndicator:data.poolIndicator,
        from_sales:data.from_sales,
        to_sales:data.to_sales

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
    this.homeInspectionForm.reset();
    this.homeInspectionForm.patchValue({
      
        state:"",     
        homeInspectionIndexFrom:"",
        homeInspectionIndexTo:"",
        policyCoverageValue:"",
        yearBuiltFrom:"",
        yearBuiltTo:"",
        indicators1:"",
        indicators2:"",
        indicators3:"",
        indicators4:"",
        indicators5:"",
        indicators6:"",
        indicators7:"",
        indicators8:"",
        indicators9:"",
        indicators10:"",
        addressVacancyIndicator:"",
        attributes:"",
        ageOfHouseFrom:"",
        ageOfHouseTo:"",
        airConditioningIndicator:"",
        forclosureIndicator:"",
        sewerMaterial:"",
        poolIndicator:"",
        from_sales:"",
        to_sales:""
      })
    this.getRecordsCount(this.homeInspectionForm.value);
}

downloadRecords() {
    try {
        let data = this.homeInspectionForm.value;
        let json = {
            // session_id: this.userService.getSessionId(),
            state:data.state,
        homeInspectionIndexFrom: data.homeInspectionIndexFrom,
        homeInspectionIndexTo:data.homeInspectionIndexTo,
        policyCoverageValue:data.policyCoverageValue,
        yearBuiltFrom:data.yearBuiltFrom,
        yearBuiltTo:data.yearBuiltTo,
        indicators1:data.indicators1,
        indicators2:data.indicators2,
        indicators3:data.indicators3,
        indicators4:data.indicators4,
        indicators5:data.indicators5,
        indicators6:data.indicators6,
        indicators7:data.indicators7,
        indicators8:data.indicators8,
        indicators9:data.indicators9,
        indicators10:data.indicators10,
        addressVacancyIndicator:data.addressVacancyIndicator,
        attributes:data.attributes,
        ageOfHouseFrom:data.ageOfHouseFrom,
        ageOfHouseTo:data.ageOfHouseTo,
        airConditioningIndicator:data.airConditioningIndicator,
        forclosureIndicator:data.forclosureIndicator,
        sewerMaterial:data.sewerMaterial,
        poolIndicator:data.poolIndicator,
        from_sales:data.from_sales,
        to_sales:data.to_sales
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
