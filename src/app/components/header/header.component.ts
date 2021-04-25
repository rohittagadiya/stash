import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  collapse: boolean = true;

  constructor(public router: Router) { }

  ngOnInit(): void {
  }

  goToHome() {
    this.router.navigate(['home-page']);
  }

  goToPlatform() {
    this.router.navigate(['platform']);
  }

  goToTechnology() {
    this.router.navigate(['technology']);
  }

  goToPayment() {
    this.router.navigate(['payment']);
  }

  goToContact() {
    this.router.navigate(['contact-us']);
  }

}
