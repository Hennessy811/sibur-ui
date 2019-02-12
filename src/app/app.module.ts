import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ScenariosListComponent} from './scenarios-list/scenarios-list.component';
import {ScenariosFormComponent} from './scenarios-form/scenarios-form.component';
import {HeaderComponent} from './shared/components/header/header.component';
import {FooterComponent} from './shared/components/footer/footer.component';
import { OWL_DATE_TIME_LOCALE } from 'ng-pick-datetime';

import {
  MAT_CHECKBOX_CLICK_ACTION,
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
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule, MatNativeDateModule,
  MatProgressSpinnerModule,
  MatSelectModule, MatSlideToggleModule,
  MatToolbarModule
} from "@angular/material";

import {VgCoreModule} from 'videogular2/core';
import {VgControlsModule} from 'videogular2/controls';
import {HttpClientModule} from "@angular/common/http";
import {DashboardComponent} from './dashboard/dashboard.component';
import {VideoReportComponent} from './video-report/video-report.component';
import {EventsReportComponent} from './events-report/events-report.component';
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";
import {PolygonDrawComponent} from './polygon-draw/polygon-draw.component';
import {NgxPolygonDrawModule} from "../../projects/ngx-polygon-draw/src/lib/ngx-polygon-draw.module";
import {OwlDateTimeModule, OwlNativeDateTimeModule} from "ng-pick-datetime";
import { SituationItemComponent } from './shared/components/situation-item/situation-item.component';
// import {VgOverlayPlayModule} from 'videogular2/overlay-play';
// import {VgBufferingModule} from 'videogular2/buffering';


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
    PolygonDrawComponent,
    SituationItemComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    HttpClientModule,
    FormsModule,
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
    MatNativeDateModule,
    OwlDateTimeModule,
    OwlNativeDateTimeModule,
    MatListModule,
    MatMenuModule,
    MatExpansionModule,
    MatToolbarModule,
    MatProgressSpinnerModule,
    MatButtonToggleModule,
    MatChipsModule,
    MatSlideToggleModule,
    ReactiveFormsModule,
    MatBadgeModule,
    AppRoutingModule,
    MatGridListModule,
    NgxPolygonDrawModule
  ],
  providers: [
    {provide: OWL_DATE_TIME_LOCALE, useValue: 'ru'},
    {provide: MAT_CHECKBOX_CLICK_ACTION, useValue: 'check'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
