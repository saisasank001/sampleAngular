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
<<<<<<< HEAD
import { FilterIndividualSearchComponent } from './filter-individual-search/filter-individual-search.component';
=======
import { FilterAdvancedLinkingComponent } from './filter-advanced-linking/filter-advanced-linking.component';
import { DownloadFullFilesComponent } from './download-full-files/download-full-files.component';
>>>>>>> c44f91813f26b409b8b06672aac07c7fed1bf87a


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
<<<<<<< HEAD
        path:'filter-individual-search',
        component:FilterIndividualSearchComponent
=======
        path:'download-full-files',
        component: DownloadFullFilesComponent},
        {
        path:'filter-advanced-linking',
        component: FilterAdvancedLinkingComponent
>>>>>>> c44f91813f26b409b8b06672aac07c7fed1bf87a
      }
      
      
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
