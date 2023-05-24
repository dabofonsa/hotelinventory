import { AfterViewChecked, AfterViewInit, Component, DoCheck, OnInit, QueryList, ViewChild, ViewChildren, ɵisObservable } from '@angular/core';
import { Room, RoomList } from './rooms';
import { HeaderComponent } from '../header/header.component';
import { RoomsService } from './service/rooms.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'hinv-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.css'],
 // changeDetection: ChangeDetectionStrategy.OnPush
})
export class RoomsComponent implements OnInit, DoCheck, AfterViewInit, AfterViewChecked{

  hotelName = "Radisson";
  numbersOfRooms = 10;

hideRooms = false;

selectedRoom!: RoomList;

rooms: Room = {
  totalRoom:20,
  availableRooms:12,
  bookedwRoom: 5,
}

title = 'Room List';
roomList: RoomList[] = [];

stream = new Observable(observer => {
  observer.next('user1');
  observer.next('user2');
  observer.next('user3');
  observer.complete();

}); 

@ViewChild(HeaderComponent) headerComponent!: HeaderComponent;

@ViewChildren(HeaderComponent) headerChildrenComponent!: QueryList<HeaderComponent>;

  constructor(private roomsService: RoomsService) { }

  ngOnInit(): void {
    this.stream.subscribe((data) => console.log(data));
    this.roomList = this.roomsService.getRooms();
   }

  ngDoCheck() {
    console.log('On Do check is here');
  }

  ngAfterViewInit() {

    this.headerComponent.title = "Rooms View";

    this.headerChildrenComponent.last.title="Last Title";

  }

  ngAfterViewChecked() {
    this.headerComponent.title = "Check Rooms View";
  }


  toggle(){
    this.hideRooms = !this.hideRooms;
    this.title ="Rooms List";
  }

  selectRoom(room: RoomList){
    this.selectedRoom = room;
  }

  addRoom(){
    const room: RoomList = {
      roomNumber: 4,
      roomType: 'Deluxe Room',
      amenities: 'Air conditioner, Free wifi, Tv, Bathroom, Kitchen',
      price: 500,
      photos:'src/images/image2.png',
      checkinTime: new Date('11-Nov-2021'),
      checkoutTime: new Date('13-Nov-2021'),
      rating: 7.3,
    };
    //this.roomList.push(room);
    this.roomList = [...this.roomList, room];
  }

}
