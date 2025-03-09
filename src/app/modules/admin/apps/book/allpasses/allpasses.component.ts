import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-allpasses',
  templateUrl: './allpasses.component.html',
  styleUrls: ['./allpasses.component.scss']
})
export class AllpassesComponent implements OnInit {
  passes = [
    { type: 'Only PCMC', date: '2025-02-03 09:06:54', status: 'Success', amount: 40 },
    { type: 'PMC and PCMC', date: '2025-02-03 09:06:23', status: 'Failed', amount: 50 },
    { type: 'PMC and PCMC', date: '2025-02-01 09:52:53', status: 'Success', amount: 50 },
    { type: 'Only PCMC', date: '2025-01-24 09:07:19', status: 'Success', amount: 40 },
    { type: 'Only PCMC', date: '2025-01-23 09:50:16', status: 'Failed', amount: 40 },
    { type: 'Only PCMC', date: '2025-01-20 09:18:32', status: 'Success', amount: 40 }
  ];
  constructor() { }

  ngOnInit(): void {
  }

  showPass(pass:any){
console.log(pass)
  }

}
