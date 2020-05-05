import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-master-list',
  templateUrl: './master-list.component.html',
  styleUrls: ['./master-list.component.scss']
})
export class MasterListComponent implements OnInit {

  constructor(public formBuilder:FormBuilder) { }

  ngOnInit() {
    this.formBuilder.group({
      state:[], // [] for repition fields
      instant_id:[''] // '' for single field
    })
    // <bil:state>
    //         <!--Zero or more repetitions:-->
    //         <bil:string>?</bil:string>
    //      </bil:state>
    //      <!--Optional:-->
    //      <bil:instant_id>?</bil:instant_id>
    //      <!--Optional:-->
    //      <bil:property_data>?</bil:property_data>
    //      <!--Optional:-->
    //      <bil:foreclosure>?</bil:foreclosure>
    //      <!--Optional:-->
    //      <bil:vacancy>?</bil:vacancy>
    //      <!--Optional:-->
    //      <bil:current_carrier_property>?</bil:current_carrier_property>
    //      <!--Optional:-->
    //      <bil:hh_members>?</bil:hh_members>
    //      <!--Optional:-->
    //      <bil:age_of_roof>?</bil:age_of_roof>
    //      <!--Optional:-->
    //      <bil:building_permits>?</bil:building_permits>
    //      <!--Optional:-->
    //      <bil:from_permit>?</bil:from_permit>
    //      <!--Optional:-->
    //      <bil:to_permit>?</bil:to_permit>
    //      <!--Optional:-->
    //      <bil:insurview>?</bil:insurview>
    //      <!--Optional:-->
    //      <bil:ali>?</bil:ali>
    //      <!--Optional:-->
    //      <bil:state_opt_out>?</bil:state_opt_out>
    //      <!--Optional:-->
    //      <bil:fdr>?</bil:fdr>
  }

}
