import {
  AfterViewChecked,
  AfterViewInit,
  Component, OnChanges,
  OnInit,
  QueryList,
  SimpleChanges,
  ViewChild,
  ViewChildren
} from '@angular/core';
import {NgxPolygonDrawComponent} from "../../../projects/ngx-polygon-draw/src/lib/ngx-polygon-draw.component";
import {DataManagementService} from "../shared/services/data-management.service";
import {SituationModel, ZoneModel} from "../shared/models/situation.model";
import {ScenariosFormComponent} from "../scenarios-form/scenarios-form.component";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.sass']
})
export class DashboardComponent implements OnInit {

  isEditing = false;
  zonesArray: Array<ZoneModel>;
  editData: SituationModel;

  @ViewChild(NgxPolygonDrawComponent) private poly: NgxPolygonDrawComponent;

  constructor(private dms: DataManagementService) {
  }

  undo() {
    this.poly.undo();
  }

  created(event) {
    console.log(event);
  }

  editSituation(item) {
// TODO Edit
  }

  clearCanvas() {
    this.poly.clear_canvas();
  }

  newCase(event) {
    this.isEditing = true;
  }

  discardAdd() {
    this.isEditing = false;
  }

  addCase(event: SituationModel) {
    this.isEditing = false;
    this.editData = event[0];
    this.dms.addSituation(event[0], event[1]);
  }

  removeCase(event: string) {
    this.dms.removeSituation(event);
  }

  ngOnInit() {
    this.dms.getJSON().subscribe(data => {
      this.zonesArray = data.zones;
      console.log(this.zonesArray)
    })
  }
  //  TODO VideoStream - problems
  //  TODO Existing/Non-existing criteria

}
