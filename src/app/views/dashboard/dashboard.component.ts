import { Component } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { ApiService } from '../../servicios/api/api.service'
import { format } from 'date-fns';
import { RoomAvailableDtoI, } from '../../models/rooms.interface'
import { PagerRequest, PaginateRoomAvailableI } from '../../models/pager.interface'
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  length: number = 0;
	page: number = 1;
	pageSize: number = 10;
  filter: string = '';
  showPager: boolean = false;
  pageSizeOptions: number[] =[5, 10, 20, 50, 100];
  paginateRoomAvailableI!: PaginateRoomAvailableI
  start!: string
  end!: string
  numberPerson!: number

  constructor(private api:ApiService,private router: Router) {}

    ngOnInit(): void { 
  }

  range = new UntypedFormGroup({
		start: new UntypedFormControl(new Date()),
		end: new UntypedFormControl(new Date()),
    Location: new UntypedFormControl('',Validators.required),
    NumberPerson: new UntypedFormControl(1)
	});

  pageEvent(event: any): void {
    this.pageSize = event.pageSize;
    this.page = event.pageIndex + 1;
    this.searchRooms(this.range);
  }

  goToReservate(id:any, type: any){
    this.router.navigate(['reservations/',id,this.start,this.end,this.numberPerson,type]);
  }

  searchRooms(range:any){

    let pager: PagerRequest={
      pageNumber: this.page,
      registerPage: this.pageSize,
      filter: this.filter
    }

    let roomAvailableDto: RoomAvailableDtoI ={
      start : format(this.range.value.start, 'yyyy-MM-dd'),
      end : format(this.range.value.end, 'yyyy-MM-dd'),
      location : this.range.value.Location,
      numberPerson : this.range.value.NumberPerson,
    }
    this.start = roomAvailableDto.start
    this.end = roomAvailableDto.end
    this.numberPerson = roomAvailableDto.numberPerson

    this.api.getAllRooms(pager,roomAvailableDto).subscribe(data=>{
      this.paginateRoomAvailableI = data;
      this.length = data.totalCount;
      this.showPager = true;
      console.log(this.paginateRoomAvailableI)
    })
  }
}
