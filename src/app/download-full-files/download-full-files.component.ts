import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-download-full-files',
  templateUrl: './download-full-files.component.html',
  styleUrls: ['./download-full-files.component.scss']
})
export class DownloadFullFilesComponent implements OnInit {

  json: any = [
    {
      file_type: "ADD",
      current_version: "ADD_v1.csv",
      prev_version: "ADD_v0.csv",
      product_line_name: "Personal Line Products"
    },
    {
      file_type: "Advanced Linking(ALi)",
      current_version: "AdvancedLinkingAuto_v1.csv",
      prev_version: "Unavailable",
      product_line_name: "Personal Line Products"
    },
    {
      file_type: "Auto Rating Pack",
      current_version: "AutoRatingPack_v1.csv",
      prev_version: "Unavailable",
      product_line_name: "Personal Line Products"
    },
    {
      file_type: "C.L.U.E. Auto",
      current_version: "CLUEAuto_v1.csv",
      prev_version: "CLUEAuto_v0.csv",
      product_line_name: "Personal Line Products"
    },
    {
      file_type: "C.L.U.E. Property",
      current_version: "CLUEProperty_v1.csv",
      prev_version: "CLUEProperty_v0.csv",
      product_line_name: "Personal Line Products"
    },
    {
      file_type: "Current Carrier Auto",
      current_version: "CurrentCarrierAuto_v1.csv",
      prev_version: "CurrentCarrierAuto_v0.csv",
      product_line_name: "Personal Line Products"
    },
    {
      file_type: "Current Carrier Property",
      current_version: "CurrentCarrierProperty_v1.csv",
      prev_version: "CurrentCarrierProperty_v0.csv",
      product_line_name: "Personal Line Products"
    },
    {
      file_type: " Instant ID",
      current_version: "InstantID_v1.csv",
      prev_version: "Unavailable",
      product_line_name: "Home Products"
    },
    {
      file_type: "Master List",
      current_version: "MasterList_v1.csv",
      prev_version: "MasterList_v0.csv",
      product_line_name: "Home Products"
    },
    {
      file_type: "MVR",
      current_version: "MVR_v1.csv",
      prev_version: "MVR_v0.csv",
      product_line_name: "Home Products",
    },
    {
      file_type: "NCF",
      current_version: "NCF_v1.csv",
      prev_version: "Unavailable",
      product_line_name: "Home Products"
    },
    {
      file_type: "Vehicle Build",
      current_version: "VehicleBuild_v1.csv",
      prev_version: "Unavailable",
      product_line_name: "Home Products"
    },
    {
      file_type: "Vehicle History",
      current_version: "VehicleHistory_v1.csv",
      prev_version: "Unavailable",
      product_line_name: "Home Products"
    },
    {
      file_type: "VIN",
      current_version: "VIN_v1.csv",
      prev_version: "VIN_v0.csv",
      product_line_name: "Home Products"
    }
  ]

  diff: any = {};
  constructor() { }
  finalJson:any=[];
  ngOnInit() {
    this.json.forEach(element => {
      if (this.diff[element.product_line_name]) {
        this.diff[element.product_line_name].push({ current_version: element.current_version,
           prev_version:element.prev_version, file_type:element.file_type})
        
      }
      else {
        this.diff[element.product_line_name] = []
        this.diff[element.product_line_name].push({ current_version: element.current_version,
          prev_version:element.prev_version, file_type:element.file_type})
      }

    });
    console.log(this.diff)
    let keys = [];
    keys=Object.keys(this.diff)
    keys.forEach(element => {
      this.finalJson.push({name: element, data: this.diff[element], active:false})
    })
    this.finalJson[0].active=true
    console.log(this.finalJson)
  }
  openStatus(data){
    //this.status = false;
    if(data.active == true){
      data.active = false
    }
    else{
        this.finalJson.forEach(element => {
          element.active = false
        });
        data.active = true
      }
      
    }               
    
  }

