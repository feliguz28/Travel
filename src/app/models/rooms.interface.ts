export interface RoomAvailableDtoI{
    start: string,
    end: string,
    location: string,
    numberPerson: number
}

export interface RoomCreateDtoI{
    roomName: string,
    roomDescription: string,
    location: string,
    roomTypeId: number,
    hotelId: number,
    Value: number,
    UrlImage: string,
    Status: boolean,
    CreatedUser: number
}

export interface RoomEditDtoI{
    roomId: number,
    roomName: string,
    roomDescription: string,
    location: string,
    roomTypeId: number,
    hotelId: number,
    Value: number,
    UrlImage: string,
    Status: boolean,
    UpdateUser: number
}

export interface RoomI{
    roomId: number,
    roomName: string,
    roomDescription: string,
    status: boolean,
    value: number,
    hotelId: number,
    roomTypeId: number,
    createdUser: number,
    lastupdatedUser: number,
    createdDate: Date,
    lastUpdatedDate: Date,
    deleteAt: Date,
    location: string,
    urlImage: string,
}

export interface RoomUpdateStatusDto{
    roomId: number,
    status: boolean,
    updateUser: number
}

export interface RoomAvailableI{
    roomId?: number,
    roomName?: string,
    roomDescription?: string,
    value?: number,
    location?: string,
    roomUrlImage?: string,
    roomTypeName?: string,
    maxPeople?: number,
    hotelId?: number,
    hotelName?: string,
    hotelUrlImage?: String
}

export interface RoomsType{
    roomTypeId?: number,
    roomTypeName?: string,
    maxPeople?: number
}

export interface DocumentType{
    documentTypeId?: number,
    description?: string,
    acronym?: string
}