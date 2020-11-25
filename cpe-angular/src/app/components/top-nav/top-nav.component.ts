import { Component, Input } from '@angular/core';
import { RestApiService } from 'src/app/services/rest-api.service';

@Component({
  selector: 'app-top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.scss'],
})
export class TopNavComponent {
  @Input() links: any[];
  public searchTerm: string;

  public drawerClass = {
    // may seem redundant, but fixes a host of issues with initial page-load CSS without the need for hooking into
    // a bunch of component lifecycle & DOM manipulation.
    visible: false,
    hidden: false,
  };

  public searchIconColor = '#fff';

  public textInputClass = {
    initial: true,
    'input--open': false,
    'input--closed': false,
  };

  private _defaultColor = '#fff';
  private _hoverColor = '#459AFF';

  constructor(private apiService: RestApiService) {}

  public clickAwayFromSearch() {
    if (this.textInputClass['input--open']) {
      this.textInputClass = {
        initial: false,
        'input--open': false,
        'input--closed': true,
      };
      this.searchTerm = '';
    }
  }

  public clickSearch() {
    this.textInputClass = {
      initial: false,
      'input--open': true,
      'input--closed': false,
    };
  }

  mouseEnterSearch() {
    this.searchIconColor = this._hoverColor;
  }

  mouseLeaveSearch() {
    this.searchIconColor = this._defaultColor;
  }

  public searchByTerm(event) {
    this.apiService.searchByTerm(this.searchTerm).subscribe((data) => {
      console.log('data: ', data);
    });
  }

  public toggleNavDrawer() {
    const { visible } = this.drawerClass;
    this.drawerClass = {
      visible: !visible,
      hidden: visible,
    };
  }
}
