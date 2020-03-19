import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AnnouncementsComponent } from './announcements/announcements.component';
import { ForgotComponent } from './forgot/forgot.component';


const routes: Routes = [
  {
    path:'',
    component:LoginComponent
  },{
    path:'home',
    component:HomeComponent
  },{
    path:'announcement',
    component:AnnouncementsComponent
  },
  {
    path:'forgot',
    component:ForgotComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
