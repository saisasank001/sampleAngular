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
  forgotForm: FormGroup;
  @ViewChild('reset',{static:true}) resetModal;  
  @ViewChild('reactive',{static:true}) reactiveModal;

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
      mailaddress: ['', Validators.required],
      pwd: ['', Validators.required]
  });  
      this.resetForm = this.formBuilder.group({
          email: ['', Validators.required],
      }); 
      this.reactiveForm = this.formBuilder.group({
        email: ['', Validators.required],
    }); 
  }

  submit(data){
    for(let i=0;i<this.data.length;i++)
    {
      if(data.mailaddress == this.data[i].username && data.pwd == this.data[i].password){
        if(this.data[i].code == 0){
            this.open(this.resetModal)
        }
        else if(this.data[i].code == 1){
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
   forgotPwd(){
     console.log("forgot");
   }
}
