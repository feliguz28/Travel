import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PagerRequest, PaginateReserveI } from 'src/app/models/pager.interface';
import { ApiService } from 'src/app/servicios/api/api.service';

@Component({
  selector: 'app-reserve-views',
  templateUrl: './reserve-views.component.html',
  styleUrls: ['./reserve-views.component.scss']
})
export class ReserveViewsComponent {

  length: number = 0;
	page: number = 1;
	pageSize: number = 10;
  filter: string = '';
  paginateReserveI!: PaginateReserveI
  pageSizeOptions: number[] =[5, 10, 20, 50, 100]

  constructor(private api:ApiService,private router: Router) {}

  ngOnInit(): void { 
    this.getAllReserve()
}

pageEvent(event: any): void {
  this.pageSize = event.pageSize;
  this.page = event.pageIndex + 1;
  this.getAllReserve();
}

getAllReserve(){
  let pager: PagerRequest={
    pageNumber: this.page,
    registerPage: this.pageSize,
    filter: this.filter
  }
  this.api.GetAllReserve(pager).subscribe(data=>{
    this.paginateReserveI = data;
    this.length = data.totalCount;
  })
}

}
