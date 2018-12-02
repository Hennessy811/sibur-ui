import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-scenarios-form',
  templateUrl: './scenarios-form.component.html',
  styleUrls: ['./scenarios-form.component.sass']
})
export class ScenariosFormComponent implements OnInit {

  addCase: FormGroup;
  constructor(fb: FormBuilder) {
    this.addCase = fb.group({
      title: '',
      isPeopleAllowed: false,
      peopleQuantity: 0,
      isPersonalProtectionRequired: false,
      isFactors: false,
      smoke: false,
      fire: false,
      maintenance: false
    });
  }
  @Output() discardAdd = new EventEmitter();
  @Output() create = new EventEmitter();
  newCase = {};

  cancel() {
    this.discardAdd.emit();
  }

  add() {
    this.newCase = {
      id: 5,
      title: this.addCase.value.title,
      dates: {
        startDate: '2018.11.24T11:28',
        endDate: '2018.11.24T15:00'
      },
      people: {
        isAllowed: this.addCase.value.isPeopleAllowed,
        quantity: this.addCase.value.peopleQuantity,
        isIndividualProtectionRequired: this.addCase.value.isPersonalProtectionRequired,
        actionsSuspected: ['лежит', 'бежит']
      },
      factors: {
        isAllowed: this.addCase.value.isFactors,
        smoke: this.addCase.value.smoke,
        maintenance: this.addCase.value.maintenance,
        fire: this.addCase.value.fire
      },
      status: false,
      savedAsTemplate: true
    };
    this.create.emit(this.newCase);
  }

  ngOnInit() {
  }

}
