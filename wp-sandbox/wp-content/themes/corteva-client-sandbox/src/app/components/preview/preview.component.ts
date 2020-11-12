import { Component, OnInit } from '@angular/core';
import { RestAPIService } from 'src/app/services/rest-api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-page',
  templateUrl: './preview.component.html',
  styleUrls: ['./preview.component.scss']
})
export class PreviewComponent implements OnInit {

  private page_id: any;
  private parent_id: any;
  private wpnonce: any;
  public page: any;
  constructor(private api: RestAPIService, private route: ActivatedRoute) { 
    if(this.route.snapshot.params) {
      this.page_id = this.route.snapshot.params.id
      this.parent_id = this.route.snapshot.params.parentId
      this.wpnonce = this.route.snapshot.params.wpnonce
    }
  }

  ngOnInit(): void {
    this.api.getPreview(this.page_id, this.parent_id, this.wpnonce).subscribe(data => {
      this.page = data[0];
      console.log(data)
    })
  }

}
