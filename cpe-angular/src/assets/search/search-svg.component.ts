import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-search-svg',
  templateUrl: './search.component.svg',
})
export class SearchSvgComponent {
  @Input() fillColor = '#fff';
}
