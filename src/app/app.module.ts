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
    AdminComponent
  ],
  imports: [
    NgxNewstickerAlbeModule ,
    NgbModule,
    NgMarqueeModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
