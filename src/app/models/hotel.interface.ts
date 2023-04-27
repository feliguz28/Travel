export interface HotelCreateDtoI{
    HotelName: string,
    HotelLocation: string,
    Value: number,
    UrlImage: string,
    Status: boolean,
    CreatedUser: number
}

export interface HotelEditDtoI{
    hotelId: number,
    hotelName: string,
    hotelLocation: string,
    value: number,
    urlImage: string,
    status: boolean,
    updateUser: number
}

export interface HotelUpdateStatusDtoI{
    hotelId: number,
    status: boolean,
    updateUser: number
}

export interface HotelI{
    hotelId: number,
    hotelName: string,
    hotelLocation: string,
    value: number,
    urlImage: string,
    status: boolean,
    createdUser: number,
    lastupdatedUser: number,
    createdDate: Date,
    lastUpdatedDate: Date,
    deleteAt: Date,
}