import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PagerRequest, PaginateRoomsI } from 'src/app/models/pager.interface';
import { RoomUpdateStatusDto } from 'src/app/models/rooms.interface';
import { ApiService } from 'src/app/servicios/api/api.service';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss']
})
export class RoomsComponent {

  length: number = 0;
	page: number = 1;
	pageSize: number = 10;
  filter: string = '';
  idHotel!: any;
  paginateRoomsI!: PaginateRoomsI;
  pageSizeOptions: number[] =[5, 10, 20, 50, 100];

  constructor(private _route: ActivatedRoute, private api:ApiService,private router: Router) {
    this.idHotel = this._route.snapshot.paramMap.get('id')
  }

  ngOnInit(): void { 
    this.getRoomsByHotelId();
}

pageEvent(event: any): void {
  this.pageSize = event.pageSize;
  this.page = event.pageIndex + 1;
  this.getRoomsByHotelId();
}

editRoom(id:number){
  this.router.navigate(['editRoom/',this.idHotel,id]);
}

deleteRoom(roomId: number){
  this.api.deleteRoom(1,roomId).subscribe(data=>{
  })
  this.getRoomsByHotelId();
}

getRoomsByHotelId(){
  let pager: PagerRequest={
    pageNumber: this.page,
    registerPage: this.pageSize,
    filter: this.filter
  }
  this.api.GetAllRoomsByIdHotel(this.idHotel,pager).subscribe(data=>{
    console.log(data)
    this.paginateRoomsI = data
    this.length = data.totalCount;
  })
}

changeStatus(roomId:number, status:boolean){

  let roomUpdateStatusDto: RoomUpdateStatusDto={
    roomId  : roomId,
    updateUser: 1,
    status: !status
  }
  this.api.editRoomStatus(roomUpdateStatusDto).subscribe(data=>{
  })
  this.getRoomsByHotelId();
}

}
