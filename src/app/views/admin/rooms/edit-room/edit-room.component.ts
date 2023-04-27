import { Component } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { RoomEditDtoI, RoomI, RoomsType } from 'src/app/models/rooms.interface';
import { ApiService } from 'src/app/servicios/api/api.service';

@Component({
  selector: 'app-edit-room',
  templateUrl: './edit-room.component.html',
  styleUrls: ['./edit-room.component.scss']
})
export class EditRoomComponent {

  roomsType: RoomsType[] = [
    {roomTypeId: 1, roomTypeName: 'Single room', maxPeople: 1},
    {roomTypeId: 2, roomTypeName: 'Double room', maxPeople: 2},
    {roomTypeId: 3, roomTypeName: 'Triple room', maxPeople: 3},
    {roomTypeId: 4, roomTypeName: 'Quadruple room', maxPeople: 4},
    {roomTypeId: 5, roomTypeName: 'Connecting rooms', maxPeople: 8},
    {roomTypeId: 6, roomTypeName: 'Deluxe', maxPeople: 10},
  ];
  idHotel!: any;
  idRoom!: any;
  roomI! :RoomI;
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
    this.idHotel = this._route.snapshot.paramMap.get('idHotel')
    this.idRoom = this._route.snapshot.paramMap.get('idRoom')
  }

  ngOnInit(): void {    
    this.getRoomById();
  }


  getRoomById(){
    this.api.getRoomById(this.idRoom).subscribe(data=>{
      console.log(data)
      this.roomI = data
    })
  }

  EditRoom(newHotel:any){

    let roomCreateDtoI: RoomEditDtoI={
      roomId: this.roomI.roomId,
      roomName : this.newRoom.value.roomName,
      roomDescription: this.newRoom.value.roomDescription,
      location: this.newRoom.value.location,
      roomTypeId: this.newRoom.value.roomTypeId,
      hotelId: this.idHotel,
      Value : this.newRoom.value.value,
      UrlImage : "coming soon, the url of your image",
      Status : this.newRoom.value.status,
      UpdateUser: 1
    }
    console.log(roomCreateDtoI)
    this.api.editRoom(roomCreateDtoI).subscribe(data=>{
    })
    this.router.navigate(['rooms/',this.idHotel]);
  }

}
