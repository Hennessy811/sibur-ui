import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { ScenariosListComponent } from './scenarios-list/scenarios-list.component';
import { ScenariosFormComponent } from './scenarios-form/scenarios-form.component';
import {
  DialogOverviewExampleDialog1, DialogOverviewExampleDialog2, DialogOverviewExampleDialog3,
  DialogOverviewExampleDialog4, DialogOverviewExampleDialog5, DialogOverviewExampleDialog6,
  HeaderComponent
} from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import {
  MatBadgeModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatCommonModule,
  MatDatepickerModule,
  MatDividerModule,
  MatExpansionModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatProgressSpinnerModule,
  MatSelectModule,
  MatToolbarModule,
  MatGridListModule
} from "@angular/material";

import {VgCoreModule} from 'videogular2/core';
import {VgControlsModule} from 'videogular2/controls';
// import {VgOverlayPlayModule} from 'videogular2/overlay-play';
// import {VgBufferingModule} from 'videogular2/buffering';

import {HttpClientModule} from "@angular/common/http";
import { DashboardComponent } from './dashboard/dashboard.component';
import { VideoReportComponent } from './video-report/video-report.component';
import { EventsReportComponent } from './events-report/events-report.component';
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {ReactiveFormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    AppComponent,
    ScenariosListComponent,
    ScenariosFormComponent,
    HeaderComponent,
    FooterComponent,
    DashboardComponent,
    VideoReportComponent,
    EventsReportComponent,
    DialogOverviewExampleDialog1,
    DialogOverviewExampleDialog2,
    DialogOverviewExampleDialog3,
    DialogOverviewExampleDialog4,
    DialogOverviewExampleDialog5,
    DialogOverviewExampleDialog6
  ],
  entryComponents: [
    DialogOverviewExampleDialog1,
    DialogOverviewExampleDialog2,
    DialogOverviewExampleDialog3,
    DialogOverviewExampleDialog4,
    DialogOverviewExampleDialog5,
    DialogOverviewExampleDialog6
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NgbModule,
    VgCoreModule,
    VgControlsModule,
    MatCardModule,
    HttpClientModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
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
    MatChipsModule,
    ReactiveFormsModule,
    MatBadgeModule,
	AppRoutingModule,
	MatGridListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
