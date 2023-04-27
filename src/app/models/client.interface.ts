export interface ClientCreateDto{
    firstName?: string,
    lastName?: string,
    gender?: string,
    documentTypeId?: number,
    document?: number,
    email?: string,
    reserveId?: number
}

export interface Client{
    clientId?: number,
    firstName?: string,
    lastName?: string,
    gender?: string,
    document?: number,
    email?: string
}

export interface EmergencyContactDto{
    firstName?: string,
    lastName?: string,
    contactNumber?: number,
    reserveId?: number
}
