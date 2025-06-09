import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-pass',
  templateUrl: './view-pass.component.html',
  styleUrls: ['./view-pass.component.scss']
})
export class ViewPassComponent implements OnInit {
  @ViewChild('callAPIDialog') callAPIDialog: TemplateRef<any>;
  
  currentDate: Date = new Date();
  currentDate2: Date = new Date() ;
  formattedDate: string = '';
  passData: any;
  PASSDATA:boolean = false
  showQR:boolean = false
  constructor(public _route: Router,public dialog: MatDialog) { }

  ngOnInit(): void {
    this.currentDate2.setMinutes(this.currentDate2.getMinutes() + 30);
    this.formattedDate = this.generateRandomString(6);

    this.passData = JSON.parse(localStorage.getItem("passData"));

if (this.passData) {
    this.PASSDATA = true
}

  }

  generateRandomString(length: number): string {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ123456789';
    let result = '';
    for (let i = 0; i < length; i++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return result;
  }



   showQRcode() {
    const dialog = this.dialog.open(this.callAPIDialog);
    dialog.afterClosed().subscribe((result) => { });
  }

  close(){
    this.dialog.closeAll()
  }
}
