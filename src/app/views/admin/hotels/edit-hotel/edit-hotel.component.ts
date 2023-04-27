import { Component } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { ActivatedRoute,Router } from '@angular/router';
import { HotelEditDtoI, HotelI } from 'src/app/models/hotel.interface';
import { ApiService } from 'src/app/servicios/api/api.service';

@Component({
  selector: 'app-edit-hotel',
  templateUrl: './edit-hotel.component.html',
  styleUrls: ['./edit-hotel.component.scss']
})
export class EditHotelComponent {
  
  editHotel = new UntypedFormGroup({
    hotelName: new UntypedFormControl('',Validators.required),
    hotelLocation: new UntypedFormControl('',Validators.required),
    value: new UntypedFormControl('',Validators.required),
    status: new UntypedFormControl(true),
	});
  
  idHotel!: any
  hotelI! :HotelI

  constructor(private _route: ActivatedRoute,private api:ApiService,private router: Router){
    this.idHotel = this._route.snapshot.paramMap.get('id')
  }

  ngOnInit(): void {
    this.getHotelById();  
  }

  getHotelById(){
    this.api.getHotelById(this.idHotel).subscribe(data=>{
      console.log(data)
      this.hotelI = data
    })
  }

  EditHotel(editHotel:any){

    let hotelEditDto: HotelEditDtoI={
      hotelId: this.hotelI.hotelId,
      hotelName : this.editHotel.value.hotelName,
      hotelLocation: this.editHotel.value.hotelLocation,
      updateUser: 1,
      urlImage : "coming soon, the url of your image",
      status : this.editHotel.value.status,
      value : this.editHotel.value.value
    }
    this.api.editHotel(hotelEditDto).subscribe(data=>{
    })
    this.router.navigate(['admin']);
  }

}
