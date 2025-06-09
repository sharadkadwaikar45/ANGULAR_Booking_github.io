import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-create-pass',
  templateUrl: './create-pass.component.html',
  styleUrls: ['./create-pass.component.scss']
})
export class CreatePassComponent implements OnInit {
  passTypes = [
    { name: 'PMC and PCMC', price: 70 },
    { name: 'All Routes', price: 150 },
  ];
  minutes: number = 4;
  seconds: number = 59;
  timerInterval: any;
  currentDate: Date = new Date();
  selectedPass: any = this.passTypes[1]; // Default selection
  digits: string[] = ['1', '3', '4', '8'];
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
  selectPass(pass: any) {
    this.selectedPass = pass;
  }

  pay() {
    const enteredCode = this.digits.join(""); 
    let data = {
      code: enteredCode,
      selectedPass: this.selectedPass
    };

    localStorage.setItem("passData", JSON.stringify(data));
    this._route.navigate(['apps/book/view_pass'])

  }

}
