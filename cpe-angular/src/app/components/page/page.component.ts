import { Component, OnInit, Input } from '@angular/core';
import { RestApiService } from 'src/app/services/rest-api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-page-component',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss'],
})
export class PageComponent implements OnInit {
  @Input() preview: any;

  private page_id: any;
  public page: any;
  constructor(private api: RestApiService, private route: ActivatedRoute) {
    if (this.route.snapshot.params) {
      this.page_id = this.route.snapshot.params.id;
    }
  }

  ngOnInit(): void {
    if (this.preview) {
      //if preview data exists, show preview data instead of page data
      this.page = this.preview;
    } else {
      this.api.getPageBySlug(this.page_id).subscribe((data) => {
        this.page = data[0];
      });
    }
  }
}
