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
  loginForm:FormGroup;
  resetForm: FormGroup;
  reactiveForm: FormGroup;
  otpForm: FormGroup;
  @ViewChild('reset',{static:true}) resetModal;  
  @ViewChild('reactive',{static:true}) reactiveModal;  
  @ViewChild('otp',{static:true}) otpModel;

  data = [
    {
      "username":"admin",
      "password":"admin",
      "code": 0
    },
    {
      "username":"sai",
      "password":"sai",
      "code": 1
    },
    {
      "username":"anusha",
      "password":"anusha",
      "code": 2
    }
  ]
  constructor(private modalService: NgbModal, private formBuilder: FormBuilder) { }

  //to open model 
  open(model) { 
    this.modalService.open(model, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
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
    this.loginForm = this.formBuilder.group({
    //   mailaddress: ['',[Validators.required,Validators.pattern(
    //     /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    // )]],
    // pwd: ['', [Validators.required,Validators.minLength(6)]]
    mailaddress: ['',[Validators.required]],
    pwd: ['', [Validators.required]]

  });  
      this.resetForm = this.formBuilder.group({
          email: ['',[Validators.required,Validators.pattern(
            /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        )]]
      }); 
      this.reactiveForm = this.formBuilder.group({
        email: ['',[Validators.required,Validators.pattern(
          /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      )]]
    }); 
    this.otpForm = this.formBuilder.group({
      otp: ['',[Validators.required,Validators.pattern(
        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    )]]
  });
  }

  submit(data){
    console.log()
    for(let i=0;i<this.data.length;i++)
    {
      if(data.mailaddress == this.data[i].username && data.pwd == this.data[i].password){
        console.log(this.data[i].code);
        if(this.data[i].code == 0){
            this.open(this.otpModel)
        }
        else if(this.data[i].code == 1){
          this.open(this.resetModal)
        }
        else if(this.data[i].code == 2){
          this.open(this.reactiveModal)
        }
      }
      else{
        console.log("error message of invalid credentials")
      }
    }
  }

  resetData(data){
   console.log(data);
   this.resetForm.reset();
  }
  reactiveData(data){
    console.log(data);
    this.reactiveForm.reset();
   }
   otpData(data){
     console.log(data);
   }
}
