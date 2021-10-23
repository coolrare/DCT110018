import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent  {

  sitename = 'Hello World';
  sitelogo = '/assets/images/logo.png';

  constructor() {
  }

  changeTitle($event: MouseEvent) {
    console.log($event);
    if ($event.ctrlKey) {
      this.sitename = 'The Will Will Web';
    }
  }

}
