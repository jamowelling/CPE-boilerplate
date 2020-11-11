import { Component, OnInit } from '@angular/core';

import { TestService } from './test.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  providers: [TestService],
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {
  stuff: any[];

  constructor(private testService: TestService) { }

  ngOnInit(): void {
    this.getStuff();
  }

  getStuff(): void {
    this.testService.getStuff()
      .subscribe(stuff => {
        this.stuff = stuff
        console.log('subscription fires: ', stuff);
      });
  }

}
