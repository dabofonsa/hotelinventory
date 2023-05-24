export interface Room{
    totalRoom: number;
    availableRooms: number;
    bookedwRoom: number;
}

export interface RoomList{
    roomNumber: number;
    roomType: string;
    amenities: string;
    price: number;
    photos: string;
    checkinTime: Date;
    checkoutTime: Date;
    rating: number;
}