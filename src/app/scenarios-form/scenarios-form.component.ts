import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";
import {v4 as uuid} from 'uuid';

@Component({
  selector: 'app-scenarios-form',
  templateUrl: './scenarios-form.component.html',
  styleUrls: ['./scenarios-form.component.sass']
})
export class ScenariosFormComponent implements OnInit {

  addCase: FormGroup;
  @Output() discardAdd = new EventEmitter();
  @Output() create = new EventEmitter();
  newCase = {};

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

  cancel() {
    this.discardAdd.emit();
  }

  created(event) {
    console.log(event)
  }

  add() {
    let caseToAdd: object = this.addCase.value;
    caseToAdd['uuid'] = uuid();
    if (this.addCase.valid) this.create.emit(caseToAdd);
  }

  ngOnInit() {
    this.addCase = new FormGroup({
      rangeFrom: new FormControl(),
      rangeTo: new FormControl(),
      title: new FormControl(),
      isPeopleAllowed: new FormControl(),
      peopleQuantity: new FormControl(),
      isPersonalProtectionRequired: new FormControl(),
      smoke: new FormControl(),
      fire: new FormControl(),
    })
  }

}
