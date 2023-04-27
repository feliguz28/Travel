import { Component } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { RoomCreateDtoI, RoomsType } from 'src/app/models/rooms.interface';
import { ApiService } from 'src/app/servicios/api/api.service';

@Component({
  selector: 'app-create-room',
  templateUrl: './create-room.component.html',
  styleUrls: ['./create-room.component.scss']
})
export class CreateRoomComponent {
  
  roomsType: RoomsType[] = [
    {roomTypeId: 1, roomTypeName: 'Single room', maxPeople: 1},
    {roomTypeId: 2, roomTypeName: 'Double room', maxPeople: 2},
    {roomTypeId: 3, roomTypeName: 'Triple room', maxPeople: 3},
    {roomTypeId: 4, roomTypeName: 'Quadruple room', maxPeople: 4},
    {roomTypeId: 5, roomTypeName: 'Connecting rooms', maxPeople: 8},
    {roomTypeId: 6, roomTypeName: 'Deluxe', maxPeople: 10},
  ];
  idHotel!: any;
  roomTypeControl = new UntypedFormControl(this.roomsType[0].roomTypeId,Validators.required);
  newRoom = new UntypedFormGroup({
    roomName: new UntypedFormControl('',Validators.required),
    location: new UntypedFormControl('',Validators.required),
    roomDescription: new UntypedFormControl('',Validators.required),
    roomTypeId: this.roomTypeControl,
    value: new UntypedFormControl('',Validators.required),
    status: new UntypedFormControl(true),
	});


  constructor(private _route: ActivatedRoute,private api:ApiService,private router: Router){
    this.idHotel = this._route.snapshot.paramMap.get('id')
  }

  ngOnInit(): void {    
  }

  CreateRoom(newHotel:any){

    let roomCreateDtoI: RoomCreateDtoI={
      roomName : this.newRoom.value.roomName,
      roomDescription: this.newRoom.value.roomDescription,
      location: this.newRoom.value.location,
      roomTypeId: this.newRoom.value.roomTypeId,
      hotelId: this.idHotel,
      Value : this.newRoom.value.value,
      UrlImage : "coming soon, the url of your image",
      Status : this.newRoom.value.status,
      CreatedUser: 1
    }
    this.api.createRoom(roomCreateDtoI).subscribe(data=>{
    })
    this.router.navigate(['rooms/',this.idHotel]);
  }

}
