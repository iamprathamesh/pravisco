import { Component, OnInit } from "@angular/core";

@Component({
  selector: 'app-header',
  templateUrl: 'header.component.html',
  styleUrls: ['header.component.scss']
})
export class HeaderComponent implements OnInit {
  showMobileMenu: boolean = false;
  constructor() { }

  ngOnInit() { }

  closeMobileMenu() {
    this.showMobileMenu = !this.showMobileMenu;
  }
}