import { Client } from "./client.interface";
import { HotelI } from "./hotel.interface";
import { Reserve } from "./reserve.interface";
import { RoomAvailableI, RoomI } from "./rooms.interface";

export interface PagerRequest{
    pageNumber: number,
    registerPage: number,
    filter: string
}
export interface PaginateRoomAvailableI {
	items: RoomAvailableI[];
	totalCount: number;
}

export interface PaginateHotelsI {
	items: HotelI[];
	totalCount: number;
}

export interface PaginateRoomsI {
	items: RoomI[];
	totalCount: number;
}

export interface PaginateClientsI {
	items: Client[];
	totalCount: number;
}

export interface PaginateReserveI {
	items: Reserve[];
	totalCount: number;
}