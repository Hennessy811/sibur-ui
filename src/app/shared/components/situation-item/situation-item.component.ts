import {Component, Input, OnInit} from '@angular/core';
import {SituationModel} from "../../models/situation.model";

@Component({
  selector: 'app-situation-item',
  templateUrl: './situation-item.component.html',
  styleUrls: ['./situation-item.component.sass']
})
export class SituationItemComponent implements OnInit {

  @Input() situation: SituationModel;
  constructor() { }

  ngOnInit() {
  }

}
