import { Component, OnInit,ViewChild } from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  closeResult: string;
  resetForm: FormGroup;
  reactiveForm: FormGroup;
  forgotForm: FormGroup;
  @ViewChild('reset',{static:true}) resetModal;  
  @ViewChild('reactive',{static:true}) reactiveModal;
  @ViewChild('forgot',{static:true}) forgotModal;

  constructor(private modalService: NgbModal, private formBuilder: FormBuilder) { }

  //to open model 
  open() { 
    this.modalService.open(this.forgotModal, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }
  ngOnInit() {    
      this.resetForm = this.formBuilder.group({
          email: ['', Validators.required],
      }); 
      this.reactiveForm = this.formBuilder.group({
        email: ['', Validators.required],
    }); 
    this.forgotForm = this.formBuilder.group({
        email: ['', Validators.required],
    }); 
  }

  resetData(data){
   console.log(data);
   this.resetForm.reset();
  }
  reactiveData(data){
    console.log(data);
    this.reactiveForm.reset();
   }
   forgotData(data){
    console.log(data);
    this.forgotForm.reset();
   }
}
