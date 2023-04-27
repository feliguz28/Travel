import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDatepickerModule } from '@angular/material/datepicker';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatNativeDateModule } from '@angular/material/core';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatTabsModule} from '@angular/material/tabs';
import { HotelsComponent } from './views/admin/hotels/hotels/hotels.component';
import { RoomsComponent } from './views/admin/rooms/rooms/rooms.component';
import { ReservationsComponent } from './views/admin/reservation/reservations/reservations.component';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatDialogModule} from '@angular/material/dialog';
import { EditHotelComponent } from './views/admin/hotels/edit-hotel/edit-hotel.component';
import { CreateHotelComponent } from './views/admin/hotels/create-hotel/create-hotel.component';
import { CreateRoomComponent } from './views/admin/rooms/create-room/create-room.component';
import { EditRoomComponent } from './views/admin/rooms/edit-room/edit-room.component';
import {MatSelectModule} from '@angular/material/select';
import {MatStepperModule} from '@angular/material/stepper';
import { ReserveViewsComponent } from './views/admin/reservation/reserve-views/reserve-views.component';

@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    HotelsComponent,
    RoomsComponent,
    ReservationsComponent,
    EditHotelComponent,
    CreateHotelComponent,
    CreateRoomComponent,
    EditRoomComponent,
    ReserveViewsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatTabsModule,
    MatCheckboxModule,
    MatDialogModule,
    MatSelectModule,
    MatStepperModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
