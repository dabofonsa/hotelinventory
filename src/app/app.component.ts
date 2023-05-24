import { style } from '@angular/animations';
import { AfterViewInit, Component, ElementRef, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { RoomsComponent } from './rooms/rooms.component';

@Component({
  selector: 'hinv-root',
  templateUrl: './app.component.html',
 // template: `<h1>Hello word from inline template</h1>
 // <p>Angular is awesome</p>`,
  styleUrls: ['./app.component.css']
  //styles:[`h1 {color: red; }`]
})
export class AppComponent implements OnInit{
  
  title = 'hotelinventory';

  //role ='User';

  @ViewChild('name', { static: true}) name!: ElementRef;

  ngOnInit(): void {
    console.log(this.name.nativeElement.innerText = "Hilton Hotel");
  }

  // 

  // ngAfterViewInit() {
  //   const conponentRef = this.vcr.createComponent(RoomsComponent);
  //   conponentRef.instance.numbersOfRooms = 50;

  // }


}

