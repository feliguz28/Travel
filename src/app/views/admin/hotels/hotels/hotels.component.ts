import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HotelUpdateStatusDtoI } from 'src/app/models/hotel.interface';
import { PagerRequest, PaginateHotelsI } from 'src/app/models/pager.interface';
import { ApiService } from 'src/app/servicios/api/api.service';

@Component({
  selector: 'app-hotels',
  templateUrl: './hotels.component.html',
  styleUrls: ['./hotels.component.scss']
})
export class HotelsComponent {

	length: number = 0;
	page: number = 1;
	pageSize: number = 10;
  filter: string = '';
  paginateHotelsI!: PaginateHotelsI
  pageSizeOptions: number[] =[5, 10, 20, 50, 100]

  constructor(private api:ApiService,private router: Router) {}

  ngOnInit(): void { 
    this.getAllHotels()
}

  	pageEvent(event: any): void {
		this.pageSize = event.pageSize;
		this.page = event.pageIndex + 1;
		this.getAllHotels();
	}

  getAllHotels(){
    let pager: PagerRequest={
      pageNumber: this.page,
      registerPage: this.pageSize,
      filter: this.filter
    }
    this.api.getAllHotels(pager).subscribe(data=>{
      this.paginateHotelsI = data;
      this.length = data.totalCount;
    })
  }

  deleteHotel(hotelId: number){
    this.api.deleteHotel(1,hotelId).subscribe(data=>{
    })
    this.getAllHotels();
  }

  editHotel(id:number){
    this.router.navigate(['editHotel/',id]);
  }

  goToRooms(id:number){
    this.router.navigate(['rooms/',id]);
  }

  changeStatus(hotelId:number, status:boolean){

    let hotelUpdateStatusDtoI: HotelUpdateStatusDtoI={
      hotelId  : hotelId,
      updateUser: 1,
      status: !status
    }
    this.api.editHotelStatus(hotelUpdateStatusDtoI).subscribe(data=>{
    })
    this.getAllHotels();
 }
}

