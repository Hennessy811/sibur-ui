import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";
import {v4 as uuid} from 'uuid';
import {CameraModel, SituationModel, ZoneModel} from "../shared/models/situation.model";
import {DataManagementService} from "../shared/services/data-management.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-scenarios-form',
  templateUrl: './scenarios-form.component.html',
  styleUrls: ['./scenarios-form.component.sass']
})
export class ScenariosFormComponent implements OnInit {

  addCase: FormGroup;

  @Input() zonesArray: Array<ZoneModel>;
  @Input() editData: SituationModel;
  @Input() isEditing;
  @Output() discardAdd = new EventEmitter();
  @Output() create = new EventEmitter();
  detectionFrame = [];
  activeCamList = [];
  availableEscalations = [
    "sms",
    "email",
    "push"
  ];

  constructor(fb: FormBuilder,
              private route: ActivatedRoute,
              private dms: DataManagementService) {
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

  public editItem(item) {
    console.log(item)
  }

  signal(item) {
    console.log(item)
  }

  cancel() {
    this.discardAdd.emit();
  }

  created(event) {
    console.log(event)
    this.detectionFrame = event;
  }

  add() {
    let id = uuid();
    let item = this.addCase.value;
    console.log(item);
    let factorsList = [];
    // if (item.smoke) factorsList.push(item.smoke);
    // if (item.isPersonalProtectionRequired) factorsList.push(item.isPersonalProtectionRequired);
    // if (item.fire) factorsList.push(item.fire);
    // if (item.isPeopleAllowed) factorsList.push(item.isPeopleAllowed);
    let newSituation: SituationModel = {
      name: item.title,
      id: id,
      isEnabled: false,
      dateTime: {
        rangeTo: item.rangeTo,
        rangeFrom: item.rangeFrom
      },
      escalationTypes: item.escalationType,
      factors: factorsList,
      detectionFrame: this.detectionFrame
    };
    let emitted = [newSituation, item.selectedCamera];
    this.create.emit(emitted);
  }

  selectionCh() {
    let zone: ZoneModel = this.zonesArray.filter(item => item.id === this.addCase.controls.selectedZone.value)[0]
    this.activeCamList = zone.camerasList;
  }

  ngOnInit() {
    let id = this.route.snapshot.queryParams.id;

    this.dms.getJSON().subscribe(data => {
      // Weird way to get only array of situations
      let zonesList = data.zones.map(zone => zone.camerasList)
      let camerasList = [];
      zonesList.forEach((zone: Array<any>) => {
        zone.forEach(camera => {
          camerasList.push(camera)
        })
      })
      let situations = [];
      camerasList.filter(cam => cam.situationsList)
        .forEach((cam: CameraModel) => {
        cam.situationsList.forEach((situation: SituationModel) => {
          situations.push(situation)
        })
      });
      // Get necessary situation to work on lately
      let editableItem = situations.filter((item: SituationModel) => item.id === id)[0]
      console.log(editableItem)
    })

    this.addCase = new FormGroup({
      rangeFrom: new FormControl(),
      rangeTo: new FormControl(),
      selectedZone: new FormControl(),
      selectedCamera: new FormControl(),
      title: new FormControl(),
      isPeopleAllowed: new FormControl(),
      isPeopleTracking: new FormControl(),
      isPersonalProtectionRequired: new FormControl(),
      smoke: new FormControl(),
      sms: new FormControl(),
      email: new FormControl(),
      push: new FormControl(),
      fire: new FormControl(),
      escalationType: new FormControl()
    })
  }

}
