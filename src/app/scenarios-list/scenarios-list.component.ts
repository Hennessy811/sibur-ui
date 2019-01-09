import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-scenarios-list',
  templateUrl: './scenarios-list.component.html',
  styleUrls: ['./scenarios-list.component.sass']
})

export class ScenariosListComponent implements OnInit {

  constructor(private http: HttpClient) { }

  @Input() casesList;
  @Output() newCase = new EventEmitter();
  @Output() removeCase = new EventEmitter();

  checkedList = [];

  addCase() {
  //  todo create new case
    this.newCase.emit();
  }

  checked(id: string) {
    this.checkedList.push(this.casesList.filter(item => item.id == id)[0]);
    let params = 'params=' + JSON.stringify(this.checkedList);
    this.http.post('http://localhost:3000',
      params,
      {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      }
    }).subscribe((res) => {
      console.log(res)
    })
  }

  deleteCase(event) {
  //  todo delete case
  }

  ngOnInit() {
  }

}
