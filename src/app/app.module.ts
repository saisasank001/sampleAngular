import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { NgMarqueeModule } from 'ng-marquee';
import { NgxNewstickerAlbeModule } from 'ngx-newsticker-albe';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { UrgentMessageComponent } from './urgent-message/urgent-message.component';
import { AnnouncementsComponent } from './announcements/announcements.component';
import { RequestNewUserComponent } from './request-new-user/request-new-user.component';
import { ProductComponent } from './product/product.component';
import { DownloadFullFilesComponent } from './download-full-files/download-full-files.component';
import { AdminComponent } from './admin/admin.component';
<<<<<<< HEAD
import { FormsModule } from '@angular/forms';
// search module
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { AnnouncementDetailsComponent } from './announcement-details/announcement-details.component';
import { AnnouncementAdminComponent } from './announcement-admin/announcement-admin.component';
import { UserSearchComponent } from './user-search/user-search.component';
import { UpdateUserEmailComponent } from './update-user-email/update-user-email.component';
import { EmailUnsubscribeAdminComponent } from './email-unsubscribe-admin/email-unsubscribe-admin.component';
import { WhatsnewComponent } from './whatsnew/whatsnew.component';
import { AnnouncementAddComponent } from './announcement-add/announcement-add.component';
import { NewuserRequestComponent } from './newuser-request/newuser-request.component';
import { AnnouncementCloneComponent } from './announcement-clone/announcement-clone.component';
=======
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ForgotComponent } from './forgot/forgot.component';

>>>>>>> 1d6ba7093b47cf7b3ee9a7656b0500f22acc4747

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    LoginComponent,
    HomeComponent,
    UrgentMessageComponent,
    AnnouncementsComponent,
    RequestNewUserComponent,
    ProductComponent,
    DownloadFullFilesComponent,
    AdminComponent,
<<<<<<< HEAD
    AnnouncementDetailsComponent,
    AnnouncementAdminComponent,
    UserSearchComponent,
    UpdateUserEmailComponent,
    EmailUnsubscribeAdminComponent,
    WhatsnewComponent,
    AnnouncementAddComponent,
    NewuserRequestComponent,
    AnnouncementCloneComponent,
    
=======
    ForgotComponent
>>>>>>> 1d6ba7093b47cf7b3ee9a7656b0500f22acc4747
  ],
  imports: [
    NgxNewstickerAlbeModule ,
    NgbModule,
    NgMarqueeModule,
    BrowserModule,
    AppRoutingModule,
<<<<<<< HEAD
    FormsModule,
    Ng2SearchPipeModule
=======
    ReactiveFormsModule,
    FormsModule
>>>>>>> 1d6ba7093b47cf7b3ee9a7656b0500f22acc4747
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
