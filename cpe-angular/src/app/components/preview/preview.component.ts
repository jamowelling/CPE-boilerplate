import { Component, OnInit } from '@angular/core';
import { RestApiService } from 'src/app/services/rest-api.service';
import { ActivatedRoute } from '@angular/router';
import { PageComponent } from '../page/page.component';

@Component({
  selector: 'app-preview',
  templateUrl: './preview.component.html',
  styleUrls: ['./preview.component.scss'],
})
export class PreviewComponent implements OnInit {
  private parent_id: any;
  private wpnonce: any;
  public preview: any;
  constructor(private api: RestApiService, private route: ActivatedRoute) {
    if (this.route.snapshot.params) {
      this.parent_id = this.route.snapshot.params.parentId;
      this.wpnonce = this.route.snapshot.params.wpnonce;
    }
  }

  ngOnInit(): void {
    this.api.getPreview(this.parent_id, this.wpnonce).subscribe((data) => {
      this.preview = data[0];
    });
  }
}
