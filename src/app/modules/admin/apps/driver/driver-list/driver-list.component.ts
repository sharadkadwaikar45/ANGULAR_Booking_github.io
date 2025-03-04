import { ChangeDetectionStrategy, Component, AfterViewInit, OnDestroy, OnInit, ViewChild, ViewEncapsulation, TemplateRef } from '@angular/core';
import { RingService } from 'app/modules/service/ring.service'
import Swal from 'sweetalert2';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-driver-list',
  templateUrl: './driver-list.component.html',
  styleUrls: ['./driver-list.component.scss']
})
export class DriverListComponent implements OnInit {
  @ViewChild(MatPaginator) paginatior: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  displayedColumns: string[] = ['Sr.No','Name','MobileNumber','LicenseNo','LicenseExpDate','JoiningDate','Status','Actions'];
  displayedColumns2: string[] = ['Sr.No','Name','MobileNumber','LicenseNo','LicenseExpdate','JoiningDate','status','actions'];

  listDetailsData: any[];
  dataSource : any;
  listDetails : FormGroup
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
  skeletonItems: number[] = new Array(5); 

  status: any[] = [
    {id: '1', name: 'Active'},
    {id: '0', name: 'Inactive'},
  ];
  
  constructor(
    private _formBuilder: FormBuilder,
    private ringService : RingService,
    public _route: Router,
    public dialog: MatDialog,
    public _activatedroute: ActivatedRoute,
  ){ }

  ngOnInit(): void {
    this.searchControl.valueChanges
    .pipe(debounceTime(500)) 
    .subscribe(value => {
      this.listDetails.value.search = value
      this.applyFilter();
    });

    this.listDetails = this._formBuilder.group({
        search: [''],
    });
     this.listLoader = true
    this.DetailsList();
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
  this.DetailsList()
  setTimeout(() => { this.searchLoader = false; }, 500);
}

onPageChange(event: PageEvent): void {
  this.page = event.pageIndex + 1;
  this.pageSize = event.pageSize;
  this.startNum = (this.pageSize * (event.pageIndex))
  this.DetailsList()
}

onSortChange(event: MatSort) {
  this.sortValue = event.direction
  this.columnIndex = this.displayedColumns.indexOf(event.active);
  this.DetailsList()
}

DetailsList(){
  this.ringService.UserList(this.page,this.pageSize,this.startNum,this.columnIndex,this.sortValue,this.listDetails.value.search).subscribe((res) =>{
  if(res.response_message == "Success"){
     this.listDetailsData = res.response_data
     this.recordsTotal = res.total_records
     this.recordsFiltered = res.filter_records
     if(this.listDetailsData?.length != 0){
          this.dataSource = new MatTableDataSource<any>(this.listDetailsData);
          //this.dataSource.sort = this.sort;
          this.listLoader = false;
     }else{
          this.listLoader = false;
     }
  }else{
    this.listLoader = false;
  }
})
}

add(){
this._route.navigate(['apps/driver/add']);
}

viewDetails(id){
this._route.navigate(['apps/driver/view/' + id]);
}

editDetails(id){
this._route.navigate(['apps/driver/edit/' + id]); 
}

deleteDetails(id){}


}
