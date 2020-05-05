import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-criteria',
  templateUrl: './criteria.component.html',
  styleUrls: ['./criteria.component.scss']
})
export class CriteriaComponent implements OnInit {

  criteriaForm:FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.criteriaForm = this.formBuilder.group({
      state: ['',[]],
      data_source:['',[]],
      from_living_area_sf:['',[]],
      to_living_area_sf:['',[]],
      from_number_of_stories:['',[]],
      to_number_of_stories:['',[]],
      from_number_of_bedrooms:['',[]],
      to_number_of_bedrooms:['',[]],
      from_number_of_baths:['',[]],
      to_number_of_baths:['',[]],
      from_number_of_fireplaces:['',[]],
      to_number_of_fireplaces:['',[]],
      pool_type:['',[]],
      air_condition:['',[]],
      from_year_built:['',[]],
      to_year_built:['',[]],

    }); 

  }

  getRecordsCount(data) {
    // this.loaderService.showLoader()
    // this.records = this.loaderService.showProductsLoader();
    let json = {
        // session_id: this.userService.getSessionId(),
        state:data.state,
        data_source:data.data_source,
        from_living_area_sf:data.from_living_area_sf,
        to_living_area_sf:data.to_living_area_sf,
        from_number_of_stories:data.from_number_of_stories,
        to_number_of_stories:data.to_number_of_stories,
        from_number_of_bedrooms:data.from_number_of_bedrooms,
        to_number_of_bedrooms:data.to_number_of_bedrooms,
        from_number_of_baths:data.from_number_of_baths,
        to_number_of_baths:data.to_number_of_baths,
        from_number_of_fireplaces:data.from_number_of_fireplaces,
        to_number_of_fireplaces:data.to_number_of_fireplaces,
        pool_type:data.pool_type,
        air_condition:data.air_condition,
        from_year_built:data.from_year_built,
        to_year_built:data.to_year_built,

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
    this.criteriaForm.reset();
    this.criteriaForm.patchValue({
        state: "",
        data_source:"",
        from_living_area_sf:"",
        to_living_area_sf:"",
        from_number_of_stories:"",
        to_number_of_stories:"",
        from_number_of_bedrooms:"",
        to_number_of_bedrooms:"",
        from_number_of_baths:"",
        to_number_of_baths:"",
        from_number_of_fireplaces:"",
        to_number_of_fireplaces:"",
        pool_type:"",
        air_condition:"",
        from_year_built:"",
        to_year_built:"", // example
      })
    this.getRecordsCount(this.criteriaForm.value);
}

downloadRecords() {
    try {
        let data = this.criteriaForm.value;
        let json = {
            // session_id: this.userService.getSessionId(),
            state:data.state,
            data_source:data.data_source,
            from_living_area_sf:data.from_living_area_sf,
            to_living_area_sf:data.to_living_area_sf,
            from_number_of_stories:data.from_number_of_stories,
            to_number_of_stories:data.to_number_of_stories,
            from_number_of_bedrooms:data.from_number_of_bedrooms,
            to_number_of_bedrooms:data.to_number_of_bedrooms,
            from_number_of_baths:data.from_number_of_baths,
            to_number_of_baths:data.to_number_of_baths,
            from_number_of_fireplaces:data.from_number_of_fireplaces,
            to_number_of_fireplaces:data.to_number_of_fireplaces,
            pool_type:data.pool_type,
            air_condition:data.air_condition,
            from_year_built:data.from_year_built,
            to_year_built:data.to_year_built,
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
