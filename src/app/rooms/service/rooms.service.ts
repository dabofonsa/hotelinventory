import { Injectable } from '@angular/core';
import { RoomList } from '../rooms';

@Injectable({
  providedIn: 'root'
})
export class RoomsService {

  roomList: RoomList[] = [
    {
      roomNumber: 1,
      roomType:'Deluxe Room',
      amenities: 'Air conditioner, Free wifi, Tv, Bathroom, Kitchen',
      price: 500,
      photos: 'src/images/image1.png',
      checkinTime: new Date('11-Nov-2021'),
      checkoutTime: new Date('13-Nov-2021'),
      rating: 4.7,
    },
    {
      roomNumber: 2,
      roomType:'Deluxe Room',
      amenities: 'Air conditioner, Free wifi, Tv, Bathroom, Kitchen',
      price: 1500,
      photos: 'src/images/image2.png',
      checkinTime: new Date('11-Nov-2021'),
      checkoutTime: new Date('13-Nov-2021'),
      rating: 3.3,
    },
    {
      roomNumber: 3,
      roomType:'Private suite',
      amenities: 'Air conditioner, Free wifi, Tv, Bathroom, Kitchen',
      price: 5500,
      photos: 'src/images/image3.png',
      checkinTime: new Date('11-Nov-2021'),
      checkoutTime: new Date('13-Nov-2021'),
      rating: 7.3,
    },
  ]

  constructor() { }

  getRooms(){
    return this.roomList;
  }
}
