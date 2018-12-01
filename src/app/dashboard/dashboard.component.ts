import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.sass']
})
export class DashboardComponent implements OnInit {

  constructor() { }

  casesList = [];
  isCreating = false;

  caseItem = {
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
    savedAsTemplate: true
  };
  caseItem2 = {
    title: 'Зона 1 | Вход запрещен'
  };

  ngOnInit() {
  }

}
