import {Component, OnInit, ViewChild} from '@angular/core';
import {NgxPolygonDrawComponent} from "../../../projects/ngx-polygon-draw/src/lib/ngx-polygon-draw.component";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.sass']
})
export class DashboardComponent implements OnInit {

  constructor() {
  }

  created(event) {
    console.log(event);
  }

  @ViewChild(NgxPolygonDrawComponent)
  private poly: NgxPolygonDrawComponent;

  undo() {
    this.poly.undo();
  }

  clearCanvas() {
    this.poly.clear_canvas();
  }

  casesList = [
    {
      fire: true,
      isPeopleAllowed: true,
      isPersonalProtectionRequired: true,
      peopleQuantity: 5,
      rangeFrom: ['Mon Dec 17 2018 14:36:32 GMT+0300 (Москва, стандартное время)', undefined],
      rangeTo: [undefined, 'Mon Dec 17 2018 14:36:32 GMT+0300 (Москва, стандартное время)'],
      smoke: true,
      zone: 3,
      title: "Стандартный режим"
    },
    {
      fire: true,
      isPeopleAllowed: true,
      isPersonalProtectionRequired: true,
      peopleQuantity: 5,
      rangeFrom: ['Mon Dec 17 2018 14:36:32 GMT+0300 (Москва, стандартное время)', undefined],
      rangeTo: [undefined, 'Mon Dec 17 2018 14:36:32 GMT+0300 (Москва, стандартное время)'],
      smoke: true,
      zone: 3,
      title: "Стандартный режим"
    },
    {
      fire: true,
      isPeopleAllowed: true,
      isPersonalProtectionRequired: true,
      peopleQuantity: 5,
      rangeFrom: ['Mon Dec 17 2018 14:36:32 GMT+0300 (Москва, стандартное время)', undefined],
      rangeTo: [undefined, 'Mon Dec 17 2018 14:36:32 GMT+0300 (Москва, стандартное время)'],
      smoke: true,
      zone: 3,
      title: "Стандартный режим"
    },
  ];
  isCreating = false;

  newCase(event) {
    this.isCreating = true;
  }

  discardAdd() {
    this.isCreating = false;
  }

  addCase(event) {
    console.log(event);
    this.casesList.push(event);
    this.isCreating = false;
  }

  removeCase(event) {

  }

  ngOnInit() {
  }

}
