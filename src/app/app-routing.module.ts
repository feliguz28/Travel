import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './views/dashboard/dashboard.component'; 
import { LoginComponent } from './views/login/login.component';
import { AdminComponent } from './views/admin/admin.component';
import { HotelsComponent } from './views/admin/hotels/hotels/hotels.component';
import { RoomsComponent } from './views/admin/rooms/rooms/rooms.component';
import { ReservationsComponent } from './views/admin/reservation/reservations/reservations.component';
import { CreateHotelComponent } from './views/admin/hotels/create-hotel/create-hotel.component';
import { EditHotelComponent } from './views/admin/hotels/edit-hotel/edit-hotel.component';
import { CreateRoomComponent } from './views/admin/rooms/create-room/create-room.component';
import { EditRoomComponent } from './views/admin/rooms/edit-room/edit-room.component';
import { ReserveViewsComponent } from './views/admin/reservation/reserve-views/reserve-views.component';

const routes: Routes = [
  {path:'', redirectTo:'dashboard', pathMatch:'full'},
  {path:'dashboard', component:DashboardComponent},
  {path:'login', component:LoginComponent},
  {path:'admin', component:AdminComponent},
  {path:'hotels', component:HotelsComponent},
  {path:'rooms/:id', component:RoomsComponent},
  {path:'reservations/:idRoom/:CheckIn/:CheckOut/:numberPerson/:type', component:ReservationsComponent},
  {path:'createHotel', component:CreateHotelComponent},
  {path:'editHotel/:id', component:EditHotelComponent},
  {path:'createRoom/:id', component:CreateRoomComponent},
  {path:'editRoom/:idHotel/:idRoom', component:EditRoomComponent},
  {path:'reserveView', component:ReserveViewsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [DashboardComponent,LoginComponent,AdminComponent, HotelsComponent,RoomsComponent,ReservationsComponent,
                                  CreateHotelComponent,EditHotelComponent,CreateRoomComponent,EditRoomComponent,ReserveViewsComponent]