import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.sass']
})
export class DashboardComponent implements OnInit {

  constructor() { }

  firstError = false;
  secondError = false;

  fError(id) {
    this.firstError = true;
  }
  sError(id) {
    this.secondError = true;
  }

  casesList = [
    {
      id: 1,
      title: 'Зона 1 | Ведутся работы',
      dates: {
        startDate: '2018.11.24T11:28',
        endDate: '2018.11.24T15:00'
      },
      people: {
        isAllowed: true,
        quantity: 4,
        isIndividualProtectionRequired: true,
        actionsSuspected: ['лежит', 'бежит']
      },
      factors: {
        isAllowed: true,
        smoke: true,
        maintenance: true,
        fire: true
      },
      status: false,
      savedAsTemplate: true
    },
    {
      id: 2,
      title: 'Зона 1 | Вход запрещен',
      dates: {
        startDate: '2018.11.24T15:12',
        endDate: '2018.11.24T16:40'
      },
      people: {
        isAllowed: false,
        quantity: 0,
        isIndividualProtectionRequired: true,
        actionsSuspected: []
      },
      factors: {
        isAllowed: true,
        smoke: true,
        maintenance: false,
        fire: true
      },
      status: false,
      savedAsTemplate: true
    },
    {
      id: 3,
      title: 'Зона 3 | Стандартый режим',
      dates: {
        startDate: '2018.11.24T07:00',
        endDate: '2018.11.24T20:00'
      },
      people: {
        isAllowed: true,
        quantity: 4,
        isIndividualProtectionRequired: false,
        actionsSuspected: ['лежит', 'бежит']
      },
      factors: {
        isAllowed: true,
        smoke: false,
        maintenance: true,
        fire: false
      },
      status: false,
      savedAsTemplate: true
    },
    {
      id: 4,
      title: 'Зона 4 | Стандартый режим',
      dates: {
        startDate: '2018.11.24T07:00',
        endDate: '2018.11.24T20:00'
      },
      people: {
        isAllowed: true,
        quantity: 4,
        isIndividualProtectionRequired: false,
        actionsSuspected: ['лежит', 'бежит']
      },
      factors: {
        isAllowed: true,
        smoke: false,
        maintenance: true,
        fire: false
      },
      status: false,
      savedAsTemplate: true
    }
  ];
  isCreating = false;

  newCase(event) {
    this.isCreating = true;
  }

  discardAdd() {
    this.isCreating = false;
  }

  addCase(event) {
    this.casesList.push(event);
    this.isCreating = false;
  }

  removeCase(event) {

  }

  ngOnInit() {
  }

}
