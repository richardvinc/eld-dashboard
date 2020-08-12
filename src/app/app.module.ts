import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ShellComponent } from './shell/shell.component';
import { CourseCardComponent } from './course-card/course-card.component';
import { CourseDetailPageComponent } from './course-detail-page/course-detail-page.component';
import { Page404Component } from './page404/page404.component';
import { FilterPipe } from './pipe/result-filter.pipe';
import { ProdiFilterPipe } from './pipe/prodi-filter.pipe';
import { HariFilterPipe } from './pipe/hari-filter.pipe';

import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { ReportComponent } from './report/report.component';
@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ShellComponent,
    CourseCardComponent,
    CourseDetailPageComponent,
    Page404Component,
    FilterPipe,
    ProdiFilterPipe,
    HariFilterPipe,
    ReportComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
