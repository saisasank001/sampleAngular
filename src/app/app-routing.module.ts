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
import { AdminComponent } from './admin/admin.component';
import { AnnouncementAdminComponent } from './announcement-admin/announcement-admin.component';
import { EventsComponent } from './events/events.component';
import { AnnouncementEditComponent } from './announcement-edit/announcement-edit.component';
import { EventDetailsComponent } from './event-details/event-details.component';
import { EventAddComponent } from './event-add/event-add.component';
import { EventEditComponent } from './event-edit/event-edit.component';
import { CriteriaComponent } from './criteria/criteria.component';
import { FilterAdvancedLinkingComponent } from './filter-advanced-linking/filter-advanced-linking.component';
import { DownloadFullFilesComponent } from './download-full-files/download-full-files.component';
import { CurrentCarrierComponent } from './current-carrier/current-carrier.component';
import { FireAndDiasterComponent } from './fire-and-diaster/fire-and-diaster.component';
import { ForeclosureDataComponent } from './foreclosure-data/foreclosure-data.component';
import { ConfidentialityAgreementComponent } from './confidentiality-agreement/confidentiality-agreement.component';
import { HomeInspectionComponent } from './home-inspection/home-inspection.component';
import { RequestNewUserComponent } from './request-new-user/request-new-user.component';
import { WhatsnewComponent } from './whatsnew/whatsnew.component';
import { NewuserRequestComponent } from './newuser-request/newuser-request.component';



const routes: Routes = [
  {
    path:'login',
    component:LoginComponent
  },{
    path:'events',
    component:EventsComponent
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
        path:'admin',
        component:AdminComponent,
        children:[
          { path: '', redirectTo: 'announcement-add', pathMatch: 'full' },
          {
            path:'announcement-add',
            component: AnnouncementAddComponent
          },
          {
            path:'announcement-edit',
            component: AnnouncementEditComponent
          },
          {
            path:'annoucement-list',
            component: AnnouncementAdminComponent
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
      },
      {
        path:'unsubscriptions',
        component:UnsubscriptionsComponent
      },
      {
        path:'announcements',
        component:AnnouncementsComponent
      },
      {
        path:'announcement-details',
        component:AnnouncementDetailsComponent
      },
      {
        path:'event-details',
        component:EventDetailsComponent
      },
      {
        path:'event-add',
        component:EventAddComponent
      },
      {
        path:'event-edit',
        component:EventEditComponent
      },
      {
        path:'criteria',
        component:CriteriaComponent
      },
      {
        path:'download-full-files',
        component: DownloadFullFilesComponent
      },
        {
        path:'filter-advanced-linking',
        component: FilterAdvancedLinkingComponent
      },
      {
        path:'current-carrier',
        component: CurrentCarrierComponent
      },
      {
        path:'fire-and-disaster',
        component: FireAndDiasterComponent
      },
      {
        path:'foreclosure-data',
        component: ForeclosureDataComponent
      },
      {
        path:'test-confidentiality-agreement',
        component: ConfidentialityAgreementComponent
      },
      {
        path:'home-inspection',
        component: HomeInspectionComponent
      },
      {
        path:'request-new-user',
        component:RequestNewUserComponent
      },
      {
        path:'whatsnew',
        component:WhatsnewComponent
      },
      {
        path:'new-user-request',
        component:NewuserRequestComponent
      },
      {
        path:'header',
        component:Headers
      }
      
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
