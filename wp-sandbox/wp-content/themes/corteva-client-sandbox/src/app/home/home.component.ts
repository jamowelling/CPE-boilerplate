import { Component, OnInit } from '@angular/core';

import { HomeService } from './home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  providers: [HomeService],
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  stuff: any[];

  constructor(private homeService: HomeService) { }

  ngOnInit(): void {
    this.getStuff();
  }

  getStuff(): void {
    this.homeService.getStuff()
      .subscribe(stuff => {
        this.stuff = stuff;
        console.log('subscription fires: ', stuff);
      })
  }

}
