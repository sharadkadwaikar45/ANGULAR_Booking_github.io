import { Component, OnInit,ViewChild ,TemplateRef} from '@angular/core';
import { FormBuilder, FormGroup, Validators,NgForm, FormControl } from '@angular/forms';
import { RingService } from 'app/modules/service/ring.service'
import { FuseValidators } from '@fuse/validators';
import { GlobalService } from 'app/modules/service/global.service';
import { MatDialog } from '@angular/material/dialog';
import { Router, ActivatedRoute } from '@angular/router';
import { MatSort } from '@angular/material/sort';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { debounceTime } from 'rxjs/operators';
import Swal from 'sweetalert2';
// ng b --output-path docs --base-href /ANGULAR_Booking_github.io/
@Component({
  selector: 'project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']

})
export class ProjectComponent implements OnInit{
  @ViewChild(MatPaginator) paginatior: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  displayedColumns: string[] = ['Sr.No','RingId','Name','MobileNumber','Origin','Destination','Vehicle','DOB','actions'];
  displayedColumns2: string[] = ['Sr.No','RingId','Name','MobileNumber','Email','DOB','actions'];
  userDetailsData: any[];
  dataSource : any;
  userDetails : FormGroup
  listLoader : boolean = false;
  searchLoader : boolean = false;
  searchField : boolean = false;
  page: number = 1;
  pageSize: number = 10;
  startNum:  number = 0;
  sortValue: string = "";
  columnIndex: number = 0;
  recordsTotal: any;
  recordsFiltered: any;
  searchControl = new FormControl();
  
  domainListData: any;
  menuListData: any;
  bannerListData: any;
  domainCount: any;
  menuCount: any;
  bannerCount: any;
  pageListData: any;
  pageCount: any;
  appListData: any;
  appCount: any;
  userListData: any;
  userCount: any;
  dir: { origin: { latitude: number; longitude: number; }; destination: { latitude: any; longitude: any; }; };

  constructor(
    private _formBuilder: FormBuilder,
    private ringService : RingService,
    public globalService: GlobalService,
    public _activatedroute: ActivatedRoute,
    public _route: Router, ) {
    
  }

ngOnInit() {
  this.ringService.sss().subscribe(res => {})

  this.searchControl.valueChanges
  .pipe(debounceTime(500)) 
  .subscribe(value => {
    this.userDetails.value.search = value
  });

  this.userDetails = this._formBuilder.group({
    search: [''],
});

}

search(){
  this.searchField = !this.searchField;
}

convertDate(inputFormat) {
  function pad(s) { return (s < 10) ? '0' + s : s; }

  var monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  var d = new Date(inputFormat);
  var day = pad(d.getDate());
  var month = monthNames[d.getMonth()];
  var year = d.getFullYear();

  var hours = pad(d.getHours());
  var minutes = pad(d.getMinutes());
  var seconds = pad(d.getSeconds());
  // return [day, month, year].join(' ') + ' ' + [hours, minutes, seconds].join(':');
  return [day, month, year].join(' ') ;
}













editPage(pageId){
  this._route.navigate(['apps/pages/addpages/update/' + pageId]);
}

viewReminder(){
  this._route.navigate(['apps/reminder/list'])
}

createTicket(){
  this._route.navigate(['apps/book/create_ticket'])
}



}

      