import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { ScenariosListComponent } from './scenarios-list/scenarios-list.component';
import { ScenariosFormComponent } from './scenarios-form/scenarios-form.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import {
  MatButtonModule, MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatCommonModule, MatDatepickerModule, MatDividerModule, MatExpansionModule,
  MatFormFieldModule,
  MatIconModule, MatListModule, MatMenuModule, MatProgressSpinnerModule, MatSelectModule, MatToolbarModule
} from "@angular/material";
import {HttpClientModule} from "@angular/common/http";
import { DashboardComponent } from './dashboard/dashboard.component';
import { VideoReportComponent } from './video-report/video-report.component';
import { EventsReportComponent } from './events-report/events-report.component';
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";


@NgModule({
  declarations: [
    AppComponent,
    ScenariosListComponent,
    ScenariosFormComponent,
    HeaderComponent,
    FooterComponent,
    DashboardComponent,
    VideoReportComponent,
    EventsReportComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NgbModule,
    MatCardModule,
    HttpClientModule,
    MatButtonModule,
    MatFormFieldModule,
    MatIconModule,
    MatCheckboxModule,
    MatCommonModule,
    MatDividerModule,
    MatSelectModule,
    MatDatepickerModule,
    MatListModule,
    MatMenuModule,
    MatExpansionModule,
    MatToolbarModule,
    MatProgressSpinnerModule,
    MatButtonToggleModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
