import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AnnouncementsComponent } from './announcements/announcements.component';
import { AnnouncementDetailsComponent } from './announcement-details/announcement-details.component';
import { AnnouncementAddComponent } from './announcement-add/announcement-add.component';
import { ForgotComponent } from './forgot/forgot.component';
import { UserSearchComponent } from './user-search/user-search.component';
import { UpdateUserEmailComponent } from './update-user-email/update-user-email.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UnsubscriptionsComponent } from './unsubscriptions/unsubscriptions.component';
import { ProductComponent } from './product/product.component';
import { MasterListComponent } from './master-list/master-list.component';
import { IndividualSearchComponent } from './individual-search/individual-search.component';


const routes: Routes = [
  {
    path:'login',
    component:LoginComponent
  },{
    path:'forgot',
    component:ForgotComponent
  },{
    path:'',
    component:HomeComponent,
    children:[
      {
        path:'',
        component:DashboardComponent
      },
      {
        path:'products',
        component: ProductComponent,
        children:[
          { path: '', redirectTo: 'master-list', pathMatch: 'full' },
          {
            path:'master-list',
            component: MasterListComponent
          },
          {
            path:'individual-search',
            component: IndividualSearchComponent
          },
        ]
      },
      {
        path:'unsubscriptions',
        component:UnsubscriptionsComponent
      },
      {
        path:'announcement',
        component:AnnouncementsComponent
      },
      {
        path:'announcement-details',
        component:AnnouncementDetailsComponent
      },{
        path:'announcement-add',
        component: AnnouncementAddComponent
      },
      {
        path:'user-search',
        component:UserSearchComponent
      },
      {
        path:'update-user-email',
        component:UpdateUserEmailComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
