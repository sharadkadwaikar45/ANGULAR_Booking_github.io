import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-create-ticket',
  templateUrl: './create-ticket.component.html',
  styleUrls: ['./create-ticket.component.scss']
})
export class CreateTicketComponent implements OnInit, OnDestroy {
  minutes: number = 4;
  seconds: number = 59;
  full: number = 1;
  half: number = 0;
  timerInterval: any;
  currentDate: Date = new Date();
  paymentMethod = 'phonepe';

  constructor(public _route: Router,) { }

  ngOnInit(): void {
    this.startTimer();
  }

  ngOnDestroy(): void {
    clearInterval(this.timerInterval);
  }

  startTimer(): void {
    this.timerInterval = setInterval(() => {
      if (this.seconds === 0) {
        if (this.minutes === 0) {
          clearInterval(this.timerInterval);
          this._route.navigate(['dashboards/project'])
        } else {
          this.minutes--;
          this.seconds = 59;
        }
      } else {
        this.seconds--;
      }
    }, 1000);
  }

  fullMinus() {
    if (this.full > 0) {
      this.full--;
    }
  }
  
  fullPlus() {
    this.full++; 
  }
  
  halfMinus() {
    if (this.half > 0) { 
      this.half--;
    }
  }
  
  halfPlus() {
    this.half++; 
  }
  
  pay() {
    alert(`Processing payment of ₹ 25 via ${this.paymentMethod}`);
  }
}
