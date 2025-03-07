import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-pass',
  templateUrl: './view-pass.component.html',
  styleUrls: ['./view-pass.component.scss']
})
export class ViewPassComponent implements OnInit {
  currentDate: Date = new Date();
  currentDate2: Date = new Date() ;
  formattedDate: string = '';
  passData: any;
  PASSDATA:boolean = false
  constructor() { }

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

}
