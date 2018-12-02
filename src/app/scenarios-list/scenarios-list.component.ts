import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-scenarios-list',
  templateUrl: './scenarios-list.component.html',
  styleUrls: ['./scenarios-list.component.sass']
})

export class ScenariosListComponent implements OnInit {

  constructor() { }

  @Input() casesList;
  @Output() newCase = new EventEmitter();
  @Output() removeCase = new EventEmitter();
  @Output() fError = new EventEmitter();
  @Output() sError = new EventEmitter();

  addCase() {
  //  todo create new case
    this.newCase.emit();
  }

  firstError(id) {
    if (id == 1) {
      this.fError.emit()
    } else if (id == 3) {
      this.sError.emit()
    }
  }

  deleteCase(event) {
  //  todo delete case
  }

  ngOnInit() {
  }

}
