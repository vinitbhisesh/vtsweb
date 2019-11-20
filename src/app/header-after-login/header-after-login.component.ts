import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header-after-login',
  templateUrl: './header-after-login.component.html',
  styleUrls: ['./header-after-login.component.css']
})
export class HeaderAfterLoginComponent implements OnInit {

  constructor() { }

  status = false;
  status1 = false;
  status2 = false;

  clickEvent() {
    this.status = !this.status;
  }

  clickEventM1() {
    this.status1 = !this.status1;
  }

  clickEventM2() {
    this.status2 = !this.status2;
  }

  ngOnInit() {
  }

}
