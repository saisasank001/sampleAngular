import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AnnouncementsComponent } from './announcements/announcements.component';
import { AnnouncementDetailsComponent } from './announcement-details/announcement-details.component';
import { AnnouncementAddComponent } from './announcement-add/announcement-add.component';


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
    path:'announcement-details',
    component:AnnouncementDetailsComponent
  },{
    path:'announcement-add',
    component: AnnouncementAddComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
