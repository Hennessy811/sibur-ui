import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef} from "@angular/material";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  openDialog1() {
    const dialogRef = this.dialog.open(DialogOverviewExampleDialog1)
  }
  openDialog2() {
    const dialogRef = this.dialog.open(DialogOverviewExampleDialog2)
  }
  openDialog3() {
    const dialogRef = this.dialog.open(DialogOverviewExampleDialog3)
  }
  openDialog4() {
    const dialogRef = this.dialog.open(DialogOverviewExampleDialog4)
  }
  openDialog5() {
    const dialogRef = this.dialog.open(DialogOverviewExampleDialog5)
  }

}

@Component({
  selector: 'dialog-overview-example-dialog1',
  templateUrl: 'dialog-overview-example-dialog1.html',
  styleUrls: ['./header.component.sass']
})
export class DialogOverviewExampleDialog1 {

  constructor(
    public dialogRef: MatDialogRef<DialogOverviewExampleDialog1>) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

}

@Component({
  selector: 'dialog-overview-example-dialog2',
  templateUrl: 'dialog-overview-example-dialog2.html',
  styleUrls: ['./header.component.sass']
})
export class DialogOverviewExampleDialog2 {

  constructor(
    public dialogRef: MatDialogRef<DialogOverviewExampleDialog2>) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

}

@Component({
  selector: 'dialog-overview-example-dialog3',
  templateUrl: 'dialog-overview-example-dialog3.html',
  styleUrls: ['./header.component.sass']
})
export class DialogOverviewExampleDialog3 {

  constructor(
    public dialogRef: MatDialogRef<DialogOverviewExampleDialog3>) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

}

@Component({
  selector: 'dialog-overview-example-dialog4',
  templateUrl: 'dialog-overview-example-dialog4.html',
  styleUrls: ['./header.component.sass']
})
export class DialogOverviewExampleDialog4 {

  constructor(
    public dialogRef: MatDialogRef<DialogOverviewExampleDialog4>) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

}

@Component({
  selector: 'dialog-overview-example-dialog5',
  templateUrl: 'dialog-overview-example-dialog5.html',
  styleUrls: ['./header.component.sass']
})
export class DialogOverviewExampleDialog5 {

  constructor(
    public dialogRef: MatDialogRef<DialogOverviewExampleDialog5>) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

}

@Component({
  selector: 'dialog-overview-example-dialog6',
  templateUrl: 'dialog-overview-example-dialog6.html',
  styleUrls: ['./header.component.sass']
})
export class DialogOverviewExampleDialog6 {

  constructor(
    public dialogRef: MatDialogRef<DialogOverviewExampleDialog6>) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

}
