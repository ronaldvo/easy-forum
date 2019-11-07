import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.css']
})
export class SideMenuComponent implements OnInit {

  OnHomePage: boolean = true;

  constructor(private router: Router, private activeRoute: ActivatedRoute) { }

  ngOnInit() {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        (event.url === '/') ? this.OnHomePage = true : this.OnHomePage = false;
      }
    });
  }

}
