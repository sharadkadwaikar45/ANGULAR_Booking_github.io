import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-ticket',
  templateUrl: './view-ticket.component.html',
  styleUrls: ['./view-ticket.component.scss']
})
export class ViewTicketComponent implements OnInit {
  currentDate: Date = new Date();
  currentDate2: Date = new Date() ;
  formattedDate: string = '';

  constructor() { }

  ngOnInit(): void {
    this.currentDate2.setMinutes(this.currentDate2.getMinutes() + 30);
    this.formattedDate = this.generateRandomString(6);

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
