import { Component } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HotelCreateDtoI } from 'src/app/models/hotel.interface';
import { ApiService } from 'src/app/servicios/api/api.service';

@Component({
  selector: 'app-create-hotel',
  templateUrl: './create-hotel.component.html',
  styleUrls: ['./create-hotel.component.scss']
})
export class CreateHotelComponent {

  newHotel = new UntypedFormGroup({
    hotelName: new UntypedFormControl('',Validators.required),
    hotelLocation: new UntypedFormControl('',Validators.required),
    value: new UntypedFormControl('',Validators.required),
    status: new UntypedFormControl(true),
	});
  
  constructor(private api:ApiService,private router: Router){}

  ngOnInit(): void {    
  }

  CreateHotel(newHotel:any){

    let hotelCreateDto: HotelCreateDtoI={
      HotelName : this.newHotel.value.hotelName,
      HotelLocation: this.newHotel.value.hotelLocation,
      CreatedUser: 1,
      UrlImage : "coming soon, the url of your image",
      Status : this.newHotel.value.status,
      Value : this.newHotel.value.value
    }
    this.api.createHotel(hotelCreateDto).subscribe(data=>{
    })
    this.router.navigate(['admin']);
  }

}
