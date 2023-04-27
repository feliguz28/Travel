export interface ReserveCreateDtoI{
    dateCheckIn?: string,
    dateCheckOut?: string,
    numberPerson?: number,
    location?: string,
    roomId?: number,
    status?: boolean,
    value?: number,
    createdUser?: number
}

export interface Reserve{
    reserveId: number,
    dateCheckIn?: string,
    dateCheckOut?: string,
    numberPersons?: number,
    location?: string,
    roomId?: number,
    status?: boolean,
    value?: number
}
