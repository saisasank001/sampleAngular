import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-force-closure',
  templateUrl: './force-closure.component.html',
  styleUrls: ['./force-closure.component.css']
})
export class ForceClosureComponent implements OnInit {

  states:any = ["Ap","telangana","adfaf"];
  forceClosures:any =["all","asdfg","asdfgh"]
  forceClosureForm: FormGroup
  constructor(private formBuilder:FormBuilder) { }

  ngOnInit() {
    this.forceClosureForm = this.formBuilder.group({
      state: ['', [Validators.required]],
      forceClosureCode: ['', [Validators.required]],
      addressProtentiallyVacant: ['', [Validators.required]],
      vacancyDurationFrom: ['', [Validators.required]],
      vacancyDurationTo: ['', [Validators.required]],
  });
  }

}
