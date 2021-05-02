import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';

declare var $: any;

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  collapse: boolean = true;

  constructor(public router: Router) { }

  @HostListener('window:scroll', ['$event'])
  onScroll(event) {
    if (document.documentElement.scrollTop > 50 || document.getElementById("mainbody").scrollTop > 50 || document.getElementById("mainbody").scrollTop > 50) {
      document.getElementById("docHeader").classList.remove("l-header-big");
      document.getElementById("docHeader").classList.add("l-header-small");
    } else {
      document.getElementById("docHeader").classList.remove("l-header-small");
      document.getElementById("docHeader").classList.add("l-header-big");
    }
  }

  ngOnInit(): void {
    $('.overlay').hide();
    $('#mob-menu').click(function () {
      $(".l-mob-menu-container").css("transform", "scaleX(1)");
      $('.overlay').show();
    });

    $('.overlay').click(function () {
      $('.overlay').hide();
      $(".l-mob-menu-container").css("transform", "scaleX(0)");
    });

    $('#mobmenu li').click(function () {
      $('.overlay').hide();
      $(".l-mob-menu-container").css("transform", "scaleX(0)");
    });
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
