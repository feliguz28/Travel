import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; './angular/common/http'
import { HotelI, HotelCreateDtoI, HotelEditDtoI, HotelUpdateStatusDtoI } from '../../models/hotel.interface'
import { RoomAvailableDtoI, RoomCreateDtoI, RoomEditDtoI, RoomI, RoomUpdateStatusDto } from '../../models/rooms.interface'
import { PagerRequest, PaginateClientsI, PaginateHotelsI, PaginateReserveI, PaginateRoomAvailableI, PaginateRoomsI } from '../../models/pager.interface'
import { Observable} from 'rxjs';
import { ReserveCreateDtoI } from 'src/app/models/reserve.interface';
import { ClientCreateDto, EmergencyContactDto } from 'src/app/models/client.interface';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  url:string = "http://www.travel-testing.somee.com/"

  constructor(private http:HttpClient) {}

  createHotel(form: HotelCreateDtoI): Observable<HotelI>{
      let address = this.url + "CreateHotel";
      return this.http.post<HotelI>(address, form);
  }

  editHotel(form: HotelEditDtoI): Observable<HotelI>{
    let address = this.url + "UpdateHotel";
    return this.http.put<HotelI>(address, form);
}

  editHotelStatus(form:HotelUpdateStatusDtoI ): Observable<void>{
    let address = this.url + "UpdateHotelStatus";
    return this.http.put<void>(address, form);
  }

  getAllRooms(pager:PagerRequest, form:RoomAvailableDtoI):Observable<PaginateRoomAvailableI>{
    let address = `${this.url}GetAllRoomsAvailable/${form.start}/${form.end}/${form.location}/${form.numberPerson}?pageNumber=${pager.pageNumber}&registerPage=${pager.registerPage}&filter=${pager.filter}`
    return this.http.get<PaginateRoomAvailableI>(address);
  }

  getAllHotels(pager:PagerRequest):Observable<PaginateHotelsI>{
    let address = `${this.url}GetAllHotelsMain?pageNumber=${pager.pageNumber}&registerPage=${pager.registerPage}&filter=${pager.filter}`
    return this.http.get<PaginateHotelsI>(address);
  }

  getHotelById(id:any):Observable<HotelI>{
    let address = `${this.url}GetHotelById/${id}`
    return this.http.get<HotelI>(address);
  }

  deleteHotel(userId:number ,hotelId:number):Observable<void>{
    let address = `${this.url}DeleteHotel/${userId}/${hotelId}`
    return this.http.delete<void>(address);
  }

  createRoom(form: RoomCreateDtoI): Observable<RoomI>{
    let address = this.url + "CreateRoom";
    return this.http.post<RoomI>(address, form);
  }

  editRoom(form: RoomEditDtoI): Observable<RoomI>{
    let address = this.url + "UpdateRoom";
    return this.http.put<RoomI>(address, form);
  }

  GetAllRoomsByIdHotel(id:any, pager:PagerRequest):Observable<PaginateRoomsI>{
    let address = `${this.url}GetAllRoomsByIdHotel/${id}?pageNumber=${pager.pageNumber}&registerPage=${pager.registerPage}&filter=${pager.filter}`
    return this.http.get<PaginateRoomsI>(address);
  }

  getRoomById(id:any):Observable<RoomI>{
    let address = `${this.url}GetRoomById/${id}`
    return this.http.get<RoomI>(address);
  }

  editRoomStatus(form:RoomUpdateStatusDto ): Observable<void>{
    let address = this.url + "UpdateRoomStatus";
    return this.http.put<void>(address, form);
  }

  deleteRoom(userId:number ,roomId:number):Observable<void>{
    let address = `${this.url}DeleteRoom/${userId}/${roomId}`
    return this.http.delete<void>(address);
  }

  createReserve(form: ReserveCreateDtoI): Observable<number>{
    let address = this.url + "CreateReserve";
    return this.http.post<number>(address, form);
  }

  createClient(form: ClientCreateDto): Observable<void>{
    let address = this.url + "CreateClient";
    return this.http.post<void>(address, form);
  }

  CreateContactEmergency(form: EmergencyContactDto): Observable<void>{
    let address = this.url + "CreateEmergencyContact";
    return this.http.post<void>(address, form);
  }

  GetAllClients(id:any):Observable<PaginateClientsI>{
    let address = `${this.url}GetAllClients/${id}`
    return this.http.get<PaginateClientsI>(address);
  }

  GetAllReserve(pager:PagerRequest):Observable<PaginateReserveI>{
    let address = `${this.url}GetAllReserveMain?pageNumber=${pager.pageNumber}&registerPage=${pager.registerPage}&filter=${pager.filter}`
    return this.http.get<PaginateReserveI>(address);
  }

  sendEmail(reserveId:any,email:any):Observable<void>{
    let address = `${this.url}SendEmail/${reserveId}/${email}`
    return this.http.post<void>(address, reserveId);
  }
			
}
