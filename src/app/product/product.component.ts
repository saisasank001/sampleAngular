import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { element } from 'protractor';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  sideMenu=[
    {
      name:'Personal Line Products',
      active:false,
      children:[
        {
          name:'Master List ',
          path:'/products/master-list'
        },
       
        {
          name:'Advanced Linking (ALi)',
          path:'alerts'
        },
        {
          name:'ADD',
          path:'alerts'
        },
        {
          name:'Auto Rating Pack',
          path:'alerts'
        },
        {
          name:'C.L.U.E Auto',
          path:'alerts'
        },
        {
          name:'C.L.U.E Property',
          path:'alerts'
        },
        {
          name:'Current Carirer Auto',
          path:'alerts'
        },
        {
          name:'Current Carier Property',
          path:'alerts'
        },
        {
          name:'Instant ID',
          path:'alerts'
        },
        {
          name:'MVR',
          path:'alerts'
        },
        
        {
          name:'NCF',
          path:'alerts'
        },
        {
          name:'Vehicle History',
          path:'alerts'
        },
        
        {
          name:'VIN',
          path:'alerts'
        }
      ]
    },
    {
      name:'Home Products',
      active:false,
      children:[
        {
          name:'Individual Search',
          path:'/products/individual-search'
        }
      ]
    }
  ]
  
  
  response=[];

  
  routeUrl='';
 

  constructor(private router: Router ) {
    this.routeUrl=(this.router.url);
    console.log(this.routeUrl)
  }

  ngOnInit(){
    this.sideMenu.forEach(element=>{
      element.active=this.checkChildActive(element)
    })
    
    this. router.events.subscribe((val) => {
      // see also 
      console.log(this.router.url)
      this.routeUrl=this.router.url;
      this.sideMenu.forEach(element=>{
        element.active=this.checkChildActive(element)
      })
  });
  }

  toggleMenu(menu){
    let tmp=Object.assign([],menu);
    this.sideMenu.forEach(element => {
      element.active=false;
    });
    menu.active=!tmp.active;
  }

  checkChildActive(menu){
    let flag=false;
    for(let i=0;i<menu.children.length;i++){
      if(menu.children[i].path==this.routeUrl){
        flag=true;
      }
    }
    return flag;
  }


}
