import { ChangeDetectionStrategy, Component, AfterViewInit, OnDestroy, OnInit, ViewChild, ViewEncapsulation, TemplateRef } from '@angular/core';
import { RingService } from 'app/modules/service/ring.service'
import Swal from 'sweetalert2';
import {MatPaginator, PageEvent} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.scss']
})

export class UserlistComponent implements OnInit {
  @ViewChild(MatPaginator) paginatior: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  displayedColumns: string[] = ['Sr.No','RingId','Name','MobileNumber','Email','DOB','actions'];
  displayedColumns2: string[] = ['Sr.No','RingId','Name','MobileNumber','Email','DOB','actions'];

  userDetailsData: any[];
  dataSource : any;
  userDetails : FormGroup
  listLoader : boolean = false;
  searchLoader : boolean = false;
  searchField : boolean = false;

  status: any[] = [
    {id: '1', name: 'Active'},
    {id: '0', name: 'Inactive'},
  ];

  page: number = 1;
  pageSize: number = 10;
  startNum:  number = 0;
  sortValue: string = "";
  columnIndex: number = 0;
  recordsTotal: any;
  recordsFiltered: any;
  searchControl = new FormControl();

  checkboxes = [
    { label: 'Ring Id', element:'RingId', isChecked: true },
    { label: 'Name', element:'Name', isChecked: true },
    { label: 'Mobile', element:'MobileNumber', isChecked: true },
    { label: 'Email', element:'Email', isChecked: true },
    { label: 'Date Of Birth', element:'DOB', isChecked: true }
  ];


  
  constructor(
    private _formBuilder: FormBuilder,
    private ringService : RingService,
    public _route: Router,
    public dialog: MatDialog,
    public _activatedroute: ActivatedRoute,
    ){ }
 
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
       this.listLoader = true
      this.userDetailsList();
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

updateStatus(UserId,status){
  this.ringService.updateUserStatus(UserId,status).subscribe((res) =>{
    if(res.response_message == "Success"){
       this.userDetailsList();
    Swal.fire(
      '',
      'User status updated.',
      'success'
    );
  }
})
}

report(userId){
  this._route.navigate(['apps/userdata/history/' + userId]);
}

onCheckboxChange(event: Event){
this.displayedColumns = []
let demoArray:any[]=[]
this.checkboxes.forEach((item)=>{
    if(item.isChecked == false){
        demoArray.push(item.element)
    }
})

this.displayedColumns = this.displayedColumns2.filter(element => !demoArray.includes(element));
}

}
