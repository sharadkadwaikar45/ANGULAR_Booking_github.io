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
  this.searchControl.valueChanges
  .pipe(debounceTime(500)) 
  .subscribe(value => {
    this.userDetails.value.search = value
    this.applyFilter();
  });

  this.userDetails = this._formBuilder.group({
    search: [''],
});

  this.userDetailsList();
  this.fetchUserList();
  this.fetchAppList();
    // this.updateChartData()
    // this.getDirection(29.9809683,45.77777733)
    this.getDirection();
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

applyFilter() {
  // this.dataSource.filter = filterValue.trim().toLowerCase();
  this.page = 1;
  this.searchLoader = true
  this.userDetailsList()
  setTimeout(() => { this.searchLoader = false; }, 500);
}


onPageChange(event: PageEvent): void {
  this.page = event.pageIndex + 1;
  this.pageSize = event.pageSize;
  this.startNum = (this.pageSize * (event.pageIndex))
  this.userDetailsList()
}

onSortChange(event: MatSort) {
  this.sortValue = event.direction
  this.columnIndex = this.displayedColumns.indexOf(event.active);
  this.userDetailsList()
}

userDetailsList(){
  this.ringService.UserList(this.page,this.pageSize,this.startNum,this.columnIndex,this.sortValue,this.userDetails.value.search).subscribe((res) =>{
  if(res.response_message == "Success"){
     this.userDetailsData = res.response_data
     this.recordsTotal = res.total_records
    this.recordsFiltered = res.filter_records
     if(this.userDetailsData?.length != 0){
      this.dataSource = new MatTableDataSource<any>(this.userDetailsData);
//    this.dataSource.sort = this.sort;

     this.listLoader = false;
  }else{
    this.listLoader = false;
  }
  }else{
    this.listLoader = false;
  }
})
}





fetchUserList(){
  this.ringService.fetchUserList().subscribe((res) =>{
  if(res.response_message == "Success"){
     this.userListData = res.response_data.slice(0, 5)
     this.userCount =  res.response_data?.length
  }
})
} 





fetchAppList(){
  this.ringService.fetchAppList().subscribe((res) =>{
    if(res.response_message == "Success"){
       this.appListData = res.response_data.slice(0, 5);
       this.appCount = res.response_data?.length
    }
  })
}

editPage(pageId){
  this._route.navigate(['apps/pages/addpages/update/' + pageId]);
}

viewReminder(){
  this._route.navigate(['apps/reminder/list'])
}

viewFuel(){
  this._route.navigate(['apps/fuel/list'])
}

// getDirection(dirLat: any, dirLng: any) {
//   let srcLat, srcLng;
//   if ('geolocation' in navigator) {
//     navigator.geolocation.getCurrentPosition((position) => {
//     srcLat = position.coords.latitude;
//     srcLng = position.coords.longitude;
//     });
//   }
//   this.dir = {
//     origin: { latitude: 29.9809683, longitude: 31.3377553 },
//     destination: { latitude: dirLat, longitude: dirLng }
//   };


//  // prints the values correctly for origin and destination{latitude: 29.9809683, longitude: 31.3377553}

//   console.log('originDest', this.dir.origin, this.dir.destination);
//   //in the below url, dir.origin and dir.destination does not get the values
//   var p ='origin';
//   var d = 'destination';
//   window.open('https://www.google.com/maps/dir/?api=1&origin='+p+'&destination='+d+'&travelmode=driving','_blank' );
// }

public lat = 24.799448;
public lng = 120.979021;

public origin: any;
public destination: any;

getDirection() {
  this.origin = { lat: 24.799448, lng: 120.979021 };
  this.destination = { lat: 24.799524, lng: 120.975017 };

  // Location within a string
  // this.origin = 'Taipei Main Station';
  // this.destination = 'Taiwan Presidential Office';
}
}

      