import { Component } from '@angular/core';
import { FormBuilder, UntypedFormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { RoomI } from 'src/app/models/rooms.interface';
import { ApiService } from 'src/app/servicios/api/api.service';
import { DocumentType} from 'src/app/models/rooms.interface';
import { ReserveCreateDtoI } from 'src/app/models/reserve.interface';
import { ClientCreateDto, EmergencyContactDto } from 'src/app/models/client.interface';
import { PaginateClientsI } from 'src/app/models/pager.interface';

@Component({
  selector: 'app-reservations',
  templateUrl: './reservations.component.html',
  styleUrls: ['./reservations.component.scss']
})
export class ReservationsComponent {

  idRoom!: any
  CheckIn!: any
  CheckOut!: any
  numberPerson!: any
  type!: any
  roomI! :RoomI;
  email! : any;
  idReserve!: number;
  paginateClientsI!: PaginateClientsI;

  documentsType: DocumentType[] = [
    {documentTypeId: 1, description: 'Identity Card', acronym: "TI"},
    {documentTypeId: 2, description: 'Citizenship Card', acronym: "CC"},
    {documentTypeId: 3, description: 'Foreigner Card', acronym: "CE"},
    {documentTypeId: 4, description: 'Passport', acronym: "PS"}
  ];
  documentTypeControl = new UntypedFormControl(this.documentsType[0].documentTypeId,Validators.required);


  emailContact = this._formBuilder.group({
    email: new UntypedFormControl('',Validators.required),
  });
  people = this._formBuilder.group({
    firstName: new UntypedFormControl('',Validators.required),
    lastName: new UntypedFormControl('',Validators.required),
    gender: new UntypedFormControl('',Validators.required),
    documentType: this.documentTypeControl,
    document: new UntypedFormControl(0,Validators.required),
  });
  emergencyContact = this._formBuilder.group({
    firstName: new UntypedFormControl('',Validators.required),
    lastName: new UntypedFormControl('',Validators.required),
    number: new UntypedFormControl('',Validators.required)
  });


  constructor(private _formBuilder: FormBuilder, private _route: ActivatedRoute, private api:ApiService,private router: Router) {
    this.idRoom = this._route.snapshot.paramMap.get('idRoom')
    this.CheckIn = this._route.snapshot.paramMap.get('CheckIn')
    this.CheckOut = this._route.snapshot.paramMap.get('CheckOut')
    this.numberPerson = this._route.snapshot.paramMap.get('numberPerson')
    this.type = this._route.snapshot.paramMap.get('type')
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

  getClients(){
    this.api.GetAllClients(this.idReserve).subscribe(data=>{
      console.log(data)
      this.paginateClientsI = data
    })
  }

  CreateReserve(emailContact:any){

    let reserveCreateDtoI: ReserveCreateDtoI={
      dateCheckIn : this.CheckIn,
      dateCheckOut: this.CheckOut,
      numberPerson: this.numberPerson,
      location: this.roomI.location,
      roomId: this.idRoom,
      status : true,
      value : this.roomI.value,
      createdUser : 1
    }
    console.log(reserveCreateDtoI)
    this.api.createReserve(reserveCreateDtoI).subscribe(data=>{
      this.idReserve = data;
    })

  }

  CreateClient(people:any){
    let clientCreateDto: ClientCreateDto={
      firstName : this.people.value.firstName,
      lastName: this.people.value.lastName,
      gender: this.people.value.gender,
      documentTypeId: this.people.value.documentType,
      document: this.people.value.document,
      email: this.emailContact.value.email,
      reserveId : +this.idReserve
    }
    console.log(this.idReserve)
    console.log(clientCreateDto)
    this.api.createClient(clientCreateDto).subscribe(data=>{
    })
  }

  CreateContactEmergency(emergencyContact:any){
    let emergencyContactDto: EmergencyContactDto={
      firstName : this.emergencyContact.value.firstName,
      lastName: this.emergencyContact.value.lastName,
      contactNumber: this.emergencyContact.value.number,
      reserveId: +this.idReserve
    }
    this.api.CreateContactEmergency(emergencyContactDto).subscribe(data=>{
    })
    this.router.navigate(['']);
    this.SendEmail()
  }

  SendEmail(){
    this.api.sendEmail(this.idReserve,this.emailContact.value.email).subscribe(data=>{
    })
  }

}
