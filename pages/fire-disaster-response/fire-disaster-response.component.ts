import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-fire-disaster-response',
  templateUrl: './fire-disaster-response.component.html',
  styleUrls: ['./fire-disaster-response.component.css']
})
export class FireDisasterResponseComponent implements OnInit {
  states:any = ["Ap","telangana","adfaf"];
  fireDisasterResponseForm: FormGroup
  constructor(private formBuilder:FormBuilder) { }

  ngOnInit() {
    this.fireDisasterResponseForm = this.formBuilder.group({
      state: ['', [Validators.required]],
      score: ['', [Validators.required]]
  });
  }
}
