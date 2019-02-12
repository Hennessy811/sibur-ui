import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {SituationModel} from "../models/situation.model";

@Injectable({
  providedIn: 'root'
})
export class DataManagementService {

  constructor(private http: HttpClient) {}

  getJSON(): Observable<any> {
    return this.http.get("./assets/data_example.json")
  }

  addSituation(item: SituationModel, cameraId: string) {
    console.log("Add item: ", item);
  }

  removeSituation(id: string) {
    console.log("Remove item with id: ", id)
  }

}
