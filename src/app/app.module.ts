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
import { FilterPipe } from './result-filter.pipe';
import { ProdiFilterPipe } from './prodi-filter.pipe';
import { HariFilterPipe } from './hari-filter.pipe';

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
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
